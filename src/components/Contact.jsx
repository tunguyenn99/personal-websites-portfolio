import { SiGithub as Github, SiFacebook as Facebook } from 'react-icons/si';
import { FaLinkedin as Linkedin } from 'react-icons/fa';
import { Mail, Sparkles, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Contact() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="contact" className="section" style={{ paddingBottom: '6rem' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Let's Connect</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
          I'm always open to discussing new data pipelines, system designs, open-source projects, or potential opportunities. 
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}
        >
          <motion.a 
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={triggerConfetti}
            href="https://linkedin.com/in/tunguyendata" 
            target="_blank" 
            rel="noreferrer" 
            className="glass-panel" 
            style={{ textDecoration: 'none', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          >
            <Coffee size={36} color="#FF9900" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.35rem', fontFamily: 'Space Grotesk' }}>Coffee Chat</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Book 15-min Session</p>
          </motion.a>

          <motion.a 
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={triggerConfetti}
            href="https://linkedin.com/in/tunguyendata" 
            target="_blank" 
            rel="noreferrer" 
            className="glass-panel" 
            style={{ textDecoration: 'none', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          >
            <Linkedin size={36} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.35rem', fontFamily: 'Space Grotesk' }}>LinkedIn</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Professional Network</p>
          </motion.a>

          <motion.a 
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={triggerConfetti}
            href="https://github.com/tunguyenn99" 
            target="_blank" 
            rel="noreferrer" 
            className="glass-panel" 
            style={{ textDecoration: 'none', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          >
            <Github size={36} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.35rem', fontFamily: 'Space Grotesk' }}>GitHub</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Discovery & Code</p>
          </motion.a>

          <motion.a 
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={triggerConfetti}
            href="https://www.facebook.com/groups/xomdata" 
            target="_blank" 
            rel="noreferrer" 
            className="glass-panel" 
            style={{ textDecoration: 'none', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          >
            <Facebook size={36} color="#1877F2" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.35rem', fontFamily: 'Space Grotesk' }}>Xóm Data</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Join the Community</p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


