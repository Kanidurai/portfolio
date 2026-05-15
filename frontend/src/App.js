import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { portfolioData } from './data/portfolioData';
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
  const data = portfolioData;

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
