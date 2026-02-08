import type { TimelineItem } from "@/types";
import "./index.scss";
import { EXPERIENCE_DATA, EDUCATION_DATA } from "@/constants";

export const CV = () => {
  const renderList = (items: readonly TimelineItem[]) =>
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
        <div className="cv__list">{renderList(EXPERIENCE_DATA)}</div>
      </div>
      <hr className="cv__divider" />
      <div className="cv__block">
        <div className="cv__label">/Education</div>
        <div className="cv__list">{renderList(EDUCATION_DATA)}</div>
      </div>
    </section>
  );
};
