import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, defaultTopic }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    topic: defaultTopic || 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultTopic) {
      setFormData(prev => ({ ...prev, topic: defaultTopic }));
    }
  }, [defaultTopic]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container glass-card">
        <button className="close-btn" onClick={resetAndClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="success-state">
            <div className="success-icon-box">
              <CheckCircle2 size={54} />
            </div>
            <h2>Consultation Requested!</h2>
            <p>Thank you, <strong>{formData.name}</strong>. A Gaussians security and compliance specialist will contact you shortly regarding <strong>{formData.topic}</strong>.</p>
            <button className="btn-primary" onClick={resetAndClose}>
              Back to Website
            </button>
          </div>
        ) : (
          <div className="modal-content-grid">
            <div className="modal-info">
              <div className="badge-pill mb-2">
                <ShieldCheck size={14} /> <span>Talk to an Expert</span>
              </div>
              <h2>Ready to Operationalize Security & Compliance?</h2>
              <p className="modal-intro">
                Schedule a consultation with our experienced practitioners. We discuss practical timelines, scoping, and custom delivery options.
              </p>

              <div className="direct-contacts">
                <div className="c-item">
                  <Mail size={18} className="c-icon" />
                  <div>
                    <span className="c-label">Email Us</span>
                    <span className="c-val">info@gaussians.com</span>
                  </div>
                </div>

                <div className="c-item">
                  <Phone size={18} className="c-icon" />
                  <div>
                    <span className="c-label">Call Us</span>
                    <span className="c-val">+91 9711283991</span>
                  </div>
                </div>

                <div className="c-item">
                  <MapPin size={18} className="c-icon" />
                  <div>
                    <span className="c-label">Global Headquarters</span>
                    <span className="c-val">Unit 314, Suncity Tower, Sector 65, Gurgaon, Haryana, 122002 India</span>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Work Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Area of Interest / Service</label>
                <select 
                  value={formData.topic}
                  onChange={e => setFormData({ ...formData, topic: e.target.value })}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="SOC 1 / SOC 2 / SOC 3">SOC 1 / SOC 2 / SOC 3 Audit</option>
                  <option value="ISO 27001 / ISO 42001">ISO 27001 / ISO 42001 (AI Security)</option>
                  <option value="NIST AI RMF / CSF 2.0">NIST AI RMF / CSF 2.0</option>
                  <option value="HITRUST / HIPAA">HITRUST / HIPAA Compliance</option>
                  <option value="Third Party Risk & Vendor Audit">Third Party Risk & Vendor Audit</option>
                  <option value="Managed Security & Compliance">Managed Security & Compliance</option>
                  <option value="Gaussians Forward Community">Gaussians Forward Community</option>
                </select>
              </div>

              <div className="form-group">
                <label>Project Details / Timelines</label>
                <textarea 
                  rows="3"
                  placeholder="Briefly describe your compliance goals, target timeline, or framework requirements..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit-btn">
                Schedule Consultation <Send size={16} />
              </button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-container {
          position: relative;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          max-width: 920px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
          padding: 2.5rem;
        }

        .close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-soft-purple);
          border: 1px solid var(--border-purple);
          color: var(--text-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .close-btn:hover {
          background: var(--primary-light);
          color: var(--primary);
        }

        .modal-content-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2.5rem;
        }

        .modal-info h2 {
          font-size: 1.8rem;
          margin: 0.75rem 0 1rem 0;
        }

        .modal-intro {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .direct-contacts {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .c-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .c-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .c-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .c-val {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-dark);
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--text-dark);
          margin-bottom: 0.4rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-purple);
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-dark);
          background: var(--bg-soft-purple);
          outline: none;
          transition: var(--transition-fast);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--primary);
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(90, 56, 253, 0.12);
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
          padding: 0.85rem;
          margin-top: 0.5rem;
        }

        .success-state {
          text-align: center;
          padding: 3rem 1.5rem;
        }

        .success-icon-box {
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .success-state h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .success-state p {
          font-size: 1.05rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .modal-content-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
