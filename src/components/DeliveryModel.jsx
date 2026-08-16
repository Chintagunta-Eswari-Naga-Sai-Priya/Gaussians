import React from 'react';
import { MessageSquare, Cog, UserPlus, Globe2, ArrowRight } from 'lucide-react';

export default function DeliveryModel({ onOpenContact }) {
  const models = [
    {
      icon: <MessageSquare size={26} />,
      title: "Advisory & Consulting",
      desc: "Expert guidance to help design, assess and improve your programs."
    },
    {
      icon: <Cog size={26} />,
      title: "Managed Services",
      desc: "Ongoing support to operate compliance, risk and assurance activities."
    },
    {
      icon: <UserPlus size={26} />,
      title: "Staff Augmentation",
      desc: "Skilled professionals embedded within your team."
    },
    {
      icon: <Globe2 size={26} />,
      title: "Dedicated Offshore Teams",
      desc: "Scalable, cost-effective teams aligned to your business objectives."
    }
  ];

  return (
    <section className="delivery-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <span>How We Deliver</span>
          </div>
          <h2>Delivery Model</h2>
          <p>
            Flexible engagement structures designed to align with your organization's operating environment and objectives.
          </p>
        </div>

        <div className="delivery-grid">
          {models.map((m, idx) => (
            <div key={idx} className="delivery-card glass-card">
              <div className="delivery-icon-box">
                {m.icon}
              </div>
              <h3 className="delivery-title">{m.title}</h3>
              <p className="delivery-desc">{m.desc}</p>

              <button className="delivery-link" onClick={() => onOpenContact(m.title)}>
                Explore Model <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .delivery-section {
          padding: 5rem 0 6rem 0;
          background: #FFFFFF;
        }

        .delivery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .delivery-card {
          padding: 2rem 1.5rem;
          background: var(--bg-soft-purple);
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .delivery-card:hover {
          background: #FFFFFF;
          border-color: var(--primary);
          box-shadow: 0 12px 28px rgba(90, 56, 253, 0.12);
        }

        .delivery-icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .delivery-title {
          font-size: 1.15rem;
          color: var(--text-dark);
          margin-bottom: 0.6rem;
        }

        .delivery-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .delivery-link {
          background: none;
          border: none;
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .delivery-link:hover {
          gap: 0.6rem;
          color: var(--primary-hover);
        }

        @media (max-width: 1024px) {
          .delivery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .delivery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
