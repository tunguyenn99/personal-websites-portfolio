import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Sun, Moon } from 'lucide-react';
import { SiGithub as Github } from 'react-icons/si';
import { FaLinkedin as Linkedin } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture & Stack', href: '#architecture' },
    { name: 'Community', href: '#community' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 50,
      padding: '1rem 0', transition: 'all 0.3s',
      background: isScrolled ? 'var(--glass-bg)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.75rem', fontWeight: 700, textDecoration: 'none', color: 'var(--primary)', fontFamily: 'Space Grotesk' }}>TN<span style={{color: 'var(--secondary)'}}>.</span></a>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {/* Desktop Nav */}
          <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} style={{ 
                color: 'var(--text-main)', 
                textDecoration: 'none', 
                fontWeight: 600, 
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'color 0.3s'
              }}>
                {link.name}
              </a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Theme"
            style={{
              background: 'var(--surface-container)',
              border: '1px solid var(--outline-low)',
              color: 'var(--primary)',
              borderRadius: '9999px',
              padding: '0.5rem 0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <>
                <Sun size={18} color="var(--secondary)" />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)' }}>Light</span>
              </>
            ) : (
              <>
                <Moon size={18} color="var(--primary)" />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)' }}>Dark</span>
              </>
            )}
          </button>
          
          {/* Mobile Nav Toggle */}
          <button id="mobile-nav-toggle" aria-controls="mobile-nav-overlay" aria-expanded={isMenuOpen} aria-label="Toggle navigation menu" className="mobile-toggle" style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div id="mobile-nav-overlay" role="dialog" aria-modal="true" aria-hidden={!isMenuOpen} style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, minHeight: '100dvh',
        background: 'var(--surface)', zIndex: 100,
        display: isMenuOpen ? 'flex' : 'none', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '2rem',
        padding: '2rem', overflowY: 'auto'
      }}>
        <button 
          style={{ position: 'absolute', top: '1.5rem', right: '2rem', background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map(link => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsMenuOpen(false)}
            style={{ 
              color: 'var(--text-main)', textDecoration: 'none', 
              fontSize: '2rem', fontWeight: 700, fontFamily: 'Space Grotesk'
            }}
          >
            {link.name}
          </a>
        ))}
        
        {/* Mobile Socials */}
        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
          <a href="https://github.com/tunguyenn99" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}><Github size={24} /></a>
          <a href="https://linkedin.com/in/tunguyendata" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}><Linkedin size={24} /></a>
          <a href="mailto:contact@tunguyen.data" style={{ color: 'var(--text-muted)' }}><Mail size={24} /></a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
