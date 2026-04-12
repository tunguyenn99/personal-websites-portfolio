import React from 'react';
import { 
  SiPython, SiJavascript, SiPostgresql, SiHtml5, SiCss,
  SiDbt, SiApacheairflow, SiSnowflake, SiDatabricks, 
  SiSupabase, SiDocker, SiKubernetes, SiLinux, SiGithubactions, 
  SiJupyter
} from 'react-icons/si';
import { Database, Terminal, Cloud, BarChart3, Workflow, PieChart } from 'lucide-react';

export default function Techstack() {
  const stack = [
    { 
      category: "Languages & Core", 
      icon: <Terminal size={20} />,
      items: [
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "PostgreSQL / SQL", icon: <SiPostgresql color="#4169E1" /> },
        { name: "Frontend", icon: <><SiHtml5 color="#E34F26" /> <SiCss color="#1572B6" /></> }
      ] 
    },
    { 
      category: "Orchestration & ELT", 
      icon: <Workflow size={20} />,
      items: [
        { name: "dbt", icon: <SiDbt color="#FF694B" /> },
        { name: "Airflow", icon: <SiApacheairflow color="#017CEE" /> },
        { name: "Dagster", icon: <Workflow size={14} color="#4FB194" /> },
        { name: "Mage", icon: <span style={{fontSize: '0.8rem'}}>🧙</span> },
        { name: "Kestra", icon: <span style={{fontSize: '0.8rem'}}>⚡</span> }
      ] 
    },
    { 
      category: "Data Platforms", 
      icon: <Database size={20} />,
      items: [
        { name: "Snowflake", icon: <SiSnowflake color="#29B5E8" /> },
        { name: "Databricks", icon: <SiDatabricks color="#FF3621" /> },
        { name: "Trino", icon: <Database size={14} color="#DD0031" /> },
        { name: "Apache Iceberg", icon: <Database size={14} color="#011B3D" /> },
        { name: "Supabase", icon: <SiSupabase color="#3ECF8E" /> }
      ] 
    },
    { 
      category: "Cloud & DevSecOps", 
      icon: <Cloud size={20} />,
      items: [
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" /> },
        { name: "Linux", icon: <SiLinux color="#FCC624" /> },
        { name: "GitHub Actions", icon: <SiGithubactions color="#2088FF" /> }
      ] 
    },
    { 
      category: "Analytics & ML", 
      icon: <BarChart3 size={20} />,
      items: [
        { name: "Jupyter", icon: <SiJupyter color="#F37626" /> },
        { name: "PowerBI", icon: <BarChart3 size={14} color="#F2C811" /> },
        { name: "Tableau", icon: <PieChart size={14} color="#E97627" /> },
        { name: "Scikit-Learn", icon: <span style={{fontWeight: 800}}>scikit</span> }
      ] 
    }
  ];

  return (
    <section id="techstack" className="section">
      <h2 className="section-title">Techstack Setup</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '2.5rem' 
      }}>
        {stack.map((group, idx) => (
          <div key={idx} className="glass-panel animate-fade-in" style={{ 
            animationDelay: `${idx * 0.1}s`,
            border: '1px solid var(--outline-low)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header Group */}
            <div style={{ 
              display: 'flex', alignItems: 'center', gap: '0.75rem', 
              marginBottom: '2rem', paddingBottom: '0.875rem',
              borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
              <div style={{ color: 'var(--primary)', opacity: 0.8 }}>
                {group.icon}
              </div>
              <h3 style={{ 
                fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--text-main)', margin: 0
              }}>
                {group.category}
              </h3>
            </div>

            {/* Icons Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '1.25rem' 
            }}>
              {group.items.map((tech, tIdx) => (
                <div 
                  key={tIdx} 
                  className="tech-item-hover"
                  style={{ 
                    display: 'flex', alignItems: 'center', gap: '0.625rem',
                    background: 'rgba(255,255,255,0.02)',
                    padding: '0.75rem', borderRadius: '6px',
                    border: '1px solid transparent',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
                    {tech.icon}
                  </div>
                  <span style={{ 
                    fontSize: '0.85rem', fontWeight: 600, 
                    color: 'var(--text-muted)'
                  }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .tech-item-hover:hover {
          background: rgba(170, 221, 81, 0.05) !important;
          border-color: rgba(170, 221, 81, 0.2) !important;
          transform: translateY(-2px);
        }
        .tech-item-hover:hover span {
          color: var(--primary) !important;
        }
      `}</style>
    </section>
  );
}
