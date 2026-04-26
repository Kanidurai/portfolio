import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { usePortfolio } from './hooks/usePortfolio';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumePage from './pages/ResumePage';
import './styles/global.css';

function PortfolioHome() {
  const { data, loading, error } = usePortfolio();

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader" />
        <p className="loading-text">Loading portfolio...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        <h2>Connection Error</h2>
        <p>
          Could not connect to the backend API. Please make sure the NestJS server
          is running on <strong>http://localhost:5000</strong>.
        </p>
        <p style={{ marginTop: 8, fontFamily: 'monospace', fontSize: '0.85rem', color: '#f5a623' }}>
          {error}
        </p>
        <button className="btn btn-outline" style={{ marginTop: 20 }} onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero data={data?.about} />
        <Skills data={data?.skills} />
        <Projects data={data?.projects} />
        <Experience
          experience={data?.experience}
          education={data?.education}
          certifications={data?.certifications}
        />
        <Contact about={data?.about} />
      </main>
      <Footer about={data?.about} />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
