import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, MapPin } from 'lucide-react';
import { SiGithub as Github } from 'react-icons/si';
import { FaLinkedin as Linkedin } from 'react-icons/fa';
import profilePic from '../assets/avatar/github-avatar.jpg';

export default function AboutMe() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "A Senior Data Analyst",
    "A Wonder Analytics Engineer",
    "A Helpful BI Developer",
    "A Data Enthusiast"
  ];

  const fullText = "Crafting high-performance data architectures and scalable ELT pipelines. Bridging the gap between raw data and metabolic insights with mathematical precision.";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

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
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative' }}>
      <div className="container responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
            <span style={{ height: '1px', width: '30px', background: 'var(--primary)' }}></span>
            <span 
              key={titleIndex}
              className="animate-fade-in"
              style={{ 
                fontWeight: 700, 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase', 
                fontSize: '0.8rem', 
                fontFamily: 'Space Grotesk',
                minWidth: '200px'
              }}
            >
              {titles[titleIndex]}
            </span>
          </div>
          <h1 style={{ fontSize: '5rem', fontWeight: 700, lineHeight: 1.1, margin: '0 0 2rem 0', fontFamily: 'Space Grotesk' }}>
            Hi there, I'm <br/>
            <span style={{ color: 'var(--primary)', position: 'relative' }}>
              Tu Nguyen
              <svg style={{ position: 'absolute', bottom: '-10px', left: 0, width: '100%', height: '12px' }} viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,10 Q50,0 100,10" stroke="var(--primary)" strokeWidth="2" fill="none" opacity="0.3" />
              </svg>
            </span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '650px', fontWeight: 400, minHeight: '4.5em' }}>
            {displayedText}
            {!isTypingComplete && <span className="typing-cursor">|</span>}
          </p>
          
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
             <a href="#projects" className="btn-primary">Explore Work <ArrowRight size={18} /></a>
             <a href="https://github.com/tunguyenn99" target="_blank" rel="noreferrer" className="btn-secondary"><Github size={18} /> Source Code</a>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>
             <MapPin size={18} color="var(--secondary)" /> <span>Hanoi, Vietnam // 21.0285° N, 105.8542° E</span>
          </div>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.3s', position: 'relative' }}>
          <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-container)', border: '1px solid var(--outline-low)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)', backgroundSize: '100px 100px', zIndex: 1 }}></div>
            
            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
              <div style={{ position: 'absolute', width: '38%', maxWidth: '350px', aspectRatio: '1/1', background: 'var(--primary)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.15 }}></div>
              <div className="fluid-card" style={{ 
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                position: 'relative',
                transform: 'perspective(1000px) rotateY(-5deg)'
              }}>
                <img 
                  src={profilePic} 
                  alt="Tu Nguyen" 
                  style={{ 
                    objectFit: 'cover',
                    filter: 'contrast(1.1) brightness(0.9)',
                    transition: 'transform 0.5s ease',
                  }}
                  className="responsive-img profile-img-hover"
                  loading="lazy"
                  decoding="async"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <style>{`
        @media (max-width: 1024px) {
          .responsive-grid { gap: 2rem !important; }
          h1 { font-size: 4rem !important; }
        }
        @media (max-width: 900px) {
          .responsive-grid { grid-template-columns: 1fr !important; text-align: center; }
          .responsive-grid div { display: flex; flex-direction: column; align-items: center; }
          .responsive-grid p { margin-left: auto; margin-right: auto; }
          h1 { font-size: 3.5rem !important; }
        }
        @media (max-width: 480px) {
          h1 { font-size: 2.75rem !important; }
          .glass-panel .fluid-card { max-width: 320px !important; aspect-ratio: 4/5 !important; }
        }
      `}</style>
    </section>
  );
}
