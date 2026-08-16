import React, { useState } from 'react';
import { Users, Shuffle, Wrench, BarChart3, UserCheck, Handshake, Quote, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

/*
  PREVIOUS DESIGN ARCHIVE: Horizontal Stepper Showcase Design for "Why Clients Choose Us"
  File saved for future reference as requested by user.
*/

export default function DifferenceSectionStepperBackup() {
  const [activeStep, setActiveStep] = useState(0);

  const differentiators = [
    {
      num: '01',
      title: 'Global Consulting & Industry Veterans',
      subtitle: 'Experienced Leadership',
      badge: 'Deep Expertise',
      desc: 'Our team brings seasoned professionals with global consulting backgrounds and real-world enterprise experience to solve your toughest trust & compliance challenges.',
      highlight: 'Senior leaders actively involved in every client engagement.'
    },
    {
      num: '02',
      title: 'Flexible Engagement Models',
      subtitle: 'Tailored Execution',
      badge: '4 Delivery Options',
      desc: 'Whether you need strategic advisory, fully managed compliance operations, specialized staff augmentation, or dedicated offshore centers, we flex to fit your exact scale.',
      highlight: 'Advisory, Managed Services, Staff Augmentation & Dedicated Teams.'
    },
    {
      num: '03',
      title: 'Hands-On Execution & Operational Ownership',
      subtitle: 'We Deliver',
      badge: 'Beyond Recommendations',
      desc: 'We don\'t stop at high-level reports. We design policies, test ITGCs, collect audit evidence, interface with auditors, and manage day-to-day security operations.',
      highlight: 'Operational support that embeds directly into your workflow.'
    },
    {
      num: '04',
      title: 'Scalable Delivery Without Compromise',
      subtitle: 'Quality & Governance',
      badge: 'Zero Audit Surprises',
      desc: 'Expand your security and compliance bandwidth quickly without sacrificing quality, oversight, or accountability. Proven track record across high-growth scale-ups to global enterprises.',
      highlight: 'Consistent audit-ready quality at optimal operating cost.'
    },
    {
      num: '05',
      title: 'Personalized Senior Leadership Involvement',
      subtitle: 'Direct Access',
      badge: 'Dedicated Attention',
      desc: 'You deal directly with experts who understand your business context, not junior staff learning on your time. Personal ownership drives fast turnaround and high precision.',
      highlight: 'Direct executive sponsorship on all key milestones.'
    },
    {
      num: '06',
      title: 'Long-Term Trust & Relentless Commitment',
      subtitle: 'End-to-End Partner',
      badge: 'Honest Advisory',
      desc: 'We build relationships based on transparency, clear communication, and a relentless focus on customer success—guiding you from readiness through continuous governance.',
      highlight: 'Earned trust through honest conversations and tangible results.'
    }
  ];

  return (
    <section id="difference-stepper-backup" className="difference-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <Sparkles size={14} className="badge-icon" />
            <span>THE GAUSSIANS DIFFERENCE</span>
          </div>
          <h2>Why Clients Choose Us</h2>
          <p className="diff-tagline">
            Building Trust. Delivering Assurance. Driving Outcomes.
          </p>
        </div>

        {/* Story Arc Horizontal Stepper */}
        <div className="diff-timeline-container">
          <div className="diff-progress-track">
            <div 
              className="diff-progress-bar"
              style={{ width: `${(activeStep / (differentiators.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className="diff-nodes-row">
            {differentiators.map((item, idx) => (
              <div 
                key={item.num}
                className={`diff-node-item ${activeStep === idx ? 'active' : ''} ${activeStep > idx ? 'completed' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="node-circle">
                  <span>{item.num}</span>
                </div>
                <div className="node-label-brief">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Stage Interactive Showcase Panel */}
        <div className="diff-stage-panel glass-card">
          <div className="diff-stage-content">
            <div className="diff-stage-header">
              <span className="diff-stage-badge">{differentiators[activeStep].badge}</span>
              <span className="diff-stage-num">Pillar {differentiators[activeStep].num} of 06</span>
            </div>
            
            <h3 className="diff-stage-title">{differentiators[activeStep].title}</h3>
            <p className="diff-stage-desc">{differentiators[activeStep].desc}</p>
            
            <div className="diff-stage-highlight">
              <CheckCircle size={20} className="diff-check-icon" />
              <span>{differentiators[activeStep].highlight}</span>
            </div>

            <div className="diff-stage-controls">
              <button 
                className="diff-nav-btn"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              >
                Previous Pillar
              </button>

              <div className="diff-step-dots">
                {differentiators.map((_, i) => (
                  <span 
                    key={i} 
                    className={`diff-dot ${activeStep === i ? 'active' : ''}`}
                    onClick={() => setActiveStep(i)}
                  ></span>
                ))}
              </div>

              <button 
                className="btn-primary diff-next-btn"
                onClick={() => setActiveStep((prev) => (prev + 1) % differentiators.length)}
              >
                {activeStep === differentiators.length - 1 ? 'Replay Overview' : 'Next Pillar'} <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="diff-stage-visual">
            <div className="visual-graphic-box">
              <div className="visual-glow-ring"></div>
              <div className="visual-number-big">{differentiators[activeStep].num}</div>
              <div className="visual-subtext">{differentiators[activeStep].subtitle}</div>
            </div>
          </div>
        </div>

        {/* Quote Banner */}
        <div className="diff-quote-box">
          <Quote size={32} className="diff-quote-icon" />
          <p className="diff-quote-text">
            "Trust is earned through honest conversations, transparent communication, and a relentless commitment to customer success."
          </p>
          <span className="diff-quote-author">— The Gaussians Core Philosophy</span>
        </div>
      </div>

      <style>{`
        .difference-section {
          padding: 6rem 0;
          background: linear-gradient(180deg, rgba(248, 247, 255, 0.5) 0%, rgba(255, 255, 255, 1) 100%);
          position: relative;
        }

        .diff-tagline {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--primary);
        }

        /* Timeline Container */
        .diff-timeline-container {
          position: relative;
          margin: 3.5rem 0 3rem 0;
          padding: 0 1rem;
        }

        .diff-progress-track {
          position: absolute;
          top: 25px;
          left: 3rem;
          right: 3rem;
          height: 4px;
          background: rgba(90, 56, 253, 0.12);
          z-index: 1;
        }

        .diff-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--accent-purple));
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .diff-nodes-row {
          display: flex;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .diff-node-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .diff-node-item:hover {
          transform: translateY(-4px);
        }

        .node-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2px solid var(--border-purple);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--text-muted);
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .diff-node-item.active .node-circle {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent-purple) 100%);
          border-color: transparent;
          color: #FFFFFF;
          box-shadow: 0 8px 25px rgba(90, 56, 253, 0.4);
          transform: scale(1.15);
        }

        .diff-node-item.completed .node-circle {
          border-color: var(--primary);
          color: var(--primary);
          background: var(--primary-light);
        }

        .node-label-brief {
          margin-top: 0.8rem;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          text-align: center;
          max-width: 110px;
          transition: color 0.3s ease;
        }

        .diff-node-item.active .node-label-brief {
          color: var(--primary);
          font-weight: 700;
        }

        /* Showcase Stage Panel */
        .diff-stage-panel {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2.5rem;
          padding: 3rem;
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          box-shadow: 0 15px 40px rgba(90, 56, 253, 0.08);
          align-items: center;
        }

        .diff-stage-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .diff-stage-badge {
          background: var(--primary-light);
          color: var(--primary);
          padding: 0.35rem 0.9rem;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .diff-stage-num {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .diff-stage-title {
          font-size: 1.85rem;
          line-height: 1.25;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .diff-stage-desc {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .diff-stage-highlight {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--bg-soft-purple);
          border: 1px solid var(--primary-border);
          border-radius: var(--radius-md);
          padding: 0.9rem 1.25rem;
          margin-bottom: 2rem;
          font-weight: 600;
          color: var(--text-dark);
          font-size: 0.95rem;
        }

        .diff-check-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .diff-stage-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }

        .diff-nav-btn {
          background: transparent;
          border: 1px solid var(--border-purple);
          padding: 0.6rem 1.2rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          color: var(--text-dark);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .diff-nav-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .diff-nav-btn:not(:disabled):hover {
          background: var(--primary-light);
          color: var(--primary);
        }

        .diff-step-dots {
          display: flex;
          gap: 0.4rem;
        }

        .diff-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary-border);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .diff-dot.active {
          width: 24px;
          border-radius: 4px;
          background: var(--primary);
        }

        .diff-next-btn {
          padding: 0.65rem 1.4rem;
          font-size: 0.9rem;
        }

        /* Visual Box Right Side */
        .diff-stage-visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-graphic-box {
          position: relative;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-light) 0%, #E0DBFF 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--primary-border);
          box-shadow: inset 0 0 30px rgba(90, 56, 253, 0.1);
        }

        .visual-glow-ring {
          position: absolute;
          inset: -15px;
          border-radius: 50%;
          border: 2px dashed rgba(90, 56, 253, 0.25);
          animation: spinRing 25s linear infinite;
        }

        @keyframes spinRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .visual-number-big {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 4.5rem;
          color: var(--primary);
          line-height: 1;
        }

        .visual-subtext {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0.3rem;
        }

        /* Quote Box */
        .diff-quote-box {
          margin-top: 3rem;
          background: linear-gradient(135deg, var(--primary) 0%, #4322EA 100%);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          color: #FFFFFF;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(90, 56, 253, 0.25);
        }

        .diff-quote-icon {
          color: rgba(255, 255, 255, 0.3);
          margin-bottom: 0.75rem;
        }

        .diff-quote-text {
          font-size: 1.25rem;
          font-weight: 500;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto 0.75rem auto;
        }

        .diff-quote-author {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 0.04em;
        }

        @media (max-width: 1024px) {
          .diff-stage-panel {
            grid-template-columns: 1fr;
          }
          .diff-stage-visual {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .diff-nodes-row {
            overflow-x: auto;
            gap: 1.5rem;
            justify-content: flex-start;
          }
          .diff-progress-track {
            display: none;
          }
          .diff-stage-panel {
            padding: 1.75rem;
          }
          .diff-stage-title {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}
