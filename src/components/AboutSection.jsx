import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  Target, 
  Eye, 
  Globe2, 
  Users, 
  ChevronDown 
} from 'lucide-react';

export default function AboutSection() {
  const [openPanel, setOpenPanel] = useState(null);

  const toggle = (key) => setOpenPanel(prev => prev === key ? null : key);

  const values = [
    { name: 'Integrity', desc: 'Guides every decision we make.' },
    { name: 'Transparency', desc: 'Ensures our clients always know where they stand.' },
    { name: 'Ownership', desc: 'Drives us to remain accountable for outcomes, not just activities.' },
    { name: 'Excellence', desc: 'Pushes us to continually raise the standard of our work.' }
  ];

  const panels = [
    {
      key: 'about',
      icon: <Compass size={22} />,
      label: 'About Gaussians',
      accent: 'linear-gradient(135deg, #5A38FD 0%, #7C3AED 100%)',
      content: (
        <div className="panel-body-text">
          <p className="story-text">
            Gaussians was founded on a simple belief: every organization deserves a trusted partner who understands both the challenges of running a business and the realities of managing cybersecurity, compliance, and risk in an increasingly complex world.
          </p>
          <p className="story-text">
            We know that behind every audit, security review, compliance requirement, or customer questionnaire is a leadership team trying to grow the business, protect its reputation, earn customer trust, and make the right decisions with limited time and resources. Having worked alongside organizations at different stages of growth, we understand these pressures because we have lived them with our clients.
          </p>
          <p className="story-text">
            That understanding shapes the way we work.
          </p>
          <p className="story-text">
            At Gaussians, we do not see ourselves as an external consulting firm delivering reports and recommendations. We see ourselves as partners in our clients' journey. We work alongside leadership teams, security teams, compliance functions, auditors, and operational stakeholders to build trust, strengthen resilience, and create programs that support long-term business success.
          </p>
          <p className="story-text">
            Since our inception in 2021, we have grown from a founder-led vision into a team of dedicated professionals supporting organizations across global markets. Over the years, we have helped clients establish and mature cybersecurity, governance, risk, compliance, and assurance programs while building scalable operating models that continue to deliver value long after individual projects have concluded.
          </p>
        </div>
      )
    },
    {
      key: 'special',
      icon: <Sparkles size={22} />,
      label: 'What Makes Gaussians Special',
      accent: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
      content: (
        <div className="panel-body-text">
          <p className="story-text font-semibold text-dark">
            What makes Gaussians special is our people.
          </p>
          <p className="story-text">
            Our team brings together experienced professionals with diverse backgrounds across cybersecurity, governance, risk management, compliance, assurance, privacy, and technology advisory. Beyond technical expertise, our people are known for their curiosity, accountability, professionalism, and commitment to client success. We take pride in building teams that clients trust—not only for their knowledge, but for their ability to listen, collaborate, and deliver.
          </p>
          
          <div className="values-wrapper">
            <h4 className="values-heading">We believe that successful partnerships are built on strong values:</h4>
            <div className="values-grid">
              {values.map((v, i) => (
                <div key={i} className="value-pill">
                  <div className="value-dot"></div>
                  <div><strong>{v.name}:</strong> {v.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="story-text">
            Today, Gaussians combines strategic advisory, operational support, managed services, and specialist talent solutions to help organizations navigate change, manage risk, strengthen trust, and achieve their goals with confidence.
          </p>
          <p className="story-text" style={{ fontWeight: 600, color: 'var(--primary)', marginTop: '1rem' }}>
            Our journey continues to evolve, but our purpose remains unchanged: to be the trusted partner organizations rely on when security, compliance, risk, and trust matter most.
          </p>
        </div>
      )
    },
    {
      key: 'vision-mission',
      icon: <Target size={22} />,
      label: 'Vision and Mission',
      accent: 'linear-gradient(135deg, #5A38FD 0%, #4322EA 100%)',
      content: (
        <div className="panel-body-mv-split">
          <div className="mv-card-inline mission-inline">
            <div className="inline-badge"><Target size={24} /></div>
            <h3>Mission</h3>
            <p>
              To be the trusted partner organizations rely on to strengthen security, manage risk, achieve compliance, and build lasting trust with their customers, stakeholders, and communities.
            </p>
          </div>

          <div className="mv-card-inline vision-inline">
            <div className="inline-badge vision-badge"><Eye size={24} /></div>
            <h3>Vision</h3>
            <p>
              To create a world where security, compliance, and trust are not barriers to growth, but foundations for sustainable success.
            </p>
          </div>
        </div>
      )
    },
    {
      key: 'global',
      icon: <Globe2 size={22} />,
      label: 'Global Presence',
      accent: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
      content: (
        <div className="panel-body-text">
          <p className="story-text">
            Supporting organizations across global markets with trusted expertise in cybersecurity, compliance, governance, and assurance.
          </p>
          <p className="story-text">
            Our flexible delivery model enables us to work seamlessly across regions, time zones, and operating environments through offshore, remote, hybrid, and embedded team structures—providing clients with experienced professionals, scalable support, and strong accountability.
          </p>
          <p className="story-text font-semibold text-primary" style={{ marginBottom: 0 }}>
            Wherever our clients operate, our focus remains the same: strengthening trust, managing risk, and delivering outcomes.
          </p>
        </div>
      )
    },
    {
      key: 'leadership',
      icon: <Users size={22} />,
      label: 'Leadership and Subject Matter Experts',
      accent: 'linear-gradient(135deg, #EC4899 0%, #D946EF 100%)',
      content: (
        <div className="panel-body-text">
          <p className="story-text">
            Gaussians is led by experienced professionals who have spent their careers helping organizations navigate cybersecurity, compliance, governance, risk, and assurance challenges in complex and rapidly evolving business environments.
          </p>
          <p className="story-text">
            Our leadership team combines deep subject matter expertise with hands-on operational experience, having supported organizations ranging from high-growth startups to established global enterprises. Beyond advisory services, our leaders have built and scaled teams, established centers of excellence, managed large-scale compliance and risk programs, and partnered closely with business leaders to drive meaningful outcomes.
          </p>
          <p className="story-text">
            What sets our leadership apart is a commitment to staying connected to both our clients and our teams. We believe the best solutions come from understanding business realities, working collaboratively, and remaining accountable from strategy through execution.
          </p>
          <p className="story-text font-semibold" style={{ marginBottom: 0 }}>
            At Gaussians, leadership is measured not only by expertise, but by the trust we earn, the people we develop, and the outcomes we help our clients achieve.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="about-section">
      {/* Decorative background orbs */}
      <div className="about-orb about-orb-1" />
      <div className="about-orb about-orb-2" />

      <div className="container about-container">
        {/* Section Header */}
        <div className="section-header fade-in-up about-header-block">
          <div className="badge-pill">
            <Compass size={16} />
            <span>About Gaussians</span>
          </div>
          <h2 className="about-main-title">Your Trusted Partner in <span className="about-gradient-text">Security &amp; Compliance</span></h2>
          <div className="section-divider"></div>
          <p className="about-subtitle">
            Founded on a simple belief: every organization deserves a trusted partner who understands both business growth and the realities of managing security, compliance, and risk.
          </p>
        </div>

        {/* Expandable Panels */}
        <div className="accordion-group fade-in-up">
          {panels.map((panel) => {
            const isOpen = openPanel === panel.key;
            return (
              <div key={panel.key} className={`accordion-item ${isOpen ? 'is-open' : ''} panel-${panel.key}`}>
                <button
                  className="accordion-trigger"
                  onClick={() => toggle(panel.key)}
                  aria-expanded={isOpen}
                >
                  <div className="accordion-trigger-left">
                    <span className="accordion-icon-box" style={{ background: panel.accent }}>
                      {panel.icon}
                    </span>
                    <span className="accordion-label">{panel.label}</span>
                  </div>
                  <ChevronDown size={20} className={`accordion-chevron ${isOpen ? 'rotated' : ''}`} />
                </button>
                <div className="accordion-body">
                  <div className="accordion-body-inner">
                    {panel.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 7rem 0 6rem;
          background: linear-gradient(160deg, #FAFAFE 0%, #F5F3FF 50%, #FFFFFF 100%);
          position: relative;
          overflow: hidden;
        }

        .about-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.18;
        }
        .about-orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #5A38FD, transparent);
          top: -120px; left: -180px;
        }
        .about-orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #A855F7, transparent);
          bottom: -100px; right: -120px;
        }

        .about-container {
          position: relative;
          z-index: 2;
        }

        .about-header-block {
          max-width: 750px;
          margin: 0 auto 3.5rem auto;
          text-align: center;
        }

        .about-main-title {
          font-size: clamp(2rem, 4vw, 2.9rem);
          line-height: 1.2;
        }

        .about-gradient-text {
          background: linear-gradient(135deg, var(--primary) 0%, #A855F7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-subtitle {
          font-size: 1.08rem;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 620px;
          margin: 0 auto;
        }

        /* Accordion */
        .accordion-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .accordion-item {
          border-radius: var(--radius-lg);
          border: 1.5px solid var(--border-purple);
          background: #FFFFFF;
          box-shadow: 0 4px 20px rgba(90, 56, 253, 0.04);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
          overflow: hidden;
        }

        .accordion-item.is-open {
          border-color: var(--primary);
          box-shadow: 0 8px 30px rgba(90, 56, 253, 0.1);
        }

        .accordion-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.35rem 1.75rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 1rem;
          transition: background 0.2s ease;
        }

        .accordion-trigger:hover {
          background: var(--primary-light);
        }

        .accordion-trigger-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .accordion-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          flex-shrink: 0;
          box-shadow: 0 6px 16px rgba(90, 56, 253, 0.3);
        }

        .accordion-label {
          font-size: 1.08rem;
          font-weight: 700;
          color: var(--text-dark);
          font-family: var(--font-heading);
        }

        .accordion-chevron {
          color: var(--primary);
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .accordion-chevron.rotated {
          transform: rotate(180deg);
        }

        /* Accordion body */
        .accordion-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .accordion-item.is-open .accordion-body {
          max-height: 3500px;
        }

        .accordion-body-inner {
          padding: 2rem;
          border-top: 1px solid var(--border-purple);
        }

        /* Common content styles */
        .story-text {
          font-size: 1rem;
          color: var(--text-body);
          line-height: 1.7;
          margin-bottom: 1.1rem;
        }
        .story-text:last-of-type {
          margin-bottom: 0;
        }

        .text-dark {
          color: var(--text-dark);
        }
        .font-semibold {
          font-weight: 600;
        }

        /* What makes special values list */
        .values-wrapper {
          margin: 1.75rem 0;
          padding: 1.5rem;
          background: var(--bg-soft-purple);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-purple);
        }

        .values-heading {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: var(--primary);
          font-weight: 700;
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }

        .value-pill {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.93rem;
          color: var(--text-body);
        }

        .value-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--primary);
          margin-top: 6px;
          flex-shrink: 0;
        }

        /* Vision & Mission inline grid */
        .panel-body-mv-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          padding-top: 1rem;
        }

        .mv-card-inline {
          padding: 2rem;
          background: var(--bg-soft-purple);
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          position: relative;
        }

        .mv-card-inline h3 {
          font-size: 1.4rem;
          color: var(--text-dark);
          margin-bottom: 0.75rem;
          margin-top: 1rem;
        }

        .mv-card-inline p {
          font-size: 0.98rem;
          line-height: 1.65;
          color: var(--text-body);
        }

        .inline-badge {
          width: 48px; height: 48px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--primary), var(--accent-purple));
          color: #FFFFFF;
          display: flex; align-items: center; justify-content: center;
        }

        .vision-badge {
          background: linear-gradient(135deg, var(--accent-purple), var(--indigo-accent));
        }

        /* Responsive styling */
        @media (max-width: 768px) {
          .panel-body-mv-split {
            grid-template-columns: 1fr;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
