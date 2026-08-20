import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ScrollToTop from './components/ScrollToTop';

const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const ArchitectureFlow = lazy(() => import('./components/ArchitectureFlow'));
const Community = lazy(() => import('./components/Community'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <ScrollToTop />
      <div className="bg-blobs">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>
      
      <Navbar />
      
      <main>
        <AboutMe />
        <Suspense fallback={<div className="section-loader" role="status" aria-label="Loading portfolio sections" />}>
          <Experience />
          <Projects />
          <ArchitectureFlow />
          <Community />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Tu Nguyen. Developed with React & Modern Web Tech.</p>
      </footer>
    </>
  );
}

export default App;
