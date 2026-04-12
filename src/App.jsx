import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Techstack from './components/Techstack';
import Community from './components/Community';
import Contact from './components/Contact';

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <div className="bg-blobs">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>
      
      <Navbar />
      
      <main className="container">
        <AboutMe />
        <Experience />
        <Projects />
        <Techstack />
        <Community />
        <Contact />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-muted)' }}>
        <p>© {new Date().getFullYear()} Tu Nguyen. Developed with React & Modern Web Tech.</p>
      </footer>
    </>
  );
}

export default App;
