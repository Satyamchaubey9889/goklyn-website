import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <style>{`
        #gk-footer {
          background: #04060f;
          border-top: 1px solid rgba(0,240,255,0.12);
          position: relative;
          z-index: 1;
          padding: 60px 0 0;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }
        #gk-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 85% 0%, rgba(123,47,255,0.07) 0%, transparent 55%),
            radial-gradient(ellipse at 15% 100%, rgba(0,240,255,0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .gk-ft-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 5%;
          position: relative;
          z-index: 1;
        }

        .gk-ft-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 56px;
          padding-bottom: 52px;
          border-bottom: 1px solid rgba(0,240,255,0.08);
        }

        .gk-ft-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          margin-bottom: 18px;
        }
        .gk-ft-logo img {
          height: 60px;
          width: 60px;
          // object-fit: contain;
          // border-radius: 8px;
          // border: 1px solid rgba(0,240,255,0.25);
        }
        .gk-ft-logo-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: #00f0ff;
          letter-spacing: .07em;
        }
        .gk-ft-desc {
          font-size: .875rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.82;
          max-width: 310px;
          margin-bottom: 24px;
        }

        .gk-ft-socials {
          display: flex;
          gap: 8px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .gk-ft-socials li a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(0,240,255,0.05);
          border: 1px solid rgba(0,240,255,0.14);
          color: rgba(255,255,255,0.5);
          font-size: .88rem;
          text-decoration: none;
          transition: background .2s, border-color .2s, color .2s, transform .18s;
        }
        .gk-ft-socials li a:hover {
          background: rgba(0,240,255,0.12);
          border-color: rgba(0,240,255,0.5);
          color: #00f0ff;
          transform: translateY(-2px);
        }

        .gk-ft-col h4 {
          font-family: 'Montserrat', sans-serif;
          font-size: .68rem;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #00f0ff;
          margin: 0 0 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .gk-ft-col h4::before {
          content: '';
          width: 14px;
          height: 1px;
          background: #00f0ff;
          flex-shrink: 0;
        }

        .gk-ft-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .gk-ft-links li a {
          font-size: .875rem;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 9px;
          transition: color .18s, gap .18s;
        }
        .gk-ft-links li a::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(0,240,255,0.28);
          flex-shrink: 0;
          transition: background .18s;
        }
        .gk-ft-links li a:hover { color: #00f0ff; gap: 13px; }
        .gk-ft-links li a:hover::before { background: #00f0ff; }

        .gk-ft-contact {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .gk-ft-contact li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .gk-ft-ci {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(0,240,255,0.06);
          border: 1px solid rgba(0,240,255,0.13);
          color: #00f0ff;
          font-size: .78rem;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .gk-ft-contact li a,
        .gk-ft-contact li span {
          font-size: .875rem;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          line-height: 1.65;
          transition: color .18s;
        }
        .gk-ft-contact li a:hover { color: #00f0ff; }

        .gk-ft-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          flex-wrap: wrap;
          gap: 10px;
        }
        .gk-ft-copy {
          font-family: 'Poppins', sans-serif;
          font-size: .65rem;
          color: rgba(255,255,255,0.28);
          letter-spacing: .04em;
        }
        .gk-ft-badge {
          font-family: 'Poppins', sans-serif;
          font-size: .6rem;
          color: rgba(0,240,255,0.35);
          border: 1px solid rgba(0,240,255,0.1);
          border-radius: 4px;
          padding: 3px 9px;
          letter-spacing: .05em;
        }

        @media (max-width: 900px) {
          .gk-ft-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media (max-width: 580px) {
          .gk-ft-grid { grid-template-columns: 1fr; gap: 28px; }
          .gk-ft-bottom { flex-direction: column; align-items: flex-start; gap: 8px; }
        }
      `}</style>

      <footer id="gk-footer">
        <div className="gk-ft-inner">
          <div className="gk-ft-grid">

            {/* ── Brand ── */}
            <div className="gk-ft-col">
              <Link to="/" className="gk-ft-logo">
                <img src="/assets/images/logo-1.png" alt="Goklyn logo" />
                <span className="gk-ft-logo-text">GOKLYN</span>
              </Link>
              <p className="gk-ft-desc">
                GOKLYN Technologies — your all-in-one destination for
                cutting-edge internships, industrial project development, and
                skill development. Whether you're a student or a business
                seeking advanced tech solutions, we've got you covered.
              </p>
              <ul className="gk-ft-socials">
                <li>
                  <a href="https://www.linkedin.com/company/goklyn-pvt-ltd/" target="_blank" rel="noreferrer" title="LinkedIn">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="GitHub">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/goklyn_pvt.ltd?igsh=MXNxODI1empyY2MzdA==" target="_blank" rel="noreferrer" title="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* ── Useful Links ── */}
            <div className="gk-ft-col">
              <h4>Useful Links</h4>
              <ul className="gk-ft-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/career">Career</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>

            {/* ── Contact ── */}
            <div className="gk-ft-col">
              <h4>Contact Us</h4>
              <ul className="gk-ft-contact">
                <li>
                  <span className="gk-ft-ci">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <a href="tel:+919024466472">+91 9024466472</a>
                </li>
                <li>
                  <span className="gk-ft-ci">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <a href="mailto:contact@goklyn.in">contact@goklyn.in</a>
                </li>
                <li>
                  <span className="gk-ft-ci">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <span>Jaipur, Rajasthan, India</span>
                </li>
              </ul>
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div className="gk-ft-bottom">
            <span className="gk-ft-copy">© 2026 GOKLYN Private Limited. All rights reserved.</span>
            <span className="gk-ft-badge">PQC-ACTIVE · NIST-L5 · v4.2.1</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;