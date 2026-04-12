import React, { useState, useEffect, useRef } from 'react';
import { Users, Heart, Facebook, Github, ExternalLink, ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
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

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="community" className="section">
      <h2 className="section-title">Community Impact</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2.5rem',
        alignItems: 'start'
      }}>
        
        {/* Left Col: Stats & Description */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
            <TrendingUp size={20} />
            <span style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Ecosystem Growth</span>
          </div>

          <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'Space Grotesk' }}>
            Xóm Data <span style={{ color: 'var(--secondary)' }}>Community</span>
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '2rem 0' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>
                <CountUp end={74000} suffix="+" />
              </div>
              <div style={{ fontSize: '0.8rem', opacity: 0.6, textTransform: 'uppercase' }}>Active Members</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--secondary)' }}>
                <CountUp end={180} suffix="+" />
              </div>
              <div style={{ fontSize: '0.8rem', opacity: 0.6, textTransform: 'uppercase' }}>Library Stars</div>
            </div>
          </div>

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Co-founding and managing the most vibrant data ecosystem in Vietnam. 
            Driving professional excellence through knowledge democratisation.
          </p>

          {/* Simple Visual Chart */}
          <div style={{ marginBottom: '2.5rem', opacity: 0.8 }}>
             <svg width="100%" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 50C30 45 60 55 90 40C120 25 150 45 180 30C210 15 240 25 270 5C280 -2 300 0 300 0" 
                      stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" className="chart-path" />
                <path d="M0 50C30 45 60 55 90 40C120 25 150 45 180 30C210 15 240 25 270 5V60H0V50Z" 
                      fill="url(#gradient-growth)" opacity="0.1" />
                <defs>
                  <linearGradient id="gradient-growth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
             </svg>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://www.facebook.com/groups/xomdata" target="_blank" rel="noreferrer" className="btn-primary">
              Join Us <ExternalLink size={16} />
            </a>
            <a href="https://github.com/tunguyenn99/thu_vien_cua_xom_data" target="_blank" rel="noreferrer" className="btn-secondary">
              <Github size={18} /> Library
            </a>
          </div>
        </div>

        {/* Right Col: Beautified Slideshow */}
        <div style={{ position: 'relative' }}>
          <div className="glass-panel" style={{ padding: '0.75rem', overflow: 'hidden', border: '1px solid var(--outline-low)' }}>
            <div style={{ 
              position: 'relative', 
              aspectRatio: '16/10', 
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
                    objectFit: 'cover', transition: 'all 0.8s ease-in-out',
                    opacity: activeSlide === idx ? 1 : 0,
                    transform: activeSlide === idx ? 'scale(1)' : 'scale(1.05)'
                  }}
                />
              ))}
              
              {/* Overlay Nav */}
              <div style={{ 
                position: 'absolute', bottom: '1rem', right: '1rem', 
                display: 'flex', gap: '0.5rem', zIndex: 10 
              }}>
                {images.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    style={{ 
                      width: '8px', height: '8px', borderRadius: '50%', border: 'none',
                      background: activeSlide === idx ? 'var(--primary)' : 'rgba(255,255,255,0.3)',
                      cursor: 'pointer', transition: 'all 0.3s'
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Slide Caption */}
            <div style={{ padding: '1.25rem 0.5rem 0.5rem' }}>
               <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>
                  {activeSlide === 0 && "Cộng đồng Xóm Data"}
                  {activeSlide === 1 && "Tốc độ Tăng trưởng thành viên"}
                  {activeSlide === 2 && "Nhân khẩu học Community"}
                  {activeSlide === 3 && "Top Content & Engagement"}
               </h4>
               <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {activeSlide === 0 && "Trung tâm kết nối và thảo luận của gần 75k nhân sự ngành Dữ liệu tại Việt Nam."}
                  {activeSlide === 1 && "Sự tăng trưởng vượt bậc từ cộng đồng tự thân hướng tới giá trị cốt lõi."}
                  {activeSlide === 2 && "Tập hợp các chuyên gia, quản lý và sinh viên khối ngành STEM hàng đầu."}
                  {activeSlide === 3 && "Những thảo luận chất lượng cao về Modern Data Stack và AI trends."}
               </p>
            </div>
          </div>
          
          {/* Decorative Glow */}
          <div style={{ 
            position: 'absolute', top: '50%', left: '50%', width: '150%', height: '150%',
            background: 'radial-gradient(circle, var(--primary) 0%, transparent 60%)',
            opacity: 0.1, zIndex: -1, transform: 'translate(-50%, -50%)'
          }} />
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
      `}</style>
    </section>
  );
}
