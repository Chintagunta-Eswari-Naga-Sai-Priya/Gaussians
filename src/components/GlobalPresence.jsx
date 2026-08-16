import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { Globe2, MapPin, ArrowRight } from 'lucide-react';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const hubs = [
  { id: 'na',      name: 'North America',    coords: [-98,  39],    hq: false },
  { id: 'london',  name: 'London',           coords: [ -0.1, 51.5], hq: false },
  { id: 'gurgaon', name: 'Gurgaon HQ',       coords: [ 77,  28.5],  hq: true  },
  { id: 'sg',      name: 'Singapore',        coords: [103.8,  1.4], hq: false },
  { id: 'sydney',  name: 'Sydney',           coords: [151.2,-33.9], hq: false },
];

const globalStats = [
  { num: '15+',  label: 'Countries' },
  { num: '100+', label: 'Organizations' },
  { num: '5+',   label: 'Yrs of Client Delivery' },
  { num: '24/7', label: 'Global Delivery' },
];

export default function GlobalPresence({ onOpenContact }) {
  return (
    <section id="global-presence" className="gp-section">
      {/* radial glow backdrop */}
      <div className="gp-glow-orb gp-orb-left"  />
      <div className="gp-glow-orb gp-orb-right" />

      <div className="container gp-inner">
        {/* ── Left: text + stats ── */}
        <div className="gp-text-col">
          <div className="badge-pill gp-badge">
            <Globe2 size={14} className="badge-icon" />
            <span>GLOBAL REACH & DELIVERY</span>
          </div>

          <h2 className="gp-headline">
            Supporting <br />
            <span className="gp-accent">Global Organizations</span>
          </h2>

          <p className="gp-subtext">
            Wherever our clients operate, our focus remains the same: strengthening trust, managing risk, and delivering outcomes. Our flexible delivery model enables us to work seamlessly across regions, time zones, and operating environments through offshore, remote, hybrid, and embedded team structures, providing clients with experienced professionals, scalable support, and strong accountability.
          </p>

          {/* Stats */}
          <div className="gp-stats-grid">
            {globalStats.map((s, i) => (
              <div key={i} className="gp-stat-card">
                <span className="gp-stat-num">{s.num}</span>
                <span className="gp-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>

          <button
            className="btn-primary gp-cta-btn"
            onClick={() => onOpenContact('Global Organization Inquiry')}
          >
            Discuss Global Delivery <ArrowRight size={16} />
          </button>
        </div>

        {/* ── Right: Map ── */}
        <div className="gp-map-col">
          <div className="gp-map-frame">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 155, center: [20, 15] }}
              style={{ width: '100%', height: '100%' }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="rgba(167,139,250,0.12)"
                      stroke="rgba(167,139,250,0.3)"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover:   { fill: 'rgba(167,139,250,0.28)', outline: 'none' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {hubs.map(hub => (
                <Marker key={hub.id} coordinates={hub.coords}>
                  {/* animated pulse rings */}
                  <circle r="16" fill="none" stroke={hub.hq ? '#10B981' : '#A78BFA'} strokeWidth="1" opacity="0.3">
                    <animate attributeName="r"       from="8"   to="22"  dur={hub.hq ? '1.6s' : '2s'} repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.7" to="0"   dur={hub.hq ? '1.6s' : '2s'} repeatCount="indefinite" />
                  </circle>
                  <circle r="8" fill="none" stroke={hub.hq ? '#10B981' : '#A78BFA'} strokeWidth="1" opacity="0.5">
                    <animate attributeName="r"       from="5"   to="14"  dur={hub.hq ? '1.6s' : '2s'} begin="0.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0"   dur={hub.hq ? '1.6s' : '2s'} begin="0.4s" repeatCount="indefinite" />
                  </circle>

                  {/* core dot */}
                  <circle
                    r={hub.hq ? 5.5 : 4}
                    fill={hub.hq ? '#10B981' : '#A78BFA'}
                    stroke={hub.hq ? '#D1FAE5' : '#EDE9FE'}
                    strokeWidth="1.5"
                    style={{ filter: `drop-shadow(0 0 8px ${hub.hq ? 'rgba(16,185,129,0.9)' : 'rgba(167,139,250,0.9)'})` }}
                  />

                  {/* label */}
                  <text
                    y={hub.hq ? -12 : -10}
                    textAnchor="middle"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: hub.hq ? '7px' : '6px',
                      fill: hub.hq ? '#6EE7B7' : '#C4B5FD',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {hub.name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>

          {/* Hub legend */}
          <div className="gp-map-legend">
            <span className="legend-item legend-hq">
              <span className="legend-dot hq-dot" />
              Gurgaon HQ & Operations
            </span>
            <span className="legend-item">
              <span className="legend-dot" />
              Delivery Hub
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .gp-section {
          position: relative;
          background: linear-gradient(160deg, #0F0829 0%, #1A0D4A 55%, #0D1A36 100%);
          padding: 5.5rem 0 4.5rem;
          overflow: hidden;
        }

        /* ambient glows */
        .gp-glow-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          pointer-events: none;
        }
        .gp-orb-left  { top: -200px; left: -180px;  background: radial-gradient(circle, rgba(90,56,253,0.18) 0%, transparent 65%); }
        .gp-orb-right { bottom: -200px; right: -180px; background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%); }

        /* ── layout ── */
        .gp-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 4rem;
          align-items: center;
        }

        /* ── left text ── */
        .gp-badge {
          background: rgba(90,56,253,0.18) !important;
          border: 1px solid rgba(167,139,250,0.35) !important;
          color: rgba(255,255,255,0.85) !important;
          margin-bottom: 1.5rem;
        }
        .gp-badge .badge-icon { color: #A78BFA; }

        .gp-headline {
          font-size: 2.75rem;
          color: #FFFFFF;
          line-height: 1.15;
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
        }

        .gp-accent {
          background: linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gp-subtext {
          font-size: 1.02rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.65;
          margin-bottom: 2.5rem;
        }

        /* stats 2x2 grid */
        .gp-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .gp-stat-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(167,139,250,0.2);
          border-radius: var(--radius-md);
          padding: 1.1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          transition: all 0.25s ease;
        }

        .gp-stat-card:hover {
          background: rgba(90,56,253,0.15);
          border-color: rgba(167,139,250,0.45);
        }

        .gp-stat-num {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 2rem;
          color: #A78BFA;
          line-height: 1;
        }

        .gp-stat-lbl {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          font-weight: 500;
        }

        .gp-cta-btn {
          background: linear-gradient(135deg, #5A38FD, #7C3AED) !important;
          box-shadow: 0 8px 25px rgba(90,56,253,0.45);
          padding: 0.9rem 2rem;
        }
        .gp-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(90,56,253,0.55);
        }

        /* ── map ── */
        .gp-map-col { position: relative; }

        .gp-map-frame {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(167,139,250,0.15);
          box-shadow: 0 0 60px rgba(90,56,253,0.12);
        }

        /* legend */
        .gp-map-legend {
          display: flex;
          gap: 1.75rem;
          margin-top: 1rem;
          justify-content: flex-end;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          font-weight: 500;
        }

        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #A78BFA;
          box-shadow: 0 0 6px rgba(167,139,250,0.7);
          flex-shrink: 0;
        }

        .hq-dot {
          background: #10B981;
          box-shadow: 0 0 6px rgba(16,185,129,0.8);
        }

        @media (max-width: 1024px) {
          .gp-inner { grid-template-columns: 1fr; }
          .gp-headline { font-size: 2.2rem; }
        }
      `}</style>
    </section>
  );
}
