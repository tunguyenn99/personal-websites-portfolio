import React, { useState } from 'react';
import { Briefcase, Clock, Users, Star, ExternalLink, Calendar } from 'lucide-react';

// Import Company Logo Assets
import gpbankLogo from '../assets/company-logo/gpbank.png';
import tnexLogo from '../assets/company-logo/tnex.png';
import vnpayLogo from '../assets/company-logo/vnpay.png';
import shopeeLogo from '../assets/company-logo/shopee.png';
import mpiLogo from '../assets/company-logo/mpi.png';
import hvLogo from '../assets/company-logo/hvgroup.png';
import upbaseLogo from '../assets/company-logo/upbase.png';
import cloudaceLogo from '../assets/company-logo/cloudace.png';
import fixmaLogo from '../assets/company-logo/fixma.png';
import vietcleaningLogo from '../assets/company-logo/vietcleaning.png';
import bravebitsLogo from '../assets/company-logo/bravebits.png';
import xomdataLogo from '../assets/company-logo/xomdata.svg';
import mindxLogo from '../assets/company-logo/mindx.png';
import alphasightsLogo from '../assets/company-logo/alphasights.png';
import archesLogo from '../assets/company-logo/arches.png';

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
        isCurrent: true,
        logo: gpbankLogo,
        description: 'Build cool systems, learn new wisdoms ^^'
      },
      {
        company: 'TNEX',
        companyFull: 'TNEX Finance & Digital Banking',
        url: 'https://www.tnex.com.vn/',
        role: 'Senior Data Analyst',
        period: 'Sep 2025 - Jun 2026',
        isCurrent: false,
        logo: tnexLogo,
        description: 'Solved meaningful challenges, influencing strategy, and growing with a curious, data-driven team.'
      },
      {
        company: 'VNPAY',
        companyFull: 'VNPAY Fintech',
        url: 'https://vnpay.vn/',
        role: 'Data Analyst',
        period: 'Apr 2023 - Sep 2025',
        isCurrent: false,
        logo: vnpayLogo,
        description: 'Conducted in-depth data analysis and built automated reports on performance metrics and risk warnings for cheating across VNPAY’s ecosystem services on E-wallet and Banking Applications, including VnShop, VnTicket, VnEvent, and Telecom Services.'
      },
      {
        company: 'Shopee',
        companyFull: 'Shopee Vietnam',
        url: 'https://shopee.vn/',
        role: 'Project Management Officer @ New Sellers Flow',
        period: 'Nov 2021 - Apr 2023',
        isCurrent: false,
        logo: shopeeLogo,
        description: 'Responsible for data analysis and campaign operations for the New Seller Flow team, supporting new Shopee sellers participating in the "Potential Sellers" program.'
      },
      {
        company: 'MPI Vietnam',
        companyFull: 'Ministry of Planning and Investment',
        url: 'https://www.mpi.gov.vn/',
        role: 'Consultant Network Operator',
        period: 'Oct 2020 - Nov 2021',
        isCurrent: false,
        logo: mpiLogo,
        description: 'Managed the "Consultant" section on the National Portal for Small and Medium Enterprise (SME) Support.'
      }
    ],
    parttime: [
      {
        company: 'HV HOLDINGS',
        companyFull: 'HVNetGroup',
        url: 'https://hvgroup.com.vn/',
        role: 'Analytics Engineer',
        period: 'Feb 2026 - Jul 2026',
        isCurrent: false,
        logo: hvLogo,
        description: 'Architected and deployed a comprehensive BI ecosystem to unify fragmented e-commerce data, providing the executive team with visibility into sales performance, marketing ROI and inventory health.'
      },
      {
        company: 'UpBase',
        companyFull: 'UpBase - Tech-Driven eCommerce Enabler',
        url: 'https://upbase.asia/',
        role: 'Data Analytics Engineer',
        period: 'Jan 2026 - Jul 2026',
        isCurrent: false,
        logo: upbaseLogo,
        description: 'Collaborated with a high-energy team of data enthusiasts to architect a scalable data infrastructure for an omnichannel e-commerce ecosystem. Focused on transforming fragmented raw data into high-performance Data Marts and OLAP Cubes to power frontend visualizations.'
      },
      {
        company: 'Cloud Ace Vietnam',
        companyFull: 'Cloud Ace Vietnam',
        url: 'https://vn.cloud-ace.com/',
        role: 'Business Intelligence Developer',
        period: 'Dec 2025 - Feb 2026',
        isCurrent: false,
        logo: cloudaceLogo,
        description: 'Developed a centralized, interactive dashboard system to streamline institutional reporting and improve data-driven decision-making for school leadership.'
      },
      {
        company: 'FIXMA',
        companyFull: 'FIXMA Vietnam',
        url: 'https://fixma.vn/',
        role: 'Business Intelligence Developer',
        period: 'Sep 2024 - Aug 2025',
        isCurrent: false,
        logo: fixmaLogo,
        description: 'Designed and deployed embedded BI solutions and automated business intelligence systems.'
      },
      {
        company: 'VietCleaning',
        companyFull: 'VietCleaning JSC',
        url: 'https://vietcleaning.vn/',
        role: 'Business Intelligence Analyst',
        period: 'Jan 2025 - May 2025',
        isCurrent: false,
        logo: vietcleaningLogo,
        description: 'Analyzed service booking funnels, customer churn rate, and staff allocation efficiency.'
      },
      {
        company: 'BraveBits',
        companyFull: 'BraveBits Co.',
        url: 'https://bravebits.co/',
        role: 'Data Analyst (Outsource)',
        period: 'Mar 2024 - Jul 2024',
        isCurrent: false,
        logo: bravebitsLogo,
        description: 'Supported report development and data analysis on customer and product insights to drive business decisions for global Shopify applications.'
      }
    ],
    community: [
      {
        company: 'Xóm Data',
        companyFull: 'Xóm Data - Cùng học Data Analyst / Engineer / Scientist',
        url: 'https://www.facebook.com/groups/xomdata/',
        role: 'Co-Owner',
        period: 'Apr 2025 - Present',
        isCurrent: true,
        logo: xomdataLogo,
        description: 'Search "Xóm Data" on Facebook to find us! Co-owner of Vietnam\'s top data community for learners and practitioners.'
      },
      {
        company: 'MindX Technology School',
        companyFull: 'MindX Technology School',
        url: 'https://mindx.edu.vn/',
        role: 'Data Instructor',
        period: 'May 2023 - Feb 2026',
        isCurrent: false,
        logo: mindxLogo,
        description: 'Taught data-related courses (D4E, BI), managed classroom activities, assessed student progress, and provided career guidance to ensure successful learning outcomes.'
      },
      {
        company: 'MindX Technology School',
        companyFull: 'MindX Technology School',
        url: 'https://mindx.edu.vn/',
        role: 'Data Curriculum Designer',
        period: 'Feb 2025 - Dec 2025',
        isCurrent: false,
        logo: mindxLogo,
        description: 'Crafted industry-relevant learning experiences that empower professionals to turn raw data into actionable insights. Designed structured learning paths bridging SQL, Python, Power BI, and data modeling.'
      }
    ],
    advisor: [
      {
        company: 'AlphaSights',
        companyFull: 'AlphaSights Advisors Network',
        url: 'https://www.alphasights.com/',
        role: 'Advisor',
        period: 'Apr 2023 - Feb 2026',
        isCurrent: false,
        logo: alphasightsLogo,
        description: 'Collaborated with AlphaSights branches in Seoul, Tokyo, Hong Kong, and Shanghai, bringing expertise with a strong focus on the Southeast Asia market to deliver practical insights for forward-thinking businesses.'
      },
      {
        company: 'Arches',
        companyFull: 'Arches Corporation',
        url: 'https://arches-global.com/',
        role: 'Advisor',
        period: 'Feb 2025 - Feb 2026',
        isCurrent: false,
        logo: archesLogo,
        description: 'Arches connects Asia\'s industry specialists across sectors and functions with Investment & Corporate Strategy clients to assess an industry, a market, or a company to evaluate its business risks or opportunities.'
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
                  background: isActive ? `${tab.color}15` : 'transparent',
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
                <span style={{ color: isActive ? tab.color : 'inherit' }}>{tab.label}</span>
                <span style={{
                  fontSize: '0.725rem',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '9999px',
                  background: isActive ? `${tab.color}22` : 'var(--surface-low)',
                  color: isActive ? tab.color : 'var(--text-muted)',
                  fontWeight: 700
                }}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Ultra-Clean Experience List synchronized with Active Tab Accent Color */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {currentList.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                '--active-accent': activeTabColor,
                '--active-accent-glow': `${activeTabColor}33`,
                padding: '1.5rem 1.75rem',
                border: '1px solid var(--outline-low)',
                background: 'var(--surface-container)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle Company Image Logo Background Watermark (Logo Chìm Mờ Image) */}
              <img
                src={item.logo}
                alt={item.company}
                style={{
                  position: 'absolute',
                  right: '-15px',
                  bottom: '-20px',
                  width: '130px',
                  height: '130px',
                  objectFit: 'contain',
                  opacity: 0.08,
                  pointerEvents: 'none',
                  userSelect: 'none',
                  transform: 'rotate(-8deg)',
                  filter: 'grayscale(30%)',
                  zIndex: 0
                }}
              />

              {/* Row Header: Company Logo Image Badge, Company Name & Role */}
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
                  {/* Company Logo Image Badge */}
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '11px',
                    background: '#FFFFFF',
                    border: '1px solid var(--outline-low)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                    flexShrink: 0,
                    overflow: 'hidden'
                  }}>
                    <img
                      src={item.logo}
                      alt={item.company}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
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
