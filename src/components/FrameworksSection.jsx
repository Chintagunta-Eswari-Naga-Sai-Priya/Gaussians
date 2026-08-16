import React, { useState } from 'react';
import { ShieldCheck, Cpu, Lock, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FrameworksSection({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Frameworks' },
    { id: 'security', name: 'Security & Governance' },
    { id: 'ai', name: 'AI & Emerging Tech' },
    { id: 'privacy', name: 'Privacy & Data' },
    { id: 'cloud', name: 'Cloud & Infrastructure' }
  ];

  const frameworks = [
    {
      id: 'soc2',
      code: 'SOC 2',
      name: 'SOC 1, SOC 2 & SOC 3',
      category: 'security',
      desc: 'Preparation, controls mapping, evidence collection, and auditor liaison for Type I & Type II audits across Trust Services Criteria.',
      badge: 'Core Audits',
      popular: true
    },
    {
      id: 'iso27001',
      code: 'ISO 27001',
      name: 'ISO/IEC 27001:2022',
      category: 'security',
      desc: 'ISMS program design, Annex A controls implementation, internal audits, and certification readiness for Stage 1 & Stage 2 audits.',
      badge: 'Global Standard',
      popular: true
    },
    {
      id: 'iso42001',
      code: 'ISO 42001',
      name: 'ISO/IEC 42001 (AI MS)',
      category: 'ai',
      desc: 'The premier global standard for Artificial Intelligence Management Systems (AIMS), risk management, and AI transparency.',
      badge: 'AI Leadership',
      popular: true
    },
    {
      id: 'nist_ai',
      code: 'NIST AI RMF',
      name: 'NIST AI Risk Management',
      category: 'ai',
      desc: 'Govern, Map, Measure, and Manage functions for trustworthy, safe, and transparent AI system deployments.',
      badge: 'Emerging Tech'
    },
    {
      id: 'nist_csf',
      code: 'NIST CSF',
      name: 'NIST Cybersecurity Framework 2.0',
      category: 'security',
      desc: 'Comprehensive maturity assessments, gap remediation, and target profile alignment across the 6 core CSF functions.',
      badge: 'Enterprise Standard'
    },
    {
      id: 'hitrust',
      code: 'HITRUST',
      name: 'HITRUST CSF (r2 & e1)',
      category: 'security',
      desc: 'MyCSF portal management, validated assessment preparation, and CAP management for healthcare & tech vendors.',
      badge: 'Healthcare & Tech'
    },
    {
      id: 'pci_dss',
      code: 'PCI DSS',
      name: 'PCI DSS v4.0',
      category: 'privacy',
      desc: 'CDE scope reduction, SAQ validation, ROC audit readiness, and continuous payment security monitoring.',
      badge: 'Fintech'
    },
    {
      id: 'gdpr_ccpa',
      code: 'GDPR / CCPA',
      name: 'GDPR, CCPA & Privacy Laws',
      category: 'privacy',
      desc: 'Data mapping, Privacy Impact Assessments (PIA/DPIA), DSAR workflows, and cross-border privacy compliance.',
      badge: 'Data Protection'
    },
    {
      id: 'csa_star',
      code: 'CSA STAR',
      name: 'Cloud Security Alliance STAR',
      category: 'cloud',
      desc: 'Cloud Control Matrix (CCM) mapping, CAIQ self-assessment, and STAR Level 1 & Level 2 certification readiness.',
      badge: 'Cloud Assurance'
    },
    {
      id: 'hipaa',
      code: 'HIPAA',
      name: 'HIPAA Security & Privacy Rules',
      category: 'privacy',
      desc: 'PHI protection, Administrative & Technical Safeguards, Business Associate Agreement (BAA) reviews.',
      badge: 'HealthTech'
    },
    {
      id: 'cmmc',
      code: 'CMMC',
      name: 'CMMC & Cyber Essentials',
      category: 'security',
      desc: 'US DoD supply chain requirements, NIST SP 800-171 readiness, SSP authoring, and assessment prep.',
      badge: 'Defense & Gov'
    }
  ];

  const filteredFrameworks = selectedCategory === 'all'
    ? frameworks
    : frameworks.filter((f) => f.category === selectedCategory);

  return (
    <section id="frameworks" className="frameworks-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <ShieldCheck size={16} className="badge-icon" />
            <span>SUPPORTED FRAMEWORKS</span>
          </div>
          <h2>Global Compliance & Trust Standards</h2>
          <p>
            We design, operationalize, and maintain compliance programs across leading global security, privacy, and AI governance frameworks.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="framework-categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Framework Cards Grid */}
        <div className="frameworks-grid">
          {filteredFrameworks.map((fw) => (
            <div className="framework-card glass-card" key={fw.id}>
              <div className="fw-header">
                <div className="fw-code">{fw.code}</div>
                <span className="fw-badge">{fw.badge}</span>
              </div>
              <h3 className="fw-name">{fw.name}</h3>
              <p className="fw-desc">{fw.desc}</p>
              
              <button className="fw-action-btn" onClick={() => onOpenContact(fw.name)}>
                Assess Framework <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .frameworks-section {
          padding: 6rem 0;
          background: #FFFFFF;
        }

        .framework-categories {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin: 2.5rem 0 3.5rem 0;
          flex-wrap: wrap;
        }

        .cat-filter-btn {
          padding: 0.6rem 1.4rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-purple);
          background: var(--bg-soft-purple);
          color: var(--text-dark);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
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
          box-shadow: 0 6px 20px rgba(90, 56, 253, 0.3);
        }

        .frameworks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .framework-card {
          padding: 1.75rem;
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: var(--transition-normal);
        }

        .framework-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
          transform: translateY(-4px);
        }

        .fw-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .fw-code {
          background: var(--primary-light);
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.95rem;
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-sm);
        }

        .fw-badge {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .fw-name {
          font-size: 1.15rem;
          margin-bottom: 0.6rem;
          color: var(--text-dark);
        }

        .fw-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.5rem;
        }

        .fw-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: transparent;
          border: none;
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.88rem;
          cursor: pointer;
          padding: 0;
          transition: var(--transition-fast);
        }

        .fw-action-btn:hover {
          gap: 0.6rem;
          color: var(--primary-hover);
        }

        @media (max-width: 1024px) {
          .frameworks-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .frameworks-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
