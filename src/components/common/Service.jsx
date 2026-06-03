import React from 'react';
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
        img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80"
    },
    {
        id: "aiml",
        icon: "🧠",
        title: "Artificial Intelligence & ML",
        desc: "Architecting deep transformer-based layers and predictive analytics systems to parse datasets without requiring explicit static programming parameters.",
        tags: ["PyTorch", "Transformers", "Neural Nets"],
        img: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&q=80" // Fixed link
    },
    {
        id: "cyber",
        icon: "🛡️",
        title: "Cybersecurity & Ethical Hacking",
        desc: "Proactively scanning system vectors using automated scripts to flag structural architectural vulnerabilities and apply real-time zero-day mitigations.",
        tags: ["PenTesting", "Zero-Trust", "SOC Pipelines"],
        img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80"
    },
    {
        id: "ba",
        icon: "📊",
        title: "Data & Business Analysis",
        desc: "Converting structural information repositories into real-time visual streams to empower predictive data modeling and modern strategic analysis.",
        tags: ["Python BI", "Predictive Systems", "Databases"],
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
    },
    {
        id: "web",
        icon: "🌐",
        title: "Web Development & UI/UX",
        desc: "Engineering highly responsive web interfaces with custom micro-frontend structures, combining production-ready performance with interface design standards.",
        tags: ["Next.js", "Tailwind CSS", "Figma Frameworks"],
        img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80"
    },
    {
        id: "mktg",
        icon: "📈",
        title: "Digital Growth & Marketing",
        desc: "Optimizing audience interaction across network matrices using predictive automation tools to scale target performance metrics reliably.",
        tags: ["Growth Engines", "Data Attribution", "SEO Matrices"],
        img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80"
    }
];

const Service = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    // Configuration rules for the slick carousel interface component
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
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

    // Filter data to only display the core highlights on the homepage grid layout
    const activeServicesList = isHomePage ? SERVICES_DATA.slice(0, 3) : SERVICES_DATA;

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400;700&display=swap');

        #sv-page-section {
          padding: 90px 6%;
          background: #04060f;
          position: relative; z-index: 1;
          overflow: hidden;
        }

        .sv-inner { max-width: 1280px; margin: 0 auto; }

        .sv-tag {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Space Mono', monospace; font-size: .66rem;
          letter-spacing: .14em; text-transform: uppercase; color: #00f0ff;
          margin-bottom: 14px;
        }
        .sv-tag::before { content:''; width:14px; height:1px; background:#00f0ff; flex-shrink:0; }

        .sv-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.7rem, 3.5vw, 2.7rem);
          font-weight: 800; color: #fff; line-height: 1.1; margin-bottom: 52px;
        }
        .sv-h2 em {
          font-style: normal;
          background: linear-gradient(90deg, #00f0ff, #7b2fff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        /* ── GRID AND CAROUSEL CONTAINERS ── */
        .sv-static-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .sv-card-wrapper {
          padding: 4px; /* Padding for slick track slide spacing stability */
        }

        .sv-box {
          background: rgba(255, 255, 255, 0.022);
          border: 1px solid rgba(0, 240, 255, 0.08);
          border-radius: 20px;
          padding: 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(8px);
          transition: border-color .3s, transform .3s, background .3s;
        }

        .sv-box::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #00f0ff, transparent);
          transform: scaleX(0); transition: transform .35s;
        }

        .sv-box:hover {
          border-color: rgba(0, 240, 255, 0.22);
          background: rgba(0, 240, 255, 0.04);
          transform: translateY(-6px);
        }
        .sv-box:hover::before { transform: scaleX(1); }

        .sv-img-mask {
          width: 100%;
          aspect-ratio: 16/10;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.05);
          margin-bottom: 20px;
        }
        .sv-img-mask img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.75) contrast(1.05);
          transition: transform 0.4s ease;
        }
        .sv-box:hover .sv-img-mask img {
          transform: scale(1.04);
        }

        .sv-meta-header {
          display: flex; align-items: center; gap: 10px; margin-bottom: 12px;
        }
        .sv-icon-lbl { font-size: 1.4rem; }
        
        .sv-box h4 {
          font-family: 'Syne', sans-serif; font-size: 1.15rem; font-weight: 700;
          color: #fff; margin: 0;
        }

        .sv-box p {
          font-size: 0.86rem; color: rgba(255, 255, 255, 0.45);
          line-height: 1.65; margin: 0 0 20px 0;
          flex-grow: 1;
        }

        .sv-tag-row {
          display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 24px;
        }
        .sv-mini-tag {
          font-family: 'Space Mono', monospace; font-size: 0.58rem;
          color: #7b2fff; background: rgba(123,47,255,0.08);
          border: 1px solid rgba(123,47,255,0.18);
          padding: 2px 8px; border-radius: 4px;
        }

        .sv-link-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Mono', monospace; font-size: 0.72rem;
          color: #00f0ff; text-decoration: none; font-weight: 700;
          letter-spacing: 0.05em; text-transform: uppercase;
          transition: color 0.2s, transform 0.2s;
        }
        .sv-link-btn i { font-size: 0.65rem; transition: transform 0.2s; }
        .sv-link-btn:hover { color: #fff; }
        .sv-link-btn:hover i { transform: channels; transform: translateX(4px); }

        /* ── DYNAMIC SLICK SLIDER CAROUSEL OVERRIDES ── */
        .slick-dots { bottom: -40px; }
        .slick-dots li button:before {
          color: rgba(0, 240, 255, 0.3) !important; font-size: 8px !important;
          transition: color 0.3s;
        }
        .slick-dots li.slick-active button:before {
          color: #00f0ff !important; font-size: 10px !important;
        }

        /* ── Responsive Adaptations ── */
        @media (max-width: 1024px) {
          .sv-static-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (max-width: 768px) {
          #sv-page-section { padding: 60px 24px; }
          .sv-static-grid { grid-template-columns: 1fr; gap: 20px; }
          .sv-h2 { margin-bottom: 36px; }
        }
      `}</style>

            <section id="sv-page-section">
                <div className="sv-inner">

                    {/* Header Heading Context Block */}
                    <div style={{ textAlign: isHomePage ? "left" : "center" }}>
                        <div className="sv-tag">What We Can Do</div>
                        <h2 className="sv-h2">
                            Capabilities & <em>Services Matrix</em>
                        </h2>
                    </div>

                    {/* Conditional Component Node Routing: Static Row Grid vs Carousel Component Slider */}
                    {isHomePage ? (
                        <div className="sv-static-grid">
                            {activeServicesList.map((service) => (
                                <div className="sv-box" key={service.id}>
                                    <div className="sv-img-mask">
                                        <img src={service.img} alt={service.title} />
                                    </div>
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
                            ))}
                        </div>
                    ) : (
                        <Slider {...sliderSettings}>
                            {activeServicesList.map((service) => (
                                <div className="sv-card-wrapper" key={service.id}>
                                    <div className="sv-box">
                                        <div className="sv-img-mask">
                                            <img src={service.img} alt={service.title} />
                                        </div>
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
                        </Slider>
                    )}

                </div>
            </section>
        </>
    );
};

export default Service;