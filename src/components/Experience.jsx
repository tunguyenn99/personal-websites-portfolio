import React from 'react';
import { Briefcase, Clock, Users, Star } from 'lucide-react';

export default function Experience() {
  const columns = [
    {
      title: "Full-time",
      icon: <Briefcase size={16} />,
      accentColor: "var(--primary)",
      items: [
        {
          role: "Senior Data Analyst",
          company: "TNEX",
          url: "https://www.tnex.com.vn/",
          period: "Sept 2025 - Present",
          description: "Leading data-driven initiatives and advanced analytics for digital banking."
        },
        {
          role: "Middle Data Analyst",
          company: "VNPAY",
          url: "https://vnpay.vn/",
          period: "Apr 2023 - Sept 2025",
          description: "Processing millions of transactions to drive business growth in fintech."
        },
        {
          role: "Project Management Officer",
          company: "Shopee",
          url: "https://shopee.vn/",
          period: "Nov 2021 - Apr 2023",
          description: "Coordinating cross-functional projects in Southeast Asia's leading e-commerce platform."
        },
        {
          role: "Consultant Network Operator",
          company: "MPI, Vietnam",
          url: "https://www.mpi.gov.vn/",
          period: "Oct 2020 - Nov 2021",
          description: "Managing consultant networks and data for the Ministry of Planning and Investment."
        }
      ]
    },
    {
      title: "Part-time / Remote",
      icon: <Clock size={16} />,
      accentColor: "var(--secondary)",
      items: [
        {
          role: "Data Analytics Engineer",
          company: "UpBase",
          url: "https://upbase.asia/",
          period: "Jan 2026 - Present",
          description: "Optimizing e-commerce data landscapes and building automated analytics pipelines."
        },
        {
          role: "Analytics Engineer",
          company: "HV HOLDINGS",
          url: "https://hvgroup.com.vn/",
          period: "Feb 2026 - Present",
          description: "Architecting modern data stacks across diversified holdings."
        },
        {
          role: "Business Intelligence Developer",
          company: "Cloud Ace Vietnam",
          url: "https://vn.cloud-ace.com/",
          period: "Dec 2025 - Feb 2026",
          description: "GCP-focused BI solutions and data warehousing architecture."
        },
        {
          role: "Business Intelligence Developer",
          company: "FIXMA",
          url: "https://fixma.vn/",
          period: "Sept 2024 - Aug 2025",
          description: "Designing end-to-end BI systems for data-driven decision making."
        },
        {
          role: "Business Intelligence Analyst",
          company: "VietCleaning",
          url: "https://vietcleaning.vn/",
          period: "Jan 2025 - May 2025",
          description: "Analyzing operational efficiency and customer behaviors."
        },
        {
          role: "Outsource Data Analyst",
          company: "BraveBits",
          url: "https://bravebits.co/",
          period: "Mar 2024 - July 2024",
          description: "Support analytics projects for international Shopify applications."
        }
      ]
    },
    {
      title: "Community & Teaching",
      icon: <Users size={16} />,
      accentColor: "#f59e0b",
      items: [
        {
          role: "Co-Owner",
          company: "Xóm Data",
          url: "https://www.facebook.com/groups/xomdata/",
          period: "Apr 2025 - Present",
          description: "Building the most active data community in Vietnam and sharing domain knowledge."
        },
        {
          role: "Data Instructor",
          company: "MindX",
          url: "https://mindx.edu.vn/",
          period: "May 2023 - Present",
          description: "Training the next generation of data professionals in SQL, Python, and PowerBI."
        },
        {
          role: "Data Curriculum Designer",
          company: "MindX",
          url: "https://mindx.edu.vn/",
          period: "Feb 2025 - Dec 2025",
          description: "Developing comprehensive learning paths for Data Engineering and Analytics."
        }
      ]
    },
    {
      title: "Advisor",
      icon: <Star size={16} />,
      accentColor: "#10b981",
      items: [
        {
          role: "Advisor",
          company: "AlphaSights",
          url: "https://www.alphasights.com/",
          period: "Apr 2023 - Present",
          description: "Providing expert insights on the Vietnamese data and technology landscape."
        },
        {
          role: "Advisor",
          company: "Arches",
          url: "https://arches-global.com/",
          period: "Feb 2025 - Feb 2026",
          description: "Strategic consulting for global knowledge sharing platforms."
        }
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Professional Path</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
          alignItems: 'stretch'
        }}>
          {columns.map((col, ci) => (
            <div key={ci} className="glass-panel" style={{ padding: '1.75rem', height: '100%' }}>
              {/* Column Header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                marginBottom: '1.75rem', paddingBottom: '0.875rem',
                borderBottom: `1px solid ${col.accentColor}33`
              }}>
                <div style={{
                  width: '30px', height: '30px', borderRadius: '6px',
                  background: `${col.accentColor}22`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', color: col.accentColor, flexShrink: 0
                }}>
                  {col.icon}
                </div>
                <h3 style={{
                  fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.09em',
                  textTransform: 'uppercase', color: col.accentColor, lineHeight: 1.2
                }}>
                  {col.title}
                </h3>
              </div>

              {/* Timeline items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: '0', top: '0', bottom: '0', width: '1px',
                  background: `linear-gradient(180deg, ${col.accentColor} 0%, transparent 100%)`, opacity: 0.2
                }} />
                {col.items.map((exp, ei) => (
                  <div key={ei} style={{ paddingLeft: '1.25rem', position: 'relative' }}>
                    <div style={{
                      position: 'absolute', left: '-4px', top: '0.4rem',
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: col.accentColor, boxShadow: `0 0 6px ${col.accentColor}`
                    }} />

                    {/* Role + Company + Period on same row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                      <h4 style={{
                        fontSize: '0.9rem', fontWeight: 700, fontFamily: 'Space Grotesk',
                        lineHeight: 1.3, margin: 0
                      }}>
                        {exp.role}
                      </h4>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>@</span>
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: col.accentColor, fontWeight: 600, fontSize: '0.8rem',
                          textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em'
                        }}
                      >
                        {exp.company}
                      </a>
                      <span style={{
                        display: 'inline-block', fontSize: '0.62rem', padding: '0.1rem 0.5rem',
                        borderRadius: '9999px',
                        background: exp.period.includes('Present') ? `${col.accentColor}15` : 'transparent',
                        color: exp.period.includes('Present') ? col.accentColor : 'var(--text-muted)',
                        border: exp.period.includes('Present') ? `1px solid ${col.accentColor}` : 'none',
                        outline: 'none',
                        boxShadow: exp.period.includes('Present') ? `0 0 8px ${col.accentColor}66` : 'none',
                        fontWeight: exp.period.includes('Present') ? 700 : 400,
                      }}>
                        {exp.period}
                      </span>
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.845rem', lineHeight: 1.6, margin: 0 }}>
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
