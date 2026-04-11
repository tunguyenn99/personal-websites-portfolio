import React, { useState } from 'react';
import { Star, GitFork, ExternalLink, Database } from 'lucide-react';
import projectsData from '../data/projects.json';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Define explicit filter order
  const filterOrder = [
    'All',
    'Analytics Engineering',
    'Data Analytics',
    'Business Intelligence',
    'Self-learning',
    'Community contribution',
    'Other Projects'
  ];

  // Extract all unique tags present in the data to ensure we don't miss any
  const existingTags = new Set();
  projectsData.forEach(proj => {
    proj.tags.forEach(tag => existingTags.add(tag));
  });

  // Combine ordered filters with any extra tags found
  const filters = [
    ...filterOrder.filter(f => f === 'All' || existingTags.has(f)),
    ...Array.from(existingTags).filter(t => !filterOrder.includes(t))
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(proj => proj.tags.includes(activeFilter));

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Highlighted Projects</h2>
      
      {/* Filter UI */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem', justifyContent: 'center' }}>
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              border: `1px solid ${activeFilter === filter ? 'var(--primary)' : 'rgba(255,255,255,0.1)'}`,
              background: activeFilter === filter ? 'rgba(139, 92, 246, 0.2)' : 'rgba(0,0,0,0.2)',
              color: activeFilter === filter ? 'var(--primary)' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontWeight: 500,
              backdropFilter: 'blur(10px)'
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {filteredProjects.map((proj, idx) => (
          <a key={proj.id || idx} href={proj.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="glass-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '1.5rem', transition: 'transform 0.3s', ...proj.stars > 10 ? { border: '1px solid rgba(139, 92, 246, 0.3)' } : {} }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <Database size={24} color="var(--primary)" />
                <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Star size={14} /> {proj.stars || 0}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><GitFork size={14} /> {proj.forks || 0}</span>
                </div>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {proj.title} <ExternalLink size={16} color="var(--primary)" />
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', flex: 1, marginBottom: '1.5rem' }}>
                {proj.description || "Data Engineering and Analytics Project."}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignSelf: 'flex-start' }}>
                {proj.language && proj.language !== 'N/A' && <span className="tag" style={{ background: 'rgba(20, 184, 166, 0.1)', color: 'var(--accent)' }}>{proj.language}</span>}
                {proj.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
