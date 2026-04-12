import React from 'react';
import { Users, BookOpen, Heart, ExternalLink } from 'lucide-react';
import { SiFacebook, SiGithub } from 'react-icons/si';
import communityImg from '../assets/community/xom_data_fb.png';

export default function Community() {
  return (
    <section id="community" className="section">
      <h2 className="section-title">Community Impact</h2>
      
      <div className="glass-panel" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '3rem', 
        alignItems: 'center',
        padding: '2.5rem'
      }}>
        {/* Content Side */}
        <div className="animate-fade-in">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
            <Users size={20} />
            <span style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Community Building</span>
          </div>
          
          <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'Space Grotesk', fontWeight: 700 }}>
            Xóm Data <span style={{ color: 'var(--secondary)' }}>Community</span>
          </h3>
          
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
            Co-founding and managing the most vibrant data ecosystem in Vietnam. Empowering **20,000+** members through knowledge sharing, professional networking, and high-quality educational resources.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ padding: '0.5rem', background: 'rgba(24, 119, 242, 0.1)', borderRadius: '8px', color: '#1877F2' }}>
                <SiFacebook size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Facebook Group</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Daily discussions, hiring, and domain expert sharing.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ padding: '0.5rem', background: 'rgba(170, 221, 81, 0.1)', borderRadius: '8px', color: 'var(--primary)' }}>
                <Heart size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Thư Viện Của Xóm</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Open-source library with **180+ stars** on GitHub.</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://www.facebook.com/groups/xomdata" target="_blank" rel="noreferrer" className="btn-primary">
              Join Group <ExternalLink size={16} />
            </a>
            <a href="https://github.com/tunguyenn99/thu_vien_cua_xom_data" target="_blank" rel="noreferrer" className="btn-secondary">
              <SiGithub size={18} /> Visit Github
            </a>
          </div>
        </div>

        {/* Image / Visual Side */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s', position: 'relative' }}>
          <div style={{ 
            position: 'absolute', top: '-10%', left: '-5%', width: '110%', height: '110%',
            background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
            opacity: 0.05, zIndex: 0
          }} />
          <div style={{ 
            borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--outline-low)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)', position: 'relative', zIndex: 1
          }}>
            <img 
              src={communityImg} 
              alt="Xóm Data Facebook Community" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
