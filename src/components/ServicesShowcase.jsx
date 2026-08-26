import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

export default function ServicesShowcase({ onOpenContact, onOpenFrameworks }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cybersecurity', name: 'Cybersecurity & Compliance' },
    { id: 'risk', name: 'Risk & Governance' },
    { id: 'audit', name: 'Audit & Assurance' },
    { id: 'managed', name: 'Managed Services' },
    { id: 'program', name: 'Program & Transformation' }
  ];

  // Only the KEY services shown on this page — short, scannable
  const featuredOfferings = [
    {
      id: 'soc',
      code: 'SOC 1 / 2 / 3',
      name: 'SOC Audits',
      category: 'cybersecurity',
      desc: 'End-to-end audit readiness, controls mapping, evidence collection, and auditor liaison for Type I & II.',
      badge: 'Cybersecurity',
      img: 'https://images.unsplash.com/photo-1507209575474-fa671a6b3f45?w=480&q=80&auto=format&fit=crop'
    },
    {
      id: 'iso27001',
      code: 'ISO 27001',
      name: 'ISO 27001 Certification',
      category: 'cybersecurity',
      desc: 'ISMS design, Annex A controls implementation, and certification readiness for Stage 1 & Stage 2.',
      badge: 'Cybersecurity',
      img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=480&q=80&auto=format&fit=crop'
    },
    {
      id: 'iso42001',
      code: 'ISO 42001',
      name: 'AI Management Systems',
      category: 'cybersecurity',
      desc: 'Premier standard for AI Governance, risk management, and AI transparency programs.',
      badge: 'AI Leadership',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=480&q=80&auto=format&fit=crop'
    },
    {
      id: 'tprm',
      code: 'TPRM',
      name: 'Third Party Risk Management',
      category: 'risk',
      desc: 'Vendor security due diligence, questionnaire evaluations, and supply chain risk oversight.',
      badge: 'Risk & Governance',
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=480&q=80&auto=format&fit=crop'
    },
    {
      id: 'itgc',
      code: 'ITGC / ITAC',
      name: 'ITGC & ITAC Testing',
      category: 'audit',
      desc: 'Rigorous validation of IT General Controls, database management, and application controls.',
      badge: 'Audit & Assurance',
      img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=480&q=80&auto=format&fit=crop'
    },
    {
      id: 'managed-compliance',
      code: 'Managed',
      name: 'Compliance Managed Services',
      category: 'managed',
      desc: 'We run your day-to-day compliance operations — evidence collection, monitoring, and reporting.',
      badge: 'Managed Services',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=480&q=80&auto=format&fit=crop'
    }
  ];

  const filteredOfferings = activeCategory === 'all'
    ? featuredOfferings
    : featuredOfferings.filter((o) => o.category === activeCategory);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <ShieldCheck size={16} className="badge-icon" />
            <span>Services</span>
          </div>
          <h2>Your Compliance Journey.<br />Our Commitment.</h2>
        </div>

        {/* Description banner strip */}
        <div className="services-desc-banner">
          <p>
            Whether you're preparing for an audit, strengthening your cybersecurity posture, building a compliance function, or scaling your team — Gaussians works alongside you every step of the way.
          </p>
        </div>

        {/* Category filters */}
        <div className="services-categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Featured services grid */}
        <div className="services-grid">
          {filteredOfferings.map((item) => (
            <div className="service-card glass-card" key={item.id}>
              <div className="service-card-header">
                <span className="service-code-badge">{item.code}</span>
                <span className="service-category-badge">{item.badge}</span>
              </div>
              <h3 className="service-card-title">{item.name}</h3>
              <p className="service-card-desc">{item.desc}</p>
              <button className="service-card-btn" onClick={() => onOpenContact(item.name)}>
                Discuss Service <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Explore More CTA */}
        <div className="explore-more-banner">
          <div className="explore-more-content">
            <div className="explore-more-text">
              <h3 className="explore-more-title">Explore Our Full Service Portfolio</h3>
              <p className="explore-more-desc">
                We support 15+ global frameworks across cybersecurity, AI governance, privacy, risk, audit, and managed services. Tell us what you need.
              </p>
              <div className="explore-more-tags">
                <span className="explore-tag">GDPR / CCPA</span>
                <span className="explore-tag">HIPAA</span>
                <span className="explore-tag">PCI DSS</span>
                <span className="explore-tag">NIST CSF / AI RMF</span>
                <span className="explore-tag">HITRUST</span>
                <span className="explore-tag">CMMC</span>
                <span className="explore-tag">SOX / ITGC</span>
                <span className="explore-tag">CSA STAR</span>
                <span className="explore-tag">+ More</span>
              </div>
            </div>
            <button
              className="btn-primary explore-more-btn"
              onClick={onOpenFrameworks}
            >
              Explore Frameworks Catalog <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 6rem 0;
          background: var(--bg-soft-purple);
        }

        .services-desc-banner {
          background: linear-gradient(135deg, rgba(90, 56, 253, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
          border: 1px solid var(--border-purple);
          border-left: 4px solid var(--primary);
          border-radius: var(--radius-md);
          padding: 1.1rem 1.75rem;
          margin-bottom: 2rem;
        }

        .services-desc-banner p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin: 0;
        }

        .services-categories {
          display: flex;
          justify-content: center;
          gap: 0.65rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .cat-filter-btn {
          padding: 0.55rem 1.25rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-purple);
          background: #FFFFFF;
          color: var(--text-dark);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .cat-filter-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .cat-filter-btn.active {
          background: var(--primary);
          color: #FFFFFF;
          border-color: var(--primary);
          box-shadow: 0 6px 20px rgba(90, 56, 253, 0.25);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .service-card {
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: var(--transition-normal);
        }

        .service-card:hover {
          border-color: var(--primary);
          box-shadow: 0 10px 30px rgba(90, 56, 253, 0.12);
          transform: translateY(-4px);
        }

        /* Photo header */
        /* Card body */
        .service-card {
          padding: 2rem;
          overflow: visible;
          min-height: 230px;
          justify-content: space-between;
        }

        .service-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.1rem;
        }

        .service-code-badge {
          background: var(--primary-light);
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: var(--fs-small);
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-sm);
        }

        .service-category-badge {
          font-size: var(--fs-small);
          font-weight: 600;
          color: var(--text-muted);
        }

        .service-card-title {
          font-size: var(--fs-card);
          margin-bottom: 0.65rem;
          color: var(--text-dark);
          font-weight: 700;
        }

        .service-card-desc {
          font-size: var(--fs-body);
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .service-card-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: transparent;
          border: none;
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-small);
          cursor: pointer;
          padding: 0;
          transition: var(--transition-fast);
          width: fit-content;
        }

        .service-card-btn:hover {
          gap: 0.65rem;
          color: var(--primary-hover);
        }

        /* Explore More Banner */
        .explore-more-banner {
          background: linear-gradient(135deg, var(--primary) 0%, #3B1AD8 100%);
          border-radius: var(--radius-lg);
          padding: 2.75rem 3rem;
          box-shadow: 0 18px 50px rgba(90, 56, 253, 0.28);
        }

        .explore-more-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
        }

        .explore-more-text {
          flex: 1;
        }

        .explore-more-title {
          font-size: var(--fs-section);
          color: #FFFFFF;
          margin-bottom: 0.5rem;
        }

        .explore-more-desc {
          font-size: var(--fs-body);
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          max-width: 600px;
        }

        .explore-more-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .explore-tag {
          padding: 0.3rem 0.85rem;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-small);
          color: #FFFFFF;
          backdrop-filter: blur(4px);
        }

        .explore-more-btn {
          background: #FFFFFF !important;
          color: var(--primary) !important;
          flex-shrink: 0;
          font-weight: 700;
          font-size: var(--fs-body);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.18);
          white-space: nowrap;
        }

        .explore-more-btn:hover {
          background: #F3E8FF !important;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .explore-more-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .explore-more-banner {
            padding: 2rem 1.5rem;
          }
          .explore-more-title {
            font-size: 1.4rem;
          }
          .explore-more-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
