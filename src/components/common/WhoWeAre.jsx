import React from 'react';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400;700&display=swap');

        #wwa-section {
          padding: 90px 6%;
          background: #04060f;
          position: relative; 
          z-index: 1;
          border-bottom: 1px solid rgba(0,240,255,0.08);
          overflow: hidden;
        }

        #wwa-section::before {
          content:''; position:absolute; inset:0; pointer-events:none;
          background: radial-gradient(circle at 30% 40%, rgba(0,240,255,0.04) 0%, transparent 50%);
        }

        .wwa-inner { max-width: 1280px; margin: 0 auto; }

        .wwa-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: center;
        }

        .wwa-tag {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Space Mono', monospace; font-size: .66rem;
          letter-spacing: .14em; text-transform: uppercase; color: #00f0ff;
          margin-bottom: 14px;
        }
        .wwa-tag::before { content:''; width:14px; height:1px; background:#00f0ff; flex-shrink:0; }

        .wwa-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800; color: #fff; line-height: 1.1; margin-bottom: 20px;
        }
        .wwa-h2 em {
          font-style: normal;
          background: linear-gradient(90deg, #00f0ff, #7b2fff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .wwa-desc {
          font-size: 0.98rem; color: rgba(255, 255, 255, 0.48);
          line-height: 1.82; margin-bottom: 36px; text-align: justify;
        }

        /* ── GLOWING TELEMETRY REVIEWS ── */
        .wwa-metrics-row {
          display: flex; gap: 20px; margin-bottom: 40px;
        }
        .wwa-metric-card {
          flex: 1; background: rgba(255,255,255,0.015);
          border: 1px solid rgba(0,240,255,0.08); border-radius: 14px;
          padding: 20px; backdrop-filter: blur(8px);
          position: relative;
        }
        .wwa-metric-card::before {
          content: ''; position: absolute; top: 0; left: 20px; right: 20px; height: 1px;
          background: linear-gradient(90deg, transparent, #00f0ff, transparent);
        }
        .wwa-metric-score {
          font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800;
          color: #00f0ff; line-height: 1; margin-bottom: 6px;
        }
        .wwa-metric-stars {
          color: #00ff88; font-size: 0.7rem; display: flex; gap: 3px; margin-bottom: 8px;
        }
        .wwa-metric-label {
          font-family: 'Space Mono', monospace; font-size: 0.65rem;
          color: #fff; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;
        }
        .wwa-metric-sub {
          font-size: 0.78rem; color: rgba(255,255,255,0.35); margin: 0; line-height: 1.4;
        }

        /* ── ACTION BUTTONS ── */
        .wwa-btn-p {
          display: inline-flex; align-items: center; gap: 8px; padding: 13px 28px;
          font-family: 'Syne', sans-serif; font-size: .76rem; font-weight: 700;
          letter-spacing: .07em; color: #04060f; background: #00f0ff; border-radius: 8px;
          text-decoration: none; box-shadow: 0 0 24px rgba(0,240,255,0.28);
          transition: box-shadow .25s, transform .2s;
        }
        .wwa-btn-p:hover { box-shadow: 0 0 48px rgba(0,240,255,0.5); transform: translateY(-2px); }
        .wwa-btn-p i { font-size: 0.7rem; transition: transform 0.2s; }
        .wwa-btn-p:hover i { transform: translateX(3px); }

        /* ── GRAPHIC VIEWPORT FRAME ── */
        .wwa-image-frame {
          position: relative; border-radius: 24px; overflow: hidden;
          border: 1px solid rgba(0, 240, 255, 0.2);
          box-shadow: 0 0 50px rgba(0, 240, 255, 0.05);
          width: 100%; aspect-ratio: 16/13;
        }
        .wwa-image-frame img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.7) contrast(1.1) saturate(1.2);
        }
        .wwa-image-frame::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,240,255,0.05), rgba(4,6,15,0.3));
        }

        /* ── Responsive Adaptations ── */
        @media (max-width: 991px) {
          .wwa-grid { grid-template-columns: 1fr; gap: 48px; }
          .wwa-image-frame { max-width: 550px; margin: 0 auto; aspect-ratio: 16/11; }
        }

        @media (max-width: 768px) {
          #wwa-section { padding: 60px 24px; }
        }

        @media (max-width: 520px) {
          .wwa-metrics-row { flex-direction: column; gap: 14px; }
          .wwa-btn-p { width: 100%; justify-content: center; box-sizing: border-box; }
        }
      `}</style>

            <section id="wwa-section">
                <div className="wwa-inner">
                    <div className="wwa-grid">

                        {/* Information & Metrics Column Block */}
                        <div>
                            <div className="wwa-tag">Who We Are</div>
                            <h2 className="wwa-h2">
                                Security Vectors Engineered by <em>Young Minds</em>
                            </h2>
                            <p className="wwa-desc">
                                We are a dedicated cooperative of forward-thinking researchers and students, committed
                                to deploying elite structural engineering safeguards globally. Through active operational
                                partnerships spanning emerging tech startups, enterprise layers, and government bodies,
                                we translate complex post-quantum algorithms into high-impact digital countermeasures.
                            </p>

                            {/* Reimagined Telemetry Reviews Row */}
                            <div className="wwa-metrics-row">
                                <div className="wwa-metric-card">
                                    <div className="wwa-metric-score">4.6</div>
                                    <div className="wwa-metric-stars">
                                        {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star" />)}
                                    </div>
                                    <div className="wwa-metric-label">Google Records</div>
                                    <p className="wwa-metric-sub">Verified continuous technological contribution scores.</p>
                                </div>

                                <div className="wwa-metric-card">
                                    <div className="wwa-metric-score">4.9</div>
                                    <div className="wwa-metric-stars">
                                        {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star" />)}
                                    </div>
                                    <div className="wwa-metric-label">Clutch Audits</div>
                                    <p className="wwa-metric-sub">Validated ecosystem design peer evaluation metrics.</p>
                                </div>
                            </div>

                            <div className="btn_wrapper">
                                <Link className="wwa-btn-p" to="/about-us">
                                    Initialize Framework <i className="fa-solid fa-angle-right" />
                                </Link>
                            </div>
                        </div>

                        {/* Visual Asset Infrastructure Column Block */}
                        <div>
                            <div className="wwa-image-frame">
                                <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80" alt="Quantum Encryption Matrix Infrastructure" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default WhoWeAre;