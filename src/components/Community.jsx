import React from 'react';
import { Users, BookOpen, Heart } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="section">
      <h2 className="section-title">My Community</h2>
      <div className="glass-panel" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <Heart size={32} /> Thư Viện Của Xóm
          </h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            A project dedicated to bringing free and accessible reading materials and data resources to my local community. Our public library handles books, open-source data sets, and connects passionate learners. 
            Currently starring <strong>180+</strong> stars on GitHub with dozens of community forks!
          </p>
          <a href="https://github.com/tunguyenn99/thu_vien_cua_xom_data" target="_blank" rel="noreferrer" className="btn-secondary">View The Library</a>
        </div>
        
        <div style={{ flex: '1 1 300px', display: 'grid', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(30, 41, 59, 0.4)' }}>
             <Users size={24} color="var(--accent)" style={{ marginBottom: '1rem' }} />
             <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Open Source Advocate</h4>
             <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Constantly pushing boundaries and sharing data patterns from Snowflake, Airflow, and Databricks workflows.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(30, 41, 59, 0.4)' }}>
             <BookOpen size={24} color="var(--primary)" style={{ marginBottom: '1rem' }} />
             <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Continuous Learner</h4>
             <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Sharing documentation (like Kimball dimensional modeling) making concepts accessible in Vietnamese.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
