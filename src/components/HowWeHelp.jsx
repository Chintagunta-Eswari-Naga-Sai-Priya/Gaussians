import React from 'react';
import { ShieldCheck, Lock, FileCheck, Users, Cog, Star, Target } from 'lucide-react';

export default function HowWeHelp() {
  const outcomes = [
    {
      id: 'compliance',
      icon: <ShieldCheck size={26} />,
      title: 'Achieve Compliance',
      desc: 'Structured, audit-ready programs that satisfy global regulators, enterprise clients, and board members.'
    },
    {
      id: 'security',
      icon: <Lock size={26} />,
      title: 'Strengthen Security',
      desc: 'Practical, defense-in-depth security controls and governance that actively reduce cyber risk exposure.'
    },
    {
      id: 'audits',
      icon: <FileCheck size={26} />,
      title: 'Pass Audits with Confidence',
      desc: 'Evidence-backed readiness across SOC 2, ISO 27001, HITRUST, and PCI DSS with zero audit surprises.'
    },
    {
      id: 'trm',
      icon: <Users size={26} />,
      title: 'Manage Technology & Third-Party Risk',
      desc: 'Comprehensive vendor due diligence and technology risk management across IT, Cloud, AI, and Data.'
    },
    {
      id: 'scale',
      icon: <Cog size={26} />,
      title: 'Scale Operations Efficiently',
      desc: 'Managed compliance operations that unlock your internal engineering team capacity without sacrificing quality.'
    },
    {
      id: 'specialists',
      icon: <Star size={26} />,
      title: 'Access Experienced Specialists',
      desc: 'Staff augmentation and dedicated offshore teams with deep domain expertise, aligned with your mission.'
    }
  ];

  return (
    <section id="how-we-help" className="howwehelp-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <Target size={14} className="badge-icon" />
            <span>How We Help</span>
          </div>
          <h2>Helping Organizations <span className="highlight-text">Navigate Risk</span> and <span className="highlight-text">Build Trust</span></h2>
          <p>
            We partner with you to turn security and compliance requirements into structured, scalable, and business-aligned programs.
          </p>
        </div>

        <div className="help-grid">
          {outcomes.map((item) => (
            <div className="help-card glass-card animate-hover" key={item.id}>
              <div className="help-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="help-card-title">{item.title}</h3>
              <p className="help-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .howwehelp-section {
          padding: 6rem 0 5rem 0;
          background: #FFFFFF;
          position: relative;
        }

        .highlight-text {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .help-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3.5rem;
        }

        .help-card {
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          padding: 2.5rem 2rem;
          transition: var(--transition-normal);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-shadow: 0 4px 20px rgba(90, 56, 253, 0.02);
        }

        .help-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 15px 35px rgba(90, 56, 253, 0.08);
        }

        .help-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .help-card-title {
          font-size: 1.25rem;
          color: var(--text-dark);
          margin-bottom: 0.85rem;
          font-weight: 700;
        }

        .help-card-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .help-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .help-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
