import React from 'react';
import { Layers, Database, Code, Shield } from 'lucide-react';

export default function Techstack() {
  const stack = [
    { category: "Languages & Core", items: ["Python", "JavaScript", "SQL", "HTML/CSS"] },
    { category: "Orchestration & ELT", items: ["dbt", "Airflow", "Dagster", "Mage", "dlthub", "Kestra"] },
    { category: "Data Platforms", items: ["Snowflake", "Databricks", "Trino", "Minio", "Apache Iceberg", "Supabase"] },
    { category: "Cloud & DevSecOps", items: ["Docker", "Kubernetes", "Linux (Ubuntu)", "GitHub Actions"] },
    { category: "Analytics & ML", items: ["Jupyter Notebooks", "Machine Learning", "PBI"] }
  ];

  return (
    <section id="techstack" className="section">
      <h2 className="section-title">Techstack Setup</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {stack.map((group, idx) => (
          <div key={idx} className="glass-panel animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-main)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
              {group.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {group.items.map((tech, tIdx) => (
                <span key={tIdx} className="tag" style={{ background: 'rgba(20, 184, 166, 0.1)', color: 'var(--accent)', borderColor: 'rgba(20, 184, 166, 0.2)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
