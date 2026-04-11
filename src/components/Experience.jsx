import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Data Engineer / Analytics Specialist",
      company: "Freelance & Open Source",
      period: "2023 - Present",
      description: "Building modern data stack pipelines using technologies like dbt, Trino, Iceberg, Dagster and Snowflake. Designing scalable architectures for deep analytics."
    },
    {
      role: "Founder / Data Contributor",
      company: "Thư viện sách của Xóm",
      period: "2025 - Present",
      description: "Developed and maintained a free and public library platform ensuring efficient data processing and access."
    }
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px', paddingLeft: '1rem', borderLeft: '2px solid var(--primary)' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="glass-panel" style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', left: '-2rem', top: '2rem', width: '20px', height: '20px',
              borderRadius: '50%', background: 'var(--primary)', border: '4px solid var(--bg-darker)',
              transform: 'translateX(-50%)'
            }}></div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Briefcase size={20} color="var(--primary)" /> {exp.role}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
              <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{exp.company}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Calendar size={14} /> {exp.period}</span>
            </div>
            <p style={{ color: 'var(--text-muted)' }}>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
