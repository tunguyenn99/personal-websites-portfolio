import React, { useState } from 'react';
import {
  Database, Terminal, Cloud, BarChart3, Workflow,
  PieChart, Code, Download, Layers, ShieldCheck,
  Eye, FileText, Layout, Users, ArrowRight, Activity, CheckCircle2,
  Grid, GitBranch, ArrowUpRight
} from 'lucide-react';
import {
  SiPython, SiPostgresql, SiDbt, SiApacheairflow, SiSnowflake,
  SiDatabricks, SiSupabase, SiApachespark, SiAirbyte, SiSelenium,
  SiGooglecloud, SiGooglebigquery, SiLooker, SiApachesuperset,
  SiMetabase, SiGoogleanalytics, SiJira, SiConfluence, SiFigma,
  SiNotion, SiDbeaver, SiMongodb
} from 'react-icons/si';

export default function ArchitectureFlow() {
  const [selectedStage, setSelectedStage] = useState(null);
  const [viewMode, setViewMode] = useState('pipeline'); // 'pipeline' | 'matrix'

  // Stage-by-stage pipeline flow (6 stages for 3x2 Grid)
  const flowSteps = [
    {
      id: 'ingestion',
      stage: '01. Ingestion',
      title: 'Sources & Ingestion',
      icon: <Download size={22} color="var(--primary)" />,
      accentColor: 'var(--primary)',
      tools: [
        { name: 'Airbyte', icon: <SiAirbyte color="#6557FF" /> },
        { name: 'Fivetran', icon: <Code size={14} color="#005DFF" /> },
        { name: 'DLT', icon: <Download size={14} color="#FF694B" /> },
        { name: 'Selenium', icon: <SiSelenium color="#43B02A" /> },
        { name: 'Python ETL', icon: <SiPython color="#3776AB" /> },
      ],
      tagline: 'Multi-source Data Extraction',
      description: 'Extracting high-volume transactional logs, payment streams, and e-commerce APIs across VNPAY & TNEX.',
      highlights: [
        'Automated CDC & batch syncs',
        'Partitioned daily raw file extraction',
        'API & Web Scraping (Selenium)'
      ]
    },
    {
      id: 'storage',
      stage: '02. Warehousing',
      title: 'Storage & Warehousing',
      icon: <Layers size={22} color="#0284C7" />,
      accentColor: '#0284C7',
      tools: [
        { name: 'BigQuery', icon: <SiGooglebigquery color="#3367D6" /> },
        { name: 'Snowflake', icon: <SiSnowflake color="#29B5E8" /> },
        { name: 'Databricks', icon: <SiDatabricks color="#FF3621" /> },
        { name: 'AWS S3 / GCP', icon: <Cloud size={14} color="#FF9900" /> },
      ],
      tagline: 'Enterprise Cloud Warehouse',
      description: 'Centralized cloud data warehouses serving as the single source of truth for financial & business domains.',
      highlights: [
        'Separation of compute & storage',
        'Role-based access control (RBAC)',
        'Clustered & partitioned tables'
      ]
    },
    {
      id: 'transformation',
      stage: '03. Transformation',
      title: 'dbt & CI/CD Pipeline',
      icon: <Workflow size={22} color="#E11D48" />,
      accentColor: '#E11D48',
      tools: [
        { name: 'dbt Core/Cloud', icon: <SiDbt color="#FF694B" /> },
        { name: 'Apache Spark', icon: <SiApachespark color="#E25A1C" /> },
        { name: 'SQL', icon: <SiPostgresql color="#336791" /> },
        { name: 'GitHub Actions', icon: <ShieldCheck size={14} color="var(--primary)" /> },
      ],
      tagline: 'Kimball Dimensional Modeling',
      description: 'Transforming raw schemas into production-ready Data Marts (Staging → Intermediate → Marts) with full CI/CD testing.',
      highlights: [
        'Automated dbt test assertions',
        'Star-schema dimensional modeling',
        'Slim CI PR checks via GitHub Actions'
      ]
    },
    {
      id: 'orchestration',
      stage: '04. Orchestration',
      title: 'Workflow Orchestration',
      icon: <Activity size={22} color="#7C3AED" />,
      accentColor: '#7C3AED',
      tools: [
        { name: 'Apache Airflow', icon: <SiApacheairflow color="#017CEE" /> },
        { name: 'Astronomer', icon: <Workflow size={14} color="#23D9FF" /> },
        { name: 'Dagster', icon: <Workflow size={14} color="#1890FF" /> },
        { name: 'Kestra', icon: <Workflow size={14} color="#FF6B6B" /> },
      ],
      tagline: 'DAG Execution & Monitoring',
      description: 'Scheduling complex DAG dependencies with SLA alerts, automatic retries, and real-time pipeline monitoring.',
      highlights: [
        'Modular Python DAG definitions',
        'Slack/Email alert triggers on failure',
        'Backfill for historical re-processing'
      ]
    },
    {
      id: 'serving',
      stage: '05. BI & Analytics',
      title: 'Executive BI & Serving',
      icon: <BarChart3 size={22} color="#059669" />,
      accentColor: '#059669',
      tools: [
        { name: 'Power BI', icon: <BarChart3 size={14} color="#F2C811" /> },
        { name: 'Looker Studio', icon: <SiLooker color="#4285F4" /> },
        { name: 'Superset', icon: <SiApachesuperset color="#00A2D3" /> },
        { name: 'Metabase', icon: <SiMetabase color="#509EE3" /> },
      ],
      tagline: 'Actionable Business Intelligence',
      description: 'Delivering real-time executive dashboards, Cohort retention analysis, and financial KPIs for decision-makers.',
      highlights: [
        'Automated semantic model refreshes',
        'Interactive drill-down reports',
        'Self-service analytics for business'
      ]
    },
    {
      id: 'collaboration',
      stage: '06. Dev & Ops',
      title: 'Productivity & Collaboration',
      icon: <Users size={22} color="#D97706" />,
      accentColor: '#D97706',
      tools: [
        { name: 'Jira', icon: <SiJira color="#0052CC" /> },
        { name: 'Confluence', icon: <SiConfluence color="#0052CC" /> },
        { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
        { name: 'VS Code', icon: <Code size={14} color="#007ACC" /> },
      ],
      tagline: 'Cross-functional Agile Workflow',
      description: 'Utilizing modern developer tooling, documentation standards, and agile collaboration platforms for team efficiency.',
      highlights: [
        'Agile sprint planning with Jira',
        'UI/UX wireframing for dashboards',
        'Clean documentation in Notion/Docs'
      ]
    }
  ];

  // Full Categorized Tech Stack Matrix Data
  const techCategories = [
    {
      category: "Programming & Query Languages",
      icon: <Terminal size={18} color="var(--primary)" />,
      items: [
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "SQL", icon: <SiPostgresql color="#336791" /> },
        { name: "KQL", icon: <Database size={14} color="#0078D4" /> },
        { name: "MQL", icon: <Database size={14} color="#13AA52" /> },
        { name: "JQL", icon: <SiJira size={14} color="#0052CC" /> }
      ]
    },
    {
      category: "Data Ingestion & Collection (DE/AE focus)",
      icon: <Download size={18} color="#6557FF" />,
      items: [
        { name: "Airbyte", icon: <SiAirbyte color="#6557FF" /> },
        { name: "Fivetran", icon: <Code size={14} color="#005DFF" /> },
        { name: "DLT", icon: <Download size={14} color="#FF694B" /> },
        { name: "Selenium", icon: <SiSelenium color="#43B02A" /> },
        { name: "BeautifulSoup", icon: <Code size={14} color="#3776AB" /> }
      ]
    },
    {
      category: "Transformation & Orchestration (AE focus)",
      icon: <Workflow size={18} color="#E11D48" />,
      items: [
        { name: "dbt", icon: <SiDbt color="#FF694B" /> },
        { name: "Airflow", icon: <SiApacheairflow color="#017CEE" /> },
        { name: "Astronomer", icon: <Workflow size={14} color="#23D9FF" /> },
        { name: "Apache Spark", icon: <SiApachespark color="#E25A1C" /> },
        { name: "Dagster", icon: <Workflow size={14} color="#1890FF" /> },
        { name: "Kestra", icon: <Workflow size={14} color="#FF6B6B" /> },
        { name: "Mage", icon: <Code size={14} color="#9D4EDD" /> }
      ]
    },
    {
      category: "Data Platforms & Storage",
      icon: <Layers size={18} color="#0284C7" />,
      items: [
        { name: "GCP", icon: <SiGooglecloud color="#4285F4" /> },
        { name: "AWS", icon: <Cloud size={14} color="#FF9900" /> },
        { name: "Azure", icon: <Cloud size={14} color="#0078D4" /> },
        { name: "BigQuery", icon: <SiGooglebigquery color="#3367D6" /> },
        { name: "Snowflake", icon: <SiSnowflake color="#29B5E8" /> },
        { name: "Databricks", icon: <SiDatabricks color="#FF3621" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
        { name: "SQL Server", icon: <Database size={14} color="#CC2927" /> },
        { name: "Oracle", icon: <Database size={14} color="#F80000" /> },
        { name: "MongoDB", icon: <SiMongodb color="#13AA52" /> },
        { name: "Supabase", icon: <SiSupabase color="#3ECF8E" /> }
      ]
    },
    {
      category: "BI, Analytics & Visualization (DA/BI focus)",
      icon: <BarChart3 size={18} color="#059669" />,
      items: [
        { name: "Power BI", icon: <BarChart3 size={14} color="#F2C811" /> },
        { name: "Looker Studio", icon: <SiLooker color="#4285F4" /> },
        { name: "Superset", icon: <SiApachesuperset color="#00A2D3" /> },
        { name: "Metabase", icon: <SiMetabase color="#509EE3" /> },
        { name: "GA4 / Analytics", icon: <SiGoogleanalytics color="#E37400" /> },
        { name: "SmartLook", icon: <Eye size={14} color="#FF6B35" /> }
      ]
    },
    {
      category: "Collaboration & Productivity Tools",
      icon: <Users size={18} color="#D97706" />,
      items: [
        { name: "Jira", icon: <SiJira color="#0052CC" /> },
        { name: "Confluence", icon: <SiConfluence color="#0052CC" /> },
        { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
        { name: "VS Code", icon: <Code size={14} color="#007ACC" /> },
        { name: "DBeaver", icon: <SiDbeaver color="#382923" /> },
        { name: "Excel", icon: <FileText size={14} color="#217346" /> },
        { name: "Notion", icon: <SiNotion color="#000000" /> }
      ]
    }
  ];

  return (
    <section id="architecture" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--primary)', fontFamily: 'Space Grotesk'
          }}>
            End-to-End Modern Data Stack
          </span>
          <h2 className="section-title" style={{ display: 'block', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Data Architecture & Tech Stack
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem' }}>
            An end-to-end overview of how my data pipelines flow, integrated with my full production technology stack.
          </p>

          {/* Mode Switcher Buttons */}
          <div style={{
            display: 'inline-flex', gap: '0.5rem', marginTop: '1.75rem',
            background: 'var(--surface-low)', padding: '0.35rem', borderRadius: '9999px',
            border: '1px solid var(--outline-low)'
          }}>
            <button
              onClick={() => setViewMode('pipeline')}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.55rem 1.35rem', borderRadius: '9999px',
                border: 'none',
                background: viewMode === 'pipeline' ? 'var(--primary)' : 'transparent',
                color: viewMode === 'pipeline' ? 'var(--on-primary)' : 'var(--text-muted)',
                cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem', transition: 'all 0.3s'
              }}
            >
              <GitBranch size={16} /> 3x2 Architecture Pipeline Grid
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.55rem 1.35rem', borderRadius: '9999px',
                border: 'none',
                background: viewMode === 'matrix' ? 'var(--primary)' : 'transparent',
                color: viewMode === 'matrix' ? 'var(--on-primary)' : 'var(--text-muted)',
                cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem', transition: 'all 0.3s'
              }}
            >
              <Grid size={16} /> Categorized Stack Matrix
            </button>
          </div>
        </div>

        {/* View Mode 1: 3x2 Grid Layout for Pipeline Stages */}
        {viewMode === 'pipeline' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.75rem'
          }}>
            {flowSteps.map((step, idx) => {
              const isSelected = selectedStage === idx;
              return (
                <div
                  key={step.id}
                  className="glass-panel"
                  onClick={() => setSelectedStage(isSelected ? null : idx)}
                  style={{
                    padding: '1.75rem',
                    border: isSelected ? `2px solid ${step.accentColor}` : '1px solid var(--outline-low)',
                    background: 'var(--surface-container)',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    boxShadow: isSelected ? '0 12px 30px rgba(0,0,0,0.12)' : '0 4px 15px rgba(0,0,0,0.03)'
                  }}
                >
                  <div>
                    {/* Stage Header Badge & Icon */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{
                        fontSize: '0.725rem', fontWeight: 800, textTransform: 'uppercase',
                        letterSpacing: '0.1em', color: step.accentColor, background: 'var(--tag-bg)',
                        padding: '0.3rem 0.65rem', borderRadius: '8px', border: '1px solid var(--tag-border)'
                      }}>
                        {step.stage}
                      </span>
                      <div style={{ padding: '0.5rem', borderRadius: '10px', background: 'var(--surface-low)', display: 'flex' }}>
                        {step.icon}
                      </div>
                    </div>

                    {/* Stage Title & Tagline */}
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'Space Grotesk', margin: '0 0 0.4rem 0', color: 'var(--text-main)' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.85rem' }}>
                      {step.tagline}
                    </p>

                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                      {step.description}
                    </p>

                    {/* Checklist Highlights */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                      {step.highlights.map((hItem, hIdx) => (
                        <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text-main)' }}>
                          <CheckCircle2 size={15} color={step.accentColor} style={{ flexShrink: 0 }} />
                          <span>{hItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Badges Footer */}
                  <div style={{ borderTop: '1px solid var(--outline-low)', paddingTop: '1rem', marginTop: 'auto' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.6rem' }}>
                      Core Stack
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {step.tools.map((tool, tIdx) => (
                        <div key={tIdx} style={{
                          display: 'flex', alignItems: 'center', gap: '0.4rem',
                          padding: '0.4rem 0.75rem', borderRadius: '8px', background: 'var(--surface-low)',
                          border: '1px solid var(--outline-low)'
                        }}>
                          <span style={{ fontSize: '1rem', display: 'flex' }}>{tool.icon}</span>
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)' }}>{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View Mode 2: Categorized Tech Stack Matrix */}
        {viewMode === 'matrix' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.75rem'
          }}>
            {techCategories.map((group, gIdx) => (
              <div key={gIdx} className="glass-panel" style={{
                padding: '1.75rem',
                border: '1px solid var(--outline-low)',
                background: 'var(--surface-container)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--outline-low)', paddingBottom: '1rem' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'var(--tag-bg)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0
                  }}>
                    {group.icon}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, fontFamily: 'Space Grotesk', margin: 0, color: 'var(--text-main)', lineHeight: 1.3 }}>
                    {group.category}
                  </h3>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                  gap: '0.75rem'
                }}>
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.6rem 0.75rem', borderRadius: '10px',
                      background: 'var(--surface-low)', border: '1px solid var(--outline-low)',
                      transition: 'transform 0.2s, border-color 0.2s'
                    }}>
                      <span style={{ fontSize: '1.1rem', display: 'flex' }}>{item.icon}</span>
                      <span style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-main)' }}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
