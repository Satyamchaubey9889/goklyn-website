import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const SERVICES_DATA = [
    {
        id: "qml",
        icon: "⚛️",
        title: "Quantum ML & Cryptography",
        desc: "Integrating high-performance quantum algorithms with classical machine learning models to develop resilient post-quantum data protection perimeters.",
        tags: ["QML", "NIST Level-5", "BB84"],
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=85"
    },
    {
        id: "aiml",
        icon: "🧠",
        title: "Artificial Intelligence & ML",
        desc: "Architecting deep transformer-based layers and predictive analytics systems to parse datasets without requiring explicit static programming parameters.",
        tags: ["PyTorch", "Transformers", "Neural Nets"],
        img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&q=85"
    },
    {
        id: "cyber",
        icon: "🛡️",
        title: "Cybersecurity & Ethical Hacking",
        desc: "Proactively scanning system vectors using automated scripts to flag structural architectural vulnerabilities and apply real-time zero-day mitigations.",
        tags: ["PenTesting", "Zero-Trust", "SOC Pipelines"],
        img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&q=85"
    },
    {
        id: "ba",
        icon: "📊",
        title: "Data & Business Analysis",
        desc: "Converting structural information repositories into real-time visual streams to empower predictive data modeling and modern strategic analysis.",
        tags: ["Python BI", "Predictive Systems", "Databases"],
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=85"
    },
    {
        id: "web",
        icon: "🌐",
        title: "Web Development & UI/UX",
        desc: "Engineering highly responsive web interfaces with custom micro-frontend structures, combining production-ready performance with interface design standards.",
        tags: ["Next.js", "Tailwind CSS", "Figma Frameworks"],
        img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&q=85"
    },
    {
        id: "mktg",
        icon: "📈",
        title: "Digital Growth & Marketing",
        desc: "Optimizing audience interaction across network matrices using predictive automation tools to scale target performance metrics reliably.",
        tags: ["Growth Engines", "Data Attribution", "SEO Matrices"],
        img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=700&q=85"
    }
];

const Service = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const sliderRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    const handleSliderClick = () => {
        if (isPaused) {
            sliderRef.current.slickPlay();
            setIsPaused(false);
        } else {
            sliderRef.current.slickPause();
            setIsPaused(true);
        }
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: "cubic-bezier(0.45, 0, 0.2, 1)",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        arrows: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1, dots: false },
            },
        ],
    };

    const activeServicesList = isHomePage ? SERVICES_DATA.slice(0, 3) : SERVICES_DATA;

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400;700&display=swap');

        #sv-page-section {
          padding: 100px 6% 120px;
          background: #04060f;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        #sv-page-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(123,47,255,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 10% 80%, rgba(0,240,255,0.06) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        #sv-page-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,240,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,240,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        .sv-inner {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .sv-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Space Mono', monospace; font-size: .65rem;
          letter-spacing: .18em; text-transform: uppercase; color: #00f0ff;
          margin-bottom: 16px;
        }
        .sv-tag::before {
          content:''; width: 28px; height: 1px;
          background: linear-gradient(90deg, transparent, #00f0ff);
          flex-shrink: 0;
        }
        .sv-tag::after {
          content:''; width: 28px; height: 1px;
          background: linear-gradient(90deg, #00f0ff, transparent);
          flex-shrink: 0;
        }

        .sv-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 3.6vw, 2.85rem);
          font-weight: 800; color: #fff; line-height: 1.08; margin-bottom: 56px;
        }
        .sv-h2 em {
          font-style: normal;
          background: linear-gradient(100deg, #00f0ff 0%, #7b2fff 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .sv-static-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .sv-card-wrapper { padding: 6px; }

        /* Click-to-pause cursor hint */
        .sv-slider-wrap {
          padding-bottom: 52px;
          cursor: pointer;
        }

        .sv-box {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(0,240,255,0.09);
          border-radius: 18px;
          padding: 0;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: border-color .3s ease, transform .35s ease, background .3s ease, box-shadow .35s ease;
        }

        .sv-box::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #00f0ff 40%, #7b2fff 70%, transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .4s ease;
          z-index: 2;
        }

        .sv-box:hover {
          border-color: rgba(0,240,255,0.28);
          background: rgba(0,240,255,0.035);
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,240,255,0.1);
        }
        .sv-box:hover::before { transform: scaleX(1); }

        .sv-img-mask {
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          position: relative;
          border-radius: 18px 18px 0 0;
        }

        .sv-img-mask::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(160deg, rgba(0,240,255,0.08) 0%, rgba(4,6,15,0.55) 100%);
          z-index: 1;
          transition: opacity .35s;
        }
        .sv-box:hover .sv-img-mask::after { opacity: 0.5; }

        .sv-img-mask img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.72) saturate(1.1);
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: block;
        }
        .sv-box:hover .sv-img-mask img { transform: scale(1.07); }

        .sv-card-body {
          padding: 20px 22px 22px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .sv-meta-header {
          display: flex; align-items: center; gap: 10px; margin-bottom: 10px;
        }
        .sv-icon-lbl {
          font-size: 1.3rem;
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,240,255,0.07);
          border: 1px solid rgba(0,240,255,0.12);
          border-radius: 8px;
          flex-shrink: 0;
        }

        .sv-box h4 {
          font-family: 'Syne', sans-serif; font-size: 1.08rem; font-weight: 700;
          color: #fff; margin: 0; line-height: 1.25;
        }

        .sv-box p {
          font-size: 0.83rem; color: rgba(255,255,255,0.42);
          line-height: 1.68; margin: 0 0 18px 0;
          flex-grow: 1;
        }

        .sv-tag-row {
          display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 20px;
        }
        .sv-mini-tag {
          font-family: 'Space Mono', monospace; font-size: 0.56rem;
          color: #7b2fff; background: rgba(123,47,255,0.07);
          border: 1px solid rgba(123,47,255,0.2);
          padding: 3px 9px; border-radius: 4px; letter-spacing: 0.04em;
          transition: background .2s, color .2s, border-color .2s;
        }
        .sv-box:hover .sv-mini-tag {
          background: rgba(123,47,255,0.14);
          border-color: rgba(123,47,255,0.35);
        }

        .sv-link-btn {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Space Mono', monospace; font-size: 0.7rem;
          color: #00f0ff; text-decoration: none; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          transition: color .2s, gap .2s;
          margin-top: auto;
        }
        .sv-link-btn i { font-size: 0.62rem; transition: transform .22s; }
        .sv-link-btn:hover { color: #fff; gap: 11px; }
        .sv-link-btn:hover i { transform: translateX(3px); }

        /* Pause indicator badge */
        .sv-pause-badge {
          position: absolute;
          top: 0; right: 0;
          font-family: 'Space Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #00f0ff;
          background: rgba(0,240,255,0.08);
          border: 1px solid rgba(0,240,255,0.2);
          padding: 4px 10px;
          border-radius: 6px;
          pointer-events: none;
          opacity: 0;
          transition: opacity .25s;
        }
        .sv-slider-outer { position: relative; }
        .sv-slider-outer.is-paused .sv-pause-badge { opacity: 1; }

        .slick-dots { bottom: -44px; }
        .slick-dots li { margin: 0 3px; }
        .slick-dots li button:before {
          color: rgba(0, 240, 255, 0.25) !important;
          font-size: 7px !important;
          transition: color .25s, font-size .25s;
        }
        .slick-dots li.slick-active button:before {
          color: #00f0ff !important; font-size: 10px !important;
        }

        @media (max-width: 1024px) {
          .sv-static-grid { grid-template-columns: repeat(2, 1fr); gap: 22px; }
        }
        @media (max-width: 768px) {
          #sv-page-section { padding: 64px 20px 96px; }
          .sv-static-grid { grid-template-columns: 1fr; gap: 18px; }
          .sv-h2 { margin-bottom: 36px; }
        }
      `}</style>

            <section id="sv-page-section">
                <div className="sv-inner">

                    <div style={{ textAlign: isHomePage ? "left" : "center" }}>
                        <div className="sv-tag">What We Can Do</div>
                        <h2 className="sv-h2">
                            Capabilities &amp; <em>Services Matrix</em>
                        </h2>
                    </div>

                    {isHomePage ? (
                        <div className="sv-static-grid">
                            {activeServicesList.map((service) => (
                                <div className="sv-box" key={service.id}>
                                    <div className="sv-img-mask">
                                        <img src={service.img} alt={service.title} loading="lazy" />
                                    </div>
                                    <div className="sv-card-body">
                                        <div className="sv-meta-header">
                                            <span className="sv-icon-lbl">{service.icon}</span>
                                            <h4>{service.title}</h4>
                                        </div>
                                        <p>{service.desc}</p>
                                        <div className="sv-tag-row">
                                            {service.tags.map(t => <span key={t} className="sv-mini-tag">{t}</span>)}
                                        </div>
                                        <Link to="/services" className="sv-link-btn">
                                            Analyze Matrix <i className="fa-solid fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={`sv-slider-outer${isPaused ? ' is-paused' : ''}`}>
                            <span className="sv-pause-badge">⏸ Paused — click to resume</span>
                            <div className="sv-slider-wrap" onClick={handleSliderClick}>
                                <Slider ref={sliderRef} {...sliderSettings}>
                                    {activeServicesList.map((service) => (
                                        <div className="sv-card-wrapper" key={service.id}>
                                            <div className="sv-box">
                                                <div className="sv-img-mask">
                                                    <img src={service.img} alt={service.title} loading="lazy" />
                                                </div>
                                                <div className="sv-card-body">
                                                    <div className="sv-meta-header">
                                                        <span className="sv-icon-lbl">{service.icon}</span>
                                                        <h4>{service.title}</h4>
                                                    </div>
                                                    <p>{service.desc}</p>
                                                    <div className="sv-tag-row">
                                                        {service.tags.map(t => <span key={t} className="sv-mini-tag">{t}</span>)}
                                                    </div>
                                                    <Link
                                                        to="/contact-us"
                                                        className="sv-link-btn"
                                                        onClick={e => e.stopPropagation()}
                                                    >
                                                        Analyze Matrix <i className="fa-solid fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    )}

                </div>
            </section>
        </>
    );
};

export default Service;