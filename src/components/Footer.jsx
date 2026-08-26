import React from 'react';
import { Shield, Mail, Phone, MapPin, ArrowUpRight, Heart } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="connect" className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img src="./assets/logo.jpeg" alt="Gaussians Logo White" className="f-logo-img" />
            </div>
            <p className="footer-brand-desc">
              Helping organizations transform security, compliance, and risk management from business challenges into strategic advantages through practical execution and long-term partnership.
            </p>
            <div className="footer-tagline-badge">
              <Shield size={16} /> <span>We do not only advise. We deliver.</span>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="f-title">Core Services</h4>
            <ul>
              <li><button onClick={() => scrollTo('services')}>Cybersecurity & Compliance</button></li>
              <li><button onClick={() => scrollTo('services')}>Risk & Governance</button></li>
              <li><button onClick={() => scrollTo('services')}>Audit & Assurance</button></li>
              <li><button onClick={() => scrollTo('services')}>Managed Services</button></li>
              <li><button onClick={() => scrollTo('services')}>Program Implementation</button></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="f-title">Key Frameworks</h4>
            <ul>
              <li><button onClick={() => scrollTo('frameworks')}>SOC 1, SOC 2 & SOC 3</button></li>
              <li><button onClick={() => scrollTo('frameworks')}>ISO 27001 & ISO 42001 (AI)</button></li>
              <li><button onClick={() => scrollTo('frameworks')}>NIST CSF 2.0 & NIST AI RMF</button></li>
              <li><button onClick={() => scrollTo('frameworks')}>HITRUST CSF & HIPAA</button></li>
              <li><button onClick={() => scrollTo('frameworks')}>PCI DSS v4.0 & GDPR</button></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="f-title">Global Headquarters</h4>
            <div className="f-contact-item">
              <MapPin size={16} className="f-c-icon" />
              <span>Unit 314, Suncity Tower, Sector 65, Gurgaon, Haryana, 122002 India</span>
            </div>
            <div className="f-contact-item">
              <Phone size={16} className="f-c-icon" />
              <span>+91 9711283991</span>
            </div>
            <div className="f-contact-item">
              <Mail size={16} className="f-c-icon" />
              <span>info@gaussians.com</span>
            </div>

            <button className="btn-primary f-btn" onClick={() => onOpenContact()}>
              Talk to an Expert <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} Gaussians. All rights reserved. Building Trust. Delivering Assurance.
          </div>
          <div className="f-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <button onClick={() => scrollTo('forward')}>Gaussians Forward Initiative</button>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #110B29;
          color: rgba(255, 255, 255, 0.8);
          padding: 5rem 0 2rem 0;
          position: relative;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 3rem;
          padding-bottom: 4rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .f-logo-img {
          height: 38px;
          object-fit: contain;
          margin-bottom: 1.25rem;
          display: block;
          mix-blend-mode: screen;
        }

        .footer-brand-desc {
          font-size: var(--fs-body);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.5rem;
        }

        .footer-tagline-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(90, 56, 253, 0.25);
          border: 1px solid rgba(124, 58, 237, 0.4);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-size: var(--fs-small);
          color: #D8D2FF;
          font-weight: 600;
        }

        .f-title {
          font-size: var(--fs-card);
          color: #FFFFFF;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
          font-weight: 700;
        }

        .footer-links-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links-col button {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          font-family: var(--font-body);
          font-size: var(--fs-body);
          cursor: pointer;
          transition: var(--transition-fast);
          padding: 0;
          text-align: left;
        }

        .footer-links-col button:hover {
          color: #FFFFFF;
          transform: translateX(3px);
        }

        .footer-contact-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .f-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: var(--fs-body);
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.4;
        }

        .f-c-icon {
          color: var(--primary-border);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .f-btn {
          margin-top: 0.5rem;
          width: fit-content;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          font-size: var(--fs-small);
          color: rgba(255, 255, 255, 0.5);
        }

        .f-bottom-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .f-bottom-links a,
        .f-bottom-links button {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: var(--fs-small);
          text-decoration: none;
          cursor: pointer;
        }

        .f-bottom-links a:hover,
        .f-bottom-links button:hover {
          color: #FFFFFF;
        }

        @media (max-width: 968px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
