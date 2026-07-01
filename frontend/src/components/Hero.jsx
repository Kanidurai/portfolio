import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import assets from '../assests/profile.jpeg';

const Hero = ({ data }) => {
  const titleRef = useRef(null);
  const navigate = useNavigate();
  // const resumePageUrl = `${window.location.origin}/resume`;
  // const resumePdfUrl = `${window.location.origin}/resume.pdf`;
  const resumePdfUrl = `${window.location.origin}/${encodeURIComponent("Kanimozhi resume.pdf")}`;

  // Typewriter effect for the tagline
  useEffect(() => {
    if (!titleRef.current) return;
    const taglines = (data?.tagline || 'MERN Stack Developer').split(', ');
    const el = titleRef.current;
    el.textContent = '';
    let taglineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId = null;

    const typeEffect = () => {
      const currentTagline = taglines[taglineIndex];
      
      if (isDeleting) {
        el.textContent = currentTagline.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = currentTagline.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentTagline.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        taglineIndex = (taglineIndex + 1) % taglines.length;
      }

      timeoutId = setTimeout(typeEffect, typeSpeed);
    };

    typeEffect();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [data]);

  return (
    <section className="hero section" id="about">
      {/* Ambient background blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      <div className="container hero__inner">
        {/* Left: Text */}
        <div className="hero__content">
          <div className="hero__greeting fade-in fade-in-delay-1">
            <span className="hero__greeting-dot" />
              Open to Full Stack Developer Opportunities • Immediate Joiner
          </div>

          <h1 className="hero__name fade-in fade-in-delay-2">
            {data?.name?.split(' ')[0] || 'Kanimozhi'}
            <span className="hero__name-last"> {data?.name?.split(' ')[1] || 'D'}</span>
          </h1>

          <p className="hero__tagline fade-in fade-in-delay-2">
            <span ref={titleRef} />
            <span className="hero__cursor">|</span>
          </p>

          <p className="hero__bio fade-in fade-in-delay-3">
            {data?.summary || ''}
          </p>

          <div className="hero__actions fade-in fade-in-delay-4">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => navigate('/resume')}
            >
              View Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
            <button
              className="btn btn-outline"
              onClick={() => window.open(resumePdfUrl, '_blank', 'noopener,noreferrer')}
            >
              Download Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            </button>
            <button
              className="btn btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </button>
          </div>

          {/* Contact chips */}
          <div className="hero__meta fade-in fade-in-delay-4">
            <a href={`tel:${data?.contact?.phone}`} className="hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16z"/></svg>
              {data?.contact?.phone}
            </a>
            <a href={`mailto:${data?.contact?.email}`} className="hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {data?.contact?.email}
            </a>
            <a href={data?.contact?.github} target="_blank" rel="noopener noreferrer" className="hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a
              href={data?.contact?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__meta-item"
              aria-label="LinkedIn Profile"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v16H0V8zm7.98 0h4.8v2.18h.07c.67-1.27 2.3-2.6 4.73-2.6C22.64 7.58 24 10.09 24 14.06V24h-5v-8.47c0-2.02-.04-4.62-2.82-4.62-2.82 0-3.25 2.2-3.25 4.47V24h-5V8z" />
              </svg>
              LinkedIn
            </a>
            <span className="hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {data?.contact?.location}
            </span>
          </div>
        </div>

        {/* Right: Avatar card */}
        <div className="hero__visual fade-in fade-in-delay-3"> 
          <div className="hero__avatar-wrap">
            <div className="hero__avatar">
              <img
                src={assets}
                alt="Kanimozhi D - Full Stack Developer"
                className="hero__avatar-image"
              />
            </div>
            <div className="hero__avatar-ring hero__avatar-ring--1" />
            <div className="hero__avatar-ring hero__avatar-ring--2" />
          </div>

          <div className="hero__stat-cards">
            <div className="hero__stat-card">
              <span className="hero__stat-num">2<span>+ yrs</span></span>
              <span className="hero__stat-label">Experience</span>
            </div>
            <div className="hero__stat-card">
              <span className="hero__stat-num">5<span>+</span></span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat-card">
              <span className="hero__stat-num">3<span>+</span></span>
              <span className="hero__stat-label">Certifications</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
