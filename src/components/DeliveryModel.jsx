import React from 'react';
import { MessageSquare, Cog, UserPlus, Globe2, ArrowRight } from 'lucide-react';

export default function DeliveryModel({ onOpenContact }) {
  const models = [
    {
      icon: <MessageSquare size={26} />,
      title: "Advisory & Consulting",
      desc: "Expert guidance to help design, assess and improve your security and compliance programs.",
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=480&q=80&auto=format&fit=crop'
    },
    {
      icon: <Cog size={26} />,
      title: "Managed Services",
      desc: "Ongoing support to operate compliance, risk and assurance activities day-to-day.",
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=480&q=80&auto=format&fit=crop'
    },
    {
      icon: <UserPlus size={26} />,
      title: "Staff Augmentation",
      desc: "Skilled professionals embedded within your team on a flexible, on-demand basis.",
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=480&q=80&auto=format&fit=crop'
    },
    {
      icon: <Globe2 size={26} />,
      title: "Dedicated Offshore Teams",
      desc: "Scalable, cost-effective teams aligned to your business objectives globally.",
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=480&q=80&auto=format&fit=crop'
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
              {/* Photo header */}
              <div className="delivery-card-img-wrap">
                <img
                  src={m.img}
                  alt={m.title}
                  className="delivery-card-img"
                  loading="lazy"
                />
                <div className="delivery-img-overlay" />
                <div className="delivery-icon-box">
                  {m.icon}
                </div>
              </div>

              <div className="delivery-card-body">
                <h3 className="delivery-title">{m.title}</h3>
                <p className="delivery-desc">{m.desc}</p>
                <button className="delivery-link" onClick={() => onOpenContact(m.title)}>
                  Explore Model <ArrowRight size={14} />
                </button>
              </div>
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
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: var(--transition-normal);
        }

        .delivery-card:hover {
          border-color: var(--primary);
          box-shadow: 0 16px 40px rgba(90, 56, 253, 0.14);
          transform: translateY(-4px);
        }

        /* Photo header */
        .delivery-card-img-wrap {
          position: relative;
          width: 100%;
          height: 145px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .delivery-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .delivery-card:hover .delivery-card-img {
          transform: scale(1.06);
        }

        .delivery-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(90, 56, 253, 0.3) 0%,
            rgba(15, 23, 42, 0.6) 100%
          );
        }

        .delivery-icon-box {
          position: absolute;
          bottom: 1rem;
          left: 1.1rem;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: #FFFFFF;
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.18);
        }

        /* Card body */
        .delivery-card-body {
          padding: 1.4rem 1.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 0.6rem;
        }

        .delivery-title {
          font-size: var(--fs-card);
          color: var(--text-dark);
          margin: 0;
        }

        .delivery-desc {
          font-size: var(--fs-body);
          color: var(--text-muted);
          line-height: 1.55;
          margin: 0;
          flex-grow: 1;
        }

        .delivery-link {
          background: none;
          border: none;
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-small);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          transition: var(--transition-fast);
          padding: 0;
          margin-top: 0.5rem;
          width: fit-content;
        }

        .delivery-link:hover {
          gap: 0.65rem;
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
