import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          <img src="./assets/coloured_logo.jpeg" alt="Gaussians Logo" className="logo-img" />
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <button className="nav-item" onClick={() => scrollTo('about')}>About Gaussians</button>
          <button className="nav-item" onClick={() => scrollTo('services')}>Services</button>
          <button className="nav-item" onClick={() => scrollTo('forward')}>Gaussians Forward</button>
          <button className="nav-item" onClick={() => { setMobileMenuOpen(false); onOpenContact('Connect with Us Navigation'); }}>Connect with Us</button>
          <div className="mobile-cta">
            <button className="btn-primary" onClick={onOpenContact}>
              Talk to an Expert <ArrowRight size={16} />
            </button>
          </div>
        </nav>

        <div className="nav-cta-desktop">
          <button className="btn-primary" onClick={onOpenContact}>
            Get Started <ArrowRight size={16} />
          </button>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          transition: all 0.3s ease;
          background: #FFFFFF;
          border-bottom: 1px solid rgba(226, 232, 240, 0.6);
        }

        .navbar-header.scrolled {
          padding: 0.85rem 0;
          box-shadow: 0 4px 20px rgba(90, 56, 253, 0.08);
          border-bottom: 1px solid rgba(216, 210, 255, 0.6);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .logo-img {
          height: 38px;
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.2rem;
        }

        .nav-item {
          background: none;
          border: none;
          color: var(--text-body);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition-fast);
          padding: 0.25rem 0;
          position: relative;
        }

        .nav-item:hover {
          color: var(--primary);
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--primary);
          transition: var(--transition-fast);
          border-radius: 2px;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .mobile-cta {
          display: none;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
        }

        @media (max-width: 968px) {
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: #FFFFFF;
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transform: translateY(-150%);
            transition: transform 0.3s ease;
          }

          .nav-links.open {
            transform: translateY(0);
          }

          .nav-cta-desktop {
            display: none;
          }

          .mobile-cta {
            display: block;
            width: 100%;
          }

          .mobile-cta button {
            width: 100%;
            justify-content: center;
          }

          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
