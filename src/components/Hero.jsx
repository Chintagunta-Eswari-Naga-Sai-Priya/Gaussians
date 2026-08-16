import React, { useEffect, useRef } from 'react';
import { Shield, ArrowRight, CheckCircle2, Lock, Cloud, FileCheck, Search, Eye } from 'lucide-react';

export default function Hero({ onOpenContact, onExploreServices }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particles / Node connection data matching exact 5 polar positions
    const nodes = [
      { id: 'GRC', title: 'GRC', angle: -1.5708, dist: 220 },      // Top Apex (-90°)
      { id: 'SOC2', title: 'SOC 2', angle: -0.3142, dist: 215 },   // Upper Right (-18°)
      { id: 'Cloud', title: 'Cloud', angle: 0.9425, dist: 225 },    // Lower Right (+54°)
      { id: 'Risk', title: 'Risk', angle: 2.1991, dist: 225 },     // Lower Left (+126°)
      { id: 'ISO', title: 'ISO', angle: -2.8274, dist: 215 }       // Upper Left (-162°)
    ];

    let t = 0;

    const render = () => {
      t += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw glowing central energy rings
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, 110 + Math.sin(t) * 8, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(90, 56, 253, 0.15)';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 180 + Math.cos(t * 0.8) * 10, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.12)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Connect nodes to center with glowing lines & pulsing laser particles
      nodes.forEach((node, i) => {
        const nx = centerX + Math.cos(node.angle + Math.sin(t * 0.5 + i) * 0.05) * (node.dist * 1.1);
        const ny = centerY + Math.sin(node.angle + Math.cos(t * 0.5 + i) * 0.05) * (node.dist * 0.85);

        // Beam Line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = 'rgba(90, 56, 253, 0.22)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Laser particle packet
        const progress = (t * 0.8 + i * 0.35) % 1;
        const px = centerX + (nx - centerX) * progress;
        const py = centerY + (ny - centerY) * progress;

        const particleGradient = ctx.createRadialGradient(px, py, 0, px, py, 6);
        particleGradient.addColorStop(0, '#5A38FD');
        particleGradient.addColorStop(1, 'rgba(90, 56, 253, 0)');

        ctx.fillStyle = particleGradient;
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg-glow"></div>

      <div className="container hero-container">
        <div className="hero-content">

          <h1 className="hero-title">
            Operationalizing <br />
            <span className="highlight-text">Security, Compliance, and Trust</span>
          </h1>

          <p className="hero-description">
            Helping organizations transform security, compliance, and risk management from business challenges into strategic advantages through practical execution and long-term partnership.
          </p>

          <div className="hero-callout">
            <CheckCircle2 size={20} className="callout-icon" />
            <span><strong>We do not only advise. We deliver.</strong> From audit readiness and risk management to managed services and specialist talent solutions.</span>
          </div>


        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding: 9rem 0 5rem 0;
          background: radial-gradient(circle at 50% 30%, rgba(243, 240, 255, 0.8) 0%, rgba(255, 255, 255, 1) 70%);
          overflow: hidden;
        }

        .hero-bg-glow {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(90, 56, 253, 0.12) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
        }

        .hero-container {
          display: flex;
          justify-content: center;
        }

        .hero-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-badge {
          margin-bottom: 1.5rem;
        }

        .badge-icon {
          color: var(--primary);
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          letter-spacing: -0.03em;
          text-align: center;
          max-width: 860px;
        }

        .highlight-text {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          max-width: 820px;
          line-height: 1.6;
          text-align: center;
        }

        .hero-callout {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: var(--bg-soft-purple);
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-md);
          padding: 1rem 1.5rem;
          margin-bottom: 2rem;
          font-size: 0.95rem;
          color: var(--text-dark);
          text-align: left;
          max-width: 760px;
        }

        .callout-icon {
          color: var(--primary);
          flex-shrink: 0;
        }


        .hero-supported-frameworks {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          background: rgba(248, 247, 255, 0.95);
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-full);
          padding: 0.85rem 2.5rem;
          margin-top: 1.5rem;
          font-size: 0.92rem;
          width: 100%;
          max-width: 1200px;
          box-shadow: var(--shadow-sm);
        }

        .sf-label {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          flex-shrink: 0;
        }

        .sf-pills {
          color: var(--text-muted);
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          width: 100%;
          white-space: nowrap;
        }

        .sf-pills span {
          color: var(--text-dark);
          transition: var(--transition-fast);
        }

        .sf-pills span:hover {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 7rem 0 3.5rem 0;
          }
          .hero-title {
            font-size: 2.2rem;
            line-height: 1.2;
          }
          .hero-description {
            font-size: 1rem;
          }
          .hero-callout {
            flex-direction: column;
            text-align: center;
            padding: 1rem;
            gap: 0.5rem;
          }
          .hero-supported-frameworks {
            flex-direction: column;
            border-radius: var(--radius-md);
            padding: 0.85rem 1rem;
            gap: 0.65rem;
          }
          .sf-pills {
            white-space: normal;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.4rem;
            font-size: 0.82rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
