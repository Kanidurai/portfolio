import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResumePage.css';

const ResumePage = () => {
  const navigate = useNavigate();
  const publicUrl = process.env.PUBLIC_URL || '';
  const resumePdfUrl = `${publicUrl}/resume.pdf`;

  const handleFullscreen = () => {
    const viewer = document.querySelector('.resume-viewer');

    if (viewer?.requestFullscreen) {
      viewer.requestFullscreen();
    } else if (viewer?.webkitRequestFullscreen) {
      viewer.webkitRequestFullscreen();
    } else if (viewer?.msRequestFullscreen) {
      viewer.msRequestFullscreen();
    }
  };

  return (
    <main className="resume-page">
      <section className="resume-shell" aria-label="Kanimozhi D resume">
        <header className="resume-topbar">
          <div>
            <p className="resume-kicker">Resume</p>
            <h1>Kanimozhi D</h1>
          </div>

          <div className="resume-actions">
            <button className="resume-btn resume-btn-ghost" type="button" onClick={() => navigate('/')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              Portfolio
            </button>
            <button className="resume-btn resume-btn-primary" type="button" onClick={handleFullscreen}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3H5a2 2 0 00-2 2v3" />
                <path d="M16 3h3a2 2 0 012 2v3" />
                <path d="M21 16v3a2 2 0 01-2 2h-3" />
                <path d="M8 21H5a2 2 0 01-2-2v-3" />
              </svg>
              Fullscreen
            </button>
            <a className="resume-btn resume-btn-secondary" href={resumePdfUrl} target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <path d="M15 3h6v6" />
                <path d="M10 14L21 3" />
              </svg>
              Open PDF
            </a>
            <a className="resume-btn resume-btn-outline" href={resumePdfUrl} download="Kanimozhi-D-Resume.pdf">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <path d="M7 10l5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
              Download
            </a>
          </div>
        </header>

        <div className="resume-viewer">
          <iframe
            src={`${resumePdfUrl}#view=FitH`}
            title="Kanimozhi D Resume PDF"
            className="resume-pdf"
          />
        </div>
      </section>
    </main>
  );
};

export default ResumePage;
