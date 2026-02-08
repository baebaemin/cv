"use client";

import { useEffect, useRef } from "react";
import "./index.scss";
import { useIsMobile } from "@/hooks/useIsMobile";

import type p5 from "p5";
type P5 = p5;
type P5Vector = ReturnType<P5["createVector"]>;

/** 커서 플로킹 캔버스 */
export function CursorFlock() {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<P5 | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let mounted = true;

    const loadSketch = async () => {
      // hydration 직후 ref 붙을 때까지 대기
      await new Promise((r) => setTimeout(r, 0));
      if (!mounted || !containerRef.current) return;

      const p5 = (await import("p5")).default;

      const sketch = (p: P5) => {
        const flock: Boid[] = [];
        const mouseInfluence = 0.58; // 커서에 끌리는 정도
        const mouseRadius = 220; // 이 거리 안의 boid만 강하게 반응

        p.setup = () => {
          const node = containerRef.current;
          if (!node) return;
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
          canvas.parent(node);
          // const isMobile = p.windowWidth < 768;
          const boidCount = isMobile ? 28 : 80;
          for (let i = 0; i < boidCount; i++) {
            flock.push(
              new Boid(p.random(p.width), p.random(p.height), p)
            );
          }
        };

        p.draw = () => {
          if (!mounted) return;
          p.clear(); // 투명 배경 (매 프레임)

          const mouse = p.createVector(p.mouseX, p.mouseY);
          const mouseInFrame =
            p.mouseX >= 0 &&
            p.mouseX <= p.width &&
            p.mouseY >= 0 &&
            p.mouseY <= p.height;

          for (const boid of flock) {
            boid.flock(flock);
            if (mouseInFrame) {
              const d = p.dist(boid.position.x, boid.position.y, p.mouseX, p.mouseY);
              // 가까울수록 강하게 끌림 (거리 기반)
              const strength = d < mouseRadius ? mouseInfluence * (1 - d / mouseRadius) : mouseInfluence * 0.15;
              boid.seek(mouse, strength);
            }
            boid.update();
            boid.borders(p);
            boid.show(p);
          }
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
      };

      const node = containerRef.current;
      if (node) p5Instance.current = new p5(sketch, node);
    };

    loadSketch();

    return () => {
      mounted = false;
      if (p5Instance.current) {
        p5Instance.current.remove();
        p5Instance.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className="cursor-flock" aria-hidden />;
}

class Boid {
  position: P5Vector;
  velocity: P5Vector;
  acceleration: P5Vector;
  maxSpeed: number;
  maxForce: number;
  perceptionRadius: number;
  p: P5;

  constructor(x: number, y: number, p: P5) {
    this.p = p;
    this.position = p.createVector(x, y);
    this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));
    this.acceleration = p.createVector(0, 0);
    this.maxSpeed = 2.5;
    this.maxForce = 0.05;
    this.perceptionRadius = 50;
  }

  flock(boids: Boid[]) {
    const sep = this.separate(boids);
    const ali = this.align(boids);
    const coh = this.cohesion(boids);

    sep.mult(2.8);  // 서로 밀어냄 (커질수록 더 퍼짐)
    ali.mult(1.0);
    coh.mult(0.45); // 무리 중심으로 모이는 힘 (작을수록 덜 뭉침)

    this.acceleration.add(sep);
    this.acceleration.add(ali);
    this.acceleration.add(coh);
  }

  separate(boids: Boid[]): P5Vector {
    const steer = this.p.createVector(0, 0);
    let count = 0;
    for (const other of boids) {
      const d = this.p.dist(
        this.position.x, this.position.y,
        other.position.x, other.position.y
      );
      if (d > 0 && d < this.perceptionRadius * 0.95) {
        const diff = this.position.copy().sub(other.position);
        diff.normalize();
        diff.div(d);
        steer.add(diff);
        count++;
      }
    }
    if (count > 0) {
      steer.div(count);
      steer.setMag(this.maxSpeed);
      steer.sub(this.velocity);
      steer.limit(this.maxForce);
    }
    return steer;
  }

  align(boids: Boid[]): P5Vector {
    const sum = this.p.createVector(0, 0);
    let count = 0;
    for (const other of boids) {
      const d = this.p.dist(
        this.position.x, this.position.y,
        other.position.x, other.position.y
      );
      if (d > 0 && d < this.perceptionRadius) {
        sum.add(other.velocity);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      sum.setMag(this.maxSpeed);
      const steer = sum.copy().sub(this.velocity);
      steer.limit(this.maxForce);
      return steer;
    }
    return sum;
  }

  cohesion(boids: Boid[]): P5Vector {
    const sum = this.p.createVector(0, 0);
    let count = 0;
    for (const other of boids) {
      const d = this.p.dist(
        this.position.x, this.position.y,
        other.position.x, other.position.y
      );
      if (d > 0 && d < this.perceptionRadius) {
        sum.add(other.position);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      return this.seekForce(sum);
    }
    return sum;
  }

  seekForce(target: P5Vector): P5Vector {
    const desired = target.copy().sub(this.position);
    desired.setMag(this.maxSpeed);
    const steer = desired.copy().sub(this.velocity);
    steer.limit(this.maxForce);
    return steer;
  }

  seek(target: P5Vector, weight: number) {
    const steer = this.seekForce(target);
    steer.mult(weight);
    this.acceleration.add(steer);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.set(0, 0);
  }

  borders(p: P5) {
    if (this.position.x < -8) this.position.x = p.width + 8;
    if (this.position.y < -8) this.position.y = p.height + 8;
    if (this.position.x > p.width + 8) this.position.x = -8;
    if (this.position.y > p.height + 8) this.position.y = -8;
  }

  show(p: P5) {
    p.push();
    p.translate(this.position.x, this.position.y);
    p.noStroke();
    p.fill(265, 265, 265);
    p.circle(0, 0, 4);
    p.pop();
  }
}
