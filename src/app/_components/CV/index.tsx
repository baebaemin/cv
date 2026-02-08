import React from "react";
import "./index.scss";

export const CV = () => {
  const history = [
    { year: "2022 — Present", role: "Senior Frontend Developer", company: "Tech Solutions Inc.", location: "Seoul" },
    { year: "2020 — 2022", role: "Frontend Developer", company: "Creative Studio", location: "Busan" },
    { year: "2016 — 2020", role: "BS Computer Science", company: "Seoul National University", location: "Seoul" },
  ];

  return (
    <section id="cv" className="cv">
      <div className="cv__label">/ Resume</div>
      <div className="cv__list">
        {history.map((item, i) => (
          <div key={i} className="cv__item">
            <div className="cv__item-header">
              <h3 className="cv__item-role">{item.role}</h3>
              <span className="cv__item-year">{item.year}</span>
            </div>
            <p className="cv__item-company">{item.company}</p>
          </div>
        ))}
      </div>
      <div className="cv__download">
        <a href="#">Download PDF</a>
      </div>
    </section>
  );
};
