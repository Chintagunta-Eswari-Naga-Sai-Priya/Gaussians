import React, { useState } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function ServicesShowcase({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services & Frameworks' },
    { id: 'cybersecurity', name: 'Cybersecurity & Compliance' },
    { id: 'risk', name: 'Risk & Governance' },
    { id: 'audit', name: 'Audit & Assurance' },
    { id: 'managed', name: 'Managed Services' },
    { id: 'program', name: 'Program Implementation & Transformation' }
  ];

  const offerings = [
    // Cybersecurity & Compliance
    {
      id: 'soc',
      code: 'SOC',
      name: 'SOC 1, SOC 2 & SOC 3',
      category: 'cybersecurity',
      desc: 'Preparation, controls mapping, evidence collection, and auditor liaison for Type I & Type II audits across Trust Services Criteria.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'iso27001',
      code: 'ISO 27001',
      name: 'ISO 27001',
      category: 'cybersecurity',
      desc: 'ISMS program design, Annex A controls implementation, internal audits, and certification readiness for Stage 1 & Stage 2 audits.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'iso42001',
      code: 'ISO 42001',
      name: 'ISO 42001',
      category: 'cybersecurity',
      desc: 'The premier global standard for Artificial Intelligence Management Systems (AIMS), risk management, and AI transparency.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'csa-star',
      code: 'CSA STAR',
      name: 'CSA STAR',
      category: 'cybersecurity',
      desc: 'Cloud Control Matrix (CCM) mapping, CAIQ self-assessment, and STAR Level 1 & Level 2 certification readiness.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'pci-dss',
      code: 'PCI DSS',
      name: 'PCI DSS',
      category: 'cybersecurity',
      desc: 'CDE scope reduction, SAQ validation, ROC audit readiness, and continuous payment security monitoring.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'hitrust',
      code: 'HITRUST',
      name: 'HITRUST',
      category: 'cybersecurity',
      desc: 'MyCSF portal management, validated assessment preparation, and CAP management for healthcare & tech vendors.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'nist-csf',
      code: 'NIST CSF',
      name: 'NIST Cybersecurity Framework (CSF)',
      category: 'cybersecurity',
      desc: 'Comprehensive maturity assessments, gap remediation, and target profile alignment across the core CSF functions.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'nist-ai',
      code: 'NIST AI RMF',
      name: 'NIST AI Risk Management Framework (AI RMF)',
      category: 'cybersecurity',
      desc: 'Govern, Map, Measure, and Manage functions for trustworthy, safe, and transparent AI system deployments.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'cmmc',
      code: 'CMMC',
      name: 'CMMC',
      category: 'cybersecurity',
      desc: 'US DoD supply chain requirements, NIST SP 800-171 readiness, SSP authoring, and assessment prep.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'cyber-essentials',
      code: 'Cyber Essentials',
      name: 'Cyber Essentials',
      category: 'cybersecurity',
      desc: 'United Kingdom cybersecurity certification readiness, boundary assessment, and basic security control audits.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'hipaa',
      code: 'HIPAA',
      name: 'HIPAA',
      category: 'cybersecurity',
      desc: 'PHI protection, Administrative & Technical Safeguards, Business Associate Agreement (BAA) reviews.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'gdpr',
      code: 'GDPR',
      name: 'GDPR & Privacy Programs',
      category: 'cybersecurity',
      desc: 'Data mapping, Privacy Impact Assessments (PIA/DPIA), DSAR workflows, and cross-border privacy compliance.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'ccpa',
      code: 'CCPA',
      name: 'CCPA',
      category: 'cybersecurity',
      desc: 'California Consumer Privacy Act compliance, consumer rights workflows, and privacy policies.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'cloud-sec',
      code: 'Cloud',
      name: 'Cloud Security Assessments',
      category: 'cybersecurity',
      desc: 'Security architecture design, cloud environment hardening, identity governance reviews, and vulnerability management tracking.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'readiness-gap',
      code: 'Gap Assess',
      name: 'Compliance Readiness & Gap Assessments',
      category: 'cybersecurity',
      desc: 'Pre-audit gap remediation, controls mapping, evidence pre-validation, and organizational maturity reviews.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'policy-frameworks',
      code: 'Policies',
      name: 'Policy & Control Frameworks (including AI policies)',
      category: 'cybersecurity',
      desc: 'Designing and drafting comprehensive policies, standards, procedures, and AI governance frameworks.',
      badge: 'Cybersecurity & Compliance'
    },
    {
      id: 'managed-compliance',
      code: 'Compliance',
      name: 'Compliance Managed Services',
      category: 'cybersecurity',
      desc: 'End-to-end management of compliance activities, continuous control monitoring, and reporting.',
      badge: 'Cybersecurity & Compliance'
    },

    // Risk & Governance
    {
      id: 'it-risk',
      code: 'IT Risk',
      name: 'IT Risk Assessments',
      category: 'risk',
      desc: 'Systemic risk identification, qualitative and quantitative impact evaluation, and strategic mitigation roadmap development.',
      badge: 'Risk & Governance'
    },
    {
      id: 'tprm',
      code: 'TPRM',
      name: 'Third Party Risk Management',
      category: 'risk',
      desc: 'Comprehensive vendor security due diligence assessments, questionnaire evaluations, and supply chain risk oversight programs.',
      badge: 'Risk & Governance'
    },
    {
      id: 'vendor-due',
      code: 'Due Diligence',
      name: 'Vendor Due Diligence',
      category: 'risk',
      desc: 'Evaluating third-party service providers, assessing technical safeguards, and identifying vendor business liabilities.',
      badge: 'Risk & Governance'
    },
    {
      id: 'tech-gov',
      code: 'Governance',
      name: 'Technology Governance: IT, Cloud, AI, Cyber, Data, Third Party',
      category: 'risk',
      desc: 'Establishing oversight structures and frameworks for IT, Cloud, Artificial Intelligence, Data, and Vendor lifecycle operations.',
      badge: 'Risk & Governance'
    },
    {
      id: 'tech-risk',
      code: 'Risk Mgmt',
      name: 'Technology Risk Management',
      category: 'risk',
      desc: 'Implementing continuous risk monitoring, vulnerability tracking, and technology governance operations.',
      badge: 'Risk & Governance'
    },
    {
      id: 'risk-design',
      code: 'Framework',
      name: 'Risk Framework Design',
      category: 'risk',
      desc: 'Designing, building, and operationalizing customized enterprise risk management frameworks and registries.',
      badge: 'Risk & Governance'
    },
    {
      id: 'control-val',
      code: 'Validation',
      name: 'Control Validation',
      category: 'risk',
      desc: 'Reviewing key internal controls to ensure they are designed and operating effectively to mitigate identified risks.',
      badge: 'Risk & Governance'
    },

    // Audit & Assurance
    {
      id: 'sox',
      code: 'SOX',
      name: 'SOX',
      category: 'audit',
      desc: 'Internal control assessments, testing execution, and program validation for financial reporting and corporate transparency.',
      badge: 'Audit & Assurance'
    },
    {
      id: 'itgc',
      code: 'ITGC',
      name: 'ITGC Testing',
      category: 'audit',
      desc: 'Rigorous manual and automated validation of IT General Controls, database management, and change governance protocols.',
      badge: 'Audit & Assurance'
    },
    {
      id: 'itac',
      code: 'ITAC',
      name: 'ITAC Testing',
      category: 'audit',
      desc: 'Testing of IT Application Controls, automated system configurations, data integrations, and transaction mapping.',
      badge: 'Audit & Assurance'
    },
    {
      id: 'internal-audit',
      code: 'Audit',
      name: 'Internal Audit',
      category: 'audit',
      desc: 'Independent operational audits, internal control reviews, process documentation, and corporate compliance testing.',
      badge: 'Audit & Assurance'
    },
    {
      id: 'tech-assurance',
      code: 'Assurance',
      name: 'Technology Assurance',
      category: 'audit',
      desc: 'Reviewing core technology stacks, platform integrations, infrastructure controls, and database integrity schemas.',
      badge: 'Audit & Assurance'
    },
    {
      id: 'audit-readiness',
      code: 'Readiness',
      name: 'Audit Readiness',
      category: 'audit',
      desc: 'Pre-audit controls mapping, evidence pre-validation, gap remediation, and mock auditor evaluations.',
      badge: 'Audit & Assurance'
    },
    {
      id: 'audit-support',
      code: 'Support',
      name: 'Audit Support',
      category: 'audit',
      desc: 'Auditor liaison management, evidence coordination, request list tracking, and control walk-through facilitation.',
      badge: 'Audit & Assurance'
    },

    // Managed Services
    {
      id: 'comp-ops',
      code: 'Ops',
      name: 'Compliance Operations',
      category: 'managed',
      desc: 'Extend your bandwidth with external specialists executing day-to-day security and compliance operational workflows.',
      badge: 'Managed Services'
    },
    {
      id: 'audit-coord',
      code: 'Coordination',
      name: 'Audit Coordination',
      category: 'managed',
      desc: 'Liaising with auditors, managing request lists, gathering technical artifacts, and scheduling walk-throughs.',
      badge: 'Managed Services'
    },
    {
      id: 'evidence-coll',
      code: 'Evidence',
      name: 'Evidence Collection',
      category: 'managed',
      desc: 'Continuous evidence gathering, document repository updates, and control validation schemas.',
      badge: 'Managed Services'
    },
    {
      id: 'cust-quest',
      code: 'Questionnaires',
      name: 'Customer Security Questionnaires',
      category: 'managed',
      desc: 'Rapid processing and accurate technical answering of vendor security assessments and customer trust questionnaires.',
      badge: 'Managed Services'
    },
    {
      id: 'continuous-mon',
      code: 'Monitoring',
      name: 'Continuous Compliance Monitoring',
      category: 'managed',
      desc: 'Real-time control tracking, continuous compliance health checks, and dashboard reporting.',
      badge: 'Managed Services'
    },

    // Program Implementation & Transformation
    {
      id: 'sec-prog',
      code: 'Security',
      name: 'Security Program Development',
      category: 'program',
      desc: 'Custom blueprinting, development, and scaling of cybersecurity, risk advisory, and business resiliency frameworks.',
      badge: 'Program Implementation & Transformation'
    },
    {
      id: 'frame-impl',
      code: 'Framework',
      name: 'Framework Implementation',
      category: 'program',
      desc: 'Operationalizing and embedding governance, security, and compliance frameworks to deliver lasting business value.',
      badge: 'Program Implementation & Transformation'
    },
    {
      id: 'policy-proc',
      code: 'Procedures',
      name: 'Policy & Procedure Development',
      category: 'program',
      desc: 'Drafting, formatting, and operationalizing comprehensive company-wide IT, AI, and information security policies.',
      badge: 'Program Implementation & Transformation'
    },
    {
      id: 'control-design',
      code: 'Design',
      name: 'Control Design & Implementation',
      category: 'program',
      desc: 'Designing key technical and operational controls and embedding them into daily production workflows.',
      badge: 'Program Implementation & Transformation'
    },
    {
      id: 'training-aware',
      code: 'Training',
      name: 'Training & Awareness Programs',
      category: 'program',
      desc: 'Building and administering security training modules, compliance awareness sessions, and phishing simulations.',
      badge: 'Program Implementation & Transformation'
    },
    {
      id: 'comp-trans',
      code: 'Transformation',
      name: 'Compliance Transformation',
      category: 'program',
      desc: 'Modernizing legacy security infrastructure, automating evidence streams, and scaling compliance systems.',
      badge: 'Program Implementation & Transformation'
    },
    {
      id: 'remediation',
      code: 'Remediation',
      name: 'Remediation Management',
      category: 'program',
      desc: 'Managing plan of action & milestones (POA&M), audit finding remediation, and control hardening.',
      badge: 'Program Implementation & Transformation'
    },
    {
      id: 'continuous-improv',
      code: 'Improvement',
      name: 'Continuous Improvement Initiatives',
      category: 'program',
      desc: 'Regularly reviewing security processes, updating risk registries, and optimizing control efficiency.',
      badge: 'Program Implementation & Transformation'
    }
  ];

  const filteredOfferings = selectedCategory === 'all'
    ? offerings
    : offerings.filter((o) => o.category === selectedCategory);

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

        {/* Categories filters */}
        <div className="services-categories">
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

        {/* Description banner strip */}
        <div className="services-desc-banner">
          <p>
            Whether you're preparing for an audit, strengthening your cybersecurity posture, building a compliance function, or scaling your team, Gaussians works alongside you every step of the way. We become an extension of your team, combining deep cybersecurity and compliance expertise with practical execution, operational ownership, and cost-effective delivery.
          </p>
        </div>

        {/* Grid of services */}
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
      </div>

      <style>{`
        .services-section {
          padding: 6rem 0;
          background: var(--bg-soft-purple);
        }

        /* Two-column split header */
        .services-header-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--border-purple);
          margin-bottom: 0;
        }

        .services-header-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }

        .services-main-title {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          line-height: 1.2;
          color: var(--text-dark);
          margin: 0;
          text-align: left;
        }

        .services-title-accent {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .services-header-right {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .services-header-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .services-header-split {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .services-categories {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin: 2.5rem 0 1.75rem 0;
          flex-wrap: wrap;
        }

        .services-desc-banner {
          background: linear-gradient(135deg, rgba(90, 56, 253, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
          border: 1px solid var(--border-purple);
          border-left: 4px solid var(--primary);
          border-radius: var(--radius-md);
          padding: 1.1rem 1.75rem;
          margin-bottom: 2.5rem;
        }

        .services-desc-banner p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin: 0;
        }

        .cat-filter-btn {
          padding: 0.6rem 1.4rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-purple);
          background: #FFFFFF;
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
          box-shadow: 0 6px 20px rgba(90, 56, 253, 0.25);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .service-card {
          padding: 2rem;
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: var(--transition-normal);
          min-height: 250px;
        }

        .service-card:hover {
          border-color: var(--primary);
          box-shadow: 0 10px 30px rgba(90, 56, 253, 0.08);
          transform: translateY(-4px);
        }

        .service-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .service-code-badge {
          background: var(--primary-light);
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.9rem;
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-sm);
        }

        .service-category-badge {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          max-width: 180px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .service-card-title {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
          color: var(--text-dark);
          font-weight: 750;
        }

        .service-card-desc {
          font-size: 0.9rem;
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
          font-size: 0.88rem;
          cursor: pointer;
          padding: 0;
          transition: var(--transition-fast);
          width: fit-content;
        }

        .service-card-btn:hover {
          gap: 0.6rem;
          color: var(--primary-hover);
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
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
