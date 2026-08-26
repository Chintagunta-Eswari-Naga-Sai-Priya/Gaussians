import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import DifferenceSection from './components/DifferenceSection';
import HowWeHelp from './components/HowWeHelp';
import ServicesShowcase from './components/ServicesShowcase';
import DeliveryModel from './components/DeliveryModel';
import AboutSection from './components/AboutSection';
import GlobalPresence from './components/GlobalPresence';
import LeadershipSection from './components/LeadershipSection';
import GaussiansForward from './components/GaussiansForward';
import ContactModal from './components/ContactModal';
import FrameworksExplorerModal from './components/FrameworksExplorerModal';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [frameworksModalOpen, setFrameworksModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('General Inquiry');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleOpenContact = (topic = 'General Inquiry') => {
    setSelectedTopic(topic);
    setContactModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll reveal + scroll-to-top visibility
  useEffect(() => {
    const scrollHandler = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', scrollHandler);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    const selectors = '.fade-in-up, .scale-in, .slide-in-left';
    const elements = document.querySelectorAll(selectors);
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className="app-main">
      <Navbar onOpenContact={() => handleOpenContact('Navbar Inquiry')} />
      
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenContact={() => handleOpenContact('Hero Expert Consultation')} 
          onExploreServices={handleExploreServices}
        />
        

        {/* 2. The Gaussians Difference | Why Clients Choose Us */}
        <DifferenceSection />

        {/* 3. How We Help */}
        <HowWeHelp onOpenContact={(topic) => handleOpenContact(topic)} />

        {/* 4. Services | Your Compliance Journey. Our Commitment. */}
        <ServicesShowcase 
          onOpenContact={(service) => handleOpenContact(`${service} Consultation`)} 
          onOpenFrameworks={() => setFrameworksModalOpen(true)}
        />
        
        {/* 5. How We Deliver | Delivery Model */}
        <DeliveryModel onOpenContact={(model) => handleOpenContact(`${model} Delivery Model`)} />
        
        {/* 6. About Gaussians (5 collapsible text accordions) */}
        <AboutSection onOpenContact={(topic) => handleOpenContact(topic)} />
        
        {/* 7. Global Presence (Map & Stats) */}
        <GlobalPresence onOpenContact={(topic) => handleOpenContact(topic)} />
        
        {/* 8. Leadership and Subject Matter Experts (Profile Cards) */}
        <LeadershipSection onOpenContact={(topic) => handleOpenContact(topic)} />
        
        {/* 9. Gaussians Forward */}
        <GaussiansForward onOpenContact={(topic) => handleOpenContact(topic)} />
      </main>

      <Footer onOpenContact={() => handleOpenContact('Footer Inquiry')} />

      <ContactModal 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultTopic={selectedTopic}
      />

      <FrameworksExplorerModal
        isOpen={frameworksModalOpen}
        onClose={() => setFrameworksModalOpen(false)}
      />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
