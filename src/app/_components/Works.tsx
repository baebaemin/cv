import React from 'react';
import './Works.scss';

export const Works = () => {
  const projects = [
    { id: 1, title: 'Finance Dashboard', category: 'Web Application', year: '2023', image: 'https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwZGFzaGJvYXJkJTIwdWl8ZW58MXx8fHwxNzcwNTM3MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 2, title: 'Minimal Portfolio', category: 'Website Design', year: '2023', image: 'https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwdWklMjBkZXNpZ24lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3MDUzNzEzNHww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 3, title: 'IDE Interface', category: 'Design System', year: '2022', image: 'https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBtb25pdG9yJTIwY29kZSUyMGVkaXRvciUyMGRhcmslMjB0aGVtZXxlbnwxfHx8fDE3NzA1MzcxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 4, title: 'Abstract Geometry', category: 'Visual Experiments', year: '2022', image: 'https://images.unsplash.com/photo-1656991955761-8b1a8eb24049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1pbmltYWwlMjBnZW9tZXRyaWMlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwNTM3MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  return (
    <section id="works" className="works">
      <div className="works__header">
        <span className="works__label">(03) — Selected Works</span>
        <span className="works__hint">SCROLL TO EXPLORE ↓</span>
      </div>
      <div className="works__list">
        {projects.map((project) => (
          <div key={project.id} className="works__item">
            <div className="works__image-wrap">
              <div className="works__image-overlay" aria-hidden />
              <img src={project.image} alt={project.title} className="works__image" />
            </div>
            <div className="works__meta">
              <h4 className="works__title">{project.title}</h4>
              <div className="works__details">
                <span className="works__detail-category">{project.category}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
