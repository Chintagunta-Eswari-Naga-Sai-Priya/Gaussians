import React from 'react';
import { GraduationCap, Share2, TrendingUp, Heart, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function GaussiansForward({ onOpenContact }) {
  const pillars = [
    {
      num: '01',
      icon: <GraduationCap size={24} />,
      title: 'Learn',
      subtitle: 'Build Knowledge',
      desc: 'Developing skills and expanding perspectives through structured training, workshops, and real-world exposure.',
      points: ['Internships', 'Mentorship Programs', 'Training & Workshops', 'Webinars', 'Real-world Exposure']
    },
    {
      num: '02',
      icon: <Share2 size={24} />,
      title: 'Share',
      subtitle: 'Inspire Others',
      desc: 'Sharing industry insights, thought leadership articles, and expert discussions to make complex topics accessible.',
      points: ['Thought Leadership', 'Industry Articles', 'Knowledge Webinars', 'Expert Roundtables']
    },
    {
      num: '03',
      icon: <TrendingUp size={24} />,
      title: 'Grow',
      subtitle: 'Elevate Together',
      desc: 'Fostering curiosity, innovation, and professional development across every stage of a cybersecurity career.',
      points: ['Skill Acceleration', 'Career Pathways', 'Cross-domain Collaboration', 'Continuous Improvement']
    },
    {
      num: '04',
      icon: <Heart size={24} />,
      title: 'Give Back',
      subtitle: 'Create Impact',
      desc: 'Contributing to the broader professional ecosystem through educational support and community mentorship.',
      points: ['Community Initiatives', 'Pro-bono Guidance', 'Educational Forums', 'Nurturing Future Talent']
    }
  ];

  return (
    <section id="forward" className="forward-section">
      <div className="forward-bg-mesh"></div>
      <div className="forward-glow-orb orb-1"></div>
      <div className="forward-glow-orb orb-2"></div>

      <div className="container relative-z">
        <div className="section-header dark-header">
          <div className="badge-pill forward-pill">
            <Sparkles size={16} />
            <span>GAUSSIANS FORWARD</span>
          </div>
          <h2 className="dark-title">Learn. Share. Grow. Give Back.</h2>
          <div className="section-divider forward-divider"></div>
          <p className="dark-desc">
            At Gaussians, we believe that building a stronger profession requires more than delivering great work for clients. It requires investing in people, sharing knowledge, creating opportunities, and contributing to communities.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((p, idx) => (
            <div key={idx} className="pillar-card dark-glass-card">
              <div className="pillar-top">
                <span className="p-num">{p.num}</span>
                <div className="p-icon">{p.icon}</div>
              </div>
              <h3 className="p-title">{p.title}</h3>
              <div className="p-sub">{p.subtitle}</div>
              <p className="p-desc">{p.desc}</p>

              <div className="p-points">
                {p.points.map((pt, i) => (
                  <div key={i} className="pt-item">
                    <CheckCircle2 size={14} className="pt-icon" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="forward-cta-banner dark-cta-glass">
          <div className="f-cta-content">
            <h3>Build a Better Tomorrow for Our Profession</h3>
            <p>Whether you are a student, early-career professional, experienced expert, or industry partner, there is a place for you in the Gaussians Forward community.</p>
          </div>
          <button className="btn-primary forward-cta-btn" onClick={() => onOpenContact('Gaussians Forward Community')}>
            Get Involved <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .forward-section {
          padding: 6.5rem 0;
          background: linear-gradient(135deg, #0A051C 0%, #150A36 40%, #1F0D4F 75%, #0D0424 100%);
          position: relative;
          overflow: hidden;
        }

        .forward-bg-mesh {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(rgba(147, 51, 234, 0.15) 1px, transparent 1px),
            radial-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 32px 32px;
          background-position: 0 0, 16px 16px;
          opacity: 0.6;
          pointer-events: none;
        }

        .forward-glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          top: -100px;
          left: -100px;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(0, 0, 0, 0) 70%);
        }

        .orb-2 {
          width: 550px;
          height: 550px;
          bottom: -150px;
          right: -100px;
          background: radial-gradient(circle, rgba(90, 56, 253, 0.28) 0%, rgba(0, 0, 0, 0) 70%);
        }

        .relative-z {
          position: relative;
          z-index: 2;
        }

        .dark-header .dark-title {
          color: #FFFFFF;
          font-size: var(--fs-section);
        }

        .dark-header .dark-desc {
          color: rgba(226, 232, 240, 0.82);
        }

        .forward-pill {
          background: rgba(124, 58, 237, 0.2) !important;
          border: 1px solid rgba(167, 139, 250, 0.4) !important;
          color: #A78BFA !important;
        }

        .forward-divider {
          background: linear-gradient(90deg, #A78BFA, #6366F1);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .dark-glass-card {
          padding: 2.2rem 1.6rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(167, 139, 250, 0.18);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          transition: all 0.35s ease;
        }

        .dark-glass-card:hover {
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(167, 139, 250, 0.5);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(124, 58, 237, 0.3);
        }

        .pillar-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .p-num {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: var(--fs-body);
          color: #C4B5FD;
          letter-spacing: 0.05em;
        }

        .p-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.3) 0%, rgba(99, 102, 241, 0.2) 100%);
          border: 1px solid rgba(167, 139, 250, 0.3);
          color: #DDD6FE;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .p-title {
          font-size: var(--fs-card);
          color: #FFFFFF;
          margin-bottom: 0.2rem;
        }

        .p-sub {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-small);
          color: #A78BFA;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .p-desc {
          font-size: var(--fs-body);
          color: rgba(226, 232, 240, 0.78);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .p-points {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 1.1rem;
          border-top: 1px dashed rgba(167, 139, 250, 0.25);
        }

        .pt-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: var(--fs-small);
          font-weight: 600;
          color: #F1F5F9;
        }

        .pt-icon {
          color: #A78BFA;
          flex-shrink: 0;
        }

        .dark-cta-glass {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2.75rem 3rem;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.85) 0%, rgba(79, 70, 229, 0.85) 100%);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(196, 181, 253, 0.3);
          color: #FFFFFF;
          border-radius: var(--radius-lg);
          gap: 2rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35), 0 0 35px rgba(124, 58, 237, 0.3);
        }

        .f-cta-content h3 {
          color: #FFFFFF;
          font-size: var(--fs-section);
          margin-bottom: 0.5rem;
        }

        .f-cta-content p {
          color: rgba(255, 255, 255, 0.9);
          font-size: var(--fs-body);
          max-width: 650px;
        }

        .forward-cta-btn {
          background: #FFFFFF !important;
          color: #4F46E5 !important;
          flex-shrink: 0;
          font-weight: 700;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .forward-cta-btn:hover {
          background: #F3E8FF !important;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .dark-cta-glass {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
          }
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
