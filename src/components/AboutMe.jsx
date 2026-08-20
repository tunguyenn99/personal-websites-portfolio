import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Sparkles, Copy, Check, Coffee } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import { SiGithub as Github } from 'react-icons/si';
import { FaLinkedin as Linkedin } from 'react-icons/fa';
import profilePic from '../assets/avatar/github-avatar.jpg';

export default function AboutMe() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const titles = [
    "Senior Analytics Engineer @ GPBank",
    "Ex-TNEX, VNPAY & Shopee Data Leader",
    "Co-Owner @ Xóm Data Community"
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@tunguyen.data");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Crafting high-performance data architectures, automated dbt/Airflow pipelines, and enterprise BI ecosystems. Bridging raw data to executive strategic decisions.";

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

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
    <section id="about" className="section hero-section">
      <div className="container responsive-grid hero-layout">
        
        {/* Left Column: Minimal Typography & Bio */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Live Status Badge */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.4rem 0.9rem',
              borderRadius: '9999px',
              background: 'var(--tag-bg)',
              border: '1px solid var(--tag-border)',
              marginBottom: '1.25rem',
              boxShadow: '0 4px 15px rgba(0, 210, 127, 0.12)'
            }}
          >
            <span className="pulse-dot"></span>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.04em' }}>
              Available for Roles · 104K+ Community Reach
            </span>
          </Motion.div>

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
          <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#projects" 
              className="btn-primary" 
              style={{ padding: '0.75rem 1.5rem', borderRadius: '12px' }}
            >
              Explore Work <ArrowRight size={18} />
            </Motion.a>

            <Motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://linkedin.com/in/tunguyendata"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '0.75rem 1.25rem', borderRadius: '12px', gap: '0.5rem', background: 'var(--surface-container)', color: 'var(--secondary)', border: '1px solid var(--outline-low)' }}
            >
              <Coffee size={18} color="var(--secondary)" /> Book Coffee Chat
            </Motion.a>

            <Motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCopyEmail}
              aria-label={copied ? 'Email copied' : 'Copy email address'}
              title={copied ? 'Email copied' : 'Copy email address'}
              className="btn-secondary hero-social"
              style={{ padding: '0.75rem 1.25rem', borderRadius: '12px', gap: '0.5rem', cursor: 'pointer', border: '1px solid var(--outline-low)' }}
            >
              {copied ? <Check size={18} color="var(--primary)" /> : <Copy size={18} />}
              <span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
            </Motion.button>

            <Motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/tunguyenn99" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary" 
              style={{ padding: '0.75rem 1.25rem', borderRadius: '12px', gap: '0.5rem' }}
            >
              <Github size={18} /> <span>GitHub</span>
            </Motion.a>

            <Motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.linkedin.com/in/tunguyenn99/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Open LinkedIn profile"
              title="LinkedIn"
              className="btn-secondary hero-social"
              style={{ padding: '0.75rem 1.25rem', borderRadius: '12px', gap: '0.5rem' }}
            >
              <Linkedin size={18} /> <span>LinkedIn</span>
            </Motion.a>
          </div>

          {/* Location */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>
            <MapPin size={16} color="var(--primary)" />
            <span>Hanoi Capital Region, Vietnam</span>
          </div>
        </Motion.div>

        {/* Right Column: Clean Profile Image */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Motion.div
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="glass-panel profile-img-hover"
            style={{
              width: '100%',
              maxWidth: '360px',
              height: '460px',
              borderRadius: '24px',
              overflow: 'hidden',
              padding: 0,
              position: 'relative',
              background: 'var(--surface-container)'
            }}
          >
            <img
              src={profilePic}
              alt="Tu Nguyen"
              width="360"
              height="460"
              fetchPriority="high"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                filter: 'contrast(1.03) brightness(0.98)'
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)' }}></div>
          </Motion.div>
        </Motion.div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .responsive-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
