import React, { useState, useEffect } from 'react';
import { X, Search, ShieldCheck, CheckSquare, Square, Send, CheckCircle2 } from 'lucide-react';

export default function FrameworksExplorerModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedFws, setSelectedFws] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'security', name: 'Security & Governance' },
    { id: 'ai', name: 'AI & Emerging Tech' },
    { id: 'privacy', name: 'Privacy & Data' },
    { id: 'cloud', name: 'Cloud & Infrastructure' }
  ];

  const frameworks = [
    { id: 'soc2', code: 'SOC 2', name: 'SOC 1, SOC 2 & SOC 3', category: 'security', desc: 'Control mapping, evidence collection, and auditor liaison for Type I & II audits.' },
    { id: 'iso27001', code: 'ISO 27001', name: 'ISO/IEC 27001:2022', category: 'security', desc: 'ISMS design, internal audits, and Stage 1 & Stage 2 certification readiness.' },
    { id: 'iso42001', code: 'ISO 42001', name: 'ISO/IEC 42001 (AI MS)', category: 'ai', desc: 'Global standard for Artificial Intelligence Management Systems (AIMS).' },
    { id: 'nist_ai', code: 'NIST AI RMF', name: 'NIST AI Risk Management', category: 'ai', desc: 'Govern, Map, and Measure functions for trustworthy, safe, and transparent AI system deployments.' },
    { id: 'nist_csf', code: 'NIST CSF', name: 'NIST Cybersecurity Framework 2.0', category: 'security', desc: 'Maturity assessments, gap remediation, and alignment across CSF functions.' },
    { id: 'hitrust', code: 'HITRUST', name: 'HITRUST CSF (r2 & e1)', category: 'security', desc: 'Validated assessment preparation and CAP management for healthcare & tech.' },
    { id: 'pci_dss', code: 'PCI DSS', name: 'PCI DSS v4.0', category: 'privacy', desc: 'CDE scope reduction, SAQ validation, and ROC audit readiness.' },
    { id: 'gdpr_ccpa', code: 'GDPR / CCPA', name: 'GDPR, CCPA & Privacy Laws', category: 'privacy', desc: 'Data mapping, DPIAs, DSAR workflows, and global privacy compliance.' },
    { id: 'csa_star', code: 'CSA STAR', name: 'Cloud Security Alliance STAR', category: 'cloud', desc: 'CCM mapping, CAIQ self-assessment, and STAR Level 1 & 2 readiness.' },
    { id: 'hipaa', code: 'HIPAA', name: 'HIPAA Security & Privacy', category: 'privacy', desc: 'PHI protection, Safeguards, and Business Associate Agreement (BAA) reviews.' },
    { id: 'cmmc', code: 'CMMC', name: 'CMMC & Cyber Essentials', category: 'security', desc: 'DoD supply chain requirements, NIST SP 800-171 readiness, and SSP authoring.' }
  ];

  const handleToggleSelect = (fwName) => {
    setSelectedFws(prev =>
      prev.includes(fwName) ? prev.filter(x => x !== fwName) : [...prev, fwName]
    );
  };

  const handleSelectAll = (filteredFws) => {
    const allNames = filteredFws.map(f => f.name);
    const areAllSelected = allNames.every(name => selectedFws.includes(name));
    if (areAllSelected) {
      setSelectedFws(prev => prev.filter(name => !allNames.includes(name)));
    } else {
      setSelectedFws(prev => Array.from(new Set([...prev, ...allNames])));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedFws([]);
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
    onClose();
  };

  const filtered = frameworks.filter(fw => {
    const matchesSearch = fw.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          fw.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          fw.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || fw.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container fw-explorer-container glass-card">
        <button className="close-btn" onClick={handleReset} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="success-state">
            <div className="success-icon-box">
              <CheckCircle2 size={54} />
            </div>
            <h2>Framework Inquiry Submitted!</h2>
            <p>Thank you, <strong>{formData.name}</strong>. A Gaussians compliance engineer will follow up shortly to discuss your scoping and requirements for:</p>
            <div className="submitted-list">
              {selectedFws.length > 0 ? (
                selectedFws.map((name, i) => <span key={i} className="submitted-tag">{name}</span>)
              ) : (
                <span className="submitted-tag">General Services Portfolio</span>
              )}
            </div>
            <button className="btn-primary" onClick={handleReset}>
              Back to Website
            </button>
          </div>
        ) : (
          <div className="explorer-grid">
            {/* Left Column: Explorer & Selection */}
            <div className="explorer-main">
              <div className="explorer-header">
                <div className="badge-pill mb-2">
                  <ShieldCheck size={14} /> <span>Interactive Catalog</span>
                </div>
                <h2>Explore Compliance Frameworks</h2>
                <p className="subtitle">Select the frameworks you want to assess or implement, then submit a request on the right.</p>
              </div>

              {/* Search & Filter Bar */}
              <div className="filter-bar">
                <div className="search-box">
                  <Search size={18} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search SOC 2, ISO, HIPAA, AI..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="cat-scroll">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bulk selector helper */}
              {filtered.length > 0 && (
                <button className="bulk-select-btn" onClick={() => handleSelectAll(filtered)}>
                  {filtered.map(f => f.name).every(name => selectedFws.includes(name)) ? 'Deselect All Visible' : 'Select All Visible'}
                </button>
              )}

              {/* Frameworks Catalog List */}
              <div className="catalog-list">
                {filtered.length > 0 ? (
                  filtered.map(fw => {
                    const isSelected = selectedFws.includes(fw.name);
                    return (
                      <div
                        key={fw.id}
                        className={`catalog-item ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleToggleSelect(fw.name)}
                      >
                        <div className="item-checkbox">
                          {isSelected ? <CheckSquare size={20} className="checkbox-icon checked" /> : <Square size={20} className="checkbox-icon" />}
                        </div>
                        <div className="item-details">
                          <div className="item-header">
                            <span className="item-code">{fw.code}</span>
                            <span className="item-category">{fw.category}</span>
                          </div>
                          <h4 className="item-name">{fw.name}</h4>
                          <p className="item-desc">{fw.desc}</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="no-results">
                    <p>No frameworks found matching "{searchQuery}" under this category.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Request Form */}
            <div className="explorer-sidebar">
              <h3>Request Details</h3>
              <p className="sidebar-intro">Submit this request to receive a custom compliance plan, readiness template, and pricing overview.</p>

              <div className="selected-preview">
                <span className="preview-label">Selected Frameworks ({selectedFws.length})</span>
                {selectedFws.length > 0 ? (
                  <div className="preview-tags">
                    {selectedFws.map((name, i) => (
                      <span key={i} className="preview-tag">
                        {name}
                        <button className="tag-remove" onClick={() => handleToggleSelect(name)}>&times;</button>
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="preview-empty">
                    <p>Please select one or more frameworks on the left list to build your custom package.</p>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="explorer-form">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Chen"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="michael@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Project Details / Custom Needs</label>
                  <textarea
                    rows="4"
                    placeholder="Briefly describe your timing, current audit timeline, or scope size..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary submit-btn">
                  Submit Request <Send size={15} />
                </button>
              </form>
            </div>
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
          -webkit-backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fwFadeIn 0.25s ease;
        }

        @keyframes fwFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
          z-index: 10;
        }

        .close-btn:hover {
          background: var(--primary-light);
          color: var(--primary);
        }

        .fw-explorer-container {
          position: relative;
          max-width: 1080px;
          width: 100%;
          max-height: 85vh;
          overflow-y: hidden;
          padding: 2.5rem;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
        }

        .explorer-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: 2.5rem;
          height: calc(85vh - 5rem);
          overflow: hidden;
        }

        .explorer-main {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          height: 100%;
          padding-right: 0.5rem;
        }

        .explorer-header h2 {
          font-size: var(--fs-section);
          margin-bottom: 0.5rem;
        }

        .explorer-header .subtitle {
          font-size: var(--fs-body);
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .filter-bar {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .search-box {
          position: relative;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-box input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.75rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-purple);
          font-size: var(--fs-body);
          outline: none;
          background: var(--bg-soft-purple);
          transition: var(--transition-fast);
        }

        .search-box input:focus {
          border-color: var(--primary);
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(90, 56, 253, 0.1);
        }

        .cat-scroll {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          scrollbar-width: thin;
        }

        .cat-btn {
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-purple);
          background: #FFFFFF;
          font-size: var(--fs-small);
          font-weight: 600;
          color: var(--text-dark);
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition-fast);
        }

        .cat-btn:hover, .cat-btn.active {
          border-color: var(--primary);
          color: var(--primary);
        }

        .cat-btn.active {
          background: var(--primary);
          color: #FFFFFF;
          border-color: var(--primary);
        }

        .bulk-select-btn {
          align-self: flex-start;
          background: none;
          border: none;
          color: var(--primary);
          font-size: var(--fs-small);
          font-weight: 700;
          cursor: pointer;
          margin-bottom: 0.75rem;
          padding: 0;
        }

        .bulk-select-btn:hover {
          text-decoration: underline;
        }

        .catalog-list {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-right: 0.5rem;
          scrollbar-width: thin;
        }

        .catalog-item {
          display: flex;
          gap: 1rem;
          padding: 1.15rem;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-md);
          background: #FFFFFF;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .catalog-item:hover {
          border-color: var(--primary-border);
          background: rgba(90, 56, 253, 0.02);
        }

        .catalog-item.selected {
          border-color: var(--primary);
          background: rgba(90, 56, 253, 0.04);
        }

        .checkbox-icon {
          color: var(--text-muted);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .checkbox-icon.checked {
          color: var(--primary);
        }

        .item-details {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .item-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .item-code {
          background: var(--primary-light);
          color: var(--primary);
          font-size: var(--fs-small);
          font-weight: 800;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .item-category {
          font-size: var(--fs-small);
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .item-name {
          font-size: var(--fs-body);
          color: var(--text-dark);
          font-weight: 700;
        }

        .item-desc {
          font-size: var(--fs-small);
          color: var(--text-muted);
          line-height: 1.45;
        }

        .no-results {
          text-align: center;
          padding: 3rem 1.5rem;
          color: var(--text-muted);
          font-size: var(--fs-body);
        }

        /* Sidebar style */
        .explorer-sidebar {
          background: var(--bg-soft-purple);
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          height: 100%;
        }

        .explorer-sidebar h3 {
          font-size: var(--fs-card);
          margin-bottom: 0.5rem;
        }

        .sidebar-intro {
          font-size: var(--fs-small);
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }

        .selected-preview {
          margin-bottom: 1.5rem;
        }

        .preview-label {
          display: block;
          font-size: var(--fs-small);
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 0.65rem;
        }

        .preview-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          max-height: 120px;
          overflow-y: auto;
        }

        .preview-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.65rem;
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-full);
          font-size: var(--fs-small);
          font-weight: 600;
          color: var(--primary);
        }

        .tag-remove {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 1.1rem;
          line-height: 1;
          padding: 0;
        }

        .tag-remove:hover {
          color: red;
        }

        .preview-empty {
          padding: 1.15rem;
          border: 1px dashed var(--border-purple);
          border-radius: var(--radius-md);
          text-align: center;
          background: #FFFFFF;
        }

        .preview-empty p {
          font-size: var(--fs-small);
          color: var(--text-muted);
          line-height: 1.4;
        }

        .form-group label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: var(--fs-small);
          color: var(--text-dark);
          margin-bottom: 0.4rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.7rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-purple);
          font-family: var(--font-body);
          font-size: var(--fs-body);
          color: var(--text-dark);
          background: #FFFFFF;
          outline: none;
          transition: var(--transition-fast);
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(90, 56, 253, 0.1);
        }

        .explorer-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .submit-btn {
          width: 100%;
          justify-content: center;
          padding: 0.8rem;
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
          font-size: var(--fs-section);
          margin-bottom: 1rem;
        }

        .success-state p {
          font-size: var(--fs-body);
          color: var(--text-muted);
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .submitted-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          justify-content: center;
          margin-bottom: 1.75rem;
        }

        .submitted-tag {
          padding: 0.3rem 0.8rem;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: var(--radius-full);
          font-size: var(--fs-small);
          font-weight: 600;
        }

        @media (max-width: 868px) {
          .fw-explorer-container {
            max-height: 95vh;
          }
          .explorer-grid {
            grid-template-columns: 1fr;
            height: calc(95vh - 5rem);
            overflow-y: auto;
          }
          .explorer-main, .explorer-sidebar {
            height: auto;
            overflow-y: visible;
          }
        }
      `}</style>
    </div>
  );
}
