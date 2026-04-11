import React from 'react';
import { Download, ArrowRight, MapPin } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section id="about" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="responsive-grid">
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
            <span style={{ height: '2px', width: '40px', background: 'var(--primary)' }}></span>
            <span style={{ fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Data Enthusiast</span>
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, margin: '0 0 1.5rem 0' }}>
            Decoding Data with<br/>
            <span style={{ color: 'var(--primary)' }}>Tu Nguyen</span>
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px' }}>
            Passionate about building scalable modern data stacks, ELT pipelines, and advanced analytics models. Turning raw data into strategic insights.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
             <a href="#projects" className="btn-primary">View Projects <ArrowRight size={18} /></a>
             <a href="https://github.com/tunguyenn99" target="_blank" rel="noreferrer" className="btn-secondary"><Github size={18} /> GitHub</a>
             <a href="https://linkedin.com/in/tunguyenn99" target="_blank" rel="noreferrer" className="btn-secondary"><Linkedin size={18} /> LinkedIn</a>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
             <MapPin size={18} /> <span>Hanoi, Vietnam</span>
          </div>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.3s', position: 'relative' }}>
          <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(20,184,166,0.2) 100%)' }}>
            <h2 style={{ fontSize: '8rem', opacity: 0.1, position: 'absolute', transform: 'rotate(-45deg)' }}>DATA</h2>
            {/* Using a placeholder SVG since we don't have a photo */}
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', filter: 'drop-shadow(0 0 20px rgba(139,92,246,0.5))' }}>
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .responsive-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
