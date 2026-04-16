import React, { useState, useMemo, useEffect } from 'react';
import { Star, GitFork, ExternalLink, Database, FileText, Calendar, Code2, Cloud, BarChart3, Workflow, Download, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  SiPython, SiPostgresql, SiDbt, SiApacheairflow, SiSnowflake,
  SiDatabricks, SiSupabase, SiApachespark, SiAirbyte, SiSelenium,
  SiGooglecloud, SiGooglebigquery, SiLooker, SiApachesuperset,
  SiMetabase, SiGoogleanalytics, SiJira, SiConfluence, SiFigma,
  SiNotion, SiDbeaver, SiMongodb, SiDocker, SiKubernetes
} from 'react-icons/si';
import reposData from '../../repos_analysis.json';
import { techStackData } from './Techstack';

// Convert kebab-case to Title Case
const formatTopic = (topic) => {
  return topic
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Get all unique topics from the full dataset
const getAllTopics = () => {
  const topicsSet = new Set();
  reposData.forEach(repo => {
    repo.topics.forEach(topic => topicsSet.add(topic));
  });
  return Array.from(topicsSet).sort();
};

const topicPriority = [
  'analytics-engineer',
  'data-analytics',
  'business-intelligence',
  'self-learning',
  'community-contribution',
  'profile-portfolio'
];

const topicColors = {
  'analytics-engineer': '#FF694B',
  'data-analytics': '#4ECDC4',
  'business-intelligence': '#FFD700',
  'self-learning': '#6C63FF',
  'community-contribution': '#00FF00',
  'profile-portfolio': '#FF6B9D'
};

// Tech stack priority and colors
const techPriority = [
  'dbt', 'Airflow', 'Spark', 'Databricks', 'Kestra', 'Dagster', 'Mage', 
  'Snowflake', 'BigQuery', 'PostgreSQL', 'Trino', 'MongoDB', 'Supabase',
  'Docker', 'Kubernetes', 'GCP', 'AWS', 'Azure', 'GitHub Actions',
  'Python', 'SQL', 'JavaScript', 'Requests', 'BeautifulSoup', 'Selenium'
];

const techColors = {
  'dbt': '#FF694B',
  'Airflow': '#23D9FF',
  'Spark': '#FF9D00',
  'Databricks': '#FF3621',
  'Kestra': '#FF6B6B',
  'Dagster': '#1890FF',
  'Mage': '#9D4EDD',
  'Snowflake': '#29B5E8',
  'BigQuery': '#5DADE2',
  'PostgreSQL': '#61DAFB',
  'Trino': '#4ECDC4',
  'MongoDB': '#00ED64',
  'Supabase': '#3ECF8E',
  'Docker': '#2496ED',
  'Kubernetes': '#326CE5',
  'AWS': '#FF9900',
  'GCP': '#4285F4',
  'Azure': '#0078D4',
  'GitHub Actions': '#2088F0',
  'Python': '#3776AB',
  'SQL': '#4ECDC4',
  'JavaScript': '#F1E05A',
  'BeautifulSoup': '#3776AB',
  'Requests': '#FFE135',
  'Selenium': '#00FF00',
  'Pandas': '#130654',
  'NumPy': '#013243',
  'Matplotlib': '#01A4D6',
  'Seaborn': '#0173B2',
  'Plotly': '#636EFA',
  'Git': '#F1502F',
  'GitHub': '#181717',
  'Jupyter': '#F37726',
  'Streamlit': '#FF0000'
};

// Flatten the centralized techstack icons
const centralizedTechIcons = {};
techStackData.forEach(group => {
  group.items.forEach(item => {
    centralizedTechIcons[item.name] = item.icon;
    // Map alternative names used in reposData
    if (item.name === 'Apache Spark') centralizedTechIcons['Spark'] = item.icon;
    if (item.name === 'Looker Studio') centralizedTechIcons['Looker'] = item.icon;
    if (item.name === 'GA4 / Analytics') centralizedTechIcons['Google Analytics'] = item.icon;
    if (item.name === 'VS Code') centralizedTechIcons['Visual Studio'] = item.icon;
  });
});

// Tech icon fallback mapping (for technologies not present in Techstack.jsx)
const fallbackTechIcons = {
  'Docker': <SiDocker size={14} color="#2496ED" />,
  'Kubernetes': <SiKubernetes size={14} color="#326CE5" />,
  'GitHub Actions': <Code2 size={14} color="#2088F0" />,
  'Requests': <Download size={14} color="#FFE135" />,
  'Trino': <Database size={14} color="#4ECDC4" />,
  'Git': <Code2 size={14} color="#F1502F" />,
  'GitHub': <Code2 size={14} color="#181717" />,
  'Jupyter': <Code2 size={14} color="#F37726" />,
  'Pandas': <Code2 size={14} color="#130654" />,
  'NumPy': <Code2 size={14} color="#013243" />,
  'Matplotlib': <BarChart3 size={14} color="#01A4D6" />,
  'Seaborn': <BarChart3 size={14} color="#0173B2" />,
  'Plotly': <BarChart3 size={14} color="#636EFA" />
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Top 10 Starring Projects');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Get all unique topics
  const allTopics = getAllTopics();
  
  // Create filter list
  const filters = [
    'Top 10 Starring Projects',
    ...allTopics.sort((a, b) => {
      const priorityA = topicPriority.indexOf(a);
      const priorityB = topicPriority.indexOf(b);
      if (priorityA === -1 && priorityB === -1) return 0;
      if (priorityA === -1) return 1;
      if (priorityB === -1) return -1;
      return priorityA - priorityB;
    })
  ];

  // Dynamic filtering logic
  const filteredProjects = activeFilter === 'Top 10 Starring Projects'
    ? [...reposData].sort((a, b) => (b.stars || 0) - (a.stars || 0))
    : reposData.filter(repo => repo.topics.includes(activeFilter));

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getPageItems = (total, current) => {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const delta = 1;
    const range = [];
    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
        range.push(i);
      }
    }
    const rangeWithDots = [];
    let l;
    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l > 2) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }
    return rangeWithDots;
  };

  // Sort tech stack by priority
  const sortTechStack = (techs) => {
    return [...techs].sort((a, b) => {
      const priorityA = techPriority.indexOf(a);
      const priorityB = techPriority.indexOf(b);
      if (priorityA === -1 && priorityB === -1) return 0;
      if (priorityA === -1) return 1;
      if (priorityB === -1) return -1;
      return priorityA - priorityB;
    });
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Highlighted Projects</h2>
        
        {/* Filter UI */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem', justifyContent: 'center' }}>
          {filters.map(filter => {
            const isTopGenres = filter === 'Top 10 Starring Projects';
            const color = topicColors[filter] || '#8B5CF6';
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  border: `1px solid ${activeFilter === filter ? color : 'rgba(255,255,255,0.1)'}`,
                  background: activeFilter === filter ? `${color}20` : 'rgba(0,0,0,0.2)',
                  color: activeFilter === filter ? color : 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontWeight: 500,
                  backdropFilter: 'blur(10px)'
                }}
              >
                {isTopGenres ? filter : formatTopic(filter)}
              </button>
            );
          })}
        </div>

        <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem', justifyContent: 'center' }}>
          {paginatedProjects.map((repo, idx) => (
            <a key={repo.name || idx} href={repo.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="glass-panel equal-panel" style={{ height: '100%', transition: 'transform 0.3s', border: '1px solid var(--outline-low)', display: 'flex', flexDirection: 'column' }}>
                {/* Header with stars and forks */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <Database size={24} color="var(--primary)" />
                  <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Star size={14} /> {repo.stars || 0}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><GitFork size={14} /> {repo.forks || 0}</span>
                  </div>
                </div>

                {/* Title and external link */}
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', wordBreak: 'break-word' }}>
                  {repo.name} <ExternalLink size={16} color="var(--primary)" />
                </h3>

                {/* Description */}
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  {repo.description !== 'N/A' ? repo.description : 'Data project by tunguyenn99'}
                </p>



                {/* Tech Stack */}
                {repo.techstack && repo.techstack.length > 0 && (
                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                      <Code2 size={12} /> TECH STACK
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {sortTechStack(repo.techstack).slice(0, 3).map(tech => {
                        const color = techColors[tech] || '#8B5CF6';
                        const rawIcon = centralizedTechIcons[tech] || fallbackTechIcons[tech];
                        const icon = rawIcon ? React.cloneElement(rawIcon, { size: 14 }) : null;
                        
                        return (
                          <span key={tech} style={{
                            background: `${color}20`,
                            color: color,
                            border: `1px solid ${color}50`,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            padding: '0.35rem 0.6rem',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            borderRadius: '4px',
                            boxShadow: `0 0 6px ${color}25`,
                            whiteSpace: 'nowrap'
                          }}>
                            {icon && <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}>{icon}</span>}
                            {tech}
                          </span>
                        );
                      })}
                      {repo.techstack.length > 3 && (
                        <span style={{
                          background: 'rgba(139, 92, 246, 0.15)',
                          color: 'rgba(139, 92, 246, 0.9)',
                          border: '1px solid rgba(139, 92, 246, 0.4)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '0.35rem 0.6rem',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          borderRadius: '4px',
                          cursor: 'pointer',
                          transition: 'all 0.3s'
                        }}>
                          +{repo.techstack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div style={{
            marginTop: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--outline-low)',
                color: 'var(--text-main)',
                padding: '0.75rem',
                borderRadius: '12px',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                opacity: currentPage === 1 ? 0.3 : 1
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {getPageItems(totalPages, currentPage).map((item, idx) => {
                if (item === '...') {
                  return (
                    <div key={`dots-${idx}`} style={{ width: '36px', textAlign: 'center', color: 'var(--text-muted)' }}>...</div>
                  );
                }
                const pageNumber = item;
                const isActive = currentPage === pageNumber;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    aria-label={`Go to page ${pageNumber}`}
                    style={{
                      minWidth: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      border: '1px solid',
                      borderColor: isActive ? 'var(--primary)' : 'var(--outline-low)',
                      background: isActive ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                      color: isActive ? 'var(--on-primary)' : 'var(--text-main)',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--outline-low)',
                color: 'var(--text-main)',
                padding: '0.75rem',
                borderRadius: '12px',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                opacity: currentPage === totalPages ? 0.3 : 1
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
