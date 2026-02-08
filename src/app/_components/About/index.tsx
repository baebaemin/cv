import "./index.scss";

const SKILLS = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { category: "Frameworks", items: ["React", "Next.js", "Vue.js", "React Native"] },
  { category: "Library / Test", items: ["React Query", "Zustand", "Storybook", "MSW", "Jotai"] },
  { category: "Interaction / Design", items: ["P5.js", "Three.js", "Spline", "Figma", "Adobe Tools"] },
] as const;

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__tech">
        <h3 className="about__tech-title">/Skills</h3>
        <div className="about__tech-grid">
          {SKILLS.map(({ category, items }) => (
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
