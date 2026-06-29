import React, { useEffect, useRef } from 'react'

const Statistics = () => {
    const sectionRef = useRef(null)
    const cursorGlowRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current
        const glow = cursorGlowRef.current
        if (!section || !glow) return

        let rafId = null

        const handleMouseMove = (e) => {
            if (rafId) cancelAnimationFrame(rafId)
            rafId = requestAnimationFrame(() => {
                const rect = section.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
                glow.style.opacity = '1'
            })
        }

        const handleMouseLeave = () => {
            glow.style.opacity = '0'
        }

        section.addEventListener('mousemove', handleMouseMove)
        section.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            section.removeEventListener('mousemove', handleMouseMove)
            section.removeEventListener('mouseleave', handleMouseLeave)
            if (rafId) cancelAnimationFrame(rafId)
        }
    }, [])

    return (
        <>
            <style>{`
                /* ── SECTION BASE ── */
                #st-section {
                    background: #04060f;
                    position: relative;
                    overflow: hidden;
                    border-top: 1px solid rgba(0,240,255,0.08);
                    border-bottom: 1px solid rgba(0,240,255,0.08);
                    z-index: 1;
                }

                /* ambient radial gradients matching ProjectBanner */
                #st-section::before {
                    content: ''; position: absolute; inset: 0; pointer-events: none;
                    background:
                        radial-gradient(ellipse at 15% 20%, rgba(123,47,255,0.08) 0%, transparent 55%),
                        radial-gradient(ellipse at 85% 75%, rgba(0,240,255,0.05) 0%, transparent 50%);
                }

                /* ── CURSOR GLOW ── */
                .st-cursor-glow {
                    position: absolute;
                    width: 420px;
                    height: 420px;
                    border-radius: 50%;
                    background: radial-gradient(circle,
                        rgba(0,240,255,0.07) 0%,
                        rgba(123,47,255,0.04) 40%,
                        transparent 70%
                    );
                    pointer-events: none;
                    opacity: 0;
                    transition: opacity 0.45s ease;
                    z-index: 1;
                    will-change: transform;
                }

                /* ── FLOATING PARTICLES ── */
                .st-particle {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                    animation: st-float linear infinite;
                }
                @keyframes st-float {
                    0%   { transform: translateY(0) rotate(0deg);   opacity: 0; }
                    10%  { opacity: 1; }
                    90%  { opacity: 0.5; }
                    100% { transform: translateY(-110px) rotate(360deg); opacity: 0; }
                }

                /* ── INNER LAYOUT ── */
                .st-inner {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 90px 6% 100px;
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                /* ── BREADCRUMB (mirrors .pj-breadcrumb) ── */
                .st-breadcrumb {
                    display: inline-flex; align-items: center; gap: 8px;
                    padding: 5px 14px;
                    font-family: 'Poppins', sans-serif;
                    font-size: .68rem; letter-spacing: .1em; text-transform: uppercase;
                    color: #00f0ff;
                    background: rgba(0,240,255,0.07);
                    border: 1px solid rgba(0,240,255,0.2);
                    border-radius: 100px;
                    margin-bottom: 32px;
                    cursor: default;
                }
                .st-breadcrumb-dot {
                    width: 6px; height: 6px; border-radius: 50%; background: #00f0ff;
                    animation: st-blink 2s ease-in-out infinite;
                }
                .st-breadcrumb .sub_span { color: #7b2fff; font-weight: 700; }
                .st-breadcrumb i { font-size: 0.6rem; color: rgba(255,255,255,0.3); }
                @keyframes st-blink {
                    0%,100% { opacity:1; box-shadow: 0 0 6px #00f0ff; }
                    50%     { opacity:.3; box-shadow: none; }
                }

                /* ── SECTION TITLE (mirrors .pj-hero-title) ── */
                .st-title {
                    font-family: 'Montserrat', sans-serif;
                    font-size: clamp(2.4rem, 5vw, 4rem);
                    font-weight: 800;
                    line-height: 1.05;
                    margin-bottom: 16px;
                    background: linear-gradient(100deg, #00f0ff 0%, #7b2fff 55%, #ff2060 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-align: center;
                    position: relative;
                }

                /* animated underline accent */
                .st-title::after {
                    content: '';
                    display: block;
                    width: 52px;
                    height: 3px;
                    background: linear-gradient(90deg, #00f0ff, #7b2fff);
                    border-radius: 2px;
                    margin: 14px auto 0;
                    transition: width 0.4s ease;
                }
                .st-title:hover::after { width: 90px; }

                /* ── COMING SOON CARD ── */
                .st-card {
                    margin-top: 52px;
                    padding: 52px 72px;
                    border: 1px solid rgba(0,240,255,0.18);
                    border-radius: 24px;
                    background: rgba(0,240,255,0.03);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    box-shadow:
                        0 0 60px rgba(0,240,255,0.04),
                        0 32px 80px rgba(0,0,0,0.45),
                        inset 0 1px 0 rgba(0,240,255,0.1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                    max-width: 520px;
                    width: 100%;
                    animation: st-card-enter 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
                    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
                }
                .st-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(0,240,255,0.35);
                    box-shadow:
                        0 0 80px rgba(0,240,255,0.08),
                        0 40px 90px rgba(0,0,0,0.5),
                        inset 0 1px 0 rgba(0,240,255,0.18);
                }
                @keyframes st-card-enter {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                /* ── ICON ── */
                .st-icon {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: rgba(0,240,255,0.06);
                    border: 1px solid rgba(0,240,255,0.25);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 28px;
                    animation: st-pulse 2.4s ease-in-out infinite;
                }
                @keyframes st-pulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(0,240,255,0.2); }
                    50%      { box-shadow: 0 0 0 14px rgba(0,240,255,0); }
                }

                /* ── STATUS PILL (mirrors .pj-breadcrumb style) ── */
                .st-pill {
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.68rem;
                    font-weight: 600;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: #00f0ff;
                    background: rgba(0,240,255,0.07);
                    border: 1px solid rgba(0,240,255,0.2);
                    border-radius: 100px;
                    padding: 4px 14px;
                }

                /* ── CARD HEADING ── */
                .st-card-title {
                    font-family: 'Montserrat', sans-serif;
                    font-size: clamp(1.6rem, 3vw, 2.2rem);
                    font-weight: 800;
                    background: linear-gradient(100deg, #00f0ff 0%, #7b2fff 55%, #ff2060 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin: 0;
                    text-align: center;
                }

                /* ── DESCRIPTION (mirrors .pj-hero-desc) ── */
                .st-card-desc {
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.95rem;
                    color: rgba(255,255,255,0.45);
                    text-align: center;
                    line-height: 1.8;
                    margin: 0;
                    max-width: 340px;
                }

                /* ── DOT LOADER with cyan accent ── */
                .st-dots {
                    display: flex;
                    gap: 7px;
                    margin-top: 4px;
                }
                .st-dots span {
                    width: 7px; height: 7px;
                    border-radius: 50%;
                    background: #00f0ff;
                    opacity: 0.4;
                    animation: st-bounce 1.4s ease-in-out infinite;
                }
                .st-dots span:nth-child(2) { animation-delay: 0.2s; background: #7b2fff; }
                .st-dots span:nth-child(3) { animation-delay: 0.4s; background: #ff2060; }
                @keyframes st-bounce {
                    0%, 80%, 100% { transform: translateY(0);   opacity: 0.4; }
                    40%           { transform: translateY(-8px); opacity: 1;   }
                }

                /* ── RESPONSIVE ── */
                @media (max-width: 576px) {
                    .st-card { padding: 36px 24px; }
                    .st-inner { padding: 70px 24px 80px; }
                }

                @media (prefers-reduced-motion: reduce) {
                    .st-card, .st-icon, .st-dots span,
                    .st-particle, .st-breadcrumb-dot { animation: none !important; }
                    .st-card:hover { transform: none; }
                }
            `}</style>

            <section
                id="st-section"
                className="statistics_section position-relative"
                ref={sectionRef}
            >
                {/* Cursor glow */}
                <div className="st-cursor-glow" ref={cursorGlowRef} />

                {/* Ambient floating particles */}
                {[...Array(7)].map((_, i) => {
                    const colors = ['rgba(0,240,255,0.18)', 'rgba(123,47,255,0.18)', 'rgba(255,32,96,0.14)']
                    return (
                        <div
                            key={i}
                            className="st-particle"
                            style={{
                                width: `${5 + (i % 3) * 4}px`,
                                height: `${5 + (i % 3) * 4}px`,
                                left: `${8 + i * 13}%`,
                                bottom: `${4 + (i % 4) * 7}%`,
                                background: colors[i % 3],
                                animationDuration: `${4.5 + i * 0.7}s`,
                                animationDelay: `${i * 0.5}s`,
                            }}
                        />
                    )
                })}

                <div className="st-inner">

                
                    {/* Title */}
                    <h2
                        className="st-title"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="80"
                    >
                        Projects
                    </h2>

                    {/* Coming Soon Card */}
                    <div
                        className="st-card"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="180"
                    >
                        <div className="st-icon">🚀</div>
                        <span className="st-pill">In Progress</span>
                        <h3 className="st-card-title">Coming Soon</h3>
                        <p className="st-card-desc">
                            Something exciting is being built. Projects will appear here once they're ready to share.
                        </p>
                        <div className="st-dots">
                            <span /><span /><span />
                        </div>
                    </div>

                </div>

                {/* Original background shapes preserved */}
                <figure className="statistics_left_shape mb-0 position-absolute top_bottom_shape">
                    <img src="/assets/images/statistics_lefts_shape.png" alt="" className="img-fluid" />
                </figure>
                <figure className="statistics_right_shape mb-0 position-absolute top_bottom_shape">
                    <img src="/assets/images/statistics_right_shape.png" alt="" className="img-fluid" />
                </figure>
            </section>
        </>
    )
}

export default Statistics