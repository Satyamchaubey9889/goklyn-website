import React from 'react'

const ProjectBanner = () => {
  return (
    <>
      <style>{`
        #pj-banner-section {
          padding: 160px 6% 100px;
          background: #04060f;
          position: relative; 
          z-index: 1;
          border-bottom: 1px solid rgba(0,240,255,0.08);
          overflow: hidden;
        }

        #pj-banner-section::before {
          content:''; position:absolute; inset:0; pointer-events:none;
          background:
            radial-gradient(ellipse at 85% 25%, rgba(123,47,255,0.08) 0%, transparent 55%),
            radial-gradient(ellipse at 10% 80%, rgba(0,240,255,0.05) 0%, transparent 50%);
        }

        .pj-inner { max-width: 1280px; margin: 0 auto; }
        
        .pj-hero-grid {
          display: grid; 
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px; 
          align-items: center; 
          position: relative; 
          z-index: 2;
        }

        .pj-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 14px; font-family: 'Poppins', sans-serif;
          font-size: .68rem; letter-spacing: .1em; text-transform: uppercase;
          color: #00f0ff; background: rgba(0,240,255,0.07);
          border: 1px solid rgba(0,240,255,0.2); border-radius: 100px; margin-bottom: 24px;
          cursor: default;
        }
        
        .pj-breadcrumb-dot {
          width:6px; height:6px; border-radius:50%; background:#00f0ff;
          animation: pj-blink 2s ease-in-out infinite;
        }
        .pj-breadcrumb .sub_span {
          color: #7b2fff;
          font-weight: 700;
        }
        .pj-breadcrumb i {
          font-size: 0.6rem;
          color: rgba(255,255,255,0.3);
        }
        @keyframes pj-blink {
          0%,100%{opacity:1;box-shadow:0 0 6px #00f0ff} 50%{opacity:.3;box-shadow:none}
        }

        .pj-hero-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 800; line-height: 1.05; margin-bottom: 20px;
          color: #fff;
          background: linear-gradient(100deg, #00f0ff 0%, #7b2fff 55%, #ff2060 100%);
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text;
        }
        
        .pj-hero-title span {
          display: block;
          background: linear-gradient(100deg, #00f0ff 0%, #7b2fff 55%, #ff2060 100%);
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text;
        }

        .pj-hero-desc {
          font-size: 1rem; 
          color: rgba(255,255,255,0.48); 
          line-height: 1.82;
          max-width: 540px; 
          margin: 0 0 16px 0;
        }

        /* ── INTERACTIVE MASK VIEWPORT ── */
        .pj-image-frame {
          position: relative; 
          border-radius: 24px; 
          overflow: hidden;
          border: 1px solid rgba(0, 240, 255, 0.18);
          box-shadow: 0 0 60px rgba(0, 240, 255, 0.05), 0 32px 80px rgba(0,0,0,0.5);
          width: 100%;
          aspect-ratio: 16/11;
        }
        
        .pj-image-frame img {
          width: 100%; 
          height: 100%; 
          object-fit: cover;
          filter: brightness(0.75) contrast(1.1) saturate(1.1); 
          display: block;
        }
        
        .pj-image-frame::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,240,255,0.06), rgba(123,47,255,0.08));
        }

        .pj-img-indicator {
          position: absolute; bottom: 20px; left: 20px; z-index: 2;
          background: rgba(4,6,15,0.9); border: 1px solid rgba(0,240,255,0.25);
          border-radius: 10px; padding: 10px 16px; backdrop-filter: blur(16px);
          font-family: 'Poppins', sans-serif; font-size: 0.58rem;
          color: #00f0ff; letter-spacing: 0.1em;
        }

        /* ── Responsive Architecture Viewports ── */
        @media (max-width: 991px) {
          .pj-hero-grid { 
            grid-template-columns: 1fr; 
            gap: 48px; 
          }
          #pj-banner-section { padding-top: 120px; padding-bottom: 70px; }
          .pj-image-frame { max-width: 550px; margin: 0 auto; aspect-ratio: 16/10; }
        }

        @media (max-width: 768px) {
          #pj-banner-section { padding: 110px 24px 60px; }
        }
      `}</style>

      <section id="pj-banner-section">
        <div className="pj-inner">
          <div className="pj-hero-grid">

            {/* Core Content Layout Block */}
            <div>
              <div className="pj-breadcrumb">
                <span className="pj-breadcrumb-dot" />
                Home &nbsp;<i className="fa-solid fa-angles-right"></i>&nbsp; <span className="sub_span">Projects</span>
              </div>

              <h1 className="pj-hero-title">
                Projects
              </h1>

              <p className="pj-hero-desc">
                Discover our latest projects and see how we can help you achieve your goals.
              </p>

              <p className="pj-hero-desc" style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.95rem" }}>
                "Our projects focus on building scalable, efficient, and secure solutions across various domains, including web development, cybersecurity, networking, and quantum computing. We leverage modern technologies and best practices to create high-performance applications with seamless user experiences.
              </p>
            </div>

            {/* Graphic Framework Layout Block */}
            <div>
              <div className="pj-image-frame">
                <img src="/assets/newImages/projects.jpg" alt="Goklyn Cryptographic Development Blueprints" />

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectBanner;