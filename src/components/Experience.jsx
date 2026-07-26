import React, { useState } from 'react';
import {
  Briefcase, Clock, Users, Star, ArrowUpRight, Calendar,
  Building2, GitCommit, LayoutList, Layers
} from 'lucide-react';

export default function Experience() {
  const [viewMode, setViewMode] = useState('timeline'); // 'timeline' | 'category'
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Roles', count: 15 },
    { id: 'fulltime', name: 'Full-time', count: 4, color: 'var(--accent-fulltime)', icon: <Briefcase size={14} /> },
    { id: 'parttime', name: 'Part-time / Consulting', count: 6, color: 'var(--accent-parttime)', icon: <Clock size={14} /> },
    { id: 'community', name: 'Community & Teaching', count: 3, color: 'var(--accent-community)', icon: <Users size={14} /> },
    { id: 'advisor', name: 'Advisory', count: 2, color: 'var(--accent-advisor)', icon: <Star size={14} /> }
  ];

  // Chronological timeline data (Sorted newest to oldest)
  const timelineData = [
    {
      year: '2026',
      role: 'Analytics Engineer',
      company: 'HV HOLDINGS',
      url: 'https://hvgroup.com.vn/',
      period: 'Feb 2026 - Present',
      category: 'parttime',
      categoryLabel: 'Part-time',
      color: 'var(--accent-parttime)',
      description: 'Architecting modern cloud data stacks and dbt dimensional modeling across holdings.'
    },
    {
      year: '2026',
      role: 'Data Analytics Engineer',
      company: 'UpBase',
      url: 'https://upbase.asia/',
      period: 'Jan 2026 - Present',
      category: 'parttime',
      categoryLabel: 'Part-time',
      color: 'var(--accent-parttime)',
      description: 'Optimizing e-commerce data pipelines, ETL automation, and multi-channel sales analytics.'
    },
    {
      year: '2025',
      role: 'Business Intelligence Developer',
      company: 'Cloud Ace Vietnam',
      url: 'https://vn.cloud-ace.com/',
      period: 'Dec 2025 - Feb 2026',
      category: 'parttime',
      categoryLabel: 'Part-time',
      color: 'var(--accent-parttime)',
      description: 'GCP-focused BI solutions, BigQuery data modeling, and enterprise reporting.'
    },
    {
      year: '2025',
      role: 'Senior Data Analyst',
      company: 'TNEX',
      url: 'https://www.tnex.com.vn/',
      period: 'Sept 2025 - Present',
      category: 'fulltime',
      categoryLabel: 'Full-time',
      color: 'var(--accent-fulltime)',
      description: 'Leading data-driven initiatives, user growth analytics, and advanced financial reporting for digital banking.'
    },
    {
      year: '2025',
      role: 'Co-Owner & Community Leader',
      company: 'Xóm Data',
      url: 'https://www.facebook.com/groups/xomdata/',
      period: 'Apr 2025 - Present',
      category: 'community',
      categoryLabel: 'Community',
      color: 'var(--accent-community)',
      description: 'Building the most active data community in Vietnam, hosting webinars, and sharing technical insights.'
    },
    {
      year: '2025',
      role: 'Data Curriculum Designer',
      company: 'MindX Technology School',
      url: 'https://mindx.edu.vn/',
      period: 'Feb 2025 - Dec 2025',
      category: 'community',
      categoryLabel: 'Community',
      color: 'var(--accent-community)',
      description: 'Designing comprehensive Data Analyst & Analytics Engineering learning tracks for academy programs.'
    },
    {
      year: '2025',
      role: 'Expert Industry Consultant',
      company: 'Arches',
      url: 'https://arches-global.com/',
      period: 'Feb 2025 - Feb 2026',
      category: 'advisor',
      categoryLabel: 'Advisory',
      color: 'var(--accent-advisor)',
      description: 'Strategic advisory for global investment firms exploring Southeast Asian e-commerce & data analytics.'
    },
    {
      year: '2025',
      role: 'Business Intelligence Analyst',
      company: 'VietCleaning',
      url: 'https://vietcleaning.vn/',
      period: 'Jan 2025 - May 2025',
      category: 'parttime',
      categoryLabel: 'Part-time',
      color: 'var(--accent-parttime)',
      description: 'Analyzing operational efficiency, customer retention, and service booking metrics.'
    },
    {
      year: '2024',
      role: 'Business Intelligence Developer',
      company: 'FIXMA',
      url: 'https://fixma.vn/',
      period: 'Sept 2024 - Aug 2025',
      category: 'parttime',
      categoryLabel: 'Part-time',
      color: 'var(--accent-parttime)',
      description: 'Designing end-to-end BI systems and Looker Studio dashboards for data-driven decision making.'
    },
    {
      year: '2024',
      role: 'Outsource Data Analyst',
      company: 'BraveBits',
      url: 'https://bravebits.co/',
      period: 'Mar 2024 - July 2024',
      category: 'parttime',
      categoryLabel: 'Part-time',
      color: 'var(--accent-parttime)',
      description: 'Support product analytics and user telemetry for global Shopify apps.'
    },
    {
      year: '2023',
      role: 'Middle Data Analyst',
      company: 'VNPAY',
      url: 'https://vnpay.vn/',
      period: 'Apr 2023 - Sept 2025',
      category: 'fulltime',
      categoryLabel: 'Full-time',
      color: 'var(--accent-fulltime)',
      description: 'Processing millions of payment transactions daily to drive business growth and risk analysis in top-tier fintech.'
    },
    {
      year: '2023',
      role: 'Senior Data Instructor',
      company: 'MindX Technology School',
      url: 'https://mindx.edu.vn/',
      period: 'May 2023 - Present',
      category: 'community',
      categoryLabel: 'Community',
      color: 'var(--accent-community)',
      description: 'Training student professionals in SQL, Python, Power BI, and Data Engineering fundamentals.'
    },
    {
      year: '2023',
      role: 'Technology & Data Advisor',
      company: 'AlphaSights',
      url: 'https://www.alphasights.com/',
      period: 'Apr 2023 - Present',
      category: 'advisor',
      categoryLabel: 'Advisory',
      color: 'var(--accent-advisor)',
      description: 'Providing expert consultations on Vietnamese fintech data infrastructure and tech hiring trends.'
    },
    {
      year: '2021',
      role: 'Project Management Officer',
      company: 'Shopee',
      url: 'https://shopee.vn/',
      period: 'Nov 2021 - Apr 2023',
      category: 'fulltime',
      categoryLabel: 'Full-time',
      color: 'var(--accent-fulltime)',
      description: 'Coordinating cross-functional e-commerce operational projects and seller analytics dashboards across SEA.'
    },
    {
      year: '2020',
      role: 'Consultant Network Operator',
      company: 'MPI, Vietnam',
      url: 'https://www.mpi.gov.vn/',
      period: 'Oct 2020 - Nov 2021',
      category: 'fulltime',
      categoryLabel: 'Full-time',
      color: 'var(--accent-fulltime)',
      description: 'Managing consultant networks and national enterprise databases for Ministry of Planning and Investment.'
    }
  ];

  const filteredData = selectedCategory === 'all'
    ? timelineData
    : timelineData.filter(item => item.category === selectedCategory);

  // Grouped by Category data
  const groupedCategories = [
    {
      title: "Full-time Enterprise Roles",
      color: "var(--accent-fulltime)",
      icon: <Briefcase size={18} color="var(--accent-fulltime)" />,
      items: timelineData.filter(item => item.category === 'fulltime')
    },
    {
      title: "Part-time & Analytics Engineering",
      color: "var(--accent-parttime)",
      icon: <Clock size={18} color="var(--accent-parttime)" />,
      items: timelineData.filter(item => item.category === 'parttime')
    },
    {
      title: "Community & Education",
      color: "var(--accent-community)",
      icon: <Users size={18} color="var(--accent-community)" />,
      items: timelineData.filter(item => item.category === 'community')
    },
    {
      title: "Advisory & Expert Consultations",
      color: "var(--accent-advisor)",
      icon: <Star size={18} color="var(--accent-advisor)" />,
      items: timelineData.filter(item => item.category === 'advisor')
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header with Left Alignment */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title">Professional Path & Experience</h2>
          <div style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            marginTop: '-1rem'
          }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0, maxWidth: '640px' }}>
              My career journey across enterprise fintech, analytics engineering, community leadership, and advisory.
            </p>

            {/* View Mode Switcher */}
            <div style={{
              display: 'inline-flex', gap: '0.5rem',
              background: 'var(--surface-low)', padding: '0.35rem', borderRadius: '9999px',
              border: '1px solid var(--outline-low)'
            }}>
              <button
                onClick={() => setViewMode('timeline')}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.55rem 1.25rem', borderRadius: '9999px',
                  border: 'none',
                  background: viewMode === 'timeline' ? 'var(--primary)' : 'transparent',
                  color: viewMode === 'timeline' ? 'var(--on-primary)' : 'var(--text-muted)',
                  cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem', transition: 'all 0.3s'
                }}
              >
                <GitCommit size={15} /> Linear Timeline
              </button>
              <button
                onClick={() => setViewMode('category')}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.55rem 1.25rem', borderRadius: '9999px',
                  border: 'none',
                  background: viewMode === 'category' ? 'var(--primary)' : 'transparent',
                  color: viewMode === 'category' ? 'var(--on-primary)' : 'var(--text-muted)',
                  cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem', transition: 'all 0.3s'
                }}
              >
                <Layers size={15} /> Grouped Columns
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Sleek Linear Timeline */}
        {viewMode === 'timeline' && (
          <div>
            {/* Category Filter Badges */}
            <div className="filter-container" style={{
              display: 'flex', gap: '0.6rem', marginBottom: '2.5rem',
              overflowX: 'auto', paddingBottom: '0.5rem', WebkitOverflowScrolling: 'touch'
            }}>
              {categories.map(cat => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.45rem',
                      padding: '0.5rem 1rem', borderRadius: '9999px',
                      border: isActive ? `1.5px solid ${cat.color || 'var(--primary)'}` : '1px solid var(--outline-low)',
                      background: isActive ? 'var(--surface-container)' : 'var(--glass-bg)',
                      color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                      fontWeight: isActive ? 700 : 500, fontSize: '0.825rem',
                      cursor: 'pointer', transition: 'all 0.25s', whiteSpace: 'nowrap'
                    }}
                  >
                    {cat.icon}
                    <span>{cat.name}</span>
                    <span style={{
                      fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: '9999px',
                      background: isActive ? 'var(--tag-bg)' : 'var(--surface-low)',
                      color: isActive ? 'var(--primary)' : 'var(--text-muted)', fontWeight: 700
                    }}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Vertical Timeline Stream */}
            <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
              {/* Central Glowing Line */}
              <div style={{
                position: 'absolute', left: '7px', top: '10px', bottom: '10px', width: '2px',
                background: 'linear-gradient(180deg, var(--primary) 0%, var(--accent-parttime) 50%, var(--outline-low) 100%)',
                opacity: 0.4
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {filteredData.map((exp, idx) => {
                  const isPresent = exp.period.includes('Present');
                  return (
                    <div key={idx} style={{ position: 'relative' }}>
                      {/* Timeline Node Icon */}
                      <div style={{
                        position: 'absolute', left: '-1.5rem', top: '1.25rem', transform: 'translateX(-50%)',
                        width: '14px', height: '14px', borderRadius: '50%',
                        background: exp.color, border: '3px solid var(--surface-container)',
                        boxShadow: `0 0 10px ${exp.color}`, zIndex: 2
                      }} />

                      {/* Timeline Item Card */}
                      <div className="glass-panel" style={{
                        padding: '1.5rem 1.75rem', border: '1px solid var(--outline-low)',
                        background: 'var(--surface-container)', transition: 'all 0.25s ease'
                      }}>
                        <div style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                          flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.65rem'
                        }}>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, fontFamily: 'Space Grotesk', margin: 0, color: 'var(--text-main)' }}>
                                {exp.role}
                              </h3>
                              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>@</span>
                              <a
                                href={exp.url}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                                  color: exp.color, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none'
                                }}
                              >
                                {exp.company} <ArrowUpRight size={13} />
                              </a>
                            </div>
                          </div>

                          {/* Period & Category Badges */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{
                              fontSize: '0.725rem', fontWeight: 800, textTransform: 'uppercase',
                              letterSpacing: '0.08em', color: exp.color, background: 'var(--tag-bg)',
                              padding: '0.25rem 0.6rem', borderRadius: '8px', border: '1px solid var(--tag-border)'
                            }}>
                              {exp.categoryLabel}
                            </span>
                            <span style={{
                              fontSize: '0.8rem', fontWeight: 600, color: isPresent ? 'var(--primary)' : 'var(--text-muted)',
                              background: isPresent ? 'rgba(0, 98, 65, 0.08)' : 'var(--surface-low)',
                              padding: '0.25rem 0.65rem', borderRadius: '8px', border: '1px solid var(--outline-low)'
                            }}>
                              {exp.period}
                            </span>
                          </div>
                        </div>

                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* View Mode 2: Grouped Category Columns */}
        {viewMode === 'category' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}>
            {groupedCategories.map((group, gIdx) => (
              <div key={gIdx} className="glass-panel" style={{
                padding: '1.75rem', border: '1px solid var(--outline-low)',
                background: 'var(--surface-container)', display: 'flex', flexDirection: 'column', gap: '1.5rem'
              }}>
                {/* Column Header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.65rem',
                  paddingBottom: '1rem', borderBottom: `2px solid ${group.color}44`
                }}>
                  <div style={{
                    padding: '0.5rem', borderRadius: '10px', background: `${group.color}15`, display: 'flex'
                  }}>
                    {group.icon}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'Space Grotesk', margin: 0, color: 'var(--text-main)' }}>
                    {group.title}
                  </h3>
                </div>

                {/* Items under Category */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} style={{
                      padding: '1rem', borderRadius: '12px', background: 'var(--surface-low)',
                      border: '1px solid var(--outline-low)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 700, fontFamily: 'Space Grotesk', margin: 0 }}>
                          {item.role}
                        </h4>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: group.color, fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none' }}
                        >
                          {item.company} ↗
                        </a>
                      </div>

                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                        {item.period}
                      </span>

                      <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                        {item.description}
                      </p>
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
