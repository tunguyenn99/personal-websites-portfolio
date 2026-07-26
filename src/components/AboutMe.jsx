import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { SiGithub as Github } from 'react-icons/si';
import { FaLinkedin as Linkedin } from 'react-icons/fa';
import profilePic from '../assets/avatar/github-avatar.jpg';

export default function AboutMe() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "Senior Analytics Engineer @ GPBank",
    "Ex-TNEX, VNPAY & Shopee Data Leader",
    "Co-Owner @ Xóm Data Community"
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Crafting high-performance data architectures, automated dbt/Airflow pipelines, and enterprise BI ecosystems. Bridging raw data to executive strategic decisions.";

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 28);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="section" style={{ minHeight: '88vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative' }}>
      <div className="container responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Column: Minimal Typography & Bio */}
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          
          {/* Subtitle Badge */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
            <span style={{ height: '1px', width: '28px', background: 'var(--primary)' }}></span>
            <span
              key={titleIndex}
              className="animate-fade-in"
              style={{
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.825rem',
                fontFamily: 'Space Grotesk',
                color: 'var(--primary)'
              }}
            >
              {titles[titleIndex]}
            </span>
          </div>

          {/* Clean Main Title */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 6.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 1.5rem 0', fontFamily: 'Space Grotesk' }}>
            Hi there, I'm <br />
            <span style={{ color: 'var(--primary)' }}>
              Tu Nguyen
            </span>
          </h1>

          {/* Typing Description */}
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'var(--text-muted)', marginBottom: '2.25rem', maxWidth: '620px', lineHeight: 1.65, fontWeight: 400 }}>
            {displayedText}
            {!isTypingComplete && <span className="typing-cursor">|</span>}
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a href="#projects" className="btn-primary" style={{ padding: '0.75rem 1.5rem', borderRadius: '12px' }}>
              Explore Work <ArrowRight size={18} />
            </a>
            <a href="https://github.com/tunguyenn99" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.75rem 1.25rem', borderRadius: '12px', gap: '0.5rem' }}>
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/tunguyenn99/" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.75rem 1.25rem', borderRadius: '12px', gap: '0.5rem' }}>
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          {/* Location */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>
            <MapPin size={16} color="var(--primary)" />
            <span>Hanoi Capital Region, Vietnam // 21.0285° N, 105.8542° E</span>
          </div>
        </div>

        {/* Right Column: Clean Profile Image */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: '100%',
              maxWidth: '360px',
              height: '460px',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid var(--outline-low)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
              position: 'relative',
              background: 'var(--surface-container)'
            }}
          >
            <img
              src={profilePic}
              alt="Tu Nguyen"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                filter: 'contrast(1.03) brightness(0.98)'
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)' }}></div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .responsive-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
