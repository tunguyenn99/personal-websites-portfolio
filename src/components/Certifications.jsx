import React from 'react';
import { Award, ExternalLink, Calendar, Briefcase } from 'lucide-react';
import certs from '../data/certifications.json';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Professional Certifications</h2>
          <div style={{ 
            padding: '0.4rem 1rem', 
            background: 'var(--primary)', 
            color: 'var(--on-primary)', 
            borderRadius: '20px', 
            fontSize: '0.8rem', 
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            boxShadow: '0 0 20px rgba(170, 221, 81, 0.3)'
          }}>
            {certs.length} Verified
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {certs.map((cert, index) => (
            <div 
              key={index}
              className="glass-panel cert-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid var(--outline-low)',
                background: 'rgba(255, 255, 255, 0.02)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '12px', 
                  overflow: 'hidden',
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px',
                  flexShrink: 0,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                }}>
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    fontSize: '1.05rem', 
                    fontWeight: 700, 
                    lineHeight: 1.3, 
                    marginBottom: '0.5rem',
                    color: 'var(--text-main)',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {cert.title}
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600 }}>
                    <Briefcase size={14} /> {cert.organization}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  <Calendar size={14} /> {cert.date}
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ 
                    color: 'var(--secondary)', 
                    textDecoration: 'none', 
                    fontSize: '0.85rem', 
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                  className="cert-link"
                >
                  Verify <ExternalLink size={14} />
                </a>
              </div>

              <style>{`
                .cert-card:hover {
                  background: rgba(255, 255, 255, 0.05) !important;
                  border-color: var(--primary) !important;
                  transform: translateY(-8px) scale(1.02) !important;
                  box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
                }
                .cert-link:hover {
                  color: var(--primary) !important;
                  text-decoration: underline !important;
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
