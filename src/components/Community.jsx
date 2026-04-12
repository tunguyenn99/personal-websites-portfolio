import React, { useState, useEffect, useRef } from 'react';
import { Users, Heart, ExternalLink, ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import { SiFacebook, SiGithub } from 'react-icons/si';

// Asset Imports
import img1 from '../assets/community/xom_data_fb.png';
import img2 from '../assets/community/growth.png';
import img3 from '../assets/community/demographic.png';
import img4 from '../assets/community/top_posts.png';

const images = [img1, img2, img3, img4];

// Animated Number Component
function CountUp({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}{suffix}</span>;
}

export default function Community() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="community" className="section">
      <h2 className="section-title">Community Impact</h2>

      <div className="glass-panel" style={{ padding: '2.5rem', maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header Section */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            <TrendingUp size={20} />
            <span style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Global Ecosystem</span>
          </div>
          <h3 style={{ fontSize: '3rem', marginBottom: '0.5rem', fontFamily: 'Space Grotesk', fontWeight: 800 }}>
            Xóm Data <span style={{ color: 'var(--secondary)' }}>Hub</span>
          </h3>
        </div>

        {/* Stats Row with Background Graphs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Members Stat Card */}
          <div style={{
            position: 'relative',
            padding: '2.5rem 2rem',
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.03)',
            overflow: 'hidden',
            border: '1px solid var(--outline-low)'
          }}>
              <div style={{ position: 'relative', zIndex: 10 }}>
              <div className="stat-number">
                <CountUp end={75000} suffix="+" />
              </div>
              <div style={{ fontSize: '0.9rem', opacity: 0.7, textTransform: 'uppercase', fontWeight: 700, marginTop: '0.75rem', letterSpacing: '0.05em' }}>Active Members</div>
            </div>
            {/* Background Area Graph (Members) */}
            <div style={{ position: 'absolute', bottom: -15, left: 0, width: '100%', height: '80%', opacity: 0.35, filter: 'blur(20px)', zIndex: 0 }}>
              <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
                <path d="M0 80C20 75 40 90 60 65C80 40 100 55 120 25C140 0 160 40 180 15C190 0 200 10 200 10V100H0V80Z" fill="var(--primary)" />
              </svg>
            </div>
          </div>

          {/* Stars Stat Card */}
          <div style={{
            position: 'relative',
            padding: '2.5rem 2rem',
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.03)',
            overflow: 'hidden',
            border: '1px solid var(--outline-low)'
          }}>
              <div style={{ position: 'relative', zIndex: 10 }}>
              <div className="stat-number stat-number-secondary">
                <CountUp end={180} suffix="+" />
              </div>
              <div style={{ fontSize: '0.9rem', opacity: 0.7, textTransform: 'uppercase', fontWeight: 700, marginTop: '0.75rem', letterSpacing: '0.05em' }}>Open-Source Resources</div>
            </div>
            {/* Background Area Graph (Stars) */}
            <div style={{ position: 'absolute', bottom: -15, left: 0, width: '100%', height: '80%', opacity: 0.3, filter: 'blur(20px)', zIndex: 0 }}>
              <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
                <path d="M0 95C30 85 60 98 90 75C120 50 150 85 180 55C190 40 200 45 200 45V100H0V95Z" fill="var(--secondary)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Description & Buttons Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '3rem',
          marginBottom: '3.5rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1 1 220px', minWidth: 0 }}>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.15rem' }}>
              Co-founding and managing the most vibrant data ecosystem in Vietnam.
              Our community is an inclusive space for <strong>everyone</strong> - from curious beginners and tech hobbyists to industry veterans - united by a common goal to master the world of data.
            </p>
          </div>
          <div className="community-cta" style={{ display: 'flex', gap: '1.25rem', paddingBottom: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://www.facebook.com/groups/xomdata" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '1rem 2rem', flex: '1 1 48%', minWidth: 0, textAlign: 'center' }}>
              Join Community <ExternalLink size={16} />
            </a>
            <a href="https://github.com/tunguyenn99/thu_vien_cua_xom_data" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '1rem 2rem', flex: '1 1 48%', minWidth: 0, textAlign: 'center' }}>
              <SiGithub size={18} /> Library
            </a>
          </div>
        </div>

        {/* Interactive Slideshow */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ position: 'relative' }}
        >
            <div className="glass-panel" style={{ padding: '0.6rem', overflow: 'hidden', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--outline-low)' }}>
            <div className="community-gallery" style={{ position: 'relative', aspectRatio: '21/9', maxHeight: '48vh', borderRadius: '8px', overflow: 'hidden', background: '#000' }}>
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Community Highlight ${idx}`}
                  style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    objectFit: 'cover', transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: activeSlide === idx ? 1 : 0,
                    transform: activeSlide === idx ? 'scale(1)' : 'scale(1.15)',
                    filter: activeSlide === idx ? 'none' : 'blur(4px)'
                  }}
                  className="responsive-img"
                  loading="lazy"
                  decoding="async"
                />
              ))}

                <button onClick={prevSlide} className="carousel-btn" style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: '50%', color: '#fff', width: '48px', height: '48px', cursor: 'pointer', zIndex: 20 }}>
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="carousel-btn" style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: '50%', color: '#fff', width: '48px', height: '48px', cursor: 'pointer', zIndex: 20 }}>
                <ChevronRight size={24} />
              </button>

              <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.75rem', zIndex: 20 }}>
                {images.map((_, idx) => (
                  <div key={idx} onClick={() => setActiveSlide(idx)} style={{ width: activeSlide === idx ? '40px' : '12px', height: '6px', borderRadius: '3px', background: activeSlide === idx ? 'var(--primary)' : 'rgba(255,255,255,0.3)', cursor: 'pointer', transition: '0.4s' }} />
                ))}
              </div>
            </div>

            <div style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.75rem', letterSpacing: '0.02em' }}>
                  {activeSlide === 0 && "Our Vibrant Facebook Hub"}
                  {activeSlide === 1 && "Rapid Ecosystem Growth"}
                  {activeSlide === 2 && "Global & Diverse Community"}
                  {activeSlide === 3 && "Top-Tier Knowledge Sharing"}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '700px', lineHeight: 1.6 }}>
                  {activeSlide === 0 && "Connecting 75k hearts and minds in Vietnam's most active data-driven community."}
                  {activeSlide === 1 && "Unprecedented growth driven by high-quality content and community-first values."}
                  {activeSlide === 2 && "Built for builders, hobbyists, and experts alike across all STEM and data domains."}
                  {activeSlide === 3 && "Empowering the next generation of data professionals with open resources and deep insights."}
                </p>
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 900, opacity: 0.2, letterSpacing: '0.3em', fontFamily: 'Space Grotesk' }}>
                0{activeSlide + 1} / 0{images.length}
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .carousel-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s;
          opacity: 0.7;
          backdrop-filter: blur(4px);
        }
        .carousel-btn:hover {
          opacity: 1;
          background: var(--primary) !important;
          color: #000 !important;
          box-shadow: 0 0 30px var(--primary);
          transform: translateY(-50%) scale(1.1);
        }
        .stat-number {
          font-size: clamp(1.6rem, 8vw, 3.5rem);
          font-weight: 900;
          color: var(--primary);
          line-height: 1;
          max-width: 100%;
          display: block;
          hyphens: none;
          overflow-wrap: anywhere;
        }
        .stat-number-secondary { color: var(--secondary); }
        .community-cta a { box-sizing: border-box; }
        .community-gallery img { display: block; }
        @media (max-width: 480px) {
          .carousel-btn { width: 40px !important; height: 40px !important; left: 0.5rem !important; right: 0.5rem !important; }
          .carousel-btn:hover { transform: translateY(-50%) scale(1.05) !important; }
          .carousel-btn svg { width: 18px; height: 18px; }
          .stat-number { font-size: clamp(1.2rem, 6.5vw, 2.1rem) !important; }
          .community-cta a { flex: 1 1 48% !important; min-width: 0 !important; }
          .community-gallery { aspect-ratio: 4/3 !important; max-height: 60vh !important; }
          .community-gallery img { position: absolute; left: 0; top: 0; }
        }
      `}</style>
    </section>
  );
}

