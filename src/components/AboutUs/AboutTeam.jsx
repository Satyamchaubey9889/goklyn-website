import React from "react";

const TeamHighlights = [
  {
    icon: "fa-solid fa-rocket",
    tag: "Culture",
    title: "Student-Led Innovation",
    description:
      "Our team members actively contribute to cutting-edge projects, gaining practical knowledge and leadership skills in the ever-evolving tech landscape.",
  },
  {
    icon: "fa-solid fa-handshake",
    tag: "Growth",
    title: "Mentorship-Driven Approach",
    description:
      "Students work under the guidance of skilled professionals who provide personalized mentorship and support, shaping their careers with real-world experience.",
  },
  {
    icon: "fa-solid fa-layer-group",
    tag: "Capabilities",
    title: "Diverse Skill Sets",
    description:
      "From AI to Cybersecurity, our team members bring expertise in various domains, enabling us to deliver comprehensive and innovative solutions tailored for the future.",
  },
];

const AboutTeam = () => {
  return (
    <>
      <style>{`
        #ab-team-section {
          padding: 90px 6%;
          background: rgba(8, 13, 28, 0.6);
          border-top: 1px solid rgba(0, 240, 255, 0.08);
          border-bottom: 1px solid rgba(0, 240, 255, 0.08);
          position: relative;
          z-index: 1;
        }
        
        .ab-team-inner { 
          max-width: 1280px; 
          margin: 0 auto; 
        }

        .ab-team-tag {
          display: inline-flex; 
          align-items: center; 
          gap: 7px;
          font-family: 'Poppins', sans-serif; 
          font-size: .66rem;
          letter-spacing: .14em; 
          text-transform: uppercase; 
          color: #00f0ff;
          margin-bottom: 14px;
        }
        .ab-team-tag::before { 
          content:''; 
          width:14px; 
          height:1px; 
          background:#00f0ff; 
          flex-shrink:0; 
        }

        .ab-team-h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.7rem, 3.5vw, 2.7rem);
          font-weight: 800; 
          color: #fff; 
          line-height: 1.1; 
          margin-bottom: 14px;
        }
        .ab-team-h2 em {
          font-style: normal;
          background: linear-gradient(90deg, #00f0ff, #7b2fff);
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text;
        }

        .ab-team-sub {
          font-size: .97rem; 
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.82; 
          max-width: 560px;
          margin: 0 auto 52px;
        }

        /* ── TEAM GRID ── */
        .ab-team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .ab-team-card {
          background: rgba(255, 255, 255, 0.028);
          border: 1px solid rgba(0, 240, 255, 0.1);
          border-radius: 18px;
          padding: 38px 32px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: border-color .3s, transform .3s, background .3s;
        }

        .ab-team-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00f0ff, transparent);
          transform: scaleX(0);
          transition: transform .35s;
        }

        .ab-team-card:hover {
          border-color: rgba(0, 240, 255, 0.22);
          background: rgba(0, 240, 255, 0.04);
          transform: translateY(-5px);
        }

        .ab-team-card:hover::before {
          transform: scaleX(1);
        }

        .ab-team-icon {
          font-size: 1.8rem;
          margin-bottom: 16px;
          display: block;
          color: #00f0ff;
        }

        .ab-team-card-tag {
          font-family: 'Poppins', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #7b2fff;
          margin-bottom: 8px;
          display: block;
        }

        .ab-team-card h4 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }

        .ab-team-card p {
          font-size: .88rem;
          color: rgba(255, 255, 255, 0.44);
          line-height: 1.75;
          margin: 0;
        }

        /* ── FOOTER STATEMENT ── */
        .ab-team-footer {
          margin-top: 56px;
          text-align: center;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .ab-team-footer span {
          background: linear-gradient(90deg, #00f0ff, #7b2fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          font-family: 'Montserrat', sans-serif;
        }

        /* ── Responsive Viewports ── */
        @media (max-width: 991px) {
          .ab-team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          #ab-team-section {
            padding: 60px 24px;
          }
        }

        @media (max-width: 600px) {
          .ab-team-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .ab-team-card {
            padding: 28px 20px;
          }
          .ab-team-sub {
            margin-bottom: 36px;
          }
        }
      `}</style>

      <section id="ab-team-section">
        <div className="ab-team-inner">

          {/* Header Block */}
          <div style={{ textAlign: "center" }}>
            <div className="ab-team-tag" style={{ justifyContent: "center" }}>
              Our Ecosystem
            </div>
            <h2 className="ab-team-h2">
              What Sets Our <em>Team Apart?</em>
            </h2>
            <p className="ab-team-sub">
              Empowering next-generation engineers by cultivating an experimental,
              high-performance framework built to redefine modern standards.
            </p>
          </div>

          {/* Highlights Grid Map */}
          <div className="ab-team-grid">
            {TeamHighlights.map((item, index) => (
              <div className="ab-team-card" key={index}>
                <span className="ab-team-icon"><i className={item.icon}></i></span>
                <span className="ab-team-card-tag">{item.tag}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          {/* Core Belief Statement Footer */}
          <div className="ab-team-footer">
            <p style={{ margin: 0, fontWeight: 600 }}>
              At <span>GOKLYN</span>, we believe in the power of teamwork and the
              potential of young minds to drive technological progress.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutTeam;