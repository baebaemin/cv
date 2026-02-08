import React from "react";
import "./index.scss";

export const Hero = () => {
  return (
    <header className="hero">
      <p className="hero__title">Bae Minkyoung</p>
      {/* <p className="hero__subtitle">frontend developer</p> */}
      {/* TODO: 하단으로 옮기기 */}
      {/* <div className="hero__meta">
        <span>BASED IN SEOUL, KR</span>
        <span className="hero__meta-line">{new Date().getFullYear()} © PORTFOLIO</span>
      </div> */}
    </header>
  );
};
