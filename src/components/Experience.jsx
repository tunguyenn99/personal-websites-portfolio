import React from 'react';
import { Briefcase, Clock } from 'lucide-react';

export default function Experience() {
  const fullTime = [
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
  ];

  const partTime = [
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
      description: "Architecting modern data stacks and ensuring data integrity across diversified holdings."
    },
    {
      role: "Co-Owner",
      company: "Xóm Data",
      url: "https://www.facebook.com/groups/xomdata/",
      period: "Apr 2025 - Present",
      description: "Building the most active data community in Vietnam and sharing domain knowledge."
    },
    {
      role: "Data Instructor",
      company: "MindX Technology School",
      url: "https://mindx.edu.vn/",
      period: "May 2023 - Present",
      description: "Training the next generation of data professionals in SQL, Python, and PowerBI."
    },
    {
      role: "Advisor",
      company: "AlphaSights",
      url: "https://www.alphasights.com/",
      period: "Apr 2023 - Present",
      description: "Providing expert insights on the Vietnamese data and technology landscape."
    },
    {
      role: "Data Curriculum Designer",
      company: "MindX Technology School",
      url: "https://mindx.edu.vn/",
      period: "Feb 2025 - Dec 2025",
      description: "Developing comprehensive learning paths for Data Engineering and Analytics."
    },
    {
      role: "Business Intelligence Developer",
      company: "Cloud Ace Vietnam",
      url: "https://vn.cloud-ace.com/",
      period: "Dec 2025 - Feb 2026",
      description: "GCP-focused BI solutions and data warehousing architecture."
    },
    {
      role: "Advisor",
      company: "Arches",
      url: "https://arches-global.com/",
      period: "Feb 2025 - Feb 2026",
      description: "Strategic consulting for global knowledge sharing platforms."
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
  ];

  const ExperienceColumn = ({ title, icon, items, accentColor }) => (
    <div style={{ flex: 1, minWidth: 0 }}>
      {/* Column Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        marginBottom: '2.5rem', paddingBottom: '1rem',
        borderBottom: `1px solid ${accentColor}33`
      }}>
        <div style={{
          width: '36px', height: '36px', borderRadius: '8px',
          background: `${accentColor}22`, display: 'flex', alignItems: 'center',
          justifyContent: 'center', flexShrink: 0
        }}>
          {icon}
        </div>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: accentColor }}>
          {title}
        </h3>
      </div>

      {/* Timeline */}
      <div style={{ display: 'grid', gap: '2.25rem', position: 'relative' }}>
        <div style={{
          position: 'absolute', left: '0', top: '0', bottom: '0', width: '1px',
          background: `linear-gradient(180deg, ${accentColor} 0%, transparent 100%)`, opacity: 0.25
        }} />
        {items.map((exp, index) => (
          <div key={index} style={{ paddingLeft: '2rem', position: 'relative' }}>
            <div style={{
              position: 'absolute', left: '-4px', top: '0.45rem',
              width: '9px', height: '9px', borderRadius: '50%',
              background: accentColor, boxShadow: `0 0 8px ${accentColor}`
            }} />
            <div style={{ marginBottom: '0.4rem' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, fontFamily: 'Space Grotesk', marginBottom: '0.2rem', lineHeight: 1.3 }}>
                {exp.role}
              </h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: accentColor, fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.07em' }}
                >
                  {exp.company}
                </a>
                <span style={{
                  fontSize: '0.7rem', padding: '0.15rem 0.6rem', borderRadius: '9999px',
                  background: `${accentColor}15`, color: accentColor, border: `1px solid ${accentColor}30`,
                  fontWeight: 500, whiteSpace: 'nowrap'
                }}>
                  {exp.period}
                </span>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65 }}>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Professional Path</h2>
        <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <ExperienceColumn
            title="Full-time Professional"
            icon={<Briefcase size={18} color="var(--primary)" />}
            items={fullTime}
            accentColor="var(--primary)"
          />
          <ExperienceColumn
            title="Part-time / Remote / Outsourcing"
            icon={<Clock size={18} color="var(--secondary)" />}
            items={partTime}
            accentColor="var(--secondary)"
          />
        </div>
      </div>
    </section>
  );
}
