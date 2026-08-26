import React from 'react';
import { ShieldCheck, Lock, FileCheck, Users, Cog, Star, Target } from 'lucide-react';

export default function HowWeHelp() {
  const outcomes = [
    {
      id: 'compliance',
      icon: <ShieldCheck size={26} />,
      title: 'Achieve Compliance',
      desc: 'Structured, audit-ready programs that satisfy global regulators, enterprise clients, and board members.',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=420&q=80&auto=format&fit=crop'
    },
    {
      id: 'security',
      icon: <Lock size={26} />,
      title: 'Strengthen Security',
      desc: 'Practical, defense-in-depth security controls and governance that actively reduce cyber risk exposure.',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=420&q=80&auto=format&fit=crop'
    },
    {
      id: 'audits',
      icon: <FileCheck size={26} />,
      title: 'Pass Audits with Confidence',
      desc: 'Evidence-backed readiness across SOC 2, ISO 27001, HITRUST, and PCI DSS with zero audit surprises.',
      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=420&q=80&auto=format&fit=crop'
    },
    {
      id: 'trm',
      icon: <Users size={26} />,
      title: 'Manage Technology & Third-Party Risk',
      desc: 'Comprehensive vendor due diligence and technology risk management across IT, Cloud, AI, and Data.',
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=420&q=80&auto=format&fit=crop'
    },
    {
      id: 'scale',
      icon: <Cog size={26} />,
      title: 'Scale Operations Efficiently',
      desc: 'Managed compliance operations that unlock your internal engineering team capacity without sacrificing quality.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=420&q=80&auto=format&fit=crop'
    },
    {
      id: 'specialists',
      icon: <Star size={26} />,
      title: 'Access Experienced Specialists',
      desc: 'Staff augmentation and dedicated offshore teams with deep domain expertise, aligned with your mission.',
      img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=420&q=80&auto=format&fit=crop'
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
              {/* Photo thumbnail */}
              <div className="help-card-img-wrap">
                <img
                  src={item.img}
                  alt={item.title}
                  className="help-card-img"
                  loading="lazy"
                />
                <div className="help-card-img-overlay" />
                <div className="help-icon-wrapper">
                  {item.icon}
                </div>
              </div>
              <div className="help-card-body">
                <h3 className="help-card-title">{item.title}</h3>
                <p className="help-card-desc">{item.desc}</p>
              </div>
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
          transition: var(--transition-normal);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(90, 56, 253, 0.02);
        }

        .help-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 15px 35px rgba(90, 56, 253, 0.1);
        }

        /* Photo at the top of card */
        .help-card-img-wrap {
          position: relative;
          width: 100%;
          height: 160px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .help-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .help-card:hover .help-card-img {
          transform: scale(1.06);
        }

        .help-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(90, 56, 253, 0.35) 0%,
            rgba(15, 23, 42, 0.55) 100%
          );
        }

        .help-icon-wrapper {
          position: absolute;
          bottom: 1rem;
          left: 1.25rem;
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: #FFFFFF;
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0,0,0,0.18);
        }

        .help-card-body {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .help-card-title {
          font-size: var(--fs-card);
          color: var(--text-dark);
          margin-bottom: 0;
          font-weight: 700;
        }

        .help-card-desc {
          font-size: var(--fs-body);
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
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
