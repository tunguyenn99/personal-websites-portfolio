import React, { useState, useMemo } from 'react';
import { Star, GitFork, ExternalLink, Database, FileText, Calendar, Code2, Cloud, BarChart3, Workflow, Download, Layers, ChevronLeft, ChevronRight, Filter, ChevronDown, Check } from 'lucide-react';
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
  if (Array.isArray(reposData)) {
    reposData.forEach(repo => {
      if (repo && Array.isArray(repo.topics)) {
        repo.topics.forEach(topic => {
          if (topic) topicsSet.add(topic);
        });
      }
    });
  }
  return Array.from(topicsSet).sort();
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Get all unique topics
  const allTopics = getAllTopics();
  const filters = ['Top 10 Starring Projects', ...allTopics];

  // Dynamic filtering logic
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Top 10 Starring Projects') {
      return [...reposData]
        .sort((a, b) => (b.stars || b.stargazers_count || 0) - (a.stars || a.stargazers_count || 0))
        .slice(0, 10);
    }
    return reposData.filter(repo => 
      repo && Array.isArray(repo.topics) && repo.topics.includes(activeFilter)
    );
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, currentPage, itemsPerPage]);

  const selectFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    if (!techs || !Array.isArray(techs)) return [];
    return [...techs].sort((a, b) => {
      const priorityA = typeof techPriority !== 'undefined' ? techPriority.indexOf(a) : -1;
      const priorityB = typeof techPriority !== 'undefined' ? techPriority.indexOf(b) : -1;
      if (priorityA === -1 && priorityB === -1) return 0;
      if (priorityA === -1) return 1;
      if (priorityB === -1) return -1;
      return priorityA - priorityB;
    });
  };

  const getTopicIcon = (filter, color) => {
    if (filter === 'Top 10 Starring Projects') return <Star size={16} color={color} />;
    if (filter.includes('analytics-engineer') || filter.includes('analytics-engineering')) return <Workflow size={16} color={color} />;
    if (filter.includes('data-engineering')) return <Database size={16} color={color} />;
    if (filter.includes('bi') || filter.includes('analytics') || filter.includes('intelligence')) return <BarChart3 size={16} color={color} />;
    if (filter.includes('learning')) return <Code2 size={16} color={color} />;
    if (filter.includes('community')) return <Layers size={16} color={color} />;
    if (filter.includes('portfolio') || filter.includes('profile')) return <FileText size={16} color={color} />;
    return <Filter size={16} color={color} />;
  };

  const getFilterCount = (filter) => {
    if (filter === 'Top 10 Starring Projects') {
      return Math.min(reposData.length, 10);
    }
    return reposData.filter(repo => repo && Array.isArray(repo.topics) && repo.topics.includes(filter)).length;
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Highlighted Projects</h2>
        
        {/* Desktop Filter Pills (>= 769px) */}
        <div className="filter-container desktop-filter-pills" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '2.5rem',
          padding: '0.4rem',
          background: 'var(--surface-container)',
          borderRadius: '9999px',
          border: '1px solid var(--outline-low)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none'
        }}>
          {filters.map(filter => {
            const isTopGenres = filter === 'Top 10 Starring Projects';
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                className={`filter-pill ${isActive ? 'filter-pill-active' : ''}`}
                onClick={() => selectFilter(filter)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.15rem',
                  borderRadius: '9999px',
                  border: isActive ? '1px solid rgba(0, 210, 127, 0.5)' : '1px solid transparent',
                  background: isActive ? 'rgba(0, 210, 127, 0.15)' : 'transparent',
                  color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  fontWeight: isActive ? 800 : 600,
                  fontSize: '0.875rem',
                  fontFamily: 'Space Grotesk, sans-serif',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 0 20px rgba(0, 210, 127, 0.2)' : 'none',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                {isTopGenres ? filter : formatTopic(filter)}
              </button>
            );
          })}
        </div>

        {/* Custom Mobile Glass Dropdown (< 769px) - Unified Emerald Theme */}
        <div className="mobile-filter-dropdown-container" style={{ position: 'relative', marginBottom: '2rem' }}>
          <div className="filter-trigger"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--surface-container)',
              border: '1.5px solid rgba(0, 210, 127, 0.4)',
              borderRadius: '16px',
              padding: '0.85rem 1.25rem',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(0, 210, 127, 0.1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ color: 'var(--primary)', display: 'flex' }}>{getTopicIcon(activeFilter, 'var(--primary)')}</span>
              <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)', fontFamily: 'Space Grotesk' }}>
                {activeFilter === 'Top 10 Starring Projects' ? activeFilter : formatTopic(activeFilter)}
              </span>
              <span style={{
                fontSize: '0.75rem',
                padding: '0.2rem 0.6rem',
                borderRadius: '9999px',
                background: 'rgba(0, 210, 127, 0.15)',
                color: 'var(--primary)',
                fontWeight: 800
              }}>
                {getFilterCount(activeFilter)}
              </span>
            </div>
            <ChevronDown 
              size={20} 
              color="var(--primary)" 
              style={{ 
                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }} 
            />
          </div>

          {/* Floating Dropdown Menu Options */}
          {isDropdownOpen && (
            <div 
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: 0,
                right: 0,
                zIndex: 100,
                maxHeight: '320px',
                overflowY: 'auto',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                padding: '0.5rem',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                animation: 'dropdownFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {filters.map((filter) => {
                const isTopGenres = filter === 'Top 10 Starring Projects';
                const isActive = activeFilter === filter;
                const count = getFilterCount(filter);
                return (
                  <div
                    key={filter}
                    className={isActive ? 'filter-option-active' : ''}
                    onClick={() => {
                      selectFilter(filter);
                      setIsDropdownOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: isActive ? 'rgba(0, 210, 127, 0.15)' : 'transparent',
                      border: isActive ? '1px solid rgba(0, 210, 127, 0.35)' : '1px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ color: isActive ? 'var(--primary)' : 'var(--text-muted)', display: 'flex' }}>
                        {getTopicIcon(filter, isActive ? 'var(--primary)' : 'var(--text-muted)')}
                      </span>
                      <span style={{ 
                        fontWeight: isActive ? 800 : 600, 
                        color: isActive ? 'var(--primary)' : 'var(--text-main)',
                        fontSize: '0.9rem',
                        fontFamily: 'Space Grotesk'
                      }}>
                        {isTopGenres ? filter : formatTopic(filter)}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span className="filter-count" style={{
                        fontSize: '0.7rem',
                        padding: '0.15rem 0.55rem',
                        borderRadius: '9999px',
                        background: isActive ? 'var(--primary)' : 'var(--surface-low)',
                        color: isActive ? 'var(--on-primary)' : 'var(--text-muted)',
                        fontWeight: 800
                      }}>
                        {count}
                      </span>
                      {isActive && <Check size={16} color="var(--primary)" />}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>


        <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '2.5rem', justifyContent: 'center' }}>
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
                        const icon = React.isValidElement(rawIcon) ? React.cloneElement(rawIcon, { size: 14 }) : null;
                        
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
                background: 'var(--surface-container)',
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
                      background: isActive ? 'var(--accent-gradient)' : 'var(--surface-container)',
                      color: isActive ? 'var(--on-accent-gradient)' : 'var(--text-main)',
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
                background: 'var(--surface-container)',
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

      <style>{`
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .desktop-filter-pills {
            display: none !important;
          }
          .mobile-filter-dropdown-container {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .desktop-filter-pills {
            display: flex !important;
          }
          .mobile-filter-dropdown-container {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
