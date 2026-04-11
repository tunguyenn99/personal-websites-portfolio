import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Senior Data Analyst",
      company: "TNEX",
      url: "https://www.tnex.com.vn/",
      period: "Sept 2025 - Present",
      description: "Leading data-driven initiatives and advanced analytics for digital banking."
    },
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
      role: "Middle Data Analyst",
      company: "VNPAY",
      url: "https://vnpay.vn/",
      period: "Apr 2023 - Sept 2025",
      description: "Processing millions of transactions to drive business growth in fintech."
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

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Professional Path</h2>
        <div style={{ display: 'grid', gap: '3rem', maxWidth: '900px', position: 'relative' }}>
          {/* Vertical Timeline Line */}
          <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '1px', background: 'linear-gradient(180deg, var(--primary) 0%, transparent 100%)', opacity: 0.3 }}></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="animate-fade-in" style={{ paddingLeft: '2.5rem', position: 'relative', animationDelay: `${index * 0.2}s` }}>
              <div style={{
                position: 'absolute', left: '-4.5px', top: '0.5rem', width: '10px', height: '10px',
                borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)'
              }}></div>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: 'Space Grotesk' }}>{exp.role}</h3>
                  <span className="tag" style={{fontSize: '0.7rem'}}>{exp.period}</span>
                </div>
                <div style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {exp.url ? (
                    <a href={exp.url} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'all 0.3s' }} onMouseOver={e => e.target.style.borderBottom = '1px solid var(--secondary)'} onMouseOut={e => e.target.style.borderBottom = '1px solid transparent'}>
                      {exp.company}
                    </a>
                  ) : exp.company}
                </div>
              </div>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', lineHeight: 1.7 }}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
