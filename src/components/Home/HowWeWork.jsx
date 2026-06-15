import React, { useState, useRef, useEffect } from 'react'

const WORK_STEPS = [
    {
        num: "01",
        icon: "🔍",
        title: "Cryptographic Discovery (CBOM)",
        short: "Inventory every algorithm, certificate, key, and library across your entire infrastructure.",
        detail: "You cannot protect what you cannot see. We build a complete Cryptographic Bill of Materials covering every endpoint, service, and dependency.",
        tags: ["CBOM", "Asset Discovery", "Crypto Inventory"],
    },
    {
        num: "02",
        icon: "📡",
        title: "Quantum Risk Assessment",
        short: "Score your exposure using Mosca's Inequality and identify harvest-window timelines.",
        detail: "We identify HNDL-vulnerable (Harvest-Now-Decrypt-Later) data, calculate your migration urgency against quantum timelines, and map regulatory deadlines.",
        tags: ["Mosca's Inequality", "HNDL Risk", "Compliance Mapping"],
    },
    {
        num: "03",
        icon: "🗺️",
        title: "Migration Roadmap",
        short: "A phased, prioritized plan tied to your actual data shelf life — not a generic checklist.",
        detail: "Every system is sequenced by risk and data sensitivity. We design classical-quantum hybrid architectures where a full cutover isn't yet practical.",
        tags: ["Phased Rollout", "Hybrid Architecture", "Risk Prioritization"],
    },
    {
        num: "04",
        icon: "⚙️",
        title: "Implementation & Integration",
        short: "Deploy CRYSTALS-Kyber, ML-KEM, and ML-DSA across your stack.",
        detail: "We integrate NIST-standardized post-quantum algorithms, deploy QKD where warranted, and build in crypto-agility so future algorithm transitions are seamless.",
        tags: ["ML-KEM", "ML-DSA", "QKD", "Crypto-Agility"],
    },
    {
        num: "05",
        icon: "📊",
        title: "Continuous Monitoring & Compliance",
        short: "24/7 SOC coverage with ongoing alignment to global regulatory frameworks.",
        detail: "Real-time threat intelligence feeds, automated compliance checks, and continuous alignment with NIST, SEBI, RBI, ISO, NIS2, and DORA standards.",
        tags: ["24/7 SOC", "NIST · SEBI · RBI", "ISO · NIS2 · DORA"],
    },
]

function useReveal(threshold = 0.1) {
    const ref = useRef(null)
    const [vis, setVis] = useState(false)
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold })
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])
    return [ref, vis]
}

function WorkStepCard({ step, index, total }) {
    const [ref, vis] = useReveal(0.15)
    const [expanded, setExpanded] = useState(false)
    const isLast = index === total - 1

    return (
        <div ref={ref} style={{
            position: 'relative',
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : 'translateY(28px)',
            transition: 'all 0.6s cubic-bezier(.4,0,.2,1)',
            transitionDelay: `${index * 0.08}s`,
        }}>
            {/* connector line */}
            {!isLast && (
                <div style={{
                    position: 'absolute',
                    left: 27,
                    top: 64,
                    bottom: -32,
                    width: 1,
                    background: 'linear-gradient(180deg, rgba(0,240,255,0.3), rgba(123,47,255,0.15))',
                    zIndex: 0,
                }} />
            )}

            <div
                onClick={() => setExpanded(e => !e)}
                style={{
                    display: 'flex',
                    gap: 20,
                    padding: '24px 26px',
                    background: expanded ? 'rgba(0,240,255,0.04)' : 'rgba(255,255,255,0.028)',
                    border: `1px solid ${expanded ? 'rgba(0,240,255,0.25)' : 'rgba(0,240,255,0.1)'}`,
                    borderRadius: 16,
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'all 0.3s',
                }}
            >
                {/* step number circle */}
                <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: '#04060f',
                    border: `2px solid ${expanded ? '#00f0ff' : 'rgba(0,240,255,0.3)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontFamily: "'Syne',sans-serif",
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: expanded ? '#00f0ff' : 'rgba(255,255,255,0.5)',
                    boxShadow: expanded ? '0 0 20px rgba(0,240,255,0.3)' : 'none',
                    transition: 'all 0.3s',
                }}>
                    {step.num}
                </div>

                {/* content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                        <div>
                            <h3 style={{
                                fontFamily: "'Syne',sans-serif",
                                fontSize: '1.02rem',
                                fontWeight: 700,
                                color: '#fff',
                                marginBottom: 6,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                            }}>
                                <span style={{ fontSize: '1.2rem' }}>{step.icon}</span>
                                {step.title}
                            </h3>
                            <p style={{
                                fontSize: '.88rem',
                                color: 'rgba(255,255,255,0.46)',
                                lineHeight: 1.7,
                                margin: 0,
                            }}>
                                {step.short}
                            </p>
                        </div>
                        <i
                            className={`fa-solid fa-chevron-${expanded ? 'up' : 'down'}`}
                            style={{
                                color: '#00f0ff',
                                fontSize: '.8rem',
                                flexShrink: 0,
                                marginTop: 4,
                                transition: 'transform 0.3s',
                            }}
                        />
                    </div>

                    {/* expanded detail */}
                    <div style={{
                        maxHeight: expanded ? 200 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.35s cubic-bezier(.4,0,.2,1)',
                    }}>
                        <div style={{
                            marginTop: 16,
                            paddingTop: 16,
                            borderTop: '1px solid rgba(0,240,255,0.08)',
                        }}>
                            <p style={{
                                fontSize: '.85rem',
                                color: 'rgba(255,255,255,0.5)',
                                lineHeight: 1.78,
                                marginBottom: 14,
                            }}>
                                {step.detail}
                            </p>
                            <div>
                                {step.tags.map(tag => (
                                    <span key={tag} style={{
                                        display: 'inline-block',
                                        fontFamily: "'Space Mono',monospace",
                                        fontSize: '.62rem',
                                        letterSpacing: '.04em',
                                        color: '#00f0ff',
                                        background: 'rgba(0,240,255,0.07)',
                                        border: '1px solid rgba(0,240,255,0.15)',
                                        borderRadius: 4,
                                        padding: '3px 9px',
                                        margin: '2px 4px 2px 0',
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HowWeWork = () => {
    const [headRef, headVis] = useReveal(0.1)

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400&display=swap');

        #how-we-work {
          padding: 90px 6%;
          background: rgba(8,13,28,0.65);
          border-top: 1px solid rgba(0,240,255,0.08);
          border-bottom: 1px solid rgba(0,240,255,0.08);
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        #how-we-work::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 85% 15%, rgba(123,47,255,0.06) 0%, transparent 55%),
            radial-gradient(ellipse at 10% 85%, rgba(0,240,255,0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        .hww-inner {
          max-width: 760px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .hww-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Space Mono', monospace;
          font-size: .66rem;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #00f0ff;
          margin-bottom: 14px;
        }
        .hww-tag::before {
          content: '';
          width: 14px;
          height: 1px;
          background: #00f0ff;
          flex-shrink: 0;
        }
        .hww-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.7rem, 3.5vw, 2.7rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 12px;
        }
        .hww-h2 em {
          font-style: normal;
          background: linear-gradient(90deg, #00f0ff, #7b2fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hww-sub {
          font-size: .97rem;
          color: rgba(255,255,255,0.44);
          line-height: 1.82;
          max-width: 540px;
          margin: 0 auto;
        }
        .hww-steps {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-top: 56px;
        }
        .hww-hint {
          text-align: center;
          margin-top: 28px;
          font-family: 'Space Mono', monospace;
          font-size: .68rem;
          letter-spacing: .06em;
          color: rgba(255,255,255,0.3);
        }

        @media (max-width: 600px) {
          #how-we-work { padding: 60px 5%; }
          .hww-steps { gap: 24px; margin-top: 40px; }
        }
      `}</style>

            <section id="how-we-work">
                <div className="hww-inner">
                    <div
                        ref={headRef}
                        style={{
                            textAlign: 'center',
                            marginBottom: 8,
                            opacity: headVis ? 1 : 0,
                            transform: headVis ? 'none' : 'translateY(24px)',
                            transition: 'all 0.7s',
                        }}
                    >
                        <div className="hww-tag" style={{ justifyContent: 'center' }}>How We Work</div>
                        <h2 className="hww-h2">A Five-Step Path to <em>Quantum Resilience</em></h2>
                        <p className="hww-sub">
                            Not a generic checklist — a methodology built around your actual cryptographic
                            footprint, risk exposure, and compliance obligations.
                        </p>
                    </div>

                    <div className="hww-steps">
                        {WORK_STEPS.map((step, i) => (
                            <WorkStepCard key={i} step={step} index={i} total={WORK_STEPS.length} />
                        ))}
                    </div>

                    <div className="hww-hint">
                        <i className="fa-solid fa-hand-pointer" style={{ marginRight: 6, color: '#00f0ff' }} />
                        Tap any step to see details
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowWeWork