import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { WaveCanvas } from './ServicesBanner' // Imports the existing reusable canvas

const PROCESS = [
    { num: "01", icon: "fa-solid fa-magnifying-glass", title: "Discovery & Audit", desc: "Quantum-accelerated asset discovery and attack surface mapping across cloud, on-prem, and hybrid environments." },
    { num: "02", icon: "fa-solid fa-dna", title: "Quantum Readiness", desc: "Assess cryptographic posture against CRQC-level threats and identify harvest-now-decrypt-later vulnerabilities." },
    { num: "03", icon: "fa-solid fa-shield-halved", title: "Architecture Hardening", desc: "Deploy post-quantum cryptographic primitives, quantum-safe TLS 1.3 extensions, and hybrid key encapsulation." },
    { num: "04", icon: "fa-solid fa-robot", title: "AI Model Integration", desc: "Integrate transformer-based anomaly detection into your SIEM pipeline with quantum feature extraction layers." },
    { num: "05", icon: "fa-solid fa-user-ninja", title: "Red Team Operations", desc: "Full-spectrum quantum-simulated adversarial exercises including supply chain and side-channel attack vectors." },
    { num: "06", icon: "fa-solid fa-chart-column", title: "Continuous Monitoring", desc: "Persistent 24/7 quantum SOC coverage with automated threat hunting, incident response, and forensic analysis." },
]

/* ─── REVEAL HOOK ────────────────────────────── */
function useReveal(threshold = 0.1) {
    const ref = useRef(null)
    const [vis, setVis] = useState(false)
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold })
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [threshold])
    return [ref, vis]
}

/* ─── PROCESS CARD ───────────────────────────── */
function ProcCard({ step }) {
    const [ref, vis] = useReveal(0.1)
    const [hov, setHov] = useState(false)
    return (
        <div ref={ref}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                background: 'rgba(255,255,255,0.028)',
                border: `1px solid ${hov ? 'rgba(0,240,255,0.25)' : 'rgba(0,240,255,0.1)'}`,
                borderRadius: 16, padding: '30px 24px',
                opacity: vis ? 1 : 0,
                transform: vis ? (hov ? 'translateY(-5px)' : 'none') : 'translateY(24px)',
                transition: 'all 0.5s cubic-bezier(.4,0,.2,1)',
                position: 'relative', overflow: 'hidden',
            }}
        >
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: 'linear-gradient(90deg,transparent,#00f0ff,transparent)',
                transform: hov ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform .35s',
            }} />
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '3rem', fontWeight: 800, color: 'rgba(0,240,255,0.06)', lineHeight: 1, marginBottom: 12 }}>{step.num}</div>
            <div style={{ fontSize: '1.4rem', marginBottom: 12, color: '#00f0ff' }}><i className={step.icon}></i></div>
            <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '.88rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 9 }}>{step.title}</h3>
            <p style={{ fontSize: '.83rem', color: 'rgba(255,255,255,0.44)', lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
        </div>
    )
}

/* ─── MAIN METHODOLOGY & EXPLAIER COMPONENT ──── */
const SecurityProcess = () => {
    return (
        <>
            <style>{`
        .sv-section { padding:90px 6%; position:relative; z-index:1; background:#04060f; }
        .sv-section-alt { background:rgba(8,13,28,0.65); border-top:1px solid rgba(0,240,255,0.08); border-bottom:1px solid rgba(0,240,255,0.08); }
        .sv-inner { max-width:1280px; margin:0 auto; }
        .sv-heading { text-align:center; margin-bottom:52px; }
        .sv-tag {
          display:inline-flex; align-items:center; gap:7px;
          font-family:'Poppins',sans-serif; font-size:.66rem;
          letter-spacing:.14em; text-transform:uppercase; color:#00f0ff; margin-bottom:14px;
        }
        .sv-tag::before { content:''; width:14px; height:1px; background:#00f0ff; flex-shrink:0; }
        .sv-h2 {
          font-family:'Montserrat',sans-serif; font-size:clamp(1.7rem,3.5vw,2.8rem);
          font-weight:800; color:#fff; line-height:1.1; margin-bottom:12px;
        }
        .sv-h2 em { font-style:normal; background:linear-gradient(90deg,#00f0ff,#7b2fff); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .sv-sub { font-size:.97rem; color:rgba(255,255,255,0.44); line-height:1.82; max-width:540px; }

        .sv-proc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .sv-explainer-grid { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; }

        #sv-cta { padding:90px 6%; text-align:center; border-top:1px solid rgba(0,240,255,0.08); position:relative; z-index:1; background:#04060f;}
        #sv-cta::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse at 50% 50%, rgba(123,47,255,0.08) 0%, transparent 65%); pointer-events:none; }
        #sv-cta .sv-cta-inner { max-width:620px; margin:0 auto; position:relative; z-index:1; }
        #sv-cta h2 { font-family:'Montserrat',sans-serif; font-size:clamp(1.7rem,3vw,2.6rem); font-weight:800; color:#fff; margin-bottom:14px; }
        #sv-cta h2 em { font-style:normal; background:linear-gradient(90deg,#00f0ff,#7b2fff); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        #sv-cta p { font-size:.97rem; color:rgba(255,255,255,0.44); line-height:1.8; margin-bottom:32px; }

        @media (max-width:991px) {
          .sv-proc-grid { grid-template-columns:1fr 1fr; }
          .sv-explainer-grid { grid-template-columns:1fr; gap:40px; }
        }
        @media (max-width:600px) {
          .sv-section { padding:60px 5%; }
          .sv-proc-grid { grid-template-columns:1fr; }
          #sv-cta { padding:60px 5%; }
        }
      `}</style>

            {/* ══ PROCESS ══ */}
            <section className="sv-section sv-section-alt">
                <div className="sv-inner">
                    <div className="sv-heading">
                        <div className="sv-tag" style={{ justifyContent: 'center' }}>Methodology</div>
                        <h2 className="sv-h2" style={{ textAlign: 'center' }}>How We <em>Secure Your World</em></h2>
                        <p className="sv-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
                            A six-phase quantum security protocol refined through years of adversarial research and real-world deployments.
                        </p>
                    </div>
                    <div className="sv-proc-grid">
                        {PROCESS.map((step, i) => <ProcCard key={i} step={step} />)}
                    </div>
                </div>
            </section>

            {/* ══ QUANTUM EXPLAINER ══ */}
            <section className="sv-section">
                <div className="sv-inner">
                    <div className="sv-explainer-grid">
                        {/* image side */}
                        <div style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(123,47,255,0.25)', boxShadow: '0 0 60px rgba(123,47,255,0.1),0 32px 80px rgba(0,0,0,0.5)' }}>
                            <WaveCanvas color="#7b2fff" />
                            <img
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                                alt="Quantum computing"
                                style={{ width: '100%', height: 400, objectFit: 'cover', filter: 'brightness(.82) saturate(1.3)', display: 'block' }}
                            />
                            <div style={{ position: 'absolute', bottom: -14, right: -14, background: '#080d1c', border: '1px solid rgba(123,47,255,0.4)', borderRadius: 14, padding: '14px 18px', backdropFilter: 'blur(16px)', boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}>
                                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '1.5rem', fontWeight: 800, color: '#7b2fff', lineHeight: 1, marginBottom: 3 }}>256</div>
                                <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '.6rem', color: 'rgba(255,255,255,0.44)', letterSpacing: '.07em', textTransform: 'uppercase' }}>Logical Qubits</div>
                            </div>
                        </div>
                        {/* text side */}
                        <div>
                            <div className="sv-tag">Quantum Advantage</div>
                            <h2 className="sv-h2">Why <em>Quantum Security</em> Matters Now</h2>
                            <p style={{ fontSize: '.97rem', color: 'rgba(255,255,255,0.44)', lineHeight: 1.82, marginBottom: 28 }}>
                                Cryptographically Relevant Quantum Computers (CRQCs) will break RSA-2048 and ECC within years. Harvest-now-decrypt-later attacks are already happening. The window to migrate is closing.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 13 }}>
                                {[
                                    { icon: 'fa-solid fa-atom', title: "Shor's Algorithm Threat", sub: 'Can factor RSA keys exponentially faster than any classical computer — rendering current PKI obsolete.' },
                                    { icon: 'fa-solid fa-key', title: 'Grover-Accelerated Attacks', sub: 'Quadratic speedup for brute-force attacks, effectively halving symmetric key strength overnight.' },
                                    { icon: 'fa-solid fa-arrows-rotate', title: 'Post-Quantum Migration', sub: 'CRYSTALS-Kyber and Dilithium are the NIST-standardized algorithms — we migrate your stack today.' },
                                    { icon: 'fa-solid fa-dna', title: 'Quantum Error Correction', sub: 'Surface code implementation achieving 99.9% logical qubit fidelity for production-grade security.' },
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 16px', background: 'rgba(255,255,255,0.028)', border: '1px solid rgba(0,240,255,0.1)', borderRadius: 12, transition: 'border-color .3s' }}>
                                        <span style={{ fontSize: '1.1rem', flexShrink: 0, color: '#00f0ff' }}><i className={item.icon}></i></span>
                                        <div>
                                            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '.84rem', fontWeight: 700, color: '#fff', marginBottom: 3 }}>{item.title}</div>
                                            <div style={{ fontSize: '.8rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.65 }}>{item.sub}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ CTA ══ */}
            <section id="sv-cta">
                <div className="sv-cta-inner">
                    <div className="sv-tag" style={{ justifyContent: 'center' }}>Get Started</div>
                    <h2>Ready to Be <em>Quantum Secure?</em></h2>
                    <p>
                        Join 140+ organizations that trust Goklyn to defend their digital future
                        and build the next generation of quantum-ready systems.
                    </p>
                    <div className="sv-btns" style={{ justifyContent: 'center' }}>
                        <a href="mailto:hr@goklyn.in" className="sv-btn-p">
                            <i className="fa-solid fa-envelope" />
                            Book Free Assessment
                        </a>
                        <Link to="/about-us" className="sv-btn-g">
                            <i className="fa-solid fa-arrow-right" />
                            About Goklyn
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SecurityProcess