import { SiGithub as Github, SiFacebook as Facebook } from 'react-icons/si';
import { FaLinkedin as Linkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ paddingBottom: '10rem' }}>
      <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(180deg, rgba(30,41,59,0.7) 0%, rgba(170,221,81,0.05) 100%)' }}>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Let's Connect</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          I'm always open to discussing new data pipelines, system designs, open-source projects, or potential opportunities. 
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <a href="https://linkedin.com/in/tunguyendata" target="_blank" rel="noreferrer" className="glass-panel" style={{ textDecoration: 'none', minWidth: '220px', padding: '1.5rem', border: '1px solid rgba(123, 208, 255, 0.2)' }}>
            <Linkedin size={32} color="var(--secondary)" style={{ margin: '0 auto 1rem auto' }} />
            <h4 style={{ color: 'var(--text-main)', marginBottom: '0.25rem' }}>LinkedIn</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Professional Network</p>
          </a>

          <a href="https://github.com/tunguyenn99" target="_blank" rel="noreferrer" className="glass-panel" style={{ textDecoration: 'none', minWidth: '220px', padding: '1.5rem', border: '1px solid rgba(170, 221, 81, 0.2)' }}>
            <Github size={32} color="var(--primary)" style={{ margin: '0 auto 1rem auto' }} />
            <h4 style={{ color: 'var(--text-main)', marginBottom: '0.25rem' }}>GitHub</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Discovery & Code</p>
          </a>

          <a href="https://www.facebook.com/groups/xomdata" target="_blank" rel="noreferrer" className="glass-panel" style={{ textDecoration: 'none', minWidth: '220px', padding: '1.5rem', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
            <Facebook size={32} color="#1877F2" style={{ margin: '0 auto 1rem auto' }} />
            <h4 style={{ color: 'var(--text-main)', marginBottom: '0.25rem' }}>Xóm Data</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Join the Community</p>
          </a>
        </div>
      </div>
    </section>
  );
}
