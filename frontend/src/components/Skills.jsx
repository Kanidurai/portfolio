import React from 'react';
import './Skills.css';

const ICONS = {
  Frontend: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),

  Backend: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 9h8M8 15h8" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
    </svg>
  ),

  'Database & Architecture': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M20 12c0 1.7-3.6 3-8 3s-8-1.3-8-3" />
    </svg>
  ),

  'Deployment & DevOps': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2v20" />
      <path d="M5 9l7-7 7 7" />
      <path d="M5 15l7 7 7-7" />
    </svg>
  ),

  'Tools & Workflow': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

const Skills = ({ data }) => {
  if (!data?.length) return null;

  return (
    <section className="skills section" id="skills">
      {/* Subtle grid bg */}
      <div className="skills__grid-bg" aria-hidden="true" />

      <div className="container">
        <p className="section-label">What I Know</p>
        <h2 className="section-title">Technical <span>Skills</span></h2>

        <div className="skills__categories">
          {data.map((cat) => (
            <div key={cat.category} className="card skills__cat-card">
              <div className="skills__cat-header">
                <span className="skills__cat-icon">{ICONS[cat.category]}</span>
                <h3 className="skills__cat-name">{cat.category}</h3>
              </div>
              <div className="skills__items">
                {cat.items.map((item) => (
                  <span key={item} className="skills__item">
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

export default Skills;
