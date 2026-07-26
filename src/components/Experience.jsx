import React, { useState } from 'react';
import { Briefcase, Clock, Users, Star, ExternalLink, Calendar } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('fulltime');

  const tabOptions = [
    { id: 'fulltime', label: 'Full-time Career', icon: <Briefcase size={16} />, color: 'var(--accent-fulltime)', count: 5 },
    { id: 'parttime', label: 'Freelance & Contract', icon: <Clock size={16} />, color: 'var(--accent-parttime)', count: 6 },
    { id: 'community', label: 'Community & Teaching', icon: <Users size={16} />, color: 'var(--accent-community)', count: 3 },
    { id: 'advisor', label: 'Advisory & Consulting', icon: <Star size={16} />, color: 'var(--accent-advisor)', count: 2 }
  ];

  const experienceData = {
    fulltime: [
      {
        company: 'GPBank',
        companyFull: 'Global Petro Commercial Joint Stock Bank',
        url: 'https://www.gpbank.com.vn/',
        role: 'Senior Analytics Engineer @ Engineering Team',
        period: 'Jun 2026 - Present',
        location: 'Hanoi Capital Region · On-site',
        isCurrent: true,
        tag: 'Full-time',
        initials: 'GP',
        brandColor: '#F37021',
        watermark: 'GPBANK',
        description: 'Build cool systems, learn new wisdoms ^^',
        skills: ['dbt (DBT)', 'Apache Airflow', 'Python', 'SQL', 'Data Warehousing']
      },
      {
        company: 'TNEX',
        companyFull: 'TNEX Finance & Digital Banking',
        url: 'https://www.tnex.com.vn/',
        role: 'Senior Data Analyst',
        period: 'Sep 2025 - Jun 2026',
        location: 'Hanoi Capital Region · On-site',
        isCurrent: false,
        tag: 'Full-time',
        initials: 'TN',
        brandColor: '#00B4D8',
        watermark: 'TNEX',
        description: 'Solved meaningful challenges, influencing strategy, and growing with a curious, data-driven team.',
        skills: ['dbt (DBT)', 'AWS Cloud9', 'SQL', 'Python']
      },
      {
        company: 'VNPAY',
        companyFull: 'VNPAY Fintech',
        url: 'https://vnpay.vn/',
        role: 'Data Analyst',
        period: 'Apr 2023 - Sep 2025',
        location: 'Hanoi Capital Region · On-site',
        isCurrent: false,
        tag: 'Full-time',
        initials: 'VN',
        brandColor: '#0052CC',
        watermark: 'VNPAY',
        description: 'Conducted in-depth data analysis and built automated reports on performance metrics and risk warnings for cheating across VNPAY’s ecosystem services on E-wallet and Banking Applications, including VnShop, VnTicket, VnEvent, and Telecom Services.',
        skills: ['Python', 'MongoDB', 'SQL', 'Power BI', 'Risk Analysis']
      },
      {
        company: 'Shopee',
        companyFull: 'Shopee Vietnam',
        url: 'https://shopee.vn/',
        role: 'Project Management Officer @ New Sellers Flow',
        period: 'Nov 2021 - Apr 2023',
        location: 'Hanoi, Vietnam · On-site',
        isCurrent: false,
        tag: 'Full-time',
        initials: 'SH',
        brandColor: '#EE4D2D',
        watermark: 'SHOPEE',
        description: 'Responsible for data analysis and campaign operations for the New Seller Flow team, supporting new Shopee sellers participating in the "Potential Sellers" program.',
        skills: ['Strategy', 'Data Analysis', 'SQL', 'Presentation Skills']
      },
      {
        company: 'Ministry of Planning and Investment, Vietnam',
        companyFull: 'MPI Vietnam',
        url: 'https://www.mpi.gov.vn/',
        role: 'Consultant Network Operator',
        period: 'Oct 2020 - Nov 2021',
        location: 'Hanoi, Vietnam · On-site',
        isCurrent: false,
        tag: 'Government',
        initials: 'MPI',
        brandColor: '#B8860B',
        watermark: 'MPI',
        description: 'Managed the "Consultant" section on the National Portal for Small and Medium Enterprise (SME) Support.',
        skills: ['Strategy', 'Microsoft Outlook', 'Database Management']
      }
    ],
    parttime: [
      {
        company: 'HV HOLDINGS',
        companyFull: 'HVNetGroup',
        url: 'https://hvgroup.com.vn/',
        role: 'Analytics Engineer',
        period: 'Feb 2026 - Jul 2026',
        location: 'Ho Chi Minh City · Remote',
        isCurrent: false,
        tag: 'Freelance',
        initials: 'HV',
        brandColor: '#7C3AED',
        watermark: 'HV GROUP',
        description: 'Architected and deployed a comprehensive BI ecosystem to unify fragmented e-commerce data, providing the executive team with visibility into sales performance, marketing ROI and inventory health.',
        skills: ['Microsoft Power BI', 'Power BI Embedded Analytics', 'dbt', 'SQL']
      },
      {
        company: 'UpBase',
        companyFull: 'UpBase - Tech-Driven eCommerce Enabler',
        url: 'https://upbase.asia/',
        role: 'Data Analytics Engineer',
        period: 'Jan 2026 - Jul 2026',
        location: 'Hanoi Capital Region · Remote',
        isCurrent: false,
        tag: 'Freelance',
        initials: 'UB',
        brandColor: '#2563EB',
        watermark: 'UPBASE',
        description: 'Collaborated with a high-energy team of data enthusiasts to architect a scalable data infrastructure for an omnichannel e-commerce ecosystem. Focused on transforming fragmented raw data into high-performance Data Marts and OLAP Cubes to power frontend visualizations.',
        skills: ['dbt (DBT)', 'Apache Superset', 'Python', 'SQL']
      },
      {
        company: 'Cloud Ace Vietnam',
        companyFull: 'Cloud Ace Vietnam',
        url: 'https://vn.cloud-ace.com/',
        role: 'Business Intelligence Developer',
        period: 'Dec 2025 - Feb 2026',
        location: 'Hanoi Capital Region · Remote',
        isCurrent: false,
        tag: 'Freelance',
        initials: 'CA',
        brandColor: '#4285F4',
        watermark: 'CLOUD ACE',
        description: 'Developed a centralized, interactive dashboard system to streamline institutional reporting and improve data-driven decision-making for school leadership.',
        skills: ['Google BigQuery', 'Google Looker Studio', 'GCP']
      },
      {
        company: 'FIXMA',
        companyFull: 'FIXMA Vietnam',
        url: 'https://fixma.vn/',
        role: 'Business Intelligence Developer',
        period: 'Sep 2024 - Aug 2025',
        location: 'Hanoi Capital Region · Remote',
        isCurrent: false,
        tag: 'Freelance',
        initials: 'FX',
        brandColor: '#0EA5E9',
        watermark: 'FIXMA',
        description: 'Designed and deployed embedded BI solutions and automated business intelligence systems.',
        skills: ['Power BI Embedded Analytics', 'Microsoft Power BI', 'SQL']
      },
      {
        company: 'VietCleaning',
        companyFull: 'VietCleaning JSC',
        url: 'https://vietcleaning.vn/',
        role: 'Business Intelligence Analyst',
        period: 'Jan 2025 - May 2025',
        location: 'Hanoi Capital Region · Remote',
        isCurrent: false,
        tag: 'Freelance',
        initials: 'VC',
        brandColor: '#10B981',
        watermark: 'VIETCLEAN',
        description: 'Analyzed service booking funnels, customer churn rate, and staff allocation efficiency.',
        skills: ['Microsoft Power BI', 'Power BI Embedded Analytics', 'Excel']
      },
      {
        company: 'BraveBits',
        companyFull: 'BraveBits Co.',
        url: 'https://bravebits.co/',
        role: 'Data Analyst (Outsource)',
        period: 'Mar 2024 - Jul 2024',
        location: 'Hanoi Capital Region · Hybrid',
        isCurrent: false,
        tag: 'Freelance',
        initials: 'BB',
        brandColor: '#F59E0B',
        watermark: 'BRAVEBITS',
        description: 'Supported report development and data analysis on customer and product insights to drive business decisions for global Shopify applications.',
        skills: ['Google Looker Studio', 'Google BigQuery', 'SQL']
      }
    ],
    community: [
      {
        company: 'Xóm Data',
        companyFull: 'Xóm Data - Cùng học Data Analyst / Engineer / Scientist',
        url: 'https://www.facebook.com/groups/xomdata/',
        role: 'Co-Owner',
        period: 'Apr 2025 - Present',
        location: 'Hanoi Capital Region · Remote',
        isCurrent: true,
        tag: 'Self-employed',
        initials: 'XD',
        brandColor: '#1877F2',
        watermark: 'XÓM DATA',
        description: 'Search "Xóm Data" on Facebook to find us! Co-owner of Vietnam\'s top data community for learners and practitioners.',
        skills: ['Community Leadership', 'Technical Sharing', 'Data Career Mentoring']
      },
      {
        company: 'MindX Technology School',
        companyFull: 'MindX Technology School',
        url: 'https://mindx.edu.vn/',
        role: 'Data Instructor',
        period: 'May 2023 - Feb 2026',
        location: 'Hanoi Capital Region · Hybrid',
        isCurrent: false,
        tag: 'Part-time',
        initials: 'MX',
        brandColor: '#EC4899',
        watermark: 'MINDX',
        description: 'Taught data-related courses (D4E, BI), managed classroom activities, assessed student progress, and provided career guidance to ensure successful learning outcomes.',
        skills: ['SQL', 'Python', 'Power BI', 'Mentoring']
      },
      {
        company: 'MindX Technology School',
        companyFull: 'MindX Technology School',
        url: 'https://mindx.edu.vn/',
        role: 'Data Curriculum Designer',
        period: 'Feb 2025 - Dec 2025',
        location: 'Hanoi Capital Region · Remote',
        isCurrent: false,
        tag: 'Part-time',
        initials: 'MX',
        brandColor: '#EC4899',
        watermark: 'MINDX',
        description: 'Crafted industry-relevant learning experiences that empower professionals to turn raw data into actionable insights. Designed structured learning paths bridging SQL, Python, Power BI, and data modeling.',
        skills: ['Curriculum Design', 'SQL', 'Python', 'Power BI', 'Data Modeling']
      }
    ],
    advisor: [
      {
        company: 'AlphaSights',
        companyFull: 'AlphaSights Advisors Network',
        url: 'https://www.alphasights.com/',
        role: 'Advisor',
        period: 'Apr 2023 - Feb 2026',
        location: 'Seoul, South Korea · Remote',
        isCurrent: false,
        tag: 'Freelance',
        initials: 'AS',
        brandColor: '#6366F1',
        watermark: 'ALPHASIGHTS',
        description: 'Collaborated with AlphaSights branches in Seoul, Tokyo, Hong Kong, and Shanghai, bringing expertise with a strong focus on the Southeast Asia market to deliver practical insights for forward-thinking businesses.',
        skills: ['Industry Advisory', 'Market Intelligence', 'Fintech Insights']
      },
      {
        company: 'Arches',
        companyFull: 'Arches Corporation',
        url: 'https://arches-global.com/',
        role: 'Advisor',
        period: 'Feb 2025 - Feb 2026',
        location: 'Tokyo, Japan · Remote',
        isCurrent: false,
        tag: 'Freelance',
        initials: 'AG',
        brandColor: '#8B5CF6',
        watermark: 'ARCHES',
        description: 'Arches connects Asia\'s industry specialists across sectors and functions with Investment & Corporate Strategy clients to assess an industry, a market, or a company to evaluate its business risks or opportunities.',
        skills: ['Expert Advisory', 'Corporate Strategy', 'Knowledge Sharing']
      }
    ]
  };

  const currentTabInfo = tabOptions.find(t => t.id === activeTab);
  const activeTabColor = currentTabInfo?.color || 'var(--primary)';
  const currentList = experienceData[activeTab] || [];

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title">Professional Path & Experience</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '-0.75rem', maxWidth: '680px' }}>
            Direct sync from my LinkedIn career history spanning Senior Analytics Engineering, Fintech, BI Development, and Advisory.
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

        {/* Ultra-Clean Experience List matching active tab color */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {currentList.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.5rem 1.75rem',
                border: `1px solid var(--outline-low)`,
                background: 'var(--surface-container)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle Company Text Watermark matching active tab color */}
              <div style={{
                position: 'absolute',
                right: '-10px',
                bottom: '-15px',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 900,
                fontFamily: 'Space Grotesk, sans-serif',
                color: activeTabColor,
                opacity: 0.06,
                pointerEvents: 'none',
                userSelect: 'none',
                letterSpacing: '0.05em',
                transform: 'rotate(-5deg)',
                whiteSpace: 'nowrap',
                zIndex: 0
              }}>
                {item.watermark}
              </div>

              {/* Row Header: Company Badge, Company Name & Role */}
              <div style={{
                display: 'flex',
                justify: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {/* Company Logo Badge */}
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'var(--surface-low)',
                    border: `1px solid var(--outline-low)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: activeTabColor,
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    letterSpacing: '-0.02em',
                    fontFamily: 'Space Grotesk',
                    flexShrink: 0
                  }}>
                    {item.initials}
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      fontFamily: 'Space Grotesk',
                      color: activeTabColor,
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>

                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: item.isCurrent ? 'var(--primary)' : 'var(--text-muted)',
                    background: item.isCurrent ? 'rgba(0, 98, 65, 0.08)' : 'var(--surface-low)',
                    padding: '0.25rem 0.7rem',
                    borderRadius: '8px',
                    border: '1px solid var(--outline-low)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}>
                    <Calendar size={13} color={item.isCurrent ? 'var(--primary)' : 'var(--text-muted)'} />
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Description Body */}
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                margin: 0,
                position: 'relative',
                zIndex: 1
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
