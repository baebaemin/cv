import "./index.scss";

export const CV = () => {
  const experience = [
    { year: "2024.02 ~ 재직중", role: "Frontend Developer", company: "사람인 IT본부 FE개발팀" },
    { year: "2020.03 ~ 2022.12", role: "Co-founder", company: "Studio When" },
    { year: "2016.08 ~ 2018.12", role: "연구원", company: "안그라픽스 디지털디자인연구소" },
  ];

  const education = [
    { year: "2023.01 ~ 2023.12", role: "SSAFY 9기", company: "삼성 청년 SW 아카데미" },
    { year: "2020.02", role: "인터랙션 디자인과 졸업", company: "한국예술종합학교 미술원" },
  ];

  const renderList = (items: typeof experience) =>
    items.map((item, i) => (
      <div key={i} className="cv__item">
        <div className="cv__item-header">
          <h3 className="cv__item-role">{item.role}</h3>
          <span className="cv__item-year">{item.year}</span>
        </div>
        <p className="cv__item-company">{item.company}</p>
      </div>
    ));

  return (
    <section id="cv" className="cv">
      <div className="cv__block">
        <div className="cv__label">/Experiences</div>
        <div className="cv__list">{renderList(experience)}</div>
      </div>
      <hr className="cv__divider" />
      <div className="cv__block">
        <div className="cv__label">/Education</div>
        <div className="cv__list">{renderList(education)}</div>
      </div>
    </section>
  );
};
