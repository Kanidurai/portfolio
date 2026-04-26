import React from 'react';
import './Experience.css';

const Experience = ({ experience, education, certifications }) => {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <p className="section-label">My Journey</p>
        <h2 className="section-title">Experience & <span>Education</span></h2>

        <div className="experience__layout">
          {/* Left: Work Timeline */}
          <div className="experience__col">
            <h3 className="experience__col-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
              Work Experience
            </h3>

            <div className="timeline">
              {experience?.map((exp, i) => (
                <div key={exp.id} className="timeline__item">
                  <div className="timeline__dot" />
                  {i < experience.length - 1 && <div className="timeline__line" />}

                  <div className="timeline__content card">
                    <div className="timeline__header">
                      <div>
                        <h4 className="timeline__role">{exp.role}</h4>
                        <p className="timeline__company">{exp.company}</p>
                      </div>
                      <span className="timeline__period">{exp.period}</span>
                    </div>
                    <p className="timeline__desc">{exp.description}</p>
                    <ul className="timeline__highlights">
                      {exp.highlights.map((h, hi) => (
                        <li key={hi}>
                          <span className="timeline__bullet">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education + Certs */}
          <div className="experience__col experience__col--right">
            {/* Education */}
            <h3 className="experience__col-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Education
            </h3>
            {education?.map((ed, i) => (
              <div key={i} className="card edu-card">
                <div className="edu-card__degree">{ed.degree}</div>
                <div className="edu-card__school">{ed.institution}</div>
                <div className="edu-card__meta">
                  <span>{ed.location}</span>
                  <span className="tag">{ed.year}</span>
                </div>
              </div>
            ))}

            {/* Certifications */}
            <h3 className="experience__col-title" style={{ marginTop: '40px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
              Certifications
            </h3>
            <div className="certs-list">
              {certifications?.map((cert, i) => (
                <div key={i} className="card cert-card">
                  <div className="cert-card__icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                  <div>
                    <div className="cert-card__title">{cert.title}</div>
                    <div className="cert-card__issuer">{cert.issuer}</div>
                    <div className="cert-card__desc">{cert.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
