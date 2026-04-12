import React, { useState, useMemo, useEffect } from 'react';
import { Award, ExternalLink, Calendar, Briefcase, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import certs from '../data/certifications.json';

export default function Certifications() {
  const [selectedOrg, setSelectedOrg] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Derive unique categories/organizations with counts
  const orgs = useMemo(() => {
    const counts = certs.reduce((acc, cert) => {
      acc[cert.organization] = (acc[cert.organization] || 0) + 1;
      return acc;
    }, {});

    const sorted = Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => {
        if (a.name === 'Others') return 1;
        if (b.name === 'Others') return -1;
        return b.count - a.count;
      });

    return [
      { name: 'All', count: certs.length },
      ...sorted
    ];
  }, []);

  // Filtered certifications
  const filteredCerts = useMemo(() => {
    if (selectedOrg === 'All') return certs;
    return certs.filter(cert => cert.organization === selectedOrg);
  }, [selectedOrg]);

  // Paginated certifications
  const totalPages = Math.ceil(filteredCerts.length / itemsPerPage);
  const paginatedCerts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredCerts.slice(start, start + itemsPerPage);
  }, [filteredCerts, currentPage]);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedOrg]);

  // Smooth scroll to section top on page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById('certifications').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Professional Certifications</h2>
            <div style={{
              padding: '0.4rem 1rem',
              background: 'var(--primary)',
              color: 'var(--on-primary)',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              boxShadow: '0 0 20px rgba(170, 221, 81, 0.3)'
            }}>
              {certs.length} Verified
            </div>
          </div>

          {/* Filter Chips */}
          <div className="filter-container" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            paddingBottom: '0.5rem',
            overflowX: 'auto'
          }}>
            {orgs.map(org => (
              <button
                key={org.name}
                onClick={() => setSelectedOrg(org.name)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '100px',
                  border: '1px solid',
                  borderColor: selectedOrg === org.name ? 'var(--primary)' : 'var(--outline-low)',
                  background: selectedOrg === org.name ? 'rgba(170, 221, 81, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                  color: selectedOrg === org.name ? 'var(--primary)' : 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {org.name}
                <span style={{
                  fontSize: '0.75rem',
                  opacity: 0.6,
                  background: selectedOrg === org.name ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                  color: selectedOrg === org.name ? 'var(--on-primary)' : 'inherit',
                  padding: '2px 8px',
                  borderRadius: '10px'
                }}>
                  {org.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          minHeight: '600px' // Keep height consistent during transitions
        }}>
          {paginatedCerts.map((cert, index) => (
            <div
              key={cert.title + index}
              className="glass-panel cert-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid var(--outline-low)',
                background: 'rgba(255, 255, 255, 0.02)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px',
                  flexShrink: 0,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: '0.5rem',
                    color: 'var(--text-main)',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {cert.title}
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600 }}>
                    <Briefcase size={14} /> {cert.organization}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  <Calendar size={14} /> {cert.date}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: 'var(--secondary)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                  className="cert-link"
                >
                  Verify <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div style={{
            marginTop: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--outline-low)',
                color: 'var(--text-main)',
                padding: '0.75rem',
                borderRadius: '12px',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                opacity: currentPage === 1 ? 0.3 : 1
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    border: '1px solid',
                    borderColor: currentPage === i + 1 ? 'var(--primary)' : 'var(--outline-low)',
                    background: currentPage === i + 1 ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                    color: currentPage === i + 1 ? 'var(--on-primary)' : 'var(--text-main)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--outline-low)',
                color: 'var(--text-main)',
                padding: '0.75rem',
                borderRadius: '12px',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                opacity: currentPage === totalPages ? 0.3 : 1
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        <style>{`
          .filter-container::-webkit-scrollbar {
            height: 4px;
          }
          .filter-container::-webkit-scrollbar-thumb {
            background: var(--outline-low);
            border-radius: 10px;
          }
          .cert-card:hover {
            background: rgba(255, 255, 255, 0.05) !important;
            border-color: var(--primary) !important;
            transform: translateY(-8px) scale(1.02) !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
          }
          .cert-link:hover {
            color: var(--primary) !important;
            text-decoration: underline !important;
          }
        `}</style>
      </div>
    </section>
  );
}
