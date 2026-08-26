import React from 'react';
import { Quote, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SuccessStories({ onOpenContact }) {
  const testimonials = [
    {
      quote: "Gaussians helped us bring structure and clarity to our compliance journey. Their team was responsive, knowledgeable, and practical in their approach. They understood our business needs and supported us throughout the process with clear guidance and high-quality documentation.",
      author: "VP of Engineering",
      company: "SaaS Tech Platform"
    },
    {
      quote: "Working with Gaussians gave our team the confidence to manage audit requirements more effectively. Their ability to simplify complex control expectations and provide actionable recommendations made a real difference.",
      author: "Head of Security & Compliance",
      company: "Enterprise FinTech Provider"
    }
  ];

  return (
    <section id="success-stories" className="success-stories-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Quote size={14} className="badge-icon" />
            <span>Success Stories</span>
          </div>
          <h2>From Strategy to Execution. Delivered.</h2>
          <p>
            Our clients value Gaussians for our practical approach, clear communication, and commitment to quality. We work closely with teams to understand their challenges, simplify complex requirements, and deliver support that is reliable and easy to act on.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card glass-card">
              <Quote className="quote-icon-large" size={36} />
              <p className="testimonial-quote">“{t.quote}”</p>
              <div className="testimonial-author-box">
                <div className="author-info">
                  <div className="author-name">{t.author}</div>
                  <div className="author-company">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note Disclaimer */}
        <div className="section-note">
          <p>
            * Note: Testimonial details can be finalized once approved testimonials and client permissions are available.
          </p>
        </div>
      </div>

      <style>{`
        .success-stories-section {
          padding: 6rem 0;
          background: linear-gradient(180deg, var(--bg-soft-purple) 0%, #FFFFFF 100%);
          position: relative;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .testimonial-card {
          padding: 2.5rem;
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .quote-icon-large {
          color: var(--primary-light);
          margin-bottom: 1.25rem;
          align-self: flex-start;
        }

        .testimonial-quote {
          font-size: var(--fs-body);
          color: var(--text-dark);
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 1.75rem;
          flex-grow: 1;
        }

        .testimonial-author-box {
          border-top: 1px solid var(--border-purple);
          padding-top: 1.25rem;
          display: flex;
          align-items: center;
        }

        .author-name {
          font-weight: 700;
          font-size: var(--fs-body);
          color: var(--text-dark);
        }

        .author-company {
          font-size: var(--fs-small);
          color: var(--primary);
          font-weight: 600;
        }

        /* Case Study Card */
        .success-case-study {
          background: #FFFFFF;
          border: 2px solid var(--primary-border);
          border-radius: var(--radius-lg);
          padding: 3rem;
          box-shadow: var(--shadow-md);
        }

        .case-study-header {
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-purple);
          padding-bottom: 1.5rem;
        }

        .case-study-tag {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: var(--fs-small);
          color: var(--primary);
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.5rem;
        }

        .case-study-header h3 {
          font-size: var(--fs-section);
          color: var(--text-dark);
        }

        .case-study-intro {
          font-size: var(--fs-body);
          color: var(--text-body);
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .case-study-columns {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          margin-bottom: 2.5rem;
        }

        .case-column h4 {
          font-size: var(--fs-card);
          color: var(--text-dark);
          margin-bottom: 1.25rem;
          font-weight: 700;
        }

        .case-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .case-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: var(--fs-body);
          color: var(--text-body);
          line-height: 1.5;
        }

        .case-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .outcome-icon {
          color: #10B981;
        }

        .case-study-footer {
          display: flex;
          justify-content: flex-start;
        }

        .section-note {
          margin-top: 2rem;
          text-align: center;
          font-size: var(--fs-small);
          color: var(--text-muted);
          font-style: italic;
        }

        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .case-study-columns {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .success-case-study {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
