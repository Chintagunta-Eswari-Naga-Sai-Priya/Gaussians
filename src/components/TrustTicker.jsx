import React from 'react';
import { Building2, Award, ShieldCheck } from 'lucide-react';

export default function TrustTicker() {
  const clients = [
    { name: 'Dun & Bradstreet', category: 'Risk & Data Intelligence' },
    { name: 'Allianz', category: 'Insurance & Financial Assurance' },
    { name: 'Ultragenyx', category: 'Biotechnology & Health' },
    { name: 'Credencys', category: 'Digital Engineering' },
    { name: 'Revature', category: 'Technology Talent' },
    { name: 'iThought', category: 'Financial Advisory' }
  ];

  return (
    <section className="ticker-section dark-ticker">
      <div className="ticker-bg-glow"></div>

      <div className="container relative-z">
        <p className="ticker-label dark-ticker-label">TRUSTED BY FORWARD-THINKING ORGANIZATIONS</p>
      </div>

      <div className="ticker-wrapper">
        <div className="marquee-track">
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div className="client-badge dark-client-badge" key={idx}>
              <div className="badge-icon-wrap dark-icon-wrap">
                <Building2 size={18} className="client-icon" />
              </div>
              <div>
                <span className="client-name dark-name">{client.name}</span>
                <span className="client-cat dark-cat">{client.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ticker-section {
          padding: 3rem 0 3.5rem 0;
          background: linear-gradient(135deg, #0A051C 0%, #150A36 50%, #0D0424 100%);
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(167, 139, 250, 0.2);
          border-bottom: 1px solid rgba(167, 139, 250, 0.2);
        }

        .ticker-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 200px;
          background: radial-gradient(ellipse, rgba(124, 58, 237, 0.22) 0%, rgba(0,0,0,0) 70%);
          pointer-events: none;
        }

        .relative-z {
          position: relative;
          z-index: 2;
        }

        .dark-ticker-label {
          text-align: center;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: #A78BFA;
          margin-bottom: 1.75rem;
          text-transform: uppercase;
        }

        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .ticker-wrapper::before,
        .ticker-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 140px;
          height: 100%;
          z-index: 3;
          pointer-events: none;
        }

        .ticker-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #0A051C, rgba(10, 5, 28, 0));
        }

        .ticker-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #0A051C, rgba(10, 5, 28, 0));
        }

        .dark-client-badge {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem 1.6rem;
          margin: 0 0.85rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(167, 139, 250, 0.25);
          transition: all 0.3s ease;
        }

        .dark-client-badge:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(167, 139, 250, 0.6);
          box-shadow: 0 8px 25px rgba(124, 58, 237, 0.3);
          transform: translateY(-2px);
        }

        .dark-icon-wrap {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.35) 0%, rgba(99, 102, 241, 0.25) 100%);
          border: 1px solid rgba(167, 139, 250, 0.3);
          color: #DDD6FE;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dark-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
          color: #FFFFFF;
          display: block;
        }

        .dark-cat {
          font-size: 0.75rem;
          color: rgba(226, 232, 240, 0.75);
          display: block;
        }
      `}</style>
    </section>
  );
}
