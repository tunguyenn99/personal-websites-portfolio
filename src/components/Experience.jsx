import React, { useState } from 'react';
import { Briefcase, Clock, Users, Star, ExternalLink, Calendar, ChevronRight } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('fulltime');

  const tabOptions = [
    { id: 'fulltime', label: 'Full-time Career', icon: <Briefcase size={16} />, color: 'var(--accent-fulltime)', count: 5 },
    { id: 'parttime', label: 'Part-time & AE', icon: <Clock size={16} />, color: 'var(--accent-parttime)', count: 6 },
    { id: 'community', label: 'Community & Teaching', icon: <Users size={16} />, color: 'var(--accent-community)', count: 3 },
    { id: 'advisor', label: 'Advisory & Consulting', icon: <Star size={16} />, color: 'var(--accent-advisor)', count: 2 }
  ];

  const experienceData = {
    fulltime: [
      {
        company: 'GPBank',
        companyFull: 'Global Petro Bank (GPBank)',
        url: 'https://www.gpbank.com.vn/',
        role: 'Senior Data Analyst',
        period: 'Feb 2026 - Present',
        isCurrent: true,
        tag: 'Banking & Finance',
        description: 'Leading core banking analytics, risk modeling data pipelines, and executive reporting for GPBank.'
      },
      {
        company: 'TNEX',
        companyFull: 'TNEX Digital Bank',
        url: 'https://www.tnex.com.vn/',
        role: 'Senior Data Analyst',
        period: 'Sept 2025 - Feb 2026',
        isCurrent: false,
        tag: 'Fintech Banking',
        description: 'Led data-driven growth initiatives, user cohort analytics, and executive pipeline reporting for digital banking platform.'
      },
      {
        company: 'VNPAY',
        companyFull: 'VNPAY Fintech',
        url: 'https://vnpay.vn/',
        role: 'Middle Data Analyst',
        period: 'Apr 2023 - Sept 2025',
        isCurrent: false,
        tag: 'Payment Gateway',
        description: 'Processed millions of transaction logs daily to build fraud detection models and commercial growth dashboards.'
      },
      {
        company: 'Shopee',
        companyFull: 'Shopee Vietnam',
        url: 'https://shopee.vn/',
        role: 'Project Management Officer',
        period: 'Nov 2021 - Apr 2023',
        isCurrent: false,
        tag: 'E-Commerce',
        description: 'Coordinated regional logistics metrics, seller operations analytics, and cross-functional project tracking.'
      },
      {
        company: 'MPI Vietnam',
        companyFull: 'Ministry of Planning and Investment',
        url: 'https://www.mpi.gov.vn/',
        role: 'Consultant Network Operator',
        period: 'Oct 2020 - Nov 2021',
        isCurrent: false,
        tag: 'Government & Enterprise',
        description: 'Managed enterprise databases and consultant networks for national development programs.'
      }
    ],
    parttime: [
      {
        company: 'UpBase',
        companyFull: 'UpBase Asia',
        url: 'https://upbase.asia/',
        role: 'Data Analytics Engineer',
        period: 'Jan 2026 - Present',
        isCurrent: true,
        tag: 'E-Commerce Tech',
        description: 'Architecting automated dbt data pipelines and multi-channel sales aggregation for e-commerce brands.'
      },
      {
        company: 'HV HOLDINGS',
        companyFull: 'HV Group',
        url: 'https://hvgroup.com.vn/',
        role: 'Analytics Engineer',
        period: 'Feb 2026 - Present',
        isCurrent: true,
        tag: 'Conglomerate',
        description: 'Designing centralized BigQuery data stack and dimensional models across corporate subsidiaries.'
      },
      {
        company: 'Cloud Ace',
        companyFull: 'Cloud Ace Vietnam',
        url: 'https://vn.cloud-ace.com/',
        role: 'BI Developer (GCP Specialist)',
        period: 'Dec 2025 - Feb 2026',
        isCurrent: false,
        tag: 'Cloud Partner',
        description: 'Delivering Google Cloud Platform BI architectures and Looker Studio data models.'
      },
      {
        company: 'FIXMA',
        companyFull: 'FIXMA Vietnam',
        url: 'https://fixma.vn/',
        role: 'BI Developer',
        period: 'Sept 2024 - Aug 2025',
        isCurrent: false,
        tag: 'Tech Solutions',
        description: 'Built end-to-end business intelligence reports and operational telemetry tracking.'
      },
      {
        company: 'VietCleaning',
        companyFull: 'VietCleaning JSC',
        url: 'https://vietcleaning.vn/',
        role: 'BI Analyst',
        period: 'Jan 2025 - May 2025',
        isCurrent: false,
        tag: 'Services & Operations',
        description: 'Analyzed service booking funnels, customer churn rate, and staff allocation efficiency.'
      },
      {
        company: 'BraveBits',
        companyFull: 'BraveBits Co.',
        url: 'https://bravebits.co/',
        role: 'Outsource Data Analyst',
        period: 'Mar 2024 - July 2024',
        isCurrent: false,
        tag: 'Global SaaS',
        description: 'Product telemetry and user engagement analysis for Shopify global applications.'
      }
    ],
    community: [
      {
        company: 'Xóm Data',
        companyFull: 'Xóm Data Community',
        url: 'https://www.facebook.com/groups/xomdata/',
        role: 'Co-Owner & Community Leader',
        period: 'Apr 2025 - Present',
        isCurrent: true,
        tag: 'Data Community',
        description: 'Founded and managing Vietnam\'s premier data community for knowledge sharing, webinars, and career guidance.'
      },
      {
        company: 'MindX',
        companyFull: 'MindX Technology School',
        url: 'https://mindx.edu.vn/',
        role: 'Senior Data Instructor',
        period: 'May 2023 - Present',
        isCurrent: true,
        tag: 'Tech Education',
        description: 'Instructed over 300+ students in SQL, Python, Power BI, and Analytics Engineering best practices.'
      },
      {
        company: 'MindX',
        companyFull: 'MindX Technology School',
        url: 'https://mindx.edu.vn/',
        role: 'Data Curriculum Designer',
        period: 'Feb 2025 - Dec 2025',
        isCurrent: false,
        tag: 'Curriculum R&D',
        description: 'Designed industry-standard syllabus for Data Engineering and Analytics Engineering courses.'
      }
    ],
    advisor: [
      {
        company: 'AlphaSights',
        companyFull: 'AlphaSights Global',
        url: 'https://www.alphasights.com/',
        role: 'Technology & Data Advisor',
        period: 'Apr 2023 - Present',
        isCurrent: true,
        tag: 'Global Advisory',
        description: 'Providing expert consultations for international investment funds on Vietnam\'s fintech & data landscape.'
      },
      {
        company: 'Arches',
        companyFull: 'Arches Global',
        url: 'https://arches-global.com/',
        role: 'Expert Industry Consultant',
        period: 'Feb 2025 - Feb 2026',
        isCurrent: false,
        tag: 'Expert Network',
        description: 'Consulting on regional e-commerce logistics, payment gateway trends, and tech talent markets.'
      }
    ]
  };

  const currentTabInfo = tabOptions.find(t => t.id === activeTab);
  const currentList = experienceData[activeTab] || [];

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title">Professional Path & Experience</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '-0.75rem', maxWidth: '640px' }}>
            A curated summary of my roles across enterprise fintech, analytics engineering, community, and advisory.
          </p>
        </div>

        {/* Clean Category Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          marginBottom: '2rem',
          borderBottom: '1px solid var(--outline-low)',
          paddingBottom: '0.75rem',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}>
          {tabOptions.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '12px',
                  border: 'none',
                  background: isActive ? 'var(--surface-container)' : 'transparent',
                  color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.9rem',
                  transition: 'all 0.25s ease',
                  borderBottom: isActive ? `3px solid ${tab.color}` : '3px solid transparent',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ color: tab.color, display: 'flex' }}>{tab.icon}</span>
                <span>{tab.label}</span>
                <span style={{
                  fontSize: '0.725rem',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '9999px',
                  background: isActive ? 'var(--tag-bg)' : 'var(--surface-low)',
                  color: isActive ? tab.color : 'var(--text-muted)',
                  fontWeight: 700
                }}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Minimalist Ultra-Clean Experience List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {currentList.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.5rem 1.75rem',
                border: '1px solid var(--outline-low)',
                background: 'var(--surface-container)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
              }}
            >
              {/* Row Header: Company & Role */}
              <div style={{
                display: 'flex',
                justify: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      fontFamily: 'Space Grotesk',
                      color: currentTabInfo?.color || 'var(--primary)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    {item.company}
                    <ExternalLink size={14} />
                  </a>

                  <span style={{ color: 'var(--outline-low)', fontSize: '1rem' }}>•</span>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>
                    {item.role}
                  </h3>

                  {item.isCurrent && (
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      color: 'var(--primary)',
                      background: 'rgba(0, 98, 65, 0.1)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(0, 98, 65, 0.2)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Current
                    </span>
                  )}
                </div>

                {/* Period Tag */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    background: 'var(--surface-low)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '8px',
                    border: '1px solid var(--outline-low)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}>
                    <Calendar size={13} color="var(--text-muted)" />
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Description Body */}
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                margin: 0
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
