import React from 'react';
import { CheckCircle, Briefcase } from 'lucide-react';

export default function LeadershipSection({ onOpenContact }) {
  const leaders = [
    {
      name: "Megha Bakshi",
      role: "Founder & Technology Risk and Trust Leader",
      tagline: "15+ Years of Experience",
      image: "./megha.jpeg",
      imagePosition: "center 20%",
      bio: "Megha founded Gaussians with a simple belief that security, compliance, and risk should enable business growth, not slow it down. Drawing on Big 4 and industry leadership experience, she partners with organizations to build practical, scalable programs that strengthen trust, manage risk, and support long-term success.",
      highlights: ["Global Consulting & Industry Veterans", "Big-4 & Enterprise Background", "15+ Years Executive Leadership"],
      avatarInitials: "MB",
      accentColor: "#5A38FD"
    },
    {
      name: "Mallikarjuna Reddy",
      role: "Associate Director, Technology Assurance & Risk Advisory",
      tagline: "200+ Audit & GRC Engagements",
      image: "./arjun.jpeg",
      imagePosition: "center top",
      bio: "Mallikarjuna Reddy brings extensive experience working with multinational organizations, leading CPA firms, and growing businesses, with a strong background in external and internal audits, risk advisory, cybersecurity, compliance, and IT assurance. Having led and contributed to 200+ engagements across SOC 1 & SOC 2, ISO 27001, CMMC, HITECH, PCI DSS, HIPAA, GDPR, NIST, SOX ITGC, and TPRM.",
      highlights: ["200+ Audit & GRC Engagements", "MNC & Leading CPA Firm Experience", "Audit, Cybersecurity & Compliance Leadership"],
      avatarInitials: "MR",
      accentColor: "#7C3AED"
    }
  ];

  return (
    <section id="leadership" className="leadership-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <Briefcase size={14} className="badge-icon" />
            <span>Leadership & Subject Matter Experts</span>
          </div>
          <h2>Experienced Leaders. Trusted Advisors. Proven Outcomes.</h2>
          <p>
            Our leadership team combines deep subject matter expertise with hands-on operational experience.
          </p>
        </div>

        <div className="leadership-list">
          {leaders.map((leader, idx) => (
            <div key={idx} className="leader-card glass-card">

              {/* Left: Avatar */}
              <div className="leader-avatar-col">
                <div className="leader-avatar-ring" style={{ '--accent': leader.accentColor }}>
                  <div className="leader-avatar-wrap">
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="leader-avatar-img"
                        style={{ objectPosition: leader.imagePosition || 'center top' }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div
                      className="leader-avatar-fallback"
                      style={{ display: leader.image ? 'none' : 'flex', background: leader.accentColor }}
                    >
                      {leader.avatarInitials}
                    </div>
                  </div>
                </div>
                <div className="leader-tagline-badge">{leader.tagline}</div>
              </div>

              {/* Right: Content */}
              <div className="leader-content">
                <div className="leader-name-block">
                  <h3 className="leader-name">{leader.name}</h3>
                  <div className="leader-role">{leader.role}</div>
                </div>

                <p className="leader-bio">{leader.bio}</p>

                <div className="leader-highlights">
                  {leader.highlights.map((h, i) => (
                    <div key={i} className="h-item">
                      <CheckCircle size={14} className="h-icon" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="btn-secondary leader-btn"
                  onClick={() => onOpenContact(`Consultation with ${leader.name}`)}
                >
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

        .leadership-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 980px;
          margin: 0 auto;
        }

        .leader-card {
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: row;
          gap: 2.5rem;
          padding: 2.5rem;
          align-items: flex-start;
          transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }

        .leader-card:hover {
          border-color: var(--primary);
          box-shadow: 0 16px 45px rgba(90, 56, 253, 0.12);
          transform: translateY(-3px);
        }

        /* Avatar column */
        .leader-avatar-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
          flex-shrink: 0;
        }

        .leader-avatar-ring {
          width: 152px;
          height: 152px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, var(--accent, #5A38FD), #A855F7);
          box-shadow: 0 8px 28px rgba(90, 56, 253, 0.22);
        }

        .leader-avatar-wrap {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: var(--bg-soft-purple);
          border: 3px solid #FFFFFF;
        }

        .leader-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.4s ease;
        }

        .leader-card:hover .leader-avatar-img {
          transform: scale(1.06);
        }

        .leader-avatar-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2.5rem;
          border-radius: 50%;
        }

        .leader-tagline-badge {
          background: var(--primary-light);
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-small);
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-full);
          text-align: center;
          white-space: nowrap;
        }

        /* Content column */
        .leader-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-width: 0;
        }

        .leader-name-block {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .leader-name {
          font-size: 1.85rem;
          color: var(--text-dark);
          line-height: 1.2;
          margin: 0;
        }

        .leader-role {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--primary);
          line-height: 1.4;
        }

        .leader-bio {
          font-size: var(--fs-body);
          color: var(--text-body);
          line-height: 1.7;
          margin: 0;
        }

        .leader-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1.25rem;
          background: var(--bg-soft-purple);
          padding: 0.85rem 1.1rem;
          border-radius: var(--radius-md);
        }

        .h-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: var(--fs-small);
          font-weight: 600;
          color: var(--text-dark);
        }

        .h-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .leader-btn {
          align-self: flex-start;
        }

        @media (max-width: 768px) {
          .leader-card {
            flex-direction: column;
            align-items: center;
            padding: 2rem 1.5rem;
            text-align: center;
            gap: 1.5rem;
          }

          .leader-highlights {
            justify-content: center;
          }

          .leader-btn {
            align-self: center;
            width: 100%;
            justify-content: center;
          }

          .leader-name {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
