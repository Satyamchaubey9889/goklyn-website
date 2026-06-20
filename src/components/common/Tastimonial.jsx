import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const TESTIMONIALS_DATA = [
    {
        id: 1,
        name: "Arjun Mehta",
        role: "Chief Information Security Officer",
        company: "NexaFin Global",
        tag: "Post-Quantum Cryptography",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
        feedback: "Migrating our core multi-tenant ledger infrastructure over to Goklyn's NIST Level-5 post-quantum primitive stack was seamless. Their team demonstrated absolute structural domain proficiency."
    },
    {
        id: 2,
        name: "Elena Rostova",
        role: "Director of Secure Infrastructure",
        company: "Vanguard GovTech",
        tag: "Zero-Trust Architecture",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
        feedback: "Goklyn's continuous telemetry pipeline completely decentralized our access vectors. The anomaly identification systems flags potential edge-case exploits in microseconds."
    },
    {
        id: 3,
        name: "Dr. Marcus Vance",
        role: "Head of Advanced Systems Research",
        company: "Quantum Cybernetics Labs",
        tag: "Quantum ML Audit",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
        feedback: "Their collaborative approach bridged our internal academia gap. The hybrid classical-quantum threat analysis engine they implemented handles systemic load profiles perfectly."
    },
    {
        id: 4,
        name: "Sarah Jenkins",
        role: "VP of Enterprise Infrastructure",
        company: "AlphaScale Health",
        tag: "NIST compliance Perimeters",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
        feedback: "Securing patient records across globally distributed nodes required a radical defensive layer. Goklyn delivered robust cryptographic implementations ahead of schedule."
    }
];

const Testimonial = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
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

    return (
        <>
            <style>{`
        #ts-section {
          padding: 90px 6%;
          background: #04060f;
          position: relative; 
          z-index: 1;
          border-bottom: 1px solid rgba(0,240,255,0.08);
          overflow: hidden;
        }

        .ts-inner { max-width: 1280px; margin: 0 auto; }

        .ts-tag {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Poppins', sans-serif; font-size: .66rem;
          letter-spacing: .14em; text-transform: uppercase; color: #00f0ff;
          margin-bottom: 14px;
        }
        .ts-tag::before { content:''; width:14px; height:1px; background:#00f0ff; flex-shrink:0; }

        .ts-h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.7rem, 3.5vw, 2.7rem);
          font-weight: 800; color: #fff; line-height: 1.1; margin-bottom: 52px;
        }
        .ts-h2 em {
          font-style: normal;
          background: linear-gradient(90deg, #00f0ff, #7b2fff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        /* ── CAROUSEL TRACK SLIDE PANELS ── */
        .ts-carousel-wrapper {
          padding: 4px;
        }

        .ts-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(0, 240, 255, 0.08);
          border-radius: 20px;
          padding: 32px;
          height: 100%;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: border-color .3s, transform .3s, background .3s;
        }

        .ts-box::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #00f0ff, transparent);
          transform: scaleX(0); transition: transform .35s;
        }

        .ts-box:hover {
          border-color: rgba(0, 240, 255, 0.22);
          background: rgba(0, 240, 255, 0.04);
          transform: translateY(-4px);
        }
        .ts-box:hover::before { transform: scaleX(1); }

        .ts-profile-header {
          display: flex; align-items: center; gap: 16px; margin-bottom: 20px;
        }

        .ts-avatar-frame {
          width: 56px; height: 56px; border-radius: 50%; overflow: hidden;
          border: 1.5px solid rgba(0,240,255,0.3); flex-shrink: 0;
        }
        .ts-avatar-frame img {
          width: 100%; height: 100%; object-fit: cover;
        }

        .ts-client-name {
          font-family: 'Montserrat', sans-serif; font-size: 1.05rem; font-weight: 700;
          color: #fff; margin-bottom: 2px;
        }
        .ts-client-meta {
          font-size: 0.78rem; color: rgba(255,255,255,0.4); margin: 0; line-height: 1.3;
        }
        .ts-client-meta span { color: #7b2fff; font-weight: 600; }

        .ts-quote-text {
          font-size: 0.92rem; color: rgba(255, 255, 255, 0.65);
          line-height: 1.75; margin: 0 0 24px 0; font-style: italic;
          position: relative; z-index: 2;
        }

        .ts-mini-badge {
          display: inline-block; font-family: 'Poppins', sans-serif; font-size: 0.58rem;
          color: #00f0ff; background: rgba(0,240,255,0.06);
          border: 1px solid rgba(0,240,255,0.18);
          padding: 3px 10px; border-radius: 4px; text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .ts-vector-icon {
          position: absolute; bottom: 20px; right: 24px;
          font-size: 3rem; color: rgba(0, 240, 255, 0.03);
          pointer-events: none; font-family: 'Montserrat', sans-serif; font-weight: 800;
          line-height: 1; user-select: none;
        }

        /* ── SLICK CAROUSEL DOT OVERRIDES ── */
        .ts-inner .slick-dots { bottom: -44px; }
        .ts-inner .slick-dots li button:before {
          color: rgba(0, 240, 255, 0.25) !important; font-size: 8px !important;
          transition: color 0.3s;
        }
        .ts-inner .slick-dots li.slick-active button:before {
          color: #00f0ff !important; font-size: 10px !important;
        }

        /* ── Responsive Viewports ── */
        @media (max-width: 768px) {
          #ts-section { padding: 60px 24px; }
          .ts-box { padding: 24px; }
          .ts-quote-text { font-size: 0.88rem; margin-bottom: 20px; }
        }
      `}</style>

            <section id="ts-section">
                <div className="ts-inner">

                    {/* Centered Typography Heading Container */}
                    <div style={{ textAlign: "center" }}>
                        <div className="ts-tag">Testimonials</div>
                        <h2 className="ts-h2">
                            Hear It From Our <em>Enterprise Clients</em>
                        </h2>
                    </div>

                    {/* Slick Slider Integration */}
                    <div style={{ position: "relative" }}>
                        <Slider {...sliderSettings}>
                            {TESTIMONIALS_DATA.map((item) => (
                                <div className="ts-carousel-wrapper" key={item.id}>
                                    <div className="ts-box">
                                        <span className="ts-vector-icon">“</span>

                                        {/* User Metadata Identification Block */}
                                        <div className="ts-profile-header">
                                            <div className="ts-avatar-frame">
                                                <img src={item.avatar} alt={item.name} />
                                            </div>
                                            <div>
                                                <div className="ts-client-name">{item.name}</div>
                                                <p className="ts-client-meta">
                                                    {item.role} at <span>{item.company}</span>
                                                </p>
                                            </div>
                                        </div>

                                        {/* Feedback Block Statement */}
                                        <p className="ts-quote-text">
                                            "{item.feedback}"
                                        </p>

                                        {/* Applied Service Identifier Tag */}
                                        <span className="ts-mini-badge">
                                            LOG_//_{item.tag}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Testimonial;