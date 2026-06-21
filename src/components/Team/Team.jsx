import React from 'react';

const Team = () => {
  const team = [
    {
      id: 1,
      name: "Harsh Saini",
      role: "Team Member",
      img: "/assets/newImages/harsh_saini_3.jpg",
      linkedin: "https://www.linkedin.com/in/harsh-saini-26957424a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 2,
      name: "Akarsh Chaturvedi",
      role: "Team Member",
      img: "/assets/newImages/Akash_chaturvedi.jpeg",
      linkedin: "https://www.linkedin.com/in/akarsh-chaturvedi-259271236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 3,
      name: "Ravindra Yadav",
      role: "Team Member",
      img: "/assets/newImages/Ravindra_yadav_2.jpg",
      linkedin: "https://www.linkedin.com/in/ravindra-yadav04"
    },
    {
      id: 4,
      name: "Pranjali Khandelwal",
      role: "Team Member",
      img: "/assets/newImages/prachi_khandelwal_1.png",
      linkedin: "https://www.linkedin.com/in/pranjali-khandelwal-0b4041272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 5,
      name: "Sonam Sharma",
      role: "Team Member",
      img: "/assets/newImages/sonam_sharma_1.jpeg",
      linkedin: 'https://www.linkedin.com/in/sonam-sharma-52847b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
  ];

  return (
    <>
      <style>{`
        #team-page {
          background: #04060f;
          min-height: 100vh;
          overflow-x: hidden;
          font-family: 'Poppins', sans-serif;
        }

        /* ── shared structural parameters ── */
        .tm-inner { max-width: 1280px; margin: 0 auto; }
        .tm-tag {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Poppins', sans-serif; font-size: .66rem;
          letter-spacing: .14em; text-transform: uppercase; color: #00f0ff;
          margin-bottom: 14px;
        }
        .tm-tag::before { content:''; width:14px; height:1px; background:#00f0ff; flex-shrink:0; }
        
        .tm-h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.7rem, 3.5vw, 2.7rem);
          font-weight: 800; color: #fff; line-height: 1.1; margin-bottom: 14px;
        }
        .tm-h2 em {
          font-style: normal;
          background: linear-gradient(90deg, #00f0ff, #7b2fff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .tm-sub {
          font-size: .97rem; color: rgba(255,255,255,0.45);
          line-height: 1.82; max-width: 560px;
        }

        /* ── BANNER / HERO SECTION ── */
        #tm-hero {
          padding: 140px 6% 90px;
          position: relative; z-index: 1;
          border-bottom: 1px solid rgba(0,240,255,0.08);
        }
        #tm-hero::before {
          content:''; position:absolute; inset:0; pointer-events:none;
          background:
            radial-gradient(ellipse at 80% 20%, rgba(123,47,255,0.08) 0%, transparent 55%),
            radial-gradient(ellipse at 10% 80%, rgba(0,240,255,0.06) 0%, transparent 50%);
        }
        .tm-hero-grid {
          display: grid; grid-template-columns: 1.1fr 0.9fr;
          gap: 64px; align-items: center; position: relative; z-index: 1;
        }
        .tm-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 14px; font-family: 'Poppins', sans-serif;
          font-size: .68rem; letter-spacing: .1em; text-transform: uppercase;
          color: #00ff88; background: rgba(0,255,136,0.07);
          border: 1px solid rgba(0,255,136,0.2); border-radius: 100px; margin-bottom: 24px;
        }
        .tm-breadcrumb-dot {
          width:6px; height:6px; border-radius:50%; background:#00ff88;
          animation: tm-blink 2s ease-in-out infinite;
        }
        @keyframes tm-blink {
          0%,100%{opacity:1;box-shadow:0 0 6px #00ff88} 50%{opacity:.3;box-shadow:none}
        }
        #tm-hero h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 800; line-height: 1.05; margin-bottom: 20px;
          color: #fff;
        }
        #tm-hero h1 span {
          display: block;
          background: linear-gradient(100deg,#00f0ff 0%,#7b2fff 55%,#ff2060 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        #tm-hero .hero-desc {
          font-size: 1rem; color: rgba(255,255,255,0.48); line-height: 1.82;
          max-width: 520px; margin: 0;
        }

        .tm-hero-img {
          position:relative; border-radius:20px; overflow:hidden;
          border:1px solid rgba(0,240,255,0.18);
          box-shadow:0 0 60px rgba(0,240,255,0.07),0 32px 80px rgba(0,0,0,0.5);
        }
        .tm-hero-img img {
          width:100%; height:380px; object-fit:cover;
          filter:brightness(.82) saturate(1.25); display:block;
        }
        .tm-hero-img::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,rgba(0,240,255,0.09),rgba(123,47,255,0.1));
        }

        /* ── TEAM GRID SECTION ── */
        #tm-members-section {
          padding: 90px 6%;
          position: relative; z-index: 1;
        }
        .tm-members-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .tm-member-card {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(0, 240, 255, 0.08);
          border-radius: 20px;
          padding: 28px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: border-color .3s, transform .3s, background .3s;
        }
        .tm-member-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #00f0ff, transparent);
          transform: scaleX(0); transition: transform .35s;
        }
        .tm-member-card:hover {
          border-color: rgba(0, 240, 255, 0.22);
          background: rgba(0, 240, 255, 0.04);
          transform: translateY(-6px);
        }
        .tm-member-card:hover::before { transform: scaleX(1); }

        .tm-avatar-wrapper {
          width: 130px; height: 130px; margin: 0 auto 20px;
          position: relative; border-radius: 50%;
          padding: 2px; background: linear-gradient(135deg, rgba(0,240,255,0.3), rgba(123,47,255,0.3));
        }
        .tm-member-avatar {
          width: 100%; height: 100%; border-radius: 50%;
          object-fit: cover; display: block;
          filter: brightness(0.9) saturate(1.1);
        }

        .tm-member-name {
          font-family: 'Montserrat', sans-serif; font-size: 1.15rem; font-weight: 800;
          color: #fff; margin-bottom: 4px;
        }
        .tm-member-role {
          font-family: 'Poppins', sans-serif; font-size: .68rem;
          letter-spacing: .07em; text-transform: uppercase; color: #00f0ff;
          margin-bottom: 20px;
        }

        .tm-social-link {
          display: inline-flex; align-items: center; justify-content: center;
          width: 38px; height: 38px; border-radius: 50%;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(0,240,255,0.15);
          color: #00f0ff; text-decoration: none;
          transition: background .2s, color .2s, border-color .2s, box-shadow .2s;
        }
        .tm-social-link:hover {
          background: #00f0ff; color: #04060f;
          border-color: #00f0ff; box-shadow: 0 0 16px rgba(0,240,255,0.4);
        }

        /* ── SPECIFICATION / ADVANTAGE SECTION ── */
        #tm-apart-section {
          padding: 90px 6%;
          background: rgba(8, 13, 28, 0.6);
          border-top: 1px solid rgba(0, 240, 255, 0.08);
          border-bottom: 1px solid rgba(0, 240, 255, 0.08);
          position: relative; z-index: 1;
        }
        .tm-apart-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        .tm-apart-card {
          background: rgba(255, 255, 255, 0.028);
          border: 1px solid rgba(0, 240, 255, 0.1);
          border-radius: 18px; padding: 38px 32px;
          position: relative; overflow: hidden; backdrop-filter: blur(10px);
          transition: border-color .3s, transform .3s, background .3s;
        }
        .tm-apart-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #7b2fff, transparent);
          transform: scaleX(0); transition: transform .35s;
        }
        .tm-apart-card:hover {
          border-color: rgba(123, 47, 255, 0.3);
          background: rgba(123, 47, 255, 0.04);
          transform: translateY(-5px);
        }
        .tm-apart-card:hover::before { transform: scaleX(1); }

        .tm-apart-icon { font-size: 1.8rem; margin-bottom: 16px; display: block; color: #00f0ff; }
        .tm-apart-card h4 {
          font-family: 'Montserrat', sans-serif; font-size: 1.1rem; font-weight: 700;
          color: #fff; margin-bottom: 12px;
        }
        .tm-apart-card p {
          font-size: .88rem; color: rgba(255, 255, 255, 0.44);
          line-height: 1.75; margin: 0;
        }

        .tm-apart-footer {
          margin-top: 56px; text-align: center; font-size: 1rem; color: rgba(255, 255, 255, 0.7);
        }
        .tm-apart-footer span {
          background: linear-gradient(90deg, #00f0ff, #7b2fff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          font-weight: 800; font-family: 'Montserrat', sans-serif;
        }

        /* ── Responsive & Device Adaptations ── */
        @media (max-width: 1024px) {
          .tm-members-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .tm-apart-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 991px) {
          .tm-hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .tm-hero-img { display: block; width: 100%; max-width: 550px; margin: 0 auto; }
          .tm-hero-img img { height: auto; aspect-ratio: 16/10; }
        }

        @media (max-width: 768px) {
          section[id^="tm-"] { padding: 60px 24px; }
        }

        @media (max-width: 600px) {
          #tm-hero { padding-top: 100px; }
          .tm-members-grid { grid-template-columns: 1fr; gap: 20px; }
          .tm-apart-grid { grid-template-columns: 1fr; gap: 16px; }
          .tm-member-card { padding: 24px; }
          .tm-apart-card { padding: 28px 20px; }
          .tm-apart-footer { margin-top: 40px; font-size: 0.92rem; }
        }
      `}</style>

      <div id="team-page">

        {/* ── BANNER / HERO SECTION ── */}
        <section id="tm-hero">
          <div className="tm-inner">
            <div className="tm-hero-grid">
              <div>
                <div className="tm-breadcrumb">
                  <span className="tm-breadcrumb-dot" />
                  Home &nbsp;›&nbsp; Team
                </div>
                <h1>
                  Our <span>Ecosystem</span>
                </h1>
                <p className="hero-desc">
                  At GOKLYN, our team comprises a dynamic group of passionate
                  students from diverse educational backgrounds. Guided by experienced mentors,
                  we foster a culture of collaboration, innovation, and growth.
                </p>
              </div>
              <div className="tm-hero-img">
                <img src="/assets/newImages/teams.jpg" alt="Goklyn Infrastructure" />
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM MEMBERS GRID SECTION ── */}
        <section id="tm-members-section">
          <div className="tm-inner">
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div className="tm-tag" style={{ justifyContent: "center" }}>Our Staff</div>
              <h2 className="tm-h2">Our Team <em>Members</em></h2>
            </div>

            <div className="tm-members-grid">
              {team.map((member) => (
                <div className="tm-member-card" key={member.id}>
                  <div className="tm-avatar-wrapper">
                    <img src={member.img} alt={member.name} className="tm-member-avatar" />
                  </div>
                  <div className="tm-member-name">{member.name}</div>
                  <div className="tm-member-role">{member.role}</div>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="tm-social-link" aria-label={`${member.name} LinkedIn Profile`}>
                      <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPECIFICATION / ADVANTAGE SECTION ── */}
        <section id="tm-apart-section">
          <div className="tm-inner">
            <div style={{ textAlign: "center" }}>
              <div className="tm-tag" style={{ justifyContent: "center" }}>Our Ecosystem</div>
              <h2 className="tm-h2">What Sets Our <em>Team Apart?</em></h2>
              <p style={{ margin: "0 auto 52px" }} className="tm-sub">
                Empowering next-generation engineers by cultivating an experimental,
                high-performance framework built to redefine modern standards.
              </p>
            </div>

            <div className="tm-apart-grid">
              {[
                {
                  icon: "fa-solid fa-rocket",
                  title: "Student-Led Innovation",
                  description: "Our team members actively contribute to cutting-edge projects, gaining practical knowledge and leadership skills in the ever-evolving tech landscape."
                },
                {
                  icon: "fa-solid fa-handshake",
                  title: "Mentorship-Driven Approach",
                  description: "Students work under the guidance of skilled professionals who provide personalized mentorship and support, shaping their careers with real-world experience."
                },
                {
                  icon: "fa-solid fa-layer-group",
                  title: "Diverse Skill Sets",
                  description: "From AI to Cybersecurity, our team members bring expertise in various domains, enabling us to deliver comprehensive and innovative solutions tailored for the future."
                }
              ].map((item, index) => (
                <div className="tm-apart-card" key={index}>
                  <span className="tm-apart-icon"><i className={item.icon}></i></span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <div className="tm-apart-footer">
              <p style={{ margin: 0, fontWeight: 600 }}>
                At <span>GOKLYN</span>, we believe in the power of teamwork and the
                potential of young minds to drive technological progress.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Team;