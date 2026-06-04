import React from 'react'

const ContactUs = () => {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400;700&display=swap');

        #ct-page {
          background: #04060f;
          min-height: 100vh;
          overflow-x: hidden;
          font-family: 'Inter', sans-serif;
        }

        /* ── shared structural parameters ── */
        .ct-inner { max-width: 1280px; margin: 0 auto; }
        .ct-tag {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Space Mono', monospace; font-size: .66rem;
          letter-spacing: .14em; text-transform: uppercase; color: #00f0ff;
          margin-bottom: 14px;
        }
        .ct-tag::before { content:''; width:14px; height:1px; background:#00f0ff; flex-shrink:0; }

        .ct-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.7rem, 3.5vw, 2.7rem);
          font-weight: 800; color: #fff; line-height: 1.1; margin-bottom: 32px;
        }

        /* ── BANNER HERO LAYER ── */
        #ct-hero {
          padding: 160px 6% 100px;
          position: relative; z-index: 1;
          border-bottom: 1px solid rgba(0,240,255,0.08);
        }
        #ct-hero::before {
          content:''; position:absolute; inset:0; pointer-events:none;
          background:
            radial-gradient(ellipse at 85% 25%, rgba(123,47,255,0.08) 0%, transparent 55%),
            radial-gradient(ellipse at 10% 80%, rgba(0,240,255,0.05) 0%, transparent 50%);
        }
        .ct-hero-grid {
          display: grid; grid-template-columns: 1.1fr 0.9fr;
          gap: 64px; align-items: center; position: relative; z-index: 2;
        }
        .ct-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 14px; font-family: 'Space Mono', monospace;
          font-size: .68rem; letter-spacing: .1em; text-transform: uppercase;
          color: #00f0ff; background: rgba(0,240,255,0.07);
          border: 1px solid rgba(0,240,255,0.2); border-radius: 100px; margin-bottom: 24px;
        }
        .ct-breadcrumb-dot {
          width:6px; height:6px; border-radius:50%; background:#00f0ff;
          animation: ct-blink 2s ease-in-out infinite;
        }
        .ct-breadcrumb .sub_span { color: #7b2fff; font-weight: 700; }
        .ct-breadcrumb i { font-size: 0.6rem; color: rgba(255,255,255,0.3); }
        @keyframes ct-blink {
          0%,100%{opacity:1;box-shadow:0 0 6px #00f0ff} 50%{opacity:.3;box-shadow:none}
        }
        .ct-hero-title {
          font-family: 'Syne', sans-serif; font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 800; line-height: 1.05; margin-bottom: 20px; color: hsl(0, 0%, 100%);
          display: block;
          background: linear-gradient(100deg, #00f0ff 0%, #7b2fff 55%, #ff2060 100%);
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text;
        }
        .ct-hero-desc {
          font-size: 1rem; color: white; line-height: 1.82; max-width: 540px;
        }

        .ct-image-frame {
          position: relative; border-radius: 24px; overflow: hidden;
          border: 1px solid rgba(0, 240, 255, 0.18);
          box-shadow: 0 0 60px rgba(0, 240, 255, 0.05), 0 32px 80px rgba(0,0,0,0.5);
          width: 100%; aspect-ratio: 16/11;
        }
        .ct-image-frame img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.75) contrast(1.1) saturate(1.1); display: block;
        }

        /* ── COMMUNICATIONS MODULE MAIN BLOCK ── */
        #ct-communications {
          padding: 90px 6%; position: relative; z-index: 1;
        }
        .ct-comms-grid {
          display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 64px;
        }

        .ct-info-stack { display: flex; flex-direction: column; gap: 20px; }
        
        .ct-info-box {
          background: rgba(255, 255, 255, 0.018);
          border: 1px solid rgba(0, 240, 255, 0.08);
          border-radius: 16px; padding: 24px;
          display: flex; align-items: center; gap: 20px;
          position: relative; overflow: hidden; backdrop-filter: blur(8px);
          transition: border-color .3s, transform .3s, background .3s;
        }
        .ct-info-box::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #00f0ff, transparent);
          transform: scaleX(0); transition: transform .35s;
        }
        .ct-info-box:hover {
          border-color: rgba(0, 240, 255, 0.22); background: rgba(0, 240, 255, 0.03);
          transform: translateX(6px);
        }
        .ct-info-box:hover::before { transform: scaleX(1); }

        .ct-info-icon-frame {
          width: 46px; height: 46px; border-radius: 10px;
          background: rgba(0,240,255,0.06); border: 1px solid rgba(0,240,255,0.18);
          display: flex; align-items: center; justify-content: center;
          color: #00f0ff; font-size: 1.1rem; flex-shrink: 0;
        }
        .ct-info-box h5 {
          font-family: 'Space Mono', monospace; font-size: 0.65rem;
          color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 0.05em;
          margin: 0 0 4px 0;
        }
        .ct-info-box p { font-size: 1rem; color: #fff; margin: 0; font-weight: 600; }
        .ct-info-box p a { color: #fff; text-decoration: none; transition: color 0.2s; }
        .ct-info-box p a:hover { color: #00f0ff; }

        /* ── SECURE DISPATCH TRANSACTIONAL FORM ── */
        .ct-form-panel {
          background: rgba(255, 255, 255, 0.012);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 24px; padding: 40px;
          backdrop-filter: blur(10px); position: relative;
        }
        .ct-form-panel::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #7b2fff, transparent);
        }
        .ct-form-panel h4 {
          font-family: 'Syne', sans-serif; font-size: 1.35rem; font-weight: 800;
          color: #fff; margin-bottom: 28px;
        }

        .ct-form-row {
          display: grid; grid-template-columns: 1fr; gap: 20px; margin-bottom: 24px;
        }

        .ct-input-field {
          width: 100%; box-sizing: border-box; background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.08); border-radius: 10px;
          padding: 14px 18px; color: #fff; font-size: 0.92rem;
          transition: border-color 0.25s, background-color 0.25s, box-shadow 0.25s;
        }
        .ct-input-field:focus {
          outline: none; border-color: rgba(0, 240, 255, 0.5);
          background: rgba(0, 240, 255, 0.01);
          box-shadow: 0 0 16px rgba(0,240,255,0.08);
        }
        .ct-input-field::placeholder { color: rgba(255,255,255,0.25); }

        textarea.ct-input-field { resize: none; }

        .ct-submit-btn {
          display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px;
          font-family: 'Syne', sans-serif; font-size: .78rem; font-weight: 700;
          letter-spacing: .07em; color: #04060f; background: #00f0ff; border-radius: 8px;
          border: none; cursor: pointer; text-transform: uppercase;
          box-shadow: 0 0 24px rgba(0,240,255,0.22);
          transition: box-shadow .25s, transform .2s, background-color .2s;
        }
        .ct-submit-btn:hover {
          box-shadow: 0 0 48px rgba(0,240,255,0.45); transform: translateY(-2px);
          background: #e0ffff;
        }
        .ct-submit-btn i { font-size: 0.65rem; transition: transform 0.2s; }
        .ct-submit-btn:hover i { transform: translateX(3px); }

        /* ── Responsive Viewports ── */
        @media (max-width: 991px) {
          .ct-hero-grid { grid-template-columns: 1fr; gap: 48px; }
          #ct-hero { padding-top: 120px; padding-bottom: 70px; }
          .ct-image-frame { max-width: 550px; margin: 0 auto; aspect-ratio: 16/10; }
          .ct-comms-grid { grid-template-columns: 1fr; gap: 48px; }
          .ct-form-panel { padding: 32px 24px; }
        }

        @media (max-width: 768px) {
          section[id^="ct-"], #ct-hero, #ct-communications { padding: 60px 24px; }
        }
      `}</style>

            <div id="ct-page">

                {/* ── BANNER HERO LAYER ── */}
                <section id="ct-hero">
                    <div className="ct-inner">
                        <div className="ct-hero-grid">
                            <div>
                                <div className="ct-breadcrumb">
                                    <span className="ct-breadcrumb-dot" />
                                    Home &nbsp;<i className="fa-solid fa-angles-right"></i>&nbsp; <span className="sub_span">Contact</span>
                                </div>
                                <h1 className="ct-hero-title">Contact Us</h1>
                                <p className="ct-hero-desc">
                                    Have questions? Interested in joining our programs or collaborating on a project? We’d love to hear from you!
                                </p>
                            </div>
                            <div>
                                <div className="ct-image-frame">
                                    <img src="/assets/newImages/contact.jpeg" alt="Goklyn Communications Terminal Infrastructure" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── COMMUNICATIONS MODULE MAIN BLOCK ── */}
                <section id="ct-communications">
                    <div className="ct-inner">
                        <div className="ct-comms-grid">

                            {/* Telemetry Information Cards Stack */}
                            <div>
                                <div className="ct-tag">Secure Nodes</div>
                                <h2 className="ct-h2">Contact Info</h2>

                                <div className="ct-info-stack">
                                    <div className="ct-info-box">
                                        <div className="ct-info-icon-frame">
                                            <i className="fa-solid fa-location-dot" />
                                        </div>
                                        <div>
                                            <h5>Location:</h5>
                                            <p>Jaipur</p>
                                        </div>
                                    </div>

                                    <div className="ct-info-box">
                                        <div className="ct-info-icon-frame">
                                            <i className="fa-solid fa-envelope" />
                                        </div>
                                        <div>
                                            <h5>Email Us:</h5>
                                            <p><a href="mailto:hr@goklyn.in">hr@goklyn.in</a></p>
                                        </div>
                                    </div>

                                    <div className="ct-info-box">
                                        <div className="ct-info-icon-frame">
                                            <i className="fa-solid fa-phone" />
                                        </div>
                                        <div>
                                            <h5>Phone:</h5>
                                            <p><a href="tel:+919024466472">+91 9024466472</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Secure Messaging Dispatch Panel */}
                            <div>
                                <div className="ct-form-panel">
                                    <h4>Send us a Message</h4>
                                    <form method="POST" action="#" onSubmit={(e) => e.preventDefault()}>
                                        <div className="ct-form-row">
                                            <input type="text" name="fullname" id="name" className="ct-input-field" placeholder="Name:" required />
                                            <input type="tel" name="phone" id="phonenum" className="ct-input-field" placeholder="Phone:" />
                                            <input type="email" name="emailaddress" id="emailaddrs" className="ct-input-field" placeholder="Email:" required />
                                            <textarea rows="4" name="msg" id="comment" className="ct-input-field" placeholder="Message:" required></textarea>
                                        </div>

                                        <button type="submit" name="get_started" id="started" className="ct-submit-btn">
                                            Submit Now <i className="fa-solid fa-angle-right" />
                                        </button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default ContactUs