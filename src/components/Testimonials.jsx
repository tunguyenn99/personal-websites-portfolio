import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle, ExternalLink } from 'lucide-react';
import { FaLinkedin as Linkedin } from 'react-icons/fa';

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsData = [
    {
      id: 1,
      name: "Data & Analytics Lead",
      role: "Senior Manager — VNPAY & TNEX Fintech",
      category: "Fintech & Banking",
      quote: "Tu is an exceptionally sharp Analytics Engineer and Data Analyst. At VNPAY and TNEX, his work architecting clean dbt models and automated transaction pipelines brought outstanding reliability to our reporting while accelerating data availability for executive decisions.",
      highlight: "High-volume transaction analytics & dbt architecture",
      avatarBg: "var(--accent-fulltime)"
    },
    {
      id: 2,
      name: "MindX Data Academy Graduate",
      role: "Data Analyst — Ex-MindX Student",
      category: "Teaching & Mentorship",
      quote: "Tu doesn't just teach SQL, Python, and PowerBI syntax — he instills real-world business context, data modeling principles, and problem-solving habits that directly helped me land my first data role in tech.",
      highlight: "Practical business context & mentorship",
      avatarBg: "var(--accent-community)"
    },
    {
      id: 3,
      name: "Xóm Data Community Co-Lead",
      role: "Senior Data Engineer — Xóm Data",
      category: "Community",
      quote: "Working alongside Tu at Xóm Data is inspiring. He possesses a deep passion for sharing industry roadmaps, breaking down complex data engineering topics, and building structured learning paths for Vietnam's data community.",
      highlight: "Leadership & technical content creation",
      avatarBg: "var(--accent-advisor)"
    },
    {
      id: 4,
      name: "E-Commerce Project Lead",
      role: "Head of Growth — E-Commerce Tech",
      category: "E-Commerce & Consulting",
      quote: "Tu bridges the gap between complex data infrastructure and commercial growth. His automated analytics pipelines transformed how our operational teams track daily GMV, inventory velocity, and seller performance metrics.",
      highlight: "Commercial GMV analytics & automated pipelines",
      avatarBg: "var(--accent-parttime)"
    }
  ];

  const categories = ['All', 'Fintech & Banking', 'Teaching & Mentorship', 'Community', 'E-Commerce & Consulting'];

  const filteredTestimonials = activeCategory === 'All'
    ? testimonialsData
    : testimonialsData.filter(t => t.category === activeCategory);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section id="testimonials" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--primary)', fontFamily: 'Space Grotesk'
          }}>
            Social Proof & Endorsements
          </span>
          <h2 className="section-title" style={{ display: 'block', marginTop: '0.5rem', marginBottom: '1rem' }}>
            What Colleagues & Partners Say
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            Feedback and recommendations from tech leads, mentees, and community collaborators.
          </p>
        </div>

        {/* Category Pills */}
        <div className="filter-container" style={{
          display: 'flex', gap: '0.75rem', marginBottom: '2.5rem',
          justifyContent: 'center', overflowX: 'auto', paddingBottom: '0.5rem'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setCurrentIndex(0); }}
              style={{
                padding: '0.5rem 1.15rem',
                borderRadius: '9999px',
                border: activeCategory === cat ? '1px solid var(--primary)' : '1px solid var(--outline-low)',
                background: activeCategory === cat ? 'var(--primary)' : 'var(--surface-container)',
                color: activeCategory === cat ? 'var(--on-primary)' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontWeight: 700,
                fontSize: '0.85rem',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Active Testimonial Card */}
        <div className="glass-panel" style={{
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          border: '1px solid var(--outline-low)',
          background: 'var(--surface-container)',
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <Quote size={48} color="var(--primary)" style={{ opacity: 0.2, position: 'absolute', top: '2rem', right: '2rem' }} />

          <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1.5rem' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="var(--secondary)" color="var(--secondary)" />
            ))}
          </div>

          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            color: 'var(--text-main)',
            lineHeight: 1.6,
            fontWeight: 500,
            marginBottom: '2rem',
            fontStyle: 'italic'
          }}>
            "{filteredTestimonials[currentIndex]?.quote}"
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', borderTop: '1px solid var(--outline-low)', paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: filteredTestimonials[currentIndex]?.avatarBg,
                color: '#FFFFFF', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                {filteredTestimonials[currentIndex]?.name.charAt(0)}
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, fontFamily: 'Space Grotesk', margin: 0, color: 'var(--text-main)' }}>
                  {filteredTestimonials[currentIndex]?.name}
                </h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {filteredTestimonials[currentIndex]?.role}
                </span>
              </div>
            </div>

            {/* Navigation Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={handlePrev}
                aria-label="Previous recommendation"
                style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  border: '1px solid var(--outline-low)', background: 'var(--surface-high)',
                  color: 'var(--text-main)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s'
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                {currentIndex + 1} / {filteredTestimonials.length}
              </span>
              <button
                onClick={handleNext}
                aria-label="Next recommendation"
                style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  border: '1px solid var(--outline-low)', background: 'var(--surface-high)',
                  color: 'var(--text-main)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s'
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* CTA to LinkedIn */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="https://www.linkedin.com/in/tunguyenn99/details/recommendations/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem' }}
          >
            <Linkedin size={18} color="#0A66C2" /> View Endorsements on LinkedIn <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
