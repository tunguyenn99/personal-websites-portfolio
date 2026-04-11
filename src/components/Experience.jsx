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
      <div className="container">
        <h2 className="section-title">Professional Path</h2>
        <div style={{ display: 'grid', gap: '3rem', maxWidth: '900px', position: 'relative' }}>
          {/* Vertical Timeline Line */}
          <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '1px', background: 'linear-gradient(180deg, var(--primary) 0%, transparent 100%)', opacity: 0.3 }}></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="animate-fade-in" style={{ paddingLeft: '2.5rem', position: 'relative', animationDelay: `${index * 0.2}s` }}>
              <div style={{
                position: 'absolute', left: '-4.5px', top: '0.5rem', width: '10px', height: '10px',
                borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)'
              }}></div>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: 'Space Grotesk' }}>{exp.role}</h3>
                  <span className="tag" style={{fontSize: '0.7rem'}}>{exp.period}</span>
                </div>
                <div style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {exp.company}
                </div>
              </div>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', lineHeight: 1.7 }}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
