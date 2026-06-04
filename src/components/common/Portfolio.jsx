import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400;700&display=swap');

        #pf-matrix-section {
          padding: 90px 6%;
          background: #04060f;
          position: relative; 
          z-index: 1;
          border-bottom: 1px solid rgba(0,240,255,0.08);
          overflow: hidden;
        }

        .pf-inner { max-width: 1280px; margin: 0 auto; }

        .pf-tag {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Space Mono', monospace; font-size: .66rem;
          letter-spacing: .14em; text-transform: uppercase; color: #00f0ff;
          margin-bottom: 14px;
        }
        .pf-tag::before { content:''; width:14px; height:1px; background:#00f0ff; flex-shrink:0; }

        .pf-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.7rem, 3.5vw, 2.7rem);
          font-weight: 800; color: #fff; line-height: 1.1; margin-bottom: 52px;
        }
        .pf-h2 em {
          font-style: normal;
          background: linear-gradient(90deg, #00f0ff, #7b2fff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        /* ── PORTFOLIO GLASS GRID ── */
        .pf-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .pf-terminal-card {
          background: rgba(255, 255, 255, 0.022);
          border: 1px solid rgba(0, 240, 255, 0.08);
          border-radius: 20px;
          padding: 38px 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: border-color .3s, transform .3s, background .3s;
        }

        .pf-terminal-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #00f0ff, transparent);
          transform: scaleX(0); transition: transform .35s;
        }

        .pf-terminal-card:hover {
          border-color: rgba(0, 240, 255, 0.22);
          background: rgba(0, 240, 255, 0.04);
          transform: translateY(-6px);
        }
        .pf-terminal-card:hover::before { transform: scaleX(1); }

        .pf-card-lbl {
          font-family: 'Space Mono', monospace; font-size: 0.62rem;
          letter-spacing: 0.08em; text-transform: uppercase; color: #7b2fff;
          margin-bottom: 8px; display: block;
        }

        .pf-terminal-card h4 {
          font-family: 'Syne', sans-serif; font-size: 1.35rem; font-weight: 800;
          color: #fff; margin-bottom: 16px;
        }

        .pf-terminal-card p {
          font-size: 0.94rem; color: rgba(255, 255, 255, 0.48);
          line-height: 1.75; margin: 0 0 28px 0;
          flex-grow: 1; text-align: justify;
        }

        /* ── DECORATIVE METADATA CHIPS ── */
        .pf-chip-row {
          display: flex; flex-wrap: wrap; gap: 6px;
        }
        .pf-mini-chip {
          font-family: 'Space Mono', monospace; font-size: 0.58rem;
          color: #00f0ff; background: rgba(0,240,255,0.06);
          border: 1px solid rgba(0,240,255,0.15);
          padding: 3px 9px; border-radius: 4px;
        }

        .pf-telemetry-node {
          position: absolute; bottom: 24px; right: 28px;
          font-family: 'Space Mono', monospace; font-size: 0.55rem;
          color: rgba(0, 240, 255, 0.15); letter-spacing: 0.1em;
          pointer-events: none; user-select: none;
        }

        /* ── Responsive Viewports ── */
        @media (max-width: 991px) {
          .pf-grid { gap: 24px; }
          .pf-terminal-card { padding: 32px 24px; }
        }
        @media (max-width: 768px) {
          #pf-matrix-section { padding: 60px 24px; }
          .pf-grid { grid-template-columns: 1fr; gap: 20px; }
          .pf-h2 { margin-bottom: 36px; }
        }
      `}</style>

            <section id="pf-matrix-section">
                <div className="pf-inner">

                    {/* Synchronized Section Title */}
                    <div style={{ textAlign: "center" }}>
                        <div className="pf-tag">Proven Deployments</div>
                        <h2 className="pf-h2">
                            Our <em>Portfolio</em>
                        </h2>
                    </div>

                    {/* Dual Core Grid Framework */}
                    <div className="pf-grid">

                        {/* Government Operations Column Card */}
                        <div className="pf-terminal-card">
                            <span className="pf-telemetry-node">SEC_LOG // GOV_01</span>
                            <span className="pf-card-lbl">CLASSIFIED_PERIMETERS</span>
                            <h4>Government Projects</h4>
                            <p>
                                We collaborate with government agencies to develop secure and efficient solutions
                                that streamline administrative processes, enhance security, and improve public services.
                                Our expertise spans infrastructure, cybersecurity, and digital transformation.
                            </p>
                            <div className="pf-chip-row">
                                <span className="pf-mini-chip">Infrastructure</span>
                                <span className="pf-mini-chip">Cybersecurity</span>
                                <span className="pf-mini-chip">GovTech Systems</span>
                            </div>
                        </div>

                        {/* Commercial Enterprise Column Card */}
                        <div className="pf-terminal-card">
                            <span className="pf-telemetry-node">SEC_LOG // ENT_02</span>
                            <span className="pf-card-lbl">SCALABLE_ARCHITECTURE</span>
                            <h4>Client Projects</h4>
                            <p>
                                Our client projects focus on delivering tailored solutions for businesses of all sizes.
                                From custom software development to scalable cloud-based applications, we help organizations
                                optimize their operations and enhance customer experiences.
                            </p>
                            <div className="pf-chip-row">
                                <span className="pf-mini-chip">Custom Software</span>
                                <span className="pf-mini-chip">Cloud Scaling</span>
                                <span className="pf-mini-chip">Optimization Modules</span>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Portfolio;