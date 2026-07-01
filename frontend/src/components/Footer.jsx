import React from 'react';
import './Footer.css';

const Footer = ({ about }) => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <span style={{ color: 'var(--accent-primary)', fontWeight: 300 }}>{'{'}</span>
            KD
            <span style={{ color: 'var(--accent-primary)', fontWeight: 300 }}>{'}'}</span>
          </span>
          <p className="footer__tagline">React • Node.js • NestJS • MongoDB</p>
        </div>

        <p className="footer__copy">
          Designed & Developed by <strong>Kanimozhi.D</strong>
          <br />
          © {new Date().getFullYear()} Kanimozhi D. All Rights Reserved.
        </p>

        <div className="footer__socials">
          <a href={about?.contact?.github} target="_blank" rel="noreferrer" className="footer__social" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a
            href={about?.contact?.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer__social"
            aria-label="LinkedIn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.5-2.7 5.2-2.7 5.6 0 6.6 3.7 6.6 8.4V24h-5v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-5V8z" />
            </svg>
          </a>
          <a href={`mailto:${about?.contact?.email}`} className="footer__social" aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
