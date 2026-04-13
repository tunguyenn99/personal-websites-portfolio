import React, { useState } from 'react';
import { Star, GitFork, ExternalLink, Database, FileText, Calendar, Code2, Cloud, BarChart3, Workflow, Download, Layers } from 'lucide-react';
import {
  SiPython, SiPostgresql, SiDbt, SiApacheairflow, SiSnowflake,
  SiDatabricks, SiSupabase, SiApachespark, SiAirbyte, SiSelenium,
  SiGooglecloud, SiGooglebigquery, SiLooker, SiApachesuperset,
  SiMetabase, SiGoogleanalytics, SiJira, SiConfluence, SiFigma,
  SiNotion, SiDbeaver, SiMongodb, SiDocker, SiKubernetes
} from 'react-icons/si';
import reposData from '../../repos_analysis.json';

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

// Tech icon mapping
const techIcons = {
  'Python': <SiPython size={14} color="#3776AB" />,
  'SQL': <SiPostgresql size={14} color="#336791" />,
  'dbt': <SiDbt size={14} color="#FF694B" />,
  'Airflow': <SiApacheairflow size={14} color="#017CEE" />,
  'Snowflake': <SiSnowflake size={14} color="#29B5E8" />,
  'BigQuery': <SiGooglebigquery size={14} color="#3367D6" />,
  'PostgreSQL': <SiPostgresql size={14} color="#336791" />,
  'Spark': <SiApachespark size={14} color="#E25A1C" />,
  'Databricks': <SiDatabricks size={14} color="#FF3621" />,
  'GCP': <SiGooglecloud size={14} color="#4285F4" />,
  'Looker': <SiLooker size={14} color="#4285F4" />,
  'Superset': <SiApachesuperset size={14} color="#00A2D3" />,
  'Metabase': <SiMetabase size={14} color="#509EE3" />,
  'MongoDB': <SiMongodb size={14} color="#13AA52" />,
  'Supabase': <SiSupabase size={14} color="#3ECF8E" />,
  'Airbyte': <SiAirbyte size={14} color="#6557FF" />,
  'Docker': <SiDocker size={14} color="#2496ED" />,
  'Kubernetes': <SiKubernetes size={14} color="#326CE5" />,
  'AWS': <Cloud size={14} color="#FF9900" />,
  'Azure': <Cloud size={14} color="#0078D4" />,
  'GitHub Actions': <Code2 size={14} color="#2088F0" />,
  'Selenium': <SiSelenium size={14} color="#43B02A" />,
  'BeautifulSoup': <Code2 size={14} color="#3776AB" />,
  'Requests': <Download size={14} color="#FFE135" />,
  'Trino': <Database size={14} color="#4ECDC4" />,
  'DLT': <Download size={14} color="#FF694B" />,
  'Fivetran': <Code2 size={14} color="#005DFF" />,
  'Dagster': <Workflow size={14} color="#1890FF" />,
  'Kestra': <Workflow size={14} color="#FF6B6B" />,
  'Mage': <Code2 size={14} color="#9D4EDD" />,
  'Power BI': <BarChart3 size={14} color="#F2C811" />,
  'Tableau': <BarChart3 size={14} color="#E8704A" />,
  'Excel': <FileText size={14} color="#217346" />,
  'Git': <Code2 size={14} color="#F1502F" />,
  'GitHub': <Code2 size={14} color="#181717" />,
  'Jupyter': <Code2 size={14} color="#F37726" />,
  'Pandas': <Code2 size={14} color="#130654" />,
  'NumPy': <Code2 size={14} color="#013243" />,
  'Matplotlib': <BarChart3 size={14} color="#01A4D6" />,
  'Seaborn': <BarChart3 size={14} color="#0173B2" />,
  'Plotly': <BarChart3 size={14} color="#636EFA" />,
  'Jira': <SiJira size={14} color="#0052CC" />,
  'Confluence': <SiConfluence size={14} color="#0052CC" />,
  'Figma': <SiFigma size={14} color="#F24E1E" />,
  'Notion': <SiNotion size={14} color="#000000" />,
  'DBeaver': <SiDbeaver size={14} color="#382923" />
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Top 10 Starring Projects');

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
    ? [...reposData].sort((a, b) => (b.stars || 0) - (a.stars || 0)).slice(0, 9)
    : reposData.filter(repo => repo.topics.includes(activeFilter)).slice(0, 9);

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

        <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {filteredProjects.map((repo, idx) => (
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

                {/* Language and README info */}
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap', fontSize: '0.75rem' }}>
                  {repo.language !== 'N/A' && (
                    <span style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      color: 'var(--primary)',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(139, 92, 246, 0.3)'
                    }}>
                      🔧 {repo.language}
                    </span>
                  )}
                  {repo.has_readme && (
                    <span style={{
                      background: 'rgba(76, 205, 196, 0.1)',
                      color: '#4ECDC4',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(76, 205, 196, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      <FileText size={12} /> {repo.readme_lines}L
                    </span>
                  )}
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: 'var(--text-muted)'
                  }}>
                    <Calendar size={12} /> {repo.updated_at}
                  </span>
                </div>

                {/* Tags/Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                    {repo.topics.map(topic => {
                      const color = topicColors[topic] || '#8B5CF6';
                      return (
                        <span key={topic} style={{
                          background: `${color}20`,
                          color: color,
                          border: `1px solid ${color}40`,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          padding: '0.3rem 0.5rem',
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          borderRadius: '4px',
                          boxShadow: `0 0 8px ${color}20`
                        }}>
                          {formatTopic(topic)}
                        </span>
                      );
                    })}
                  </div>
                )}

                {/* Tech Stack */}
                {repo.techstack && repo.techstack.length > 0 && (
                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                      <Code2 size={12} /> TECH STACK
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {sortTechStack(repo.techstack).slice(0, 3).map(tech => {
                        const color = techColors[tech] || '#8B5CF6';
                        const icon = techIcons[tech];
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
                            {icon && <span style={{ display: 'flex', alignItems: 'center', lineHeight: 1 }}>{icon}</span>}
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
      </div>
    </section>
  );
}
