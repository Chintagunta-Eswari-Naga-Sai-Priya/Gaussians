import React, { useState } from 'react';
import { Award, Layers, ShieldCheck, TrendingUp, UserCheck, HeartHandshake, Quote, CheckCircle2, ChevronDown, Sparkles, Zap } from 'lucide-react';

export default function DifferenceSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  const pillars = [
    {
      id: 'leadership',
      num: '01',
      title: 'Global Consulting & Industry Veterans',
      badge: 'Experienced Leadership',
      metric: '15+ Yrs Leadership Exp.',
      desc: 'Our team brings seasoned professionals with Big-4 and global consulting backgrounds, alongside real-world enterprise experience to solve your toughest trust & compliance challenges.',
      highlight: 'Senior leaders actively involved in every client engagement.',
      icon: <Award size={22} />
    },
    {
      id: 'flexibility',
      num: '02',
      title: 'Flexible Engagement Models',
      badge: 'Tailored Execution',
      metric: '4 Delivery Models',
      desc: 'Whether you need strategic advisory, fully managed compliance operations, specialized staff augmentation, or dedicated offshore centers, we flex to fit your exact scale.',
      highlight: 'Advisory, Managed Services, Staff Augmentation & Dedicated Teams.',
      icon: <Layers size={22} />
    },
    {
      id: 'execution',
      num: '03',
      title: 'Hands-On Execution & Ownership',
      badge: 'We Deliver',
      metric: 'Operational Ownership',
      desc: "We don't stop at high-level reports. We design policies, test ITGCs, collect audit evidence, interface directly with auditors, and manage day-to-day security operations.",
      highlight: 'Operational support that embeds directly into your workflow.',
      icon: <ShieldCheck size={22} />
    },
    {
      id: 'scalability',
      num: '04',
      title: 'Scalable Delivery Without Compromise',
      badge: 'Scale Without Limits',
      metric: 'Zero Audit Surprises',
      desc: 'Expand your security and compliance bandwidth quickly without sacrificing quality, oversight, or accountability across high-growth startups to global enterprises.',
      highlight: 'Consistent audit-ready quality at optimal operating cost.',
      icon: <TrendingUp size={22} />
    },
    {
      id: 'dedicated',
      num: '05',
      title: 'Personalized Senior Leadership Attention',
      badge: 'Senior Expert Access',
      metric: 'Direct Executive Access',
      desc: 'You deal directly with experts who understand your business context, not junior staff learning on your time. Personal ownership drives fast turnaround and high precision.',
      highlight: 'Direct executive sponsorship on all key milestones.',
      icon: <UserCheck size={22} />
    },
    {
      id: 'trust',
      num: '06',
      title: 'Long-Term Trust & Relentless Commitment',
      badge: 'End-to-End Partner',
      metric: 'Honest Advisory',
      desc: 'We build relationships based on transparency, clear communication, and a relentless focus on customer success, guiding you from readiness through continuous governance.',
      highlight: 'Earned trust through honest conversations and tangible results.',
      icon: <HeartHandshake size={22} />
    }
  ];

  return (
    <section id="difference" className="difference-section">
      <div className="diff-bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="container relative-z">
        {/* Header */}
        <div className="section-header fade-in-up">
          <div className="badge-pill diff-badge">
            <Sparkles size={16} />
            <span>THE GAUSSIANS DIFFERENCE</span>
          </div>
          <h2 className="diff-title">Why Clients Choose Us</h2>
          <div className="section-divider"></div>
          <p className="diff-subtitle">
            Building Trust • Delivering Assurance • Driving Business Outcomes
          </p>
        </div>

        {/* Accordion */}
        <div className="accordion-list fade-in-up">
          {pillars.map((p, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={p.id}
                className={`accordion-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  className="accordion-trigger"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <div className="acc-left">
                    <div className={`acc-icon-box ${isOpen ? 'active' : ''}`}>
                      {p.icon}
                    </div>
                    <div className="acc-title-group">
                      <span className="acc-badge">{p.badge}</span>
                      <h4 className="acc-title">{p.title}</h4>
                    </div>
                  </div>
                  <div className="acc-right">
                    {isOpen && (
                      <span className="acc-metric">
                        <Zap size={13} /> {p.metric}
                      </span>
                    )}
                    <div className={`acc-chevron ${isOpen ? 'rotated' : ''}`}>
                      <ChevronDown size={20} />
                    </div>
                  </div>
                </button>

                <div className="accordion-body">
                  <div className="acc-body-inner">
                    <p className="acc-desc">{p.desc}</p>
                    <div className="acc-takeaway">
                      <CheckCircle2 size={17} className="acc-check-icon" />
                      <div>
                        <strong>Core Advantage: </strong>{p.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Statement */}
        <div className="philosophy-banner glass-card fade-in-up">
          <Quote size={36} className="quote-icon" />
          <p className="philosophy-quote">
            "Trust is earned through honest conversations, transparent communication, professional execution, and a relentless commitment to client success."
          </p>
          <div className="philosophy-brand">
            <span className="line"></span>
            <span>The Gaussians Core Philosophy</span>
            <span className="line"></span>
          </div>
        </div>
      </div>

      <style>{`
        .difference-section {
          padding: 6.5rem 0;
          background: linear-gradient(180deg, #F5F3FF 0%, #FFFFFF 50%, #F3F0FF 100%);
          position: relative;
          overflow: hidden;
        }

        .diff-bg-orbs .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.22;
          pointer-events: none;
        }

        .orb-1 {
          width: 550px;
          height: 550px;
          top: -100px;
          right: -100px;
          background: #5A38FD;
        }

        .orb-2 {
          width: 600px;
          height: 600px;
          bottom: -150px;
          left: -150px;
          background: #7C3AED;
        }

        .relative-z {
          position: relative;
          z-index: 2;
        }

        .diff-badge {
          background: #EEECFF;
          color: var(--primary);
          border: 1px solid var(--primary-border);
        }

        .diff-title {
          font-size: var(--fs-section);
          margin-top: 0.5rem;
        }

        .diff-subtitle {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-body);
          color: var(--primary);
          margin-top: 0.4rem;
        }

        /* Accordion */
        .accordion-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 3.5rem;
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }

        .accordion-item {
          background: #FFFFFF;
          border: 1.5px solid var(--border-purple);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .accordion-item.open {
          border-color: var(--primary);
          box-shadow: 0 12px 35px -8px rgba(90, 56, 253, 0.18);
        }

        .accordion-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.15rem 1.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.2s ease;
        }

        .accordion-trigger:hover {
          background: rgba(90, 56, 253, 0.03);
        }

        .acc-left {
          display: flex;
          align-items: center;
          gap: 1.1rem;
        }

        .acc-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--bg-soft-purple);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .acc-icon-box.active {
          background: linear-gradient(135deg, var(--primary) 0%, #4322EA 100%);
          color: #FFFFFF;
          box-shadow: 0 6px 18px rgba(90, 56, 253, 0.3);
        }

        .acc-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }

        .acc-badge {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-small);
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .acc-title {
          font-size: var(--fs-card);
          color: var(--text-dark);
          line-height: 1.3;
          margin: 0;
        }

        .acc-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .acc-metric {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-small);
          background: var(--primary-light);
          color: var(--primary);
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        .acc-chevron {
          color: var(--primary);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .acc-chevron.rotated {
          transform: rotate(180deg);
        }

        /* Accordion Body - animated open/close */
        .accordion-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .accordion-item.open .accordion-body {
          max-height: 500px;
        }

        .acc-body-inner {
          overflow: hidden;
          min-height: 0;
          padding: 0 1.5rem;
          transition: padding 0.35s ease;
        }

        .accordion-item.open .acc-body-inner {
          padding: 0 1.5rem 1.5rem 1.5rem;
        }

        .acc-desc {
          font-size: var(--fs-body);
          color: var(--text-body);
          line-height: 1.65;
          margin-bottom: 1rem;
          padding-left: calc(44px + 1.1rem);
        }

        .acc-takeaway {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: var(--bg-soft-purple);
          border: 1px solid var(--primary-border);
          border-radius: var(--radius-md);
          padding: 0.9rem 1.1rem;
          font-size: var(--fs-body);
          color: var(--text-dark);
          margin-left: calc(44px + 1.1rem);
        }

        .acc-check-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Philosophy Card */
        .philosophy-banner {
          background: linear-gradient(135deg, var(--primary) 0%, #3B1AD8 100%);
          border-radius: var(--radius-lg);
          padding: 3rem 3.5rem;
          color: #FFFFFF;
          text-align: center;
          box-shadow: 0 18px 45px rgba(90, 56, 253, 0.28);
          margin-top: 3.5rem;
        }

        .quote-icon {
          color: rgba(255, 255, 255, 0.35);
          margin-bottom: 0.75rem;
        }

        .philosophy-quote {
          font-size: var(--fs-body);
          font-weight: 500;
          line-height: 1.6;
          max-width: 840px;
          margin: 0 auto 1.5rem auto;
        }

        .philosophy-brand {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-small);
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .line {
          width: 36px;
          height: 2px;
          background: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 768px) {
          .difference-section {
            padding: 4.5rem 0;
          }
          .diff-title {
            font-size: calc(var(--fs-section) * 0.9);
          }
          .accordion-trigger {
            padding: 1rem 1.1rem;
          }
          .acc-metric {
            display: none;
          }
          .acc-desc, .acc-takeaway {
            margin-left: 0;
          }
          .philosophy-banner {
            padding: 2.25rem 1.5rem;
          }
          .philosophy-quote {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </section>
  );
}
