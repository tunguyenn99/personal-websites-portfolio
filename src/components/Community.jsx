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

  // Auto-slide
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
      
      <div className="glass-panel" style={{ padding: '2.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header & Stats Info */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            <TrendingUp size={20} />
            <span style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Ecosystem Growth</span>
          </div>

          <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'Space Grotesk' }}>
            Xóm Data <span style={{ color: 'var(--secondary)' }}>Community</span>
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>
                <CountUp end={74000} suffix="+" />
              </div>
              <div style={{ fontSize: '0.85rem', opacity: 0.6, textTransform: 'uppercase', fontWeight: 700 }}>Active Members</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--secondary)' }}>
                <CountUp end={180} suffix="+" />
              </div>
              <div style={{ fontSize: '0.85rem', opacity: 0.6, textTransform: 'uppercase', fontWeight: 700 }}>Library Stars</div>
            </div>
            <div style={{ gridColumn: 'span 1' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1rem' }}>
                Co-founding and managing the most vibrant data ecosystem in Vietnam. 
                Driving professional excellence through knowledge democratisation.
              </p>
            </div>
          </div>

          {/* Growth Chart */}
          <div style={{ margin: '1rem 0 2.5rem', opacity: 0.8 }}>
             <svg width="100%" height="40" viewBox="0 0 300 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 35C30 30 60 40 90 25C120 10 150 30 180 15C210 0 240 10 270 -10" 
                      stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" className="chart-path" />
                <path d="M0 35C30 30 60 40 90 25C120 10 150 30 180 15C210 0 240 10 270 -10V40H0V35Z" 
                      fill="url(#gradient-growth)" opacity="0.1" />
             </svg>
          </div>
        </div>

        {/* Beautified Slideshow with Arrows (PLANNED UNDER STATS) */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ position: 'relative', marginBottom: '3rem' }}
        >
          <div className="glass-panel" style={{ padding: '0.5rem', overflow: 'hidden', border: '1px solid var(--outline-low)', background: 'rgba(0,0,0,0.2)' }}>
            <div style={{ 
              position: 'relative', 
              aspectRatio: '16/8', 
              borderRadius: '8px', 
              overflow: 'hidden',
              background: '#000'
            }}>
              {images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`Slide ${idx}`}
                  style={{ 
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                    objectFit: 'cover', transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: activeSlide === idx ? 1 : 0,
                    transform: activeSlide === idx ? 'scale(1)' : 'scale(1.05)',
                    filter: activeSlide === idx ? 'none' : 'blur(5px)'
                  }}
                />
              ))}

              {/* Arrow Navigators */}
              <button 
                onClick={prevSlide}
                style={{
                  position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%', color: '#fff', width: '40px', height: '40px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', zIndex: 20, transition: 'all 0.3s'
                }}
                className="carousel-btn"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                style={{
                  position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%', color: '#fff', width: '40px', height: '40px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', zIndex: 20, transition: 'all 0.3s'
                }}
                className="carousel-btn"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Pagination Dots */}
              <div style={{ 
                position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)',
                display: 'flex', gap: '0.6rem', zIndex: 20 
              }}>
                {images.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    style={{ 
                      width: activeSlide === idx ? '24px' : '8px', height: '8px', borderRadius: '4px', border: 'none',
                      background: activeSlide === idx ? 'var(--primary)' : 'rgba(255,255,255,0.3)',
                      cursor: 'pointer', transition: 'all 0.3s'
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Slide Information Bar */}
            <div style={{ 
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
              padding: '1.25rem 1rem 0.5rem'
            }}>
               <div>
                 <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', margin: 0 }}>
                    {activeSlide === 0 && "Cộng đồng Xóm Data"}
                    {activeSlide === 1 && "Tốc độ Tăng trưởng"}
                    {activeSlide === 2 && "Nhân khẩu học Community"}
                    {activeSlide === 3 && "Top Content & Engagement"}
                 </h4>
                 <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0.2rem 0 0' }}>
                    {activeSlide === 0 && "Gần 75,000 nhân sự ngành Dữ liệu tại Việt Nam."}
                    {activeSlide === 1 && "Sự bứt phá mạnh mẽ từ giá trị nội tại."}
                    {activeSlide === 2 && "Chuyên gia và nhân tài từ khối ngành STEM."}
                    {activeSlide === 3 && "Chia sẻ chuyên môn chất lượng cao mỗi ngày."}
                 </p>
               </div>
               <div style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.4 }}>
                  0{activeSlide + 1} / 0{images.length}
               </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://www.facebook.com/groups/xomdata" target="_blank" rel="noreferrer" className="btn-primary" style={{ minWidth: '180px' }}>
            Join Us <ExternalLink size={16} />
          </a>
          <a href="https://github.com/tunguyenn99/thu_vien_cua_xom_data" target="_blank" rel="noreferrer" className="btn-secondary" style={{ minWidth: '180px' }}>
            <SiGithub size={18} /> Library
          </a>
        </div>

      </div>

      <style>{`
        .chart-path {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: draw 3s ease-out forwards;
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        .carousel-btn:hover {
          background: var(--primary) !important;
          color: #000 !important;
          transform: translateY(-50%) scale(1.1);
          border-color: var(--primary) !important;
          box-shadow: 0 0 15px var(--primary);
        }
      `}</style>
    </section>
  );
}

