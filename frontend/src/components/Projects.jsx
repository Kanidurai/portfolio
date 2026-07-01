import React, { useState } from 'react';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="card project-card"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Header */}
      <div className="project-card__header">
        <div className="project-card__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
        <div className="project-card__meta">
          <span className="tag tag-blue">{project.type}</span>
          <span className="project-card__num">0{project.id}</span>
        </div>
      </div>

      {/* Title + desc */}
      <h3 className="project-card__title">{project.name}</h3>
      <p className="project-card__desc">{project.description}</p>

      {/* Tech tags */}
      <div className="project-card__tech">
        {project.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      {/* Expandable contributions */}
      <div
        id={`project-contributions-${project.id}`}
        className={`project-card__contributions ${expanded ? 'project-card__contributions--open' : ''
          }`}
      >
        <ul>
          {project.contributions.map((c, i) => (
            <li key={i}>
              <span className="project-card__bullet">→</span>
              {c}
            </li>
          ))}
        </ul>
      </div>

      <button
        className="project-card__toggle"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={`project-contributions-${project.id}`}
        aria-label={
          expanded
            ? `Hide contributions for ${project.name}`
            : `View contributions for ${project.name}`
        }
      >
        {expanded ? 'Hide details' : 'View contributions'}
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
    </div>
  );
};

const Projects = ({ data }) => {
  if (!data?.length) return null;

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>

        <div className="projects__grid">
          {data.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
