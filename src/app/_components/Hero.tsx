import React from 'react';
import './Hero.scss';

export const Hero = () => {
  return (
    <header className="hero">
      <h1 className="hero__title">Bae Minkyoung</h1>
      <p className="hero__subtitle">Frontend Developer</p>
      <div className="hero__meta">
        <span>BASED IN SEOUL, KR</span>
        <span className="hero__meta-line">{new Date().getFullYear()} © PORTFOLIO</span>
      </div>
    </header>
  );
};
