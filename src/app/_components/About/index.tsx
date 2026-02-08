import "./index.scss";
import { SKILLS_DATA } from "@/constants";

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__tech">
        <h3 className="about__tech-title">/Skills</h3>
        <div className="about__tech-grid">
          {SKILLS_DATA.map(({ category, items }) => (
            <div key={category} className="about__tech-cell">
              <span className="about__tech-category">{category}</span>
              <div className="about__tech-badges">
                {items.map((item) => (
                  <span key={item} className="about__tech-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
