import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, MapPin, Database, Terminal, Sparkles, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SiGithub as Github, SiDbt, SiApacheairflow, SiPython, SiPostgresql, SiGooglecloud } from 'react-icons/si';
import { FaLinkedin as Linkedin, FaDatabase } from 'react-icons/fa';
import profilePic from '../assets/avatar/github-avatar.jpg';

export default function AboutMe() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "Senior Analytics Engineer @ GPBank",
    "Ex-TNEX, VNPAY & Shopee Data Leader",
    "Co-Owner @ Xóm Data Community",
    "Scalable ELT & dbt Modeling Specialist"
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Building high-performance data architectures, automated dbt/Airflow pipelines, and enterprise BI ecosystems. Bridging raw data to executive strategic decisions with mathematical precision.";

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2800);
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
    }, 25);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Experience', val: '5+ Yrs', desc: 'Data Engineering & BI' },
    { label: 'Ecosystems', val: '15+', desc: 'Fintech, Banking & E-com' },
    { label: 'Community', val: '15k+', desc: 'Engineers @ Xóm Data' }
  ];

  const techStack = [
    { name: 'dbt', icon: <SiDbt color="#FF694B" size={14} /> },
    { name: 'Airflow', icon: <SiApacheairflow color="#017CEE" size={14} /> },
    { name: 'Python', icon: <SiPython color="#3776AB" size={14} /> },
    { name: 'SQL & OLAP', icon: <Database color="#006241" size={14} /> },
    { name: 'BigQuery / GCP', icon: <SiGooglecloud color="#4285F4" size={14} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" size={14} /> }
  ];

  return (
    <section id="about" className="section" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: '90px', position: 'relative' }}>
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 98, 65, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: '3.5rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        
        {/* Left Column: Text & Call to Action */}
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          
          {/* Live Status Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.35rem 0.9rem',
            borderRadius: '9999px',
            background: 'var(--surface-container)',
            border: '1px solid var(--outline-low)',
            marginBottom: '1.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
          }}>
            <span style={{ position: 'relative', display: 'flex', width: '9px', height: '9px' }}>
              <span style={{
                position: 'absolute',
                display: 'inline-flex',
                height: '100%',
                width: '100%',
                borderRadius: '50%',
                background: 'var(--primary)',
                opacity: 0.75,
                animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
              }} />
              <span style={{
                position: 'relative',
                display: 'inline-flex',
                borderRadius: '50%',
                height: '9px',
                width: '9px',
                background: 'var(--primary)'
              }} />
            </span>
            <span
              key={titleIndex}
              className="animate-fade-in"
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                fontFamily: 'Space Grotesk',
                letterSpacing: '0.02em'
              }}
            >
              {titles[titleIndex]}
            </span>
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: 'clamp(2.6rem, 5.5vw, 4.25rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            margin: '0 0 1.25rem 0',
            fontFamily: 'Space Grotesk',
            letterSpacing: '-0.02em'
          }}>
            Architecting <br />
            <span style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, #34D399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              display: 'inline-block'
            }}>
              Data Intelligence
            </span>
          </h1>

          {/* Typing Description */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            maxWidth: '620px',
            lineHeight: 1.65,
            fontWeight: 400,
            minHeight: '4.8em'
          }}>
            {displayedText}
            {!isTypingComplete && <span className="typing-cursor">|</span>}
          </p>

          {/* Tech Stack Chips */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.25rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginRight: '0.25rem' }}>
              CORE STACK:
            </span>
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  background: 'var(--surface-container)',
                  border: '1px solid var(--outline-low)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '8px'
                }}
              >
                {tech.icon}
                {tech.name}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a href="#projects" className="btn-primary" style={{ padding: '0.8rem 1.6rem', borderRadius: '12px' }}>
              Explore Projects <ArrowRight size={18} />
            </a>
            <a
              href="https://github.com/tunguyenn99"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '0.8rem 1.4rem', borderRadius: '12px', gap: '0.5rem' }}
            >
              <Github size={18} /> GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/tunguyenn99/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '0.8rem 1.4rem', borderRadius: '12px', gap: '0.5rem', color: '#0A66C2', borderColor: 'rgba(10, 102, 194, 0.3)' }}
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          {/* Location & Coordinates */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
            <MapPin size={16} color="var(--primary)" />
            <span>Hanoi Capital Region, Vietnam // 21.0285° N, 105.8542° E</span>
          </div>
        </div>

        {/* Right Column: Hero Profile Card with Metrics */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div
            className="glass-panel"
            style={{
              padding: '1.75rem',
              borderRadius: '24px',
              background: 'var(--surface-container)',
              border: '1px solid var(--outline-low)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            {/* Profile Avatar Card */}
            <div style={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              height: '320px',
              border: '1px solid var(--outline-low)'
            }}>
              <img
                src={profilePic}
                alt="Tu Nguyen"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  filter: 'contrast(1.05) brightness(0.98)'
                }}
              />
              
              {/* Overlay Gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1.25rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#34D399', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                  <ShieldCheck size={14} /> Senior Analytics Engineer
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', margin: 0, fontFamily: 'Space Grotesk' }}>
                  Tu Nguyen
                </h3>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                  GPBank • Ex-TNEX / Shopee / VNPAY
                </span>
              </div>
            </div>

            {/* Quick Metrics Counter Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--surface-low)',
                    border: '1px solid var(--outline-low)',
                    borderRadius: '14px',
                    padding: '0.85rem 0.6rem',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--primary)',
                    fontFamily: 'Space Grotesk'
                  }}>
                    {item.val}
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '0.1rem' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @media (max-width: 1024px) {
          #about .responsive-grid { gap: 2rem !important; grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
