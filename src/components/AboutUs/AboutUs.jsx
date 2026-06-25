import React from 'react'
import { Link } from 'react-router-dom'

const founders = [
  {
    name: "Mohit Sharma",
    role: "Director",
    initials: "MS",
    img: "/assets/newImages/Mohit_sharma.jpeg",
    bio: "Leads Goklyn with a mission to revolutionize technology in the medical field, blending medical expertise with cutting-edge technical advancements.",
    tags: ["Leadership", "MedTech", "Innovation"],
  },
  {
    name: "Monika Sharma",
    role: "Director & Founder",
    initials: "MS",
    img: "/assets/newImages/Monika_sharma.jpeg",
    bio: "A tech entrepreneur with a deep passion for cybersecurity and innovation. Leads Goklyn's vision of making cutting-edge security accessible to every organisation, bridging the gap between advanced technology and real-world business needs.",
    tags: ["Quantum Computing", "Cybersecurity", "Cryptography"],
  },
]


const TIMELINE = [
  { year: "2025", title: "Founded", desc: "Goklyn established with a mission to bridge academia and industry through quantum and cybersecurity research." }]

const AboutUs = () => {
  return (
    <>
      <style>{`
        #about-page {
          background: #04060f;
          min-height: 100vh;
          overflow-x: hidden;
          font-family: 'Poppins', sans-serif;
        }

        /* ── shared ── */
        .ab-inner { max-width: 1280px; margin: 0 auto; }
        .ab-tag {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Poppins', sans-serif; font-size: .66rem;
          letter-spacing: .14em; text-transform: uppercase; color: #00f0ff;
          margin-bottom: 14px;
        }
        .ab-tag::before { content:''; width:14px; height:1px; background:#00f0ff; flex-shrink:0; }
        .ab-h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.7rem, 3.5vw, 2.7rem);
          font-weight: 800; color: #fff; line-height: 1.1; margin-bottom: 14px;
        }
        .ab-h2 em {
          font-style: normal;
          background: linear-gradient(90deg,#00f0ff,#7b2fff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ab-sub {
          font-size: .97rem; color: rgba(255,255,255,0.45);
          line-height: 1.82; max-width: 560px;
        }

        /* ── HERO ── */
        #ab-hero {
          padding: 140px 6% 90px;
          position: relative; z-index: 1;
          border-bottom: 1px solid rgba(0,240,255,0.08);
        }
        #ab-hero::before {
          content:''; position:absolute; inset:0; pointer-events:none;
          background:
            radial-gradient(ellipse at 80% 20%, rgba(123,47,255,0.08) 0%, transparent 55%),
            radial-gradient(ellipse at 10% 80%, rgba(0,240,255,0.06) 0%, transparent 50%);
        }
        .ab-hero-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: center; position: relative; z-index: 1;
        }
        .ab-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 14px; font-family: 'Poppins', sans-serif;
          font-size: .68rem; letter-spacing: .1em; text-transform: uppercase;
          color: #00ff88; background: rgba(0,255,136,0.07);
          border: 1px solid rgba(0,255,136,0.2); border-radius: 100px; margin-bottom: 24px;
        }
        .ab-breadcrumb-dot {
          width:6px; height:6px; border-radius:50%; background:#00ff88;
          animation: ab-blink 2s ease-in-out infinite;
        }
        @keyframes ab-blink {
          0%,100%{opacity:1;box-shadow:0 0 6px #00ff88} 50%{opacity:.3;box-shadow:none}
        }
        #ab-hero h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 800; line-height: 1.05; margin-bottom: 20px;
        }
        #ab-hero h1 .white { color: #fff; display: block; }
        #ab-hero h1 .grad {
          display: block;
          background: linear-gradient(100deg,#00f0ff 0%,#7b2fff 55%,#ff2060 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        #ab-hero .hero-desc {
          font-size: 1rem; color: rgba(255,255,255,0.48); line-height: 1.82;
          max-width: 480px; margin-bottom: 36px;
        }
        .ab-btns { display: flex; gap: 14px; flex-wrap: wrap; }
        .ab-btn-p {
          display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:13px 28px;
          font-family:'Montserrat',sans-serif; font-size:.76rem; font-weight:700;
          letter-spacing:.07em; color:#04060f; background:#00f0ff; border-radius:8px;
          text-decoration:none; box-shadow:0 0 24px rgba(0,240,255,0.28);
          transition:box-shadow .25s,transform .2s;
        }
        .ab-btn-p:hover { box-shadow:0 0 48px rgba(0,240,255,0.5); transform:translateY(-2px); }
        .ab-btn-g {
          display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:12px 26px;
          font-family:'Montserrat',sans-serif; font-size:.76rem; font-weight:700;
          letter-spacing:.07em; color:#00f0ff; background:transparent;
          border:1px solid rgba(0,240,255,0.25); border-radius:8px;
          text-decoration:none; transition:background .2s,box-shadow .2s,transform .2s;
        }
        .ab-btn-g:hover { background:rgba(0,240,255,0.07); box-shadow:0 0 24px rgba(0,240,255,0.18); transform:translateY(-2px); }

        /* hero image */
        .ab-hero-img {
          position:relative; border-radius:20px; overflow:hidden;
          border:1px solid rgba(0,240,255,0.18);
          box-shadow:0 0 60px rgba(0,240,255,0.07),0 32px 80px rgba(0,0,0,0.5);
        }
        .ab-hero-img img {
          width:100%; height:440px; object-fit:cover;
          filter:brightness(.82) saturate(1.25); display:block;
        }
        .ab-hero-img::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,rgba(0,240,255,0.09),rgba(123,47,255,0.1));
        }
        .ab-img-badge {
          position:absolute; bottom:20px; left:20px; z-index:2;
          background:rgba(4,6,15,0.9); border:1px solid rgba(0,240,255,0.25);
          border-radius:10px; padding:12px 16px; backdrop-filter:blur(16px);
        }
        .ab-img-badge-val {
          font-family:'Montserrat',sans-serif; font-size:1.5rem; font-weight:800;
          color:#00f0ff; line-height:1; margin-bottom:3px;
        }
        .ab-img-badge-lbl {
          font-family:'Poppins',sans-serif; font-size:.58rem;
          letter-spacing:.07em; text-transform:uppercase; color:rgba(255,255,255,0.45);
        }

        /* ── STATS BAND ── */
        #ab-stats {
          background:rgba(8,13,28,0.8);
          border-top:1px solid rgba(0,240,255,0.08);
          border-bottom:1px solid rgba(0,240,255,0.08);
          position:relative; z-index:1;
        }
        .ab-stats-grid {
          display:grid; grid-template-columns:repeat(4,1fr);
        }
        .ab-stat {
          padding:38px 28px; border-right:1px solid rgba(0,240,255,0.08);
          position:relative; overflow:hidden; transition:background .3s;
        }
        .ab-stat:last-child { border-right:none; }
        .ab-stat:hover { background:rgba(0,240,255,0.03); }
        .ab-stat::before {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,transparent,#00f0ff,transparent);
          transform:scaleX(0); transition:transform .4s;
        }
        .ab-stat:hover::before { transform:scaleX(1); }
        .ab-stat-val {
          font-family:'Montserrat',sans-serif; font-size:2.4rem; font-weight:800;
          color:#00f0ff; line-height:1; margin-bottom:7px;
        }
        .ab-stat-lbl {
          font-family:'Poppins',sans-serif; font-size:.67rem;
          letter-spacing:.07em; text-transform:uppercase; color:rgba(255,255,255,0.42);
        }

        /* ── WHO WE ARE ── */
        #ab-who {
          padding:90px 6%; position:relative; z-index:1;
        }
        .ab-who-grid {
          display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center;
        }
        .ab-who-img {
          position:relative; border-radius:18px; overflow:hidden;
          border:1px solid rgba(123,47,255,0.25);
          box-shadow:0 0 60px rgba(123,47,255,0.1),0 32px 80px rgba(0,0,0,0.5);
        }
        .ab-who-img img {
          width:100%; height:400px; object-fit:cover;
          filter:brightness(.82) saturate(1.3); display:block;
        }
        .ab-who-img-overlay {
          position:absolute; inset:0;
          background:linear-gradient(135deg,rgba(0,240,255,0.06),rgba(123,47,255,0.1));
        }
        .ab-who-badge {
          position:absolute; bottom:-14px; right:-14px;
          background:#080d1c; border:1px solid rgba(123,47,255,0.4);
          border-radius:14px; padding:14px 18px; backdrop-filter:blur(16px);
          box-shadow:0 12px 40px rgba(0,0,0,0.5);
        }
        .ab-list {
          list-style:none; padding:0; margin:20px 0 0; display:flex; flex-direction:column; gap:14px;
        }
        .ab-list li {
          display:flex; align-items:flex-start; gap:14px;
          padding:16px 18px; background:rgba(255,255,255,0.032);
          border:1px solid rgba(0,240,255,0.1); border-radius:12px;
          transition:border-color .3s,background .3s;
        }
        .ab-list li:hover { border-color:rgba(0,240,255,0.22); background:rgba(0,240,255,0.04); }
        .ab-list-icon { font-size:1.2rem; flex-shrink:0; margin-top:1px; color:#00f0ff; }
        .ab-list-title { font-family:'Montserrat',sans-serif; font-size:.85rem; font-weight:700; color:#fff; margin-bottom:3px; }
        .ab-list-sub { font-size:.82rem; color:rgba(255,255,255,0.44); line-height:1.65; }

        /* ── FEATURES GRID ── */
        #ab-features {
          padding:90px 6%;
          background:rgba(8,13,28,0.6);
          border-top:1px solid rgba(0,240,255,0.08);
          border-bottom:1px solid rgba(0,240,255,0.08);
          position:relative; z-index:1;
        }
        .ab-feat-grid {
          display:grid; grid-template-columns:repeat(3,1fr); gap:2px;
          border:1px solid rgba(0,240,255,0.1); border-radius:18px; overflow:hidden;
        }
        .ab-feat {
          padding:34px 28px; background:rgba(255,255,255,0.028);
          border-right:1px solid rgba(0,240,255,0.08);
          border-bottom:1px solid rgba(0,240,255,0.08);
          position:relative; overflow:hidden;
          transition:background .3s,transform .3s;
        }
        .ab-feat:nth-child(3n) { border-right:none; }
        .ab-feat:nth-child(n+4) { border-bottom:none; }
        .ab-feat:hover { background:rgba(0,240,255,0.04); transform:translateY(-4px); }
        .ab-feat::before {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,transparent,#00f0ff,transparent);
          transform:scaleX(0); transition:transform .35s;
        }
        .ab-feat:hover::before { transform:scaleX(1); }
        .ab-feat-icon {
          font-size:1.8rem; margin-bottom:14px; display:block; color:#00f0ff;
        }
        .ab-feat h4 {
          font-family:'Montserrat',sans-serif; font-size:.9rem; font-weight:700;
          color:#fff; margin-bottom:9px;
        }
        .ab-feat p { font-size:.84rem; color:rgba(255,255,255,0.44); line-height:1.75; margin:0; }

        /* ── FOUNDERS ── */
        #ab-founders { padding:90px 6%; position:relative; z-index:1; }
        .ab-founders-grid {
          display:grid; grid-template-columns:repeat(2,1fr);
          gap:24px; max-width:900px; margin:0 auto;
        }
        .ab-founder-card {
          background:rgba(255,255,255,0.032);
          border:1px solid rgba(0,240,255,0.1); border-radius:18px;
          padding:32px 28px; text-align:center;
          transition:border-color .3s,transform .3s,background .3s;
          position:relative; overflow:hidden;
        }
        .ab-founder-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,transparent,#7b2fff,transparent);
          transform:scaleX(0); transition:transform .35s;
        }
        .ab-founder-card:hover {
          border-color:rgba(123,47,255,0.3); background:rgba(123,47,255,0.04);
          transform:translateY(-6px);
        }
        .ab-founder-card:hover::before { transform:scaleX(1); }
        .ab-founder-avatar {
          width:100px; height:100px; border-radius:50%; margin:0 auto 18px;
          object-fit:cover; object-position:center 10%;
          border:2px solid rgba(0,240,255,0.25);
          box-shadow:0 0 24px rgba(0,240,255,0.1);
          display:block;
        }
        .ab-founder-name {
          font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800;
          color:#fff; margin-bottom:4px;
        }
        .ab-founder-role {
          font-family:'Poppins',sans-serif; font-size:.68rem;
          letter-spacing:.07em; text-transform:uppercase; color:#00f0ff;
          margin-bottom:14px;
        }
        .ab-founder-bio {
          font-size:.86rem; color:rgba(255,255,255,0.44);
          line-height:1.75; margin-bottom:16px;
        }
        .ab-founder-tags { display:flex; gap:6px; flex-wrap:wrap; justify-content:center; }
        .ab-ftag {
          font-family:'Poppins',sans-serif; font-size:.6rem;
          letter-spacing:.04em; color:#00f0ff;
          background:rgba(0,240,255,0.07); border:1px solid rgba(0,240,255,0.15);
          border-radius:4px; padding:3px 9px;
        }

        /* ── TIMELINE ── */
        #ab-timeline {
          padding:90px 6%;
          background:rgba(8,13,28,0.7);
          border-top:1px solid rgba(0,240,255,0.08);
          position:relative; z-index:1;
        }
        .ab-timeline {
          position:relative; max-width:780px; margin:0 auto;
          padding-left:32px;
        }
        .ab-timeline::before {
          content:''; position:absolute; left:0; top:0; bottom:0;
          width:1px; background:linear-gradient(180deg,transparent,rgba(0,240,255,0.3),rgba(123,47,255,0.3),transparent);
        }
        .ab-tl-item {
          position:relative; padding:0 0 40px 32px;
        }
        .ab-tl-item:last-child { padding-bottom:0; }
        .ab-tl-dot {
          position:absolute; left:-6px; top:4px;
          width:13px; height:13px; border-radius:50%;
          background:#04060f; border:2px solid #00f0ff;
          box-shadow:0 0 12px rgba(0,240,255,0.4);
        }
        .ab-tl-year {
          font-family:'Poppins',sans-serif; font-size:.68rem;
          letter-spacing:.1em; color:#00f0ff; text-transform:uppercase;
          margin-bottom:5px;
        }
        .ab-tl-title {
          font-family:'Montserrat',sans-serif; font-size:1rem; font-weight:700;
          color:#fff; margin-bottom:6px;
        }
        .ab-tl-desc { font-size:.88rem; color:rgba(255,255,255,0.44); line-height:1.75; }

        /* ── MISSION/VISION ── */
        #ab-mv { padding:90px 6%; position:relative; z-index:1; }
        .ab-mv-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
        .ab-mv-card {
          padding:38px 32px; border-radius:18px;
          border:1px solid rgba(0,240,255,0.1);
          background:rgba(255,255,255,0.028);
          position:relative; overflow:hidden;
          transition:border-color .3s,background .3s;
        }
        .ab-mv-card:hover { border-color:rgba(0,240,255,0.22); background:rgba(0,240,255,0.04); }
        .ab-mv-card .mv-icon {
          width:52px; height:52px; border-radius:12px;
          background:rgba(0,240,255,0.08); border:1px solid rgba(0,240,255,0.18);
          display:flex; align-items:center; justify-content:center;
          font-size:1.4rem; margin-bottom:20px; color:#00f0ff;
        }
        .ab-mv-card h3 {
          font-family:'Montserrat',sans-serif; font-size:1.1rem; font-weight:800;
          color:#fff; margin-bottom:12px;
        }
        .ab-mv-card p { font-size:.92rem; color:rgba(255,255,255,0.46); line-height:1.8; margin:0; }

        /* ── CTA ── */
        #ab-cta {
          padding:90px 6%; text-align:center;
          border-top:1px solid rgba(0,240,255,0.08);
          position:relative; z-index:1;
        }
        #ab-cta::before {
          content:''; position:absolute; inset:0;
          background:radial-gradient(ellipse at 50% 50%, rgba(123,47,255,0.07) 0%, transparent 65%);
          pointer-events:none;
        }
        #ab-cta .inner { max-width:600px; margin:0 auto; position:relative; z-index:1; }
        #ab-cta h2 {
          font-family:'Montserrat',sans-serif; font-size:clamp(1.6rem,3vw,2.4rem);
          font-weight:800; color:#fff; margin-bottom:14px;
        }
        #ab-cta h2 em {
          font-style:normal;
          background:linear-gradient(90deg,#00f0ff,#7b2fff);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        #ab-cta p { font-size:.97rem; color:rgba(255,255,255,0.44); line-height:1.8; margin-bottom:32px; }

        /* ── Responsive & Mobile Breakpoints ── */
        @media (max-width:991px) {
          .ab-hero-grid { grid-template-columns:1fr; gap:40px; }
          .ab-hero-img { display:block; width: 100%; max-width: 550px; margin: 0 auto; }
          .ab-hero-img img { height: auto; aspect-ratio: 16/10; }
          .ab-who-grid { grid-template-columns:1fr; gap:40px; }
          .ab-feat-grid { grid-template-columns:1fr 1fr; }
          .ab-feat:nth-child(3n) { border-right:1px solid rgba(0,240,255,0.08); }
          .ab-feat:nth-child(2n) { border-right:none; }
          .ab-stats-grid { grid-template-columns:1fr 1fr; }
          .ab-mv-grid { grid-template-columns:1fr; }
        }
        
        @media (max-width:768px) {
          section[id^="ab-"], #ab-hero, #ab-timeline, #ab-who, #ab-features, #ab-founders, #ab-mv, #ab-cta { 
            padding: 60px 24px; 
          }
          .ab-timeline { padding-left: 16px; }
          .ab-tl-item { padding-left: 20px; }
          .ab-tl-dot { left: -7px; }
        }

        @media (max-width:600px) {
          #ab-hero { padding-top: 100px; }
          .ab-btns { flex-direction: column; width: 100%; }
          .ab-btn-p, .ab-btn-g { width: 100%; box-sizing: border-box; }
          .ab-stats-grid { grid-template-columns: 1fr 1fr; }
          .ab-stat { padding: 24px 16px; text-align: center; }
          .ab-stat-val { font-size: 1.8rem; }
          .ab-who-img img { height: auto; aspect-ratio: 16/10; }
          .ab-who-badge { bottom: 10px; right: 10px; padding: 10px 14px; }
          .ab-feat-grid { grid-template-columns:1fr; }
          .ab-feat { border-right:none !important; border-bottom:1px solid rgba(0,240,255,0.08) !important; }
          .ab-feat:last-child { border-bottom: none !important; }
          .ab-founders-grid { grid-template-columns:1fr; gap: 16px; }
          .ab-founder-card { padding: 24px 16px; }
          .ab-mv-card { padding: 28px 20px; }
        }
      `}</style>

      <div id="about-page">

        {/* ── HERO ── */}
        <section id="ab-hero">
          <div className="ab-inner">
            <div className="ab-hero-grid">
              <div>
                <div className="ab-breadcrumb">
                  <span className="ab-breadcrumb-dot" />
                  Home &nbsp;›&nbsp; About Us
                </div>
                <h1>
                  <span className="white">About</span>
                  <span className="grad">Goklyn</span>
                </h1>
                <p className="hero-desc">
                  We're building a platform where education meets quantum technology
                  and where innovation drives progress. Bridging academia and industry
                  through cutting-edge cybersecurity and quantum computing.
                </p>
                <div className="ab-btns">
                  <Link to="/services" className="ab-btn-p">
                    <i className="fa-solid fa-shield-halved" />
                    Our Services
                  </Link>
                  <Link to="/contact-us" className="ab-btn-g">
                    <i className="fa-solid fa-envelope" />
                    Get In Touch
                  </Link>
                </div>
              </div>
              <div className="ab-hero-img">
                <img src="/assets/newImages/about-us.jpg" alt="About Goklyn" />
              </div>
            </div>
          </div>
        </section>


        {/* ── WHO WE ARE ── */}
        <section id="ab-who">
          <div className="ab-inner">
            <div className="ab-who-grid">
              <div className="ab-who-img">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" alt="Quantum technology" />
                <div className="ab-who-img-overlay" />
                <div className="ab-who-badge">
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "#7b2fff", lineHeight: 1, marginBottom: 3 }}>256</div>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: ".6rem", color: "rgba(255,255,255,0.44)", letterSpacing: ".07em", textTransform: "uppercase" }}>Logical Qubits</div>
                </div>
              </div>
              <div>
                <div className="ab-tag">Why Choose Us</div>
                <h2 className="ab-h2">
                  Goklyn <em>Private Limited</em>
                </h2>
                <p className="ab-sub">
                  At GOKLYN, we are committed to creating an inclusive
                  and innovative ecosystem that fosters learning, collaboration, and
                  technological advancement — empowering students from tier-3 and
                  tier-4 colleges to become industry-ready.
                </p>
                <ul className="ab-list">
                  {[
                    { icon: "fa-solid fa-atom", title: "Quantum-First Approach", sub: "Every solution built on post-quantum cryptographic primitives for future-proof security." },
                    { icon: "fa-solid fa-graduation-cap", title: "Academia–Industry Bridge", sub: "Real-world project exposure for students through partnerships with startups, enterprises, and government bodies." },
                    { icon: "fa-solid fa-microscope", title: "Research-Driven Innovation", sub: "Continuous R&D in quantum ML, QKD networks, and AI-powered threat intelligence." },
                  ].map((item, i) => (
                    <li key={i}>
                      <span className="ab-list-icon"><i className={item.icon}></i></span>
                      <div>
                        <div className="ab-list-title">{item.title}</div>
                        <div className="ab-list-sub">{item.sub}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION / VISION ── */}
        <section id="ab-mv">
          <div className="ab-inner">
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div className="ab-tag" style={{ justifyContent: "center" }}>Purpose</div>
              <h2 className="ab-h2">Our <em>Mission & Vision</em></h2>
            </div>
            <div className="ab-mv-grid">
              <div className="ab-mv-card">
                <div className="mv-icon"><i className="fa-solid fa-bullseye"></i></div>
                <h3>Our Mission</h3>
                <p>To create an accessible and innovative tech ecosystem where students, startups, and enterprises come together to shape the future of quantum technology and cybersecurity.</p>
              </div>
              <div className="ab-mv-card">
                <div className="mv-icon"><i className="fa-solid fa-eye"></i></div>
                <h3>Our Vision</h3>
                <p>To empower individuals and organizations with quantum-grade skills, tools, and technologies needed to drive success and innovation in the post-quantum digital age.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section id="ab-timeline">
          <div className="ab-inner">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="ab-tag" style={{ justifyContent: "center" }}>Our Journey</div>
              <h2 className="ab-h2">Building the <em>Quantum Future</em></h2>
            </div>
            <div className="ab-timeline">
              {TIMELINE.map((t, i) => (
                <div className="ab-tl-item" key={i}>
                  <div className="ab-tl-dot" />
                  <div className="ab-tl-year">{t.year}</div>
                  <div className="ab-tl-title">{t.title}</div>
                  <div className="ab-tl-desc">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDERS ── */}
        <section id="ab-founders">
          <div className="ab-inner">
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div className="ab-tag" style={{ justifyContent: "center" }}>Leadership</div>
              <h2 className="ab-h2">The Visionaries Behind <em>GOKLYN</em></h2>
              <p className="ab-sub" style={{ margin: "0 auto" }}>
                Tech enthusiasts and industry veterans with a shared vision of bridging academia and industry through quantum innovation and cybersecurity excellence.
              </p>
            </div>
            <div className="ab-founders-grid">
              {founders.map((f, i) => (
                <div className="ab-founder-card" key={i}>
                  <img src={f.img} alt={f.name} className="ab-founder-avatar" />
                  <div className="ab-founder-name">{f.name}</div>
                  <div className="ab-founder-role">{f.role}</div>
                  <p className="ab-founder-bio">{f.bio}</p>
                  <div className="ab-founder-tags">
                    {f.tags.map(tag => <span key={tag} className="ab-ftag">{tag}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="ab-cta">
          <div className="inner">
            <div className="ab-tag" style={{ justifyContent: "center" }}>Get Started</div>
            <h2>Ready to Go <em>Quantum Secure?</em></h2>
            <p>
              Join 140+ organizations and students that trust Goklyn to defend their
              digital future and accelerate their careers with real-world quantum and
              cybersecurity experience.
            </p>
            <div className="ab-btns" style={{ justifyContent: "center" }}>
              <a href="mailto:contact@goklyn.in" className="ab-btn-p">
                <i className="fa-solid fa-envelope" />
                Contact Us
              </a>
              <Link to="/services" className="ab-btn-g">
                <i className="fa-solid fa-arrow-right" />
                View Services
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default AboutUs