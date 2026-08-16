import React, { useState } from 'react';
import { Award, Layers, ShieldCheck, TrendingUp, UserCheck, HeartHandshake, Quote, CheckCircle2, ArrowRight, Sparkles, Shield, Star, Lock, Zap } from 'lucide-react';

export default function DifferenceSection() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 'leadership',
      num: '01',
      title: 'Global Consulting & Industry Veterans',
      badge: 'Experienced Leadership',
      metric: '15+ Yrs Leadership Exp.',
      desc: 'Our team brings seasoned professionals with Big-4 and global consulting backgrounds, alongside real-world enterprise experience to solve your toughest trust & compliance challenges.',
      highlight: 'Senior leaders actively involved in every client engagement.',
      icon: <Award size={28} />
    },
    {
      id: 'flexibility',
      num: '02',
      title: 'Flexible Engagement Models',
      badge: 'Tailored Execution',
      metric: '4 Delivery Models',
      desc: 'Whether you need strategic advisory, fully managed compliance operations, specialized staff augmentation, or dedicated offshore centers, we flex to fit your exact scale.',
      highlight: 'Advisory, Managed Services, Staff Augmentation & Dedicated Teams.',
      icon: <Layers size={28} />
    },
    {
      id: 'execution',
      num: '03',
      title: 'Hands-On Execution & Ownership',
      badge: 'We Deliver',
      metric: 'Operational Ownership',
      desc: 'We don\'t stop at high-level reports. We design policies, test ITGCs, collect audit evidence, interface directly with auditors, and manage day-to-day security operations.',
      highlight: 'Operational support that embeds directly into your workflow.',
      icon: <ShieldCheck size={28} />
    },
    {
      id: 'scalability',
      num: '04',
      title: 'Scalable Delivery Without Compromise',
      badge: 'Scale Without Limits',
      metric: 'Zero Audit Surprises',
      desc: 'Expand your security and compliance bandwidth quickly without sacrificing quality, oversight, or accountability across high-growth startups to global enterprises.',
      highlight: 'Consistent audit-ready quality at optimal operating cost.',
      icon: <TrendingUp size={28} />
    },
    {
      id: 'dedicated',
      num: '05',
      title: 'Personalized Senior Leadership Attention',
      badge: 'Senior Expert Access',
      metric: 'Direct Executive Access',
      desc: 'You deal directly with experts who understand your business context, not junior staff learning on your time. Personal ownership drives fast turnaround and high precision.',
      highlight: 'Direct executive sponsorship on all key milestones.',
      icon: <UserCheck size={28} />
    },
    {
      id: 'trust',
      num: '06',
      title: 'Long-Term Trust & Relentless Commitment',
      badge: 'End-to-End Partner',
      metric: 'Honest Advisory',
      desc: 'We build relationships based on transparency, clear communication, and a relentless focus on customer success, guiding you from readiness through continuous governance.',
      highlight: 'Earned trust through honest conversations and tangible results.',
      icon: <HeartHandshake size={28} />
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

        {/* Dynamic Showcase Stage: Tab Navigator + Featured Banner */}
        <div className="showcase-container fade-in-up">
          {/* Vertical Tabs (Left Side) */}
          <div className="showcase-tabs">
            {pillars.map((p, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={p.id}
                  className={`tab-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <div className="tab-icon-box">
                    {p.icon}
                  </div>
                  <div className="tab-info">
                    <span className="tab-badge">{p.badge}</span>
                    <h4 className="tab-title">{p.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Featured Active Display (Right Side) */}
          <div className="showcase-display glass-card">
            <div className="display-top">
              <span className="display-metric-pill">
                <Zap size={14} /> {pillars[activeTab].metric}
              </span>
              <span className="display-step-tag">Pillar {pillars[activeTab].num} of 06</span>
            </div>

            <div className="display-icon-header">
              <div className="display-icon-circle">
                {pillars[activeTab].icon}
              </div>
              <div>
                <span className="display-badge">{pillars[activeTab].badge}</span>
                <h3 className="display-title">{pillars[activeTab].title}</h3>
              </div>
            </div>

            <p className="display-desc">{pillars[activeTab].desc}</p>

            <div className="display-takeaway-box">
              <CheckCircle2 size={20} className="takeaway-icon" />
              <div>
                <strong>Core Advantage:</strong> {pillars[activeTab].highlight}
              </div>
            </div>

          </div>
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
          font-size: 2.6rem;
          margin-top: 0.5rem;
        }

        .diff-subtitle {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--primary);
          margin-top: 0.4rem;
        }

        /* Showcase Container */
        .showcase-container {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 2rem;
          margin-bottom: 3.5rem;
          align-items: center;
        }

        /* Tabs List */
        .showcase-tabs {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .tab-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.1rem 1.4rem;
          background: rgba(255, 255, 255, 0.9);
          border: 1.5px solid var(--border-purple);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tab-item:hover, .tab-item.active {
          background: #FFFFFF;
          border-color: var(--primary);
          box-shadow: 0 12px 30px -6px rgba(90, 56, 253, 0.18);
          transform: translateX(8px);
        }

        .tab-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: var(--bg-soft-purple);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .tab-item.active .tab-icon-box {
          background: linear-gradient(135deg, var(--primary) 0%, #4322EA 100%);
          color: #FFFFFF;
          box-shadow: 0 6px 18px rgba(90, 56, 253, 0.3);
        }

        .tab-badge {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.75rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .tab-title {
          font-size: 1.05rem;
          color: var(--text-dark);
          line-height: 1.25;
          margin-top: 0.1rem;
        }

        /* Showcase Display Right */
        .showcase-display {
          padding: 3rem 2.5rem;
          background: #FFFFFF;
          border: 2px solid var(--primary-border);
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 45px -10px rgba(90, 56, 253, 0.15);
          display: flex;
          flex-direction: column;
        }

        .display-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.75rem;
        }

        .display-metric-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.82rem;
          background: var(--primary-light);
          color: var(--primary);
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
        }

        .display-step-tag {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .display-icon-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .display-icon-circle {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--primary) 0%, #4322EA 100%);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 22px rgba(90, 56, 253, 0.3);
          flex-shrink: 0;
        }

        .display-badge {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .display-title {
          font-size: 1.65rem;
          color: var(--text-dark);
          line-height: 1.25;
          margin-top: 0.15rem;
        }

        .display-desc {
          font-size: 1.05rem;
          color: var(--text-body);
          line-height: 1.65;
          margin-bottom: 1.75rem;
        }

        .display-takeaway-box {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          background: var(--bg-soft-purple);
          border: 1px solid var(--primary-border);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          margin-bottom: 2rem;
          font-size: 0.95rem;
          color: var(--text-dark);
        }

        .takeaway-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .display-footer-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-light);
        }

        .nav-btn-prev {
          background: transparent;
          border: 1.5px solid var(--primary-border);
          padding: 0.55rem 1.3rem;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-weight: 600;
          color: var(--primary);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .nav-btn-prev:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .nav-btn-prev:not(:disabled):hover {
          background: var(--primary-light);
        }

        .nav-dots {
          display: flex;
          gap: 0.4rem;
        }

        .nav-dots .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary-border);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-dots .dot.active {
          width: 24px;
          border-radius: 4px;
          background: var(--primary);
        }

        .nav-btn-next {
          padding: 0.65rem 1.5rem;
          font-size: 0.9rem;
        }

        /* Philosophy Card */
        .philosophy-banner {
          background: linear-gradient(135deg, var(--primary) 0%, #3B1AD8 100%);
          border-radius: var(--radius-lg);
          padding: 3rem 3.5rem;
          color: #FFFFFF;
          text-align: center;
          box-shadow: 0 18px 45px rgba(90, 56, 253, 0.28);
        }

        .quote-icon {
          color: rgba(255, 255, 255, 0.35);
          margin-bottom: 0.75rem;
        }

        .philosophy-quote {
          font-size: 1.3rem;
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
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .line {
          width: 36px;
          height: 2px;
          background: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 1024px) {
          .showcase-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .difference-section {
            padding: 4.5rem 0;
          }
          .diff-title {
            font-size: 2.1rem;
          }
          .tab-item {
            padding: 0.9rem 1.1rem;
          }
          .tab-title {
            font-size: 0.95rem;
          }
          .showcase-display {
            padding: 1.75rem 1.25rem;
          }
          .display-title {
            font-size: 1.35rem;
          }
          .display-desc {
            font-size: 0.95rem;
          }
          .display-footer-nav {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }
          .nav-dots {
            order: -1;
          }
          .nav-btn-prev, .nav-btn-next {
            width: 100%;
            text-align: center;
            justify-content: center;
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
