import React, { useState } from 'react';
import { Sliders, Calculator, CheckCircle2, ArrowRight, ShieldCheck, Clock, Award, Sparkles } from 'lucide-react';

export default function InteractiveCalculatorSection({ onOpenContact }) {
  const [teamSize, setTeamSize] = useState(25);
  const [frameworkCount, setFrameworkCount] = useState(3);
  const [hasDedicatedSecurity, setHasDedicatedSecurity] = useState(false);

  // Dynamic calculations based on user input
  const calculatePrepTimeMonths = () => {
    const base = frameworkCount * 3.5;
    const factor = hasDedicatedSecurity ? 0.75 : 1.0;
    return Math.max(2, Math.round(base * factor));
  };

  const calculateHoursSaved = () => {
    return Math.round(teamSize * frameworkCount * 18);
  };

  const estimatedMonths = calculatePrepTimeMonths();
  const hoursSaved = calculateHoursSaved();

  return (
    <section className="calc-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <Calculator size={14} className="badge-icon" />
            <span>INTERACTIVE ROI ESTIMATOR</span>
          </div>
          <h2>Estimate Your Audit & Compliance Acceleration</h2>
          <p>
            Adjust your organization parameters to calculate estimated readiness timelines and internal engineering hours saved.
          </p>
        </div>

        <div className="calc-interactive-card glass-card">
          <div className="calc-grid">
            {/* Left Inputs Column */}
            <div className="calc-inputs-col">
              <h3 className="col-title"><Sliders size={18} /> Organization Parameters</h3>

              {/* Team Size Slider */}
              <div className="slider-group">
                <div className="slider-label-row">
                  <span className="s-label">Total Employee / Engineering Count</span>
                  <span className="s-value">{teamSize} People</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="250" 
                  value={teamSize} 
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="calc-range-slider"
                />
              </div>

              {/* Target Frameworks Count */}
              <div className="slider-group">
                <div className="slider-label-row">
                  <span className="s-label">Target Compliance Frameworks (SOC 2, ISO, NIST...)</span>
                  <span className="s-value">{frameworkCount} Frameworks</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="6" 
                  value={frameworkCount} 
                  onChange={(e) => setFrameworkCount(Number(e.target.value))}
                  className="calc-range-slider"
                />
              </div>

              {/* Security Staff Toggle */}
              <div className="checkbox-toggle-box">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={hasDedicatedSecurity} 
                    onChange={(e) => setHasDedicatedSecurity(e.target.checked)}
                    className="calc-checkbox"
                  />
                  <span>Do you currently have dedicated full-time in-house security staff?</span>
                </label>
              </div>
            </div>

            {/* Right Output Dashboard */}
            <div className="calc-outputs-col">
              <div className="output-metric-card">
                <div className="metric-icon-box"><Clock size={24} /></div>
                <div>
                  <span className="metric-tag">ESTIMATED GAUSSIANS AUDIT TIMELINE</span>
                  <div className="metric-huge">{estimatedMonths} Months</div>
                  <span className="metric-sub">vs. 9 to 12 months unassisted</span>
                </div>
              </div>

              <div className="output-metric-card">
                <div className="metric-icon-box"><ShieldCheck size={24} /></div>
                <div>
                  <span className="metric-tag">ENGINEERING HOURS SAVED</span>
                  <div className="metric-huge">{hoursSaved}+ Hours</div>
                  <span className="metric-sub">Saved through managed evidence automation & controls</span>
                </div>
              </div>

              <button className="btn-primary calc-cta-btn" onClick={() => onOpenContact(`Audit Estimation (${frameworkCount} Frameworks)`)}>
                Get Detailed Compliance Roadmap <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .calc-section {
          padding: 6rem 0;
          background: linear-gradient(180deg, #FFFFFF 0%, var(--bg-soft-purple) 100%);
        }

        .calc-interactive-card {
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          padding: 3rem;
          margin-top: 3rem;
          box-shadow: 0 20px 50px rgba(90, 56, 253, 0.1);
        }

        .calc-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3.5rem;
          align-items: center;
        }

        .col-title {
          font-size: 1.35rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--text-dark);
          margin-bottom: 2rem;
        }

        .slider-group {
          margin-bottom: 2rem;
        }

        .slider-label-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          font-family: var(--font-heading);
          font-size: 0.92rem;
        }

        .s-label {
          color: var(--text-muted);
          font-weight: 600;
        }

        .s-value {
          color: var(--primary);
          font-weight: 800;
        }

        .calc-range-slider {
          width: 100%;
          accent-color: var(--primary);
          height: 6px;
          border-radius: 3px;
          background: var(--primary-light);
          cursor: pointer;
        }

        .checkbox-toggle-box {
          background: var(--bg-soft-purple);
          border: 1px solid var(--primary-border);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          font-size: 0.92rem;
          color: var(--text-dark);
          font-weight: 600;
          cursor: pointer;
        }

        .calc-checkbox {
          width: 18px;
          height: 18px;
          accent-color: var(--primary);
          cursor: pointer;
        }

        /* Outputs Column */
        .calc-outputs-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .output-metric-card {
          background: linear-gradient(135deg, var(--bg-soft-purple) 0%, #FFFFFF 100%);
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .metric-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, #4322EA 100%);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 20px rgba(90, 56, 253, 0.3);
        }

        .metric-tag {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.72rem;
          color: var(--primary);
          letter-spacing: 0.06em;
          display: block;
        }

        .metric-huge {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 2.2rem;
          color: var(--text-dark);
          line-height: 1.1;
          margin: 0.2rem 0;
        }

        .metric-sub {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .calc-cta-btn {
          width: 100%;
          justify-content: center;
          padding: 1rem 2rem;
          font-size: 1rem;
          margin-top: 0.5rem;
        }

        @media (max-width: 1024px) {
          .calc-grid {
            grid-template-columns: 1fr;
          }
          .calc-interactive-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}
