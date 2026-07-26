import React, { useState } from 'react';
import { Database, Download, Layers, Workflow, BarChart3, ShieldCheck, ArrowRight, Activity, CheckCircle2 } from 'lucide-react';
import { SiPostgresql, SiAirbyte, SiDbt, SiApacheairflow, SiGooglebigquery, SiSnowflake, SiLooker, SiDatabricks, SiPython } from 'react-icons/si';

export default function ArchitectureFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const flowSteps = [
    {
      id: 'ingestion',
      stage: '01. Ingestion',
      title: 'Sources & Ingestion',
      icon: <Download size={22} color="var(--primary)" />,
      tools: [
        { name: 'PostgreSQL / MySQL', icon: <SiPostgresql color="#336791" /> },
        { name: 'Airbyte', icon: <SiAirbyte color="#6557FF" /> },
        { name: 'Python ETL', icon: <SiPython color="#3776AB" /> },
      ],
      tagline: 'Multi-source Data Extraction',
      description: 'Extracting transactional logs, payment streams, and e-commerce APIs at scale across VNPAY & TNEX systems.',
      highlights: [
        'Automated CDC & batch syncs',
        'Partitioned daily raw file extraction',
        'API & Web Scraping (Selenium / BeautifulSoup)'
      ]
    },
    {
      id: 'lake',
      stage: '02. Storage',
      title: 'Raw Data Storage',
      icon: <Database size={22} color="var(--secondary)" />,
      tools: [
        { name: 'AWS S3', icon: <Database size={16} color="#FF9900" /> },
        { name: 'GCP Cloud Storage', icon: <Database size={16} color="#4285F4" /> },
      ],
      tagline: 'Immutable Raw Storage',
      description: 'Storing raw JSON, CSV, and Parquet data with strict daily partition keys before warehouse ingestion.',
      highlights: [
        'Zero data loss raw archiving',
        'Cost-efficient lifecycle policies',
        'Schema-on-read flexibility'
      ]
    },
    {
      id: 'warehouse',
      stage: '03. Warehouse',
      title: 'Enterprise Data Warehouse',
      icon: <Layers size={22} color="#0284C7" />,
      tools: [
        { name: 'BigQuery', icon: <SiGooglebigquery color="#3367D6" /> },
        { name: 'Snowflake', icon: <SiSnowflake color="#29B5E8" /> },
        { name: 'Databricks', icon: <SiDatabricks color="#FF3621" /> },
      ],
      tagline: 'High-Performance Warehousing',
      description: 'Centralized cloud data warehouses serving as the single source of truth for all business domains.',
      highlights: [
        'Separation of compute & storage',
        'Role-based access control (RBAC)',
        'Clustered & partitioned tables for fast query execution'
      ]
    },
    {
      id: 'transformation',
      stage: '04. Transformation',
      title: 'dbt & CI/CD Pipeline',
      icon: <Workflow size={22} color="#E11D48" />,
      tools: [
        { name: 'dbt Core/Cloud', icon: <SiDbt color="#FF694B" /> },
        { name: 'GitHub Actions', icon: <ShieldCheck size={16} color="var(--primary)" /> },
      ],
      tagline: 'Kimball Dimensional Modeling',
      description: 'Transforming raw schemas into production-ready Data Marts (Staging → Intermediate → Marts) with full CI/CD testing.',
      highlights: [
        'Automated dbt test assertions & documentation',
        'Star-schema & Snowflake dimensional modeling',
        'Slim CI PR checks via GitHub Actions'
      ]
    },
    {
      id: 'orchestration',
      stage: '05. Orchestration',
      title: 'Workflow Orchestration',
      icon: <Activity size={22} color="#7C3AED" />,
      tools: [
        { name: 'Apache Airflow', icon: <SiApacheairflow color="#017CEE" /> },
      ],
      tagline: 'DAG Execution & Monitoring',
      description: 'Scheduling complex DAG dependencies with SLA alerts, automatic retries, and real-time execution monitoring.',
      highlights: [
        'Modular Python DAG definitions',
        'Slack/Email alert triggers on pipeline failure',
        'Backfill capability for historical data re-processing'
      ]
    },
    {
      id: 'serving',
      stage: '06. Analytics',
      title: 'BI & Executive Serving',
      icon: <BarChart3 size={22} color="#059669" />,
      tools: [
        { name: 'Power BI', icon: <BarChart3 size={16} color="#F2C811" /> },
        { name: 'Looker Studio', icon: <SiLooker color="#4285F4" /> },
      ],
      tagline: 'Actionable Business Intelligence',
      description: 'Delivering real-time executive dashboards, Cohort analysis, and financial KPIs for business stakeholders.',
      highlights: [
        'Automated semantic model refreshes',
        'Interactive drill-down reports & executive KPIs',
        'Self-service analytics for business teams'
      ]
    }
  ];

  return (
    <section id="architecture" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--primary)', fontFamily: 'Space Grotesk'
          }}>
            Architecture Blueprint
          </span>
          <h2 className="section-title" style={{ display: 'block', marginTop: '0.5rem', marginBottom: '1rem' }}>
            How My Data Flows
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            An interactive end-to-end overview of the modern data stack pipelines I design and maintain.
          </p>
        </div>

        {/* Pipeline Steps Flow Cards */}
        <div className="filter-container" style={{
          display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem',
          marginBottom: '2.5rem', WebkitOverflowScrolling: 'touch'
        }}>
          {flowSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                style={{
                  flex: '0 0 auto',
                  minWidth: '180px',
                  padding: '1.25rem 1rem',
                  borderRadius: '16px',
                  border: isActive ? '2px solid var(--primary)' : '1px solid var(--outline-low)',
                  background: isActive ? 'var(--surface-container)' : 'var(--glass-bg)',
                  color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 10px 25px rgba(0, 98, 65, 0.15)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: isActive ? 'var(--primary)' : 'var(--text-muted)' }}>
                    {step.stage}
                  </span>
                  {step.icon}
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, fontFamily: 'Space Grotesk', lineHeight: 1.2, margin: 0 }}>
                  {step.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed View */}
        <div className="glass-panel" style={{
          padding: 'clamp(2rem, 4vw, 3rem)',
          border: '1px solid var(--outline-low)',
          background: 'var(--surface-container)',
          boxShadow: '0 15px 35px rgba(0,0,0,0.06)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            {/* Left: Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{
                  padding: '0.6rem', borderRadius: '12px', background: 'var(--tag-bg)',
                  border: '1px solid var(--tag-border)', display: 'flex'
                }}>
                  {flowSteps[activeStep].icon}
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {flowSteps[activeStep].stage}
                  </span>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'Space Grotesk', margin: 0, color: 'var(--text-main)' }}>
                    {flowSteps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>
                {flowSteps[activeStep].tagline}
              </p>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {flowSteps[activeStep].description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {flowSteps[activeStep].highlights.map((item, hIdx) => (
                  <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={16} color="var(--primary)" flexShrink={0} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stack Badges */}
            <div style={{
              background: 'var(--surface-low)', padding: '2rem', borderRadius: '16px',
              border: '1px solid var(--outline-low)', display: 'flex', flexDirection: 'column', gap: '1.25rem'
            }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', margin: 0 }}>
                Core Technologies
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                {flowSteps[activeStep].tools.map((tool, tIdx) => (
                  <div key={tIdx} style={{
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.6rem 1rem', borderRadius: '12px', background: 'var(--surface-container)',
                    border: '1px solid var(--outline-low)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}>
                    <span style={{ fontSize: '1.2rem', display: 'flex' }}>{tool.icon}</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>{tool.name}</span>
                  </div>
                ))}
              </div>

              {/* Navigation hint */}
              <div style={{
                marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--outline-low)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }}>
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : flowSteps.length - 1))}
                  style={{
                    background: 'none', border: 'none', color: 'var(--text-muted)',
                    cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem'
                  }}
                >
                  ← Previous Stage
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < flowSteps.length - 1 ? prev + 1 : 0))}
                  style={{
                    background: 'none', border: 'none', color: 'var(--primary)',
                    cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem'
                  }}
                >
                  Next Stage <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
