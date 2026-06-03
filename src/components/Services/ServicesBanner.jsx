import React, { useEffect, useRef, useState } from 'react';

const WORKFLOW_STEPS = [
    {
        phase: "01",
        title: "Threat Synthesis",
        subtitle: "AI Vector Vulnerability Scanning",
        img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80",
        desc: "Automated models run deep behavioral analysis layers to simulate state-level security vectors and discover anomalies."
    },
    {
        phase: "02",
        title: "Quantum Modeling",
        subtitle: "PQC Migration Analytics",
        img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
        desc: "Data structures pass into simulated matrix environments to evaluate mathematical resiliency against algorithmic cryptanalysis."
    },
    {
        phase: "03",
        title: "Deployment Layer",
        subtitle: "NIST-L5 Cryptographic Injection",
        img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
        desc: "Production targets safely accept active lattice-based encryption algorithms, implementing robust multi-layer defense perimeters."
    }
];

const ServicesBanner = () => {
    const canvasRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = canvas.width = canvas.parentElement.offsetWidth || 500;
        let height = canvas.height = 400;

        const nodes = [];
        const numNodes = 28;
        for (let i = 0; i < numNodes; i++) {
            nodes.push({
                x: (Math.random() - 0.5) * 220,
                y: (Math.random() - 0.5) * 220,
                z: (Math.random() - 0.5) * 220
            });
        }

        let angleX = 0.006;
        let angleY = 0.009;

        const rotateX = (node, angle) => {
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const y1 = node.y * cos - node.z * sin;
            const z1 = node.z * cos + node.y * sin;
            node.y = y1; node.z = z1;
        };

        const rotateY = (node, angle) => {
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const x1 = node.x * cos - node.z * sin;
            const z1 = node.z * cos + node.x * sin;
            node.x = x1; node.z = z1;
        };

        const renderLoop = () => {
            ctx.clearRect(0, 0, width, height);

            ctx.strokeStyle = 'rgba(0, 240, 255, 0.03)';
            ctx.lineWidth = 1;
            for (let i = 0; i < width; i += 40) {
                ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, height); ctx.stroke();
            }
            for (let j = 0; j < height; j += 40) {
                ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(width, j); ctx.stroke();
            }

            const projected = nodes.map(node => {
                rotateX(node, angleX);
                rotateY(node, angleY);
                const fov = 320;
                const distance = 280;
                const scale = fov / (fov + node.z + distance);
                return {
                    x: (node.x * scale) + width / 2,
                    y: (node.y * scale) + height / 2,
                    scale: scale,
                    z: node.z
                };
            });

            ctx.lineWidth = 0.8;
            for (let i = 0; i < projected.length; i++) {
                for (let j = i + 1; j < projected.length; j++) {
                    const dist = Math.hypot(projected[i].x - projected[j].x, projected[i].y - projected[j].y);
                    if (dist < 110) {
                        const alpha = (1 - dist / 110) * 0.22 * projected[i].scale;
                        ctx.strokeStyle = `rgba(123, 47, 255, ${alpha})`;
                        ctx.beginPath(); ctx.moveTo(projected[i].x, projected[i].y);
                        ctx.lineTo(projected[j].x, projected[j].y); ctx.stroke();
                    }
                }
            }

            projected.forEach(p => {
                const radius = Math.max(1, p.scale * 3.5);
                const alpha = Math.min(1, Math.max(0.2, (p.z + 220) / 440));
                ctx.beginPath(); ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 240, 255, ${alpha})`;
                ctx.shadowBlur = 12; ctx.shadowColor = '#00f0ff';
                ctx.fill(); ctx.shadowBlur = 0;
            });

            animationFrameId = requestAnimationFrame(renderLoop);
        };

        renderLoop();

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = canvas.parentElement.offsetWidth || 500;
            height = canvas.height = 400;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400;700&display=swap');

        #sv-banner-section {
          padding: 140px 6% 90px;
          background: #04060f;
          position: relative; z-index: 1;
          border-bottom: 1px solid rgba(0,240,255,0.08);
          overflow: hidden;
        }

        #sv-banner-section::before {
          content:''; position:absolute; inset:0; pointer-events:none;
          background:
            radial-gradient(ellipse at 80% 20%, rgba(123,47,255,0.09) 0%, transparent 60%),
            radial-gradient(ellipse at 15% 75%, rgba(0,240,255,0.06) 0%, transparent 50%);
        }

        .sv-inner { max-width: 1280px; margin: 0 auto; }
        
        .sv-hero-grid {
          display: grid; grid-template-columns: 1.1fr 0.9fr;
          gap: 56px; align-items: center; margin-bottom: 100px;
        }

        .sv-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 14px; font-family: 'Space Mono', monospace;
          font-size: .68rem; letter-spacing: .1em; text-transform: uppercase;
          color: #00ff88; background: rgba(0,255,136,0.07);
          border: 1px solid rgba(0,255,136,0.2); border-radius: 100px; margin-bottom: 24px;
        }
        .sv-breadcrumb-dot {
          width:6px; height:6px; border-radius:50%; background:#00ff88;
          animation: sv-blink 2s ease-in-out infinite;
        }
        @keyframes sv-blink {
          0%,100%{opacity:1;box-shadow:0 0 6px #00ff88} 50%{opacity:.3;box-shadow:none}
        }

        .sv-hero-title {
          font-family: 'Syne', sans-serif; font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 800; line-height: 1.05; margin-bottom: 20px; color: #fff;
        }
        .sv-hero-title span {
          display: block;
          background: linear-gradient(100deg, #00f0ff 0%, #7b2fff 55%, #ff2060 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .sv-hero-desc {
          font-size: 1rem; color: rgba(255,255,255,0.48); line-height: 1.82; max-width: 540px;
        }

        .sv-canvas-wrapper {
          position: relative; width: 100%; border-radius: 24px;
          background: rgba(255, 255, 255, 0.015); border: 1px solid rgba(0, 240, 255, 0.12);
          box-shadow: 0 0 50px rgba(0, 240, 255, 0.04), inset 0 0 24px rgba(255,255,255,0.02);
          overflow: hidden; backdrop-filter: blur(10px);
        }
        .sv-canvas-wrapper::after {
          content: 'QUANTUM_CORE_ACTIVE'; position: absolute; bottom: 16px; right: 20px;
          font-family: 'Space Mono', monospace; font-size: 0.58rem; color: rgba(0, 240, 255, 0.4); letter-spacing: 0.15em;
        }
        .sv-3d-canvas { display: block; width: 100%; height: auto; }

        /* ── INTERACTIVE 3D WORKFLOW LAYERS ── */
        .sv-wf-heading-block {
          text-align: center; margin-bottom: 60px;
        }
        .sv-wf-container {
          display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; align-items: center;
        }
        
        .sv-wf-selectors {
          display: flex; flex-direction: column; gap: 16px;
        }
        .sv-wf-tab {
          padding: 24px; border-radius: 16px; background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.04); text-align: left; cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1); position: relative;
        }
        .sv-wf-tab::before {
          content: ''; position: absolute; left: 0; top: 15%; bottom: 15%; width: 3px;
          background: #00f0ff; transform: scaleY(0); transition: transform 0.3s;
        }
        .sv-wf-tab.active {
          background: rgba(0, 240, 255, 0.03); border-color: rgba(0, 240, 255, 0.2);
          transform: translateX(10px);
        }
        .sv-wf-tab.active::before { transform: scaleY(1); }
        
        .sv-wf-tab-num {
          font-family: 'Space Mono', monospace; font-size: 0.75rem; color: #7b2fff;
          font-weight: 700; margin-bottom: 4px; display: block;
        }
        .sv-wf-tab-title {
          font-family: 'Syne', sans-serif; font-size: 1.15rem; font-weight: 700; color: #fff; margin-bottom: 6px;
        }
        .sv-wf-tab-sub {
          font-size: 0.84rem; color: rgba(255,255,255,0.4); margin: 0; line-height: 1.5;
        }

        /* ── 3D TRANSFORM IMAGE CONTAINER ── */
        .sv-wf-viewports {
          position: relative; perspective: 1000px; width: 100%; height: 380px;
        }
        .sv-wf-perspective-box {
          width: 100%; height: 100%; position: relative;
          transform-style: preserve-3d; transform: rotateY(-12deg) rotateX(8deg);
          transition: transform 0.5s ease;
        }
        .sv-wf-viewports:hover .sv-wf-perspective-box {
          transform: rotateY(-4deg) rotateX(4deg);
        }

        .sv-wf-display-card {
          position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; pointer-events: none;
          transition: opacity 0.4s ease, transform 0.4s ease; transform: translateZ(-50px);
        }
        .sv-wf-display-card.active {
          opacity: 1; pointer-events: auto; transform: translateZ(0);
        }

        .sv-wf-img-frame {
          width: 100%; height: 100%; border-radius: 20px; overflow: hidden;
          border: 1px solid rgba(0, 240, 255, 0.2); position: relative;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(123,47,255,0.1);
        }
        .sv-wf-img-frame img {
          width: 100%; height: 100%; object-fit: cover; filter: brightness(0.7) contrast(1.1);
        }
        .sv-wf-img-frame::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(4,6,15,0.95));
        }

        .sv-wf-overlay-meta {
          position: absolute; bottom: 32px; left: 32px; right: 32px; z-index: 3;
        }
        .sv-wf-meta-lbl {
          font-family: 'Space Mono', monospace; font-size: 0.65rem; color: #00ff88;
          text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; display: block;
        }
        .sv-wf-meta-desc {
          font-size: 0.9rem; color: rgba(255,255,255,0.7); margin: 0; line-height: 1.6;
        }

        /* Scanline Animation Effects */
        .sv-scanline {
          position: absolute; inset: 0; pointer-events: none; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 240, 255, 0.08) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
          background-size: 100% 4px, 6px 100%; z-index: 2;
        }

        /* ── Responsive Adaptations ── */
        @media (max-width: 991px) {
          .sv-hero-grid { grid-template-columns: 1fr; gap: 48px; margin-bottom: 70px; }
          .sv-canvas-wrapper { max-width: 550px; margin: 0 auto; }
          .sv-wf-container { grid-template-columns: 1fr; gap: 40px; }
          .sv-wf-viewports { height: 320px; max-width: 550px; margin: 0 auto; }
          .sv-wf-perspective-box { transform: none !important; }
        }

        @media (max-width: 768px) {
          #sv-banner-section { padding: 100px 24px 60px; }
        }

        @media (max-width: 480px) {
          .sv-wf-overlay-meta { bottom: 20px; left: 20px; right: 20px; }
          .sv-wf-meta-desc { font-size: 0.82rem; }
        }
      `}</style>

            <section id="sv-banner-section">
                <div className="sv-inner">

                    {/* ── MAIN INTERACTIVE HERO BANNER ── */}
                    <div className="sv-hero-grid">
                        <div>
                            <div className="sv-breadcrumb">
                                <span className="sv-breadcrumb-dot" />
                                Home &nbsp;›&nbsp; Capabilities &nbsp;›&nbsp; Services
                            </div>
                            <h1 className="sv-hero-title">
                                Cyber-Quantum <span>Infrastructure</span>
                            </h1>
                            <p className="sv-hero-desc">
                                At GOKLYN Technologies, we architect resilient, next-generation frameworks
                                designed to shield institutional layers against modern paradigms. From post-quantum
                                cryptography implementations to zero-day threat synthesis modules, we secure systemic structures.
                            </p>
                        </div>

                        <div>
                            <div className="sv-canvas-wrapper">
                                <canvas ref={canvasRef} className="sv-3d-canvas" />
                            </div>
                        </div>
                    </div>

                    {/* ── DYNAMIC WORKFLOW PRESENTATION LAYER ── */}
                    <div className="sv-wf-heading-block">
                        <div className="tm-tag">Secured Operations Pipeline</div>
                        <h2 className="tm-h2">Architectural <em>System Workflow</em></h2>
                    </div>

                    <div className="sv-wf-container">
                        {/* Pipeline Selection Blocks */}
                        <div className="sv-wf-selectors">
                            {WORKFLOW_STEPS.map((step, idx) => (
                                <button
                                    key={idx}
                                    className={`sv-wf-tab ${activeStep === idx ? 'active' : ''}`}
                                    onClick={() => setActiveStep(idx)}
                                >
                                    <span className="sv-wf-tab-num">PHASE_//_{step.phase}</span>
                                    <div className="sv-wf-tab-title">{step.title}</div>
                                    <p className="sv-wf-tab-sub">{step.subtitle}</p>
                                </button>
                            ))}
                        </div>

                        {/* Interactive Perspective 3D Image Display Panel */}
                        <div className="sv-wf-viewports">
                            <div className="sv-wf-perspective-box">
                                {WORKFLOW_STEPS.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className={`sv-wf-display-card ${activeStep === idx ? 'active' : ''}`}
                                    >
                                        <div className="sv-wf-img-frame">
                                            <div className="sv-scanline" />
                                            <img src={step.img} alt={step.title} />
                                            <div className="sv-wf-overlay-meta">
                                                <span className="sv-wf-meta-lbl">Operational Matrix Log</span>
                                                <p className="sv-wf-meta-desc">{step.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default ServicesBanner;