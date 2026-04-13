import React, { useState } from 'react';
import { Star, GitFork, ExternalLink, Database, Code } from 'lucide-react';
import {
  SiPython, SiPostgresql, SiDbt, SiApacheairflow, SiSnowflake,
  SiDatabricks, SiSupabase, SiApachespark, SiAirbyte, SiSelenium,
  SiGooglecloud, SiGooglebigquery, SiLooker, SiApachesuperset,
  SiMetabase, SiGoogleanalytics, SiJira, SiConfluence, SiFigma,
  SiNotion, SiDbeaver, SiMongodb
} from 'react-icons/si';
import { Download, Layers, Cloud, Workflow, BarChart3, Users, FileText, Terminal, Eye } from 'lucide-react';
import projectsData from '../data/projects.json';

// Priority order for tools display
const toolPriority = [
  // Engineering & Data Processing
  'dbt', 'DBT', 'Airflow', 'Spark', 'Databricks', 'Kestra', 'Dagster', 'Mage', 'Fivetran', 'Airbyte', 'DLT',
  // Databases & Data Platforms
  'Snowflake', 'BigQuery', 'PostgreSQL', 'Apache Iceberg', 'Trino',
  // Cloud & Infrastructure
  'Docker', 'Kubernetes', 'GCP', 'AWS', 'Azure',
  // Languages & Coding
  'Python', 'SQL', 'JavaScript',
  // BI & Visualization
  'Power BI', 'Looker', 'Metabase', 'Superset', 'Tableau'
];

const brightColorMap = {
  'Python': '#FF6B6B',
  'SQL': '#4ECDC4',
  'dbt': '#FF694B',
  'DBT': '#FF694B',
  'Airflow': '#23D9FF',
  'Snowflake': '#29B5E8',
  'PostgreSQL': '#61DAFB',
  'BigQuery': '#5DADE2',
  'Spark': '#FF9D00',
  'Databricks': '#FF3621',
  'GCP': '#5DADE2',
  'Docker': '#2496ED',
  'Kubernetes': '#326CE5',
  'AWS': '#FF9900',
  'Azure': '#5DADE2',
  'Looker': '#5DADE2',
  'Superset': '#00D9FF',
  'Metabase': '#5199FF',
  'Trino': '#4ECDC4',
  'Mage': '#FF00FF',
  'Dagster': '#5DADE2',
  'Kestra': '#FF6B6B',
  'Fivetran': '#FF7B7B',
  'Airbyte': '#6557FF',
  'Power BI': '#FFD700',
  'Tableau': '#FF9D00'
};

// Map tech names to icons and colors
const techIcons = {
  'Python': { icon: <SiPython size={14} />, color: '#3776AB' },
  'SQL': { icon: <SiPostgresql size={14} />, color: '#336791' },
  'dbt': { icon: <SiDbt size={14} />, color: '#FF694B' },
  'DBT': { icon: <SiDbt size={14} />, color: '#FF694B' },
  'Airflow': { icon: <SiApacheairflow size={14} />, color: '#017CEE' },
  'Snowflake': { icon: <SiSnowflake size={14} />, color: '#29B5E8' },
  'PostgreSQL': { icon: <SiPostgresql size={14} />, color: '#336791' },
  'BigQuery': { icon: <SiGooglebigquery size={14} />, color: '#3367D6' },
  'Spark': { icon: <SiApachespark size={14} />, color: '#E25A1C' },
  'Databricks': { icon: <SiDatabricks size={14} />, color: '#FF3621' },
  'GCP': { icon: <SiGooglecloud size={14} />, color: '#4285F4' },
  'Looker': { icon: <SiLooker size={14} />, color: '#4285F4' },
  'Superset': { icon: <SiApachesuperset size={14} />, color: '#00A2D3' },
  'Metabase': { icon: <SiMetabase size={14} />, color: '#509EE3' },
  'MongoDB': { icon: <SiMongodb size={14} />, color: '#13AA52' },
  'Supabase': { icon: <SiSupabase size={14} />, color: '#3ECF8E' },
  'Airbyte': { icon: <SiAirbyte size={14} />, color: '#6557FF' },
  'DLT': { icon: <Download size={14} />, color: '#FF694B' },
  'Fivetran': { icon: <Code size={14} />, color: '#005DFF' },
  'Dagster': { icon: <Workflow size={14} />, color: '#1890FF' },
  'Kestra': { icon: <Workflow size={14} />, color: '#FF6B6B' },
  'Mage': { icon: <Code size={14} />, color: '#9D4EDD' },
  'Docker': { icon: <Code size={14} />, color: '#2496ED' },
  'Kubernetes': { icon: <Layers size={14} />, color: '#326CE5' },
  'AWS': { icon: <Cloud size={14} />, color: '#FF9900' },
  'Azure': { icon: <Cloud size={14} />, color: '#0078D4' },
  'Looker Studio': { icon: <SiLooker size={14} />, color: '#4285F4' },
  'Power BI': { icon: <BarChart3 size={14} />, color: '#F2C811' },
  'Tableau': { icon: <BarChart3 size={14} />, color: '#E8704A' },
  'GA4': { icon: <SiGoogleanalytics size={14} />, color: '#E37400' },
  'SmartLook': { icon: <Eye size={14} />, color: '#FF6B35' },
  'Jira': { icon: <SiJira size={14} />, color: '#0052CC' },
  'Confluence': { icon: <SiConfluence size={14} />, color: '#0052CC' },
  'Figma': { icon: <SiFigma size={14} />, color: '#F24E1E' },
  'VS Code': { icon: <Code size={14} />, color: '#007ACC' },
  'DBeaver': { icon: <SiDbeaver size={14} />, color: '#382923' },
  'Excel': { icon: <FileText size={14} />, color: '#217346' },
  'Notion': { icon: <SiNotion size={14} />, color: '#000000' },
  'Selenium': { icon: <SiSelenium size={14} />, color: '#43B02A' },
  'BeautifulSoup': { icon: <Code size={14} />, color: '#3776AB' },
  'Pandas': { icon: <Code size={14} />, color: '#150458' },
  'Jupyter': { icon: <Code size={14} />, color: '#F37726' },
  'Streamlit': { icon: <Code size={14} />, color: '#FF0000' },
  'FastAPI': { icon: <Code size={14} />, color: '#009688' },
  'Flask': { icon: <Code size={14} />, color: '#000000' },
  'Django': { icon: <Code size={14} />, color: '#092E20' },
  'React': { icon: <Code size={14} />, color: '#61DAFB' },
  'Git': { icon: <Code size={14} />, color: '#F1502F' },
  'GitHub': { icon: <Code size={14} />, color: '#181717' },
  'NumPy': { icon: <Code size={14} />, color: '#013243' },
  'Scikit-learn': { icon: <Code size={14} />, color: '#F7931E' },
  'TensorFlow': { icon: <Code size={14} />, color: '#FF6F00' },
  'PyTorch': { icon: <Code size={14} />, color: '#EE4C2C' },
  'Matplotlib': { icon: <BarChart3 size={14} />, color: '#11557C' },
  'Seaborn': { icon: <BarChart3 size={14} />, color: '#0173B2' },
  'Plotly': { icon: <BarChart3 size={14} />, color: '#636EFA' },
  'Iceberg': { icon: <Layers size={14} />, color: '#0078D4' },
  'Parquet': { icon: <FileText size={14} />, color: '#50E6FF' },
  'Avro': { icon: <FileText size={14} />, color: '#7C3ECC' },
  'Elasticsearch': { icon: <Database size={14} />, color: '#005571' },
  'Redis': { icon: <Database size={14} />, color: '#DC382D' },
  'Kafka': { icon: <Workflow size={14} />, color: '#000000' },
  'MySQL': { icon: <SiPostgresql size={14} />, color: '#00758F' },
  'Oracle': { icon: <Database size={14} />, color: '#F80000' },
  'SQL Server': { icon: <Database size={14} />, color: '#CC2927' },
  'KQL': { icon: <Terminal size={14} />, color: '#0078D4' },
  'MQL': { icon: <Terminal size={14} />, color: '#13AA52' },
  'JQL': { icon: <Terminal size={14} />, color: '#0052CC' }
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Top 10 Starring Projects');

  // Define explicit filter order
  const filterOrder = [
    'Top 10 Starring Projects',
    'Analytics Engineering',
    'Data Analytics',
    'Business Intelligence',
    'Self-learning',
    'Community contribution',
    'Other Projects'
  ];

  // Get all unique tags from the full dataset
  const existingTags = new Set();
  projectsData.forEach(proj => {
    proj.tags.forEach(tag => existingTags.add(tag));
  });

  // Combine ordered filters with any extra tags found
  const filters = [
    ...filterOrder.filter(f => f === 'Top 10 Starring Projects' || existingTags.has(f)),
    ...Array.from(existingTags).filter(t => !filterOrder.includes(t))
  ];

  // Dynamic filtering logic
  const filteredProjects = activeFilter === 'Top 10 Starring Projects'
    ? [...projectsData].sort((a, b) => (b.stars || 0) - (a.stars || 0)).slice(0, 10)
    : projectsData.filter(proj => proj.tags.includes(activeFilter));

  return (
    <section id="projects" className="section">
      <div className="container">
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

        <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {filteredProjects.map((proj, idx) => (
          <a key={proj.id || idx} href={proj.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="glass-panel equal-panel" style={{ height: '100%', transition: 'transform 0.3s', border: '1px solid var(--outline-low)' }}>
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

              {/* Techstack section */}
              {proj.techstack && proj.techstack.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
                    {
                      (() => {
                        // Deduplicate and sort by priority
                        const uniqueTech = [...new Set(proj.techstack)];
                        const sorted = uniqueTech.sort((a, b) => {
                          const priorityA = toolPriority.indexOf(a);
                          const priorityB = toolPriority.indexOf(b);
                          if (priorityA === -1 && priorityB === -1) return 0;
                          if (priorityA === -1) return 1;
                          if (priorityB === -1) return -1;
                          return priorityA - priorityB;
                        });
                        
                        // Show top 3, count rest
                        const topThree = sorted.slice(0, 3);
                        const remaining = sorted.length - 3;
                        
                        return (
                          <>
                            {topThree.map(tech => {
                              const techData = techIcons[tech];
                              const color = brightColorMap[tech] || techData?.color || '#8B5CF6';
                              if (!techData) return null;
                              return (
                                <span key={tech} style={{
                                  background: `${color}20`,
                                  color: color,
                                  border: `1px solid ${color}60`,
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.3rem',
                                  padding: '0.3rem 0.5rem',
                                  fontSize: '0.7rem',
                                  fontWeight: 600,
                                  borderRadius: '4px',
                                  boxShadow: `0 0 8px ${color}30`
                                }}>
                                  <span style={{ display: 'flex', alignItems: 'center', color: color }}>
                                    {techData.icon}
                                  </span>
                                  <span>{tech}</span>
                                </span>
                              );
                            })}
                            {remaining > 0 && (
                              <span style={{
                                background: 'rgba(139, 92, 246, 0.15)',
                                color: 'rgba(139, 92, 246, 0.8)',
                                border: '1px solid rgba(139, 92, 246, 0.4)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0.3rem 0.5rem',
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                borderRadius: '4px'
                              }}>
                                +{remaining}
                              </span>
                            )}
                          </>
                        );
                      })()
                    }
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
