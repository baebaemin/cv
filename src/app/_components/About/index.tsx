import React from "react";
import "./index.scss";

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__tech">
        <h3 className="about__tech-title">(01) — Skills</h3>
        <div className="about__tech-grid">
          <div>
            <span className="about__tech-category">Frontend</span>
            <span className="about__tech-items">React, Next.js</span>
            <span className="about__tech-items">Vue, Svelte</span>
          </div>
          <div>
            <span className="about__tech-category">Styling</span>
            <span className="about__tech-items">Tailwind CSS</span>
            <span className="about__tech-items">PostCSS, SCSS</span>
          </div>
          <div>
            <span className="about__tech-category">Motion</span>
            <span className="about__tech-items">Framer Motion</span>
            <span className="about__tech-items">GSAP, Three.js</span>
          </div>
          <div>
            <span className="about__tech-category">Backend</span>
            <span className="about__tech-items">Node.js</span>
            <span className="about__tech-items">Supabase, SQL</span>
          </div>
        </div>
      </div>
    </section>
  );
};
