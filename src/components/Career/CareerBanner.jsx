import React from 'react'
import { Link } from 'react-router-dom'

const WHY_JOIN = [
  { icon: "fa-solid fa-rocket", title: "Real-World Experience", text: "Work on live projects and build an impressive portfolio." },
  { icon: "fa-solid fa-lightbulb", title: "Learn from Industry Experts", text: "Get mentorship from seasoned professionals." },
  { icon: "fa-solid fa-earth-americas", title: "Flexible & Remote Opportunities", text: "Work from anywhere, at your own pace." },
  { icon: "fa-solid fa-bullseye", title: "Skill Development", text: "Enhance your expertise in AI, ML, Full-Stack Development, Cyber Security, SEO, and more." },
  { icon: "fa-solid fa-handshake", title: "Networking & Career Growth", text: "Connect with top talents and unlock new opportunities." },
]

const INTERNSHIPS = [
  { icon: "fa-solid fa-atom", title: "Machine Learning & AI", text: "Work on predictive models, NLP, and deep learning solutions." },
  { icon: "fa-solid fa-globe", title: "Full-Stack Development", text: "Build scalable applications with modern frameworks." },
  { icon: "fa-solid fa-chart-column", title: "Data Science & Analytics", text: "Analyze big data and extract meaningful insights." },
  { icon: "fa-brands fa-python", title: "Python Development", text: "Create powerful applications and automate solutions." },
  { icon: "fa-brands fa-react", title: "React Development", text: "Build dynamic, user-friendly web applications." },
  { icon: "fa-solid fa-shield-halved", title: "Cyber Security", text: "Work on ethical hacking, penetration testing, and security audits." },
  { icon: "fa-solid fa-chart-line", title: "Digital Marketing & SEO", text: "Master online growth strategies and optimize digital presence." },
  { icon: "fa-solid fa-star", title: "And More!", text: "We are open to exploring new domains based on your skills and interests." },
]

const CareerBanner = () => {
  return (
    <>
      <style>{`
        /* ── Page wrapper ── */
        #career-page {
          background: #04060f;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        /* ── Hero ── */
        #career-hero {
          padding: 140px 6% 80px;
          position: relative;
          z-index: 1;
          border-bottom: 1px solid rgba(0,240,255,0.08);
        }
        #career-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 70% 30%, rgba(123,47,255,0.07) 0%, transparent 60%),
            radial-gradient(ellipse at 20% 80%, rgba(0,240,255,0.05) 0%, transparent 55%);
          pointer-events: none;
          z-index: 0;
        }
        #career-hero .hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        #career-hero .breadcrumb-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          font-family: 'Poppins', sans-serif;
          font-size: .68rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: #00ff88;
          background: rgba(0,255,136,0.07);
          border: 1px solid rgba(0,255,136,0.2);
          border-radius: 100px;
          margin-bottom: 24px;
        }
        #career-hero h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.06;
          margin-bottom: 20px;
          background: linear-gradient(100deg, #00f0ff 0%, #7b2fff 60%, #ff2060 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        #career-hero .sub-line {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
        }
        #career-hero p {
          font-size: .97rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.82;
          margin-bottom: 0;
        }
        #career-hero .hero-img {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(0,240,255,0.18);
          box-shadow: 0 0 60px rgba(0,240,255,0.07), 0 32px 80px rgba(0,0,0,0.5);
        }
        #career-hero .hero-img img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          filter: brightness(0.85) saturate(1.2);
          display: block;
        }
        #career-hero .hero-img::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,240,255,0.08), rgba(123,47,255,0.1));
        }

        /* ── Section commons ── */
        .ck-section {
          padding: 90px 6%;
          position: relative;
          z-index: 1;
        }
        .ck-section-alt {
          background: rgba(8,13,28,0.7);
          border-top: 1px solid rgba(0,240,255,0.08);
          border-bottom: 1px solid rgba(0,240,255,0.08);
        }
        .ck-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .ck-heading {
          text-align: center;
          margin-bottom: 52px;
        }
        .ck-tag {
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
        .ck-tag::before {
          content: '';
          width: 14px;
          height: 1px;
          background: #00f0ff;
          flex-shrink: 0;
        }
        .ck-heading h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.6rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.12;
          margin-bottom: 12px;
        }
        .ck-heading h2 em {
          font-style: normal;
          background: linear-gradient(90deg, #00f0ff, #7b2fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ck-heading p {
          font-size: .97rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.8;
          max-width: 520px;
          margin: 0 auto;
        }

        /* ── Cards grid ── */
        .ck-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .ck-card {
          background: rgba(255,255,255,0.032);
          border: 1px solid rgba(0,240,255,0.1);
          border-radius: 16px;
          padding: 28px 24px;
          transition: border-color .25s, background .25s, transform .25s;
          position: relative;
          overflow: hidden;
        }
        .ck-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00f0ff, transparent);
          transform: scaleX(0);
          transition: transform .35s;
        }
        .ck-card:hover {
          border-color: rgba(0,240,255,0.25);
          background: rgba(0,240,255,0.04);
          transform: translateY(-5px);
        }
        .ck-card:hover::before {
          transform: scaleX(1);
        }
        .ck-card-icon {
          font-size: 1.8rem;
          margin-bottom: 14px;
          display: block;
        }
        .ck-card h5 {
          font-family: 'Montserrat', sans-serif;
          font-size: .92rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .ck-card p {
          font-size: .85rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.72;
          margin: 0;
        }

        /* ── CTA band ── */
        #career-cta {
          padding: 80px 6%;
          text-align: center;
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(0,240,255,0.08);
        }
        #career-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 50%, rgba(123,47,255,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        #career-cta .inner {
          max-width: 680px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        #career-cta h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #fff;
          margin-bottom: 14px;
        }
        #career-cta h2 em {
          font-style: normal;
          background: linear-gradient(90deg, #00f0ff, #7b2fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        #career-cta p {
          font-size: .97rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
          margin-bottom: 10px;
        }
        #career-cta p a {
          color: #00f0ff;
          text-decoration: none;
          border-bottom: 1px solid rgba(0,240,255,0.3);
          transition: border-color .2s;
        }
        #career-cta p a:hover {
          border-color: #00f0ff;
        }
        #career-cta .cta-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 32px;
        }
        #career-cta .btn-primary-gk {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          font-family: 'Montserrat', sans-serif;
          font-size: .78rem;
          font-weight: 700;
          letter-spacing: .07em;
          color: #04060f;
          background: #00f0ff;
          border-radius: 8px;
          text-decoration: none;
          box-shadow: 0 0 24px rgba(0,240,255,0.28);
          transition: box-shadow .25s, transform .2s;
        }
        #career-cta .btn-primary-gk:hover {
          box-shadow: 0 0 48px rgba(0,240,255,0.5);
          transform: translateY(-2px);
        }
        #career-cta .btn-outline-gk {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 26px;
          font-family: 'Montserrat', sans-serif;
          font-size: .78rem;
          font-weight: 700;
          letter-spacing: .07em;
          color: #00f0ff;
          background: transparent;
          border: 1px solid rgba(0,240,255,0.25);
          border-radius: 8px;
          text-decoration: none;
          transition: background .2s, box-shadow .2s, transform .2s;
        }
        #career-cta .btn-outline-gk:hover {
          background: rgba(0,240,255,0.07);
          box-shadow: 0 0 24px rgba(0,240,255,0.18);
          transform: translateY(-2px);
        }

        /* ── Divider ── */
        .ck-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,240,255,0.15), transparent);
          margin: 0 6%;
        }

        /* ── Responsive ── */
        @media (max-width: 991px) {
          #career-hero .hero-inner { grid-template-columns: 1fr; gap: 40px; }
          #career-hero .hero-img { display: none; }
          .ck-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          #career-hero { padding: 110px 5% 60px; }
          .ck-section { padding: 60px 5%; }
          .ck-grid { grid-template-columns: 1fr; }
          #career-cta { padding: 60px 5%; }
        }
      `}</style>

      <div id="career-page">

        {/* ── Hero ── */}
        <section id="career-hero">
          <div class="hero-inner">
            <div>
              <div className="breadcrumb-pill">
                <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#00ff88' }} />
                Home &nbsp;›&nbsp; Careers
              </div>
              <h1>Join Goklyn </h1>
              <div className="sub-line">Build the Future with Us!</div>
              <p>
                Are you passionate about AI, Machine Learning, Full-Stack Development,
                Data Science, Cyber Security, Python, React, SEO, or Digital Marketing?
                At Goklyn, we offer internships and project-based opportunities
                to help students and professionals gain real-world exposure while working
                on cutting-edge innovations.
              </p>
            </div>
            <div className="hero-img">
              <img src="/assets/newImages/career.jpg" alt="Careers at Goklyn" />
            </div>
          </div>
        </section>

        {/* ── Why Join ── */}
        <section className="ck-section">
          <div className="ck-inner">
            <div className="ck-heading">
              <div className="ck-tag">Why Us</div>
              <h2>Why Join <em>Goklyn ?</em></h2>
              <p>Unlock real-world experience, mentorship, and career growth with us.</p>
            </div>
            <div className="ck-grid">
              {WHY_JOIN.map((item, i) => (
                <div className="ck-card" key={i}>
                  <span className="ck-card-icon"><i className={item.icon}></i></span>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ck-divider" />

        {/* ── Internships ── */}
        <section className="ck-section ck-section-alt">
          <div className="ck-inner">
            <div className="ck-heading">
              <div className="ck-tag">Opportunities</div>
              <h2>Internships &amp; Projects <em>We Offer</em></h2>
              <p>Explore diverse opportunities tailored to your skills and interests.</p>
            </div>
            <div className="ck-grid">
              {INTERNSHIPS.map((item, i) => (
                <div className="ck-card" key={i}>
                  <span className="ck-card-icon"><i className={item.icon}></i></span>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ck-divider" />

        {/* ── CTA ── */}
        <section id="career-cta">
          <div className="inner">
            <div className="ck-tag" style={{ justifyContent: 'center' }}>Get In Touch</div>
            <h2>Don't See Your <em>Domain Listed?</em></h2>
            <p>
              At Goklyn, we believe in continuous innovation. If you have
              expertise in a field not listed above but think you can contribute,
              we'd love to hear from you!
            </p>

            <div style={{ height: 1, background: 'rgba(0,240,255,0.08)', margin: '32px 0' }} />

            <h2>How to <em>Apply?</em></h2>
            <p>
              <i className="fa-solid fa-envelope" style={{ color: '#00f0ff', marginRight: 8 }} />
              Send your resume &amp; a short introduction to{' '}
              <a href="mailto:hr@goklyn.in">hr@goklyn.in</a>
            </p>
            <p>
              <i className="fa-solid fa-link" style={{ color: '#00f0ff', marginRight: 8 }} />
              Or visit our contact page to explore current opportunities.
            </p>

            <div className="cta-btns">
              <a href="mailto:contact@goklyn.in" className="btn-primary-gk">
                <i className="fa-solid fa-envelope" />
                Email Us Now
              </a>
              <Link to="/contact-us" className="btn-outline-gk">
                <i className="fa-solid fa-arrow-right" />
                Contact Page
              </Link>
            </div>

            <p style={{ marginTop: 40, fontSize: '1.05rem', color: '#fff', fontFamily: "'Montserrat',sans-serif", fontWeight: 700 }}>
              Join Goklyn and turn your{' '}
              <span style={{ background: 'linear-gradient(90deg,#00f0ff,#7b2fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                passion into innovation!
              </span>
            </p>
          </div>
        </section>

      </div>
    </>
  )
}

export default CareerBanner