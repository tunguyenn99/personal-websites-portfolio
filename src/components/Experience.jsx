import React, { useState } from 'react';
import { Briefcase, Clock, Users, Star, ArrowUpRight, Calendar, Building2 } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Roles', count: 15 },
    { id: 'fulltime', name: 'Full-time Enterprise', count: 4, color: 'var(--accent-fulltime)', icon: <Briefcase size={15} /> },
    { id: 'parttime', name: 'Part-time & Consulting', count: 6, color: 'var(--accent-parttime)', icon: <Clock size={15} /> },
    { id: 'community', name: 'Community & Teaching', count: 3, color: 'var(--accent-community)', icon: <Users size={15} /> },
    { id: 'advisor', name: 'Advisory & Expert', count: 2, color: 'var(--accent-advisor)', icon: <Star size={15} /> }
  ];

  const allExperiences = [
    // Full-time
    {
      category: 'fulltime',
      categoryLabel: 'Full-time',
      role: 'Senior Data Analyst',
      company: 'TNEX',
      url: 'https://www.tnex.com.vn/',
      period: 'Sept 2025 - Present',
      color: 'var(--accent-fulltime)',
      description: 'Leading data-driven initiatives, user growth analytics, and advanced financial pipeline reporting for Vietnam digital banking.'
    },
    {
      category: 'fulltime',
      categoryLabel: 'Full-time',
      role: 'Middle Data Analyst',
      company: 'VNPAY',
      url: 'https://vnpay.vn/',
      period: 'Apr 2023 - Sept 2025',
      color: 'var(--accent-fulltime)',
      description: 'Processing millions of payment transactions daily to drive business growth and risk analysis in top-tier fintech.'
    },
    {
      category: 'fulltime',
      categoryLabel: 'Full-time',
      role: 'Project Management Officer',
      company: 'Shopee',
      url: 'https://shopee.vn/',
      period: 'Nov 2021 - Apr 2023',
      color: 'var(--accent-fulltime)',
      description: 'Coordinating cross-functional e-commerce operational projects and seller analytics dashboards across SEA.'
    },
    {
      category: 'fulltime',
      categoryLabel: 'Full-time',
      role: 'Consultant Network Operator',
      company: 'MPI, Vietnam',
      url: 'https://www.mpi.gov.vn/',
      period: 'Oct 2020 - Nov 2021',
      color: 'var(--accent-fulltime)',
      description: 'Managing consultant networks and national enterprise databases for Ministry of Planning and Investment.'
    },

    // Part-time & Consulting
    {
      category: 'parttime',
      categoryLabel: 'Part-time',
      role: 'Data Analytics Engineer',
      company: 'UpBase',
      url: 'https://upbase.asia/',
      period: 'Jan 2026 - Present',
      color: 'var(--accent-parttime)',
      description: 'Optimizing e-commerce data landscapes and building automated analytics pipelines for multi-channel sales.'
    },
    {
      category: 'parttime',
      categoryLabel: 'Part-time',
      role: 'Analytics Engineer',
      company: 'HV HOLDINGS',
      url: 'https://hvgroup.com.vn/',
      period: 'Feb 2026 - Present',
      color: 'var(--accent-parttime)',
      description: 'Architecting modern cloud data stacks and dbt modeling across diversified holdings.'
    },
    {
      category: 'parttime',
      categoryLabel: 'Part-time',
      role: 'Business Intelligence Developer',
      company: 'Cloud Ace Vietnam',
      url: 'https://vn.cloud-ace.com/',
      period: 'Dec 2025 - Feb 2026',
      color: 'var(--accent-parttime)',
      description: 'GCP-focused BI solutions, BigQuery data modeling, and enterprise reporting.'
    },
    {
      category: 'parttime',
      categoryLabel: 'Part-time',
      role: 'Business Intelligence Developer',
      company: 'FIXMA',
      url: 'https://fixma.vn/',
      period: 'Sept 2024 - Aug 2025',
      color: 'var(--accent-parttime)',
      description: 'Designing end-to-end BI systems and Looker Studio dashboards for data-driven decision making.'
    },
    {
      category: 'parttime',
      categoryLabel: 'Part-time',
      role: 'Business Intelligence Analyst',
      company: 'VietCleaning',
      url: 'https://vietcleaning.vn/',
      period: 'Jan 2025 - May 2025',
      color: 'var(--accent-parttime)',
      description: 'Analyzing operational efficiency, customer retention, and service booking metrics.'
    },
    {
      category: 'parttime',
      categoryLabel: 'Part-time',
      role: 'Outsource Data Analyst',
      company: 'BraveBits',
      url: 'https://bravebits.co/',
      period: 'Mar 2024 - July 2024',
      color: 'var(--accent-parttime)',
      description: 'Support product analytics and user telemetry for global Shopify apps.'
    },

    // Community & Teaching
    {
      category: 'community',
      categoryLabel: 'Community',
      role: 'Co-Owner & Community Leader',
      company: 'Xóm Data',
      url: 'https://www.facebook.com/groups/xomdata/',
      period: 'Apr 2025 - Present',
      color: 'var(--accent-community)',
      description: 'Building the most active data community in Vietnam, hosting webinars, and sharing technical insights.'
    },
    {
      category: 'community',
      categoryLabel: 'Community',
      role: 'Senior Data Instructor',
      company: 'MindX Technology School',
      url: 'https://mindx.edu.vn/',
      period: 'May 2023 - Present',
      color: 'var(--accent-community)',
      description: 'Training hundreds of student professionals in SQL, Python, Power BI, and Data Engineering fundamentals.'
    },
    {
      category: 'community',
      categoryLabel: 'Community',
      role: 'Data Curriculum Designer',
      company: 'MindX Technology School',
      url: 'https://mindx.edu.vn/',
      period: 'Feb 2025 - Dec 2025',
      color: 'var(--accent-community)',
      description: 'Designing comprehensive Data Analyst & Analytics Engineering learning tracks for academy programs.'
    },

    // Advisory
    {
      category: 'advisor',
      categoryLabel: 'Advisory',
      role: 'Technology & Data Advisor',
      company: 'AlphaSights',
      url: 'https://www.alphasights.com/',
      period: 'Apr 2023 - Present',
      color: 'var(--accent-advisor)',
      description: 'Providing expert consultations on Vietnamese fintech data infrastructure and tech hiring trends.'
    },
    {
      category: 'advisor',
      categoryLabel: 'Advisory',
      role: 'Expert Industry Consultant',
      company: 'Arches',
      url: 'https://arches-global.com/',
      period: 'Feb 2025 - Feb 2026',
      color: 'var(--accent-advisor)',
      description: 'Strategic advisory for global investment firms exploring Southeast Asian e-commerce & data analytics.'
    }
  ];

  const filteredExperiences = activeTab === 'all'
    ? allExperiences
    : allExperiences.filter(exp => exp.category === activeTab);

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Professional Path & Experience</h2>

        {/* Category Filter Pills */}
        <div className="filter-container" style={{
          display: 'flex',
          gap: '0.65rem',
          marginBottom: '2.5rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
          WebkitOverflowScrolling: 'touch',
          justifyContent: 'flex-start'
        }}>
          {categories.map(cat => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.15rem',
                  borderRadius: '9999px',
                  border: isActive ? `1.5px solid ${cat.color || 'var(--primary)'}` : '1px solid var(--outline-low)',
                  background: isActive ? 'var(--surface-container)' : 'var(--glass-bg)',
                  color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 4px 14px rgba(0,0,0,0.06)' : 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat.icon}
                <span>{cat.name}</span>
                <span style={{
                  fontSize: '0.75rem',
                  padding: '0.1rem 0.45rem',
                  borderRadius: '9999px',
                  background: isActive ? 'var(--tag-bg)' : 'var(--surface-low)',
                  color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                  fontWeight: 700
                }}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Spacious 2-Column Experience Grid for Readability */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: '1.75rem'
        }}>
          {filteredExperiences.map((exp, idx) => {
            const isPresent = exp.period.includes('Present');
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  border: '1px solid var(--outline-low)',
                  background: 'var(--surface-container)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Top Badges Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{
                        fontSize: '0.725rem', fontWeight: 800, textTransform: 'uppercase',
                        letterSpacing: '0.08em', color: exp.color, background: 'var(--tag-bg)',
                        padding: '0.25rem 0.6rem', borderRadius: '8px', border: '1px solid var(--tag-border)'
                      }}>
                        {exp.categoryLabel}
                      </span>
                      {isPresent && (
                        <span style={{
                          fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary)',
                          background: 'rgba(0, 98, 65, 0.1)', padding: '0.25rem 0.55rem', borderRadius: '8px',
                          display: 'flex', alignItems: 'center', gap: '0.3rem'
                        }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
                          Active
                        </span>
                      )}
                    </div>

                    <span style={{
                      fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)',
                      display: 'flex', alignItems: 'center', gap: '0.35rem'
                    }}>
                      <Calendar size={13} color="var(--text-muted)" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 style={{
                    fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Space Grotesk',
                    margin: '0 0 0.35rem 0', color: 'var(--text-main)', lineHeight: 1.3
                  }}>
                    {exp.role}
                  </h3>

                  {/* Company Name Link */}
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                      color: exp.color, fontWeight: 700, fontSize: '0.9rem',
                      textDecoration: 'none', marginBottom: '0.85rem'
                    }}
                  >
                    <Building2 size={14} />
                    <span>{exp.company}</span>
                    <ArrowUpRight size={13} />
                  </a>

                  {/* Description */}
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
