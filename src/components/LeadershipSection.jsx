import React from 'react';
import { Linkedin, Mail, Award, Shield, CheckCircle } from 'lucide-react';

export default function LeadershipSection({ onOpenContact }) {
  const leaders = [
    {
      name: "Megha Bakshi",
      role: "Founder & Technology Risk and Trust Leader",
      tagline: "15+ Years of Experience",
      image: "./megha.jpeg",
      imagePosition: "center 20%",
      bio: "Megha founded Gaussians with a simple belief that security, compliance, and risk should enable business growth, not slow it down. Drawing on Big 4 and industry leadership experience, she partners with organizations to build practical, scalable programs that strengthen trust, manage risk, and support long-term success. She believes the best consultants don't simply deliver recommendations, they become trusted partners in their clients' journey.",
      highlights: ["Global Consulting & Industry Veterans", "Big-4 & Enterprise Background", "15+ Years Executive Leadership"],
      avatarInitials: "MB"
    },
    {
      name: "Arjun Mallikarjuna Reddy",
      role: "Associate Director, Technology Assurance & Risk Advisory",
      tagline: "200+ Audit & GRC Engagements",
      image: "./arjun.jpeg",
      imagePosition: "center top",
      bio: "Mallikarjuna Reddy brings extensive experience working with multinational organizations, leading CPA firms, and growing businesses, with a strong background in external and internal audits, risk advisory, cybersecurity, compliance, and IT assurance.\n\nHaving led and contributed to 200+ engagements, he has worked across leading frameworks including SOC 1 & SOC 2, ISO 27001, CMMC, HITECH, PCI DSS, HIPAA, GDPR, NIST, SOX ITGC, ITGC, and TPRM.\n\nHe partners with organizations to strengthen governance, manage cybersecurity and technology risks, achieve compliance objectives, and build practical, scalable programs that support business growth, resilience, and long-term trust.",
      highlights: ["200+ Audit & GRC Engagements", "MNC & Leading CPA Firm Experience", "Audit, Cybersecurity & Compliance Leadership"],
      avatarInitials: "AM"
    }
  ];

  return (
    <section id="leadership" className="leadership-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <span>LEADERSHIP & SUBJECT MATTER EXPERTS</span>
          </div>
          <h2>Experienced Leaders. Trusted Advisors. Proven Outcomes.</h2>
          <p>
            Our leadership team combines deep subject matter expertise with hands-on operational experience. We stay connected to our clients and teams to deliver practical solutions that drive measurable, lasting impact.
          </p>
        </div>

        <div className="leadership-grid">
          {leaders.map((leader, idx) => (
            <div key={idx} className="leader-card glass-card">
              <div className="leader-header">
                <div className="leader-avatar-box">
                  {leader.image
                    ? <img src={leader.image} alt={leader.name} className="leader-avatar-img" style={{ objectPosition: leader.imagePosition || 'center top' }} onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
                    : null
                  }
                  <span className="leader-avatar-fallback" style={{ display: leader.image ? 'none' : 'flex' }}>{leader.avatarInitials}</span>
                </div>
                <div>
                  <h3 className="leader-name">{leader.name}</h3>
                  <div className="leader-role">{leader.role}</div>
                  <div className="leader-tagline">{leader.tagline}</div>
                </div>
              </div>

              {leader.bio && (
                <div className="leader-bio">
                  {leader.bio.split('\n\n').map((para, i) => (
                    <p key={i} style={{ marginBottom: i < leader.bio.split('\n\n').length - 1 ? '0.85rem' : 0 }}>{para}</p>
                  ))}
                </div>
              )}


              <div className="leader-highlights">
                {leader.highlights.map((h, i) => (
                  <div key={i} className="h-item">
                    <CheckCircle size={15} className="h-icon" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="leader-footer">
                <button className="btn-secondary leader-btn" onClick={() => onOpenContact(`Consultation with ${leader.name}`)}>
                  Connect with {leader.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .leadership-section {
          padding: 6rem 0;
          background: var(--bg-soft-purple);
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
          max-width: 1040px;
          margin: 0 auto;
        }

        .leader-card {
          padding: 2.5rem;
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
        }

        .leader-card:hover {
          border-color: var(--primary);
          box-shadow: 0 16px 35px rgba(90, 56, 253, 0.12);
        }

        .leader-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .leader-avatar-box {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(90, 56, 253, 0.25);
          flex-shrink: 0;
          position: relative;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent-purple) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .leader-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .leader-avatar-fallback {
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
        }

        .leader-name {
          font-size: 1.4rem;
          color: var(--text-dark);
          margin-bottom: 0.15rem;
        }

        .leader-role {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--primary);
        }

        .leader-tagline {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .leader-bio {
          font-size: 0.98rem;
          color: var(--text-body);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .leader-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          background: var(--bg-soft-purple);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }

        .h-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dark);
        }

        .h-icon {
          color: var(--primary);
        }

        .leader-footer {
          display: flex;
          justify-content: flex-start;
        }

        .leader-btn {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 868px) {
          .leadership-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
