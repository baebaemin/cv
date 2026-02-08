import "./index.scss";
import { OTHERS_DATA, PROJECTS_DATA, WORKS_DATA } from "@/constants";

export const Works = () => {
  return (
    <section id="works" className="works">
      <div className="works__content">
        <div className="works__block">
          <div className="works__label">/Works</div>
          <ul className="works__list">
            {WORKS_DATA.map((item) => (
              <li key={item.dateRange} className="works__item">
                <h3 className="works__item-title">
                  <a
                    href={item.linkHref}
                    className="works__item-title-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="works__item-title-text">{item.title}</span>
                    <span className="works__item-title-icon" aria-hidden>↗</span>
                  </a>
                </h3>
                <p className="works__item-date">{item.dateDetail}</p>
                <p className="works__item-desc">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="works__block">
          <div className="works__label">/Projects</div>
          <ul className="works__list works__list--projects">
            {PROJECTS_DATA.map((item) => (
              <li key={item.dateRange} className="works__item">
                <h3 className="works__item-title">
                  <a
                    href={item.linkHref}
                    className="works__item-title-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="works__item-title-text">{item.title}</span>
                    <span className="works__item-title-icon" aria-hidden>↗</span>
                  </a>
                </h3>
                <p className="works__item-meta">{item.detail}</p>
                <p className="works__item-desc">{item.description}</p>
                <p className="works__item-role">[Role] {item.role}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="works__block">
          <div className="works__label">/Others</div>
          <ul className="works__list works__list--projects">
            {OTHERS_DATA.map((item) => (
              <li key={item.dateRange} className="works__item">
                <h3 className="works__item-title">
                  <a
                    href={item.linkHref}
                    className="works__item-title-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="works__item-title-text">{item.title}</span>
                    <span className="works__item-title-icon" aria-hidden>↗</span>
                  </a>
                </h3>
                <p className="works__item-meta">{item.detail}</p>
                <p className="works__item-desc">{item.description}</p>
                {item.role && <p className="works__item-role">[Role] {item.role}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
