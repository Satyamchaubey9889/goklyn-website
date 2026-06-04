import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setCompanyOpen(false);
  }, [location]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400&display=swap');

        #gk-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 999;
          height: 66px;
          padding: 0 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(0,240,255,0.1);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          transition: background 0.3s;
          background: rgba(4,6,15,0.65);
        }
        #gk-header.scrolled {
          background: rgba(4,6,15,0.97);
        }

        /* ── Logo ── */
        .gk-nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .gk-nav-logo img {
          height: 60px;
          width: 60px;
          // object-fit: contain;
          // border-radius: 8px;
          // border: 1px solid rgba(0,240,255,0.25);
        }
        .gk-nav-logo-text {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: #00f0ff;
          letter-spacing: .07em;
        }

        /* ── Desktop nav links ── */
        .gk-nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .gk-nav-links li {
          position: relative;
        }
        .gk-nav-links a,
        .gk-nav-links button {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 14px;
          font-family: 'Space Mono', monospace;
          font-size: .7rem;
          letter-spacing: .06em;
          text-transform: uppercase;
          color: rgb(255, 255, 255);
          text-decoration: none;
          border-radius: 6px;
          border: none;
          background: transparent;
          cursor: pointer;
          transition: color .2s, background .2s;
          white-space: nowrap;
        }
        .gk-nav-links a:hover,
        .gk-nav-links button:hover,
        .gk-nav-links a.gk-active,
        .gk-nav-links button.gk-active {
          color: #00f0ff;
          background: rgba(0,240,255,0.07);
        }

        /* ── Dropdown ── */
        .gk-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          min-width: 160px;
          background: rgba(8,13,28,0.97);
          border: 1px solid rgba(0,240,255,0.15);
          border-radius: 10px;
          padding: 6px;
          display: none;
          flex-direction: column;
          gap: 2px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.5);
          backdrop-filter: blur(20px);
        }
        .gk-dropdown.open {
          display: flex;
        }
        .gk-dropdown a {
          display: block;
          padding: 8px 12px;
          font-family: 'Space Mono', monospace;
          font-size: .68rem;
          letter-spacing: .05em;
          text-transform: uppercase;
          color: rgb(255, 255, 255);
          text-decoration: none;
          border-radius: 6px;
          transition: color .18s, background .18s;
        }
        .gk-dropdown a:hover,
        .gk-dropdown a.gk-active {
          color: #00f0ff;
          background: rgba(0,240,255,0.07);
        }

        /* ── CTA button ── */
        .gk-nav-cta {
          padding: 9px 20px;
          font-family: 'Syne', sans-serif;
          font-size: .72rem;
          font-weight: 700;
          letter-spacing: .08em;
          color: #04060f !important;
          background: #00f0ff !important;
          border-radius: 6px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          box-shadow: 0 0 20px rgba(0,240,255,0.28);
          transition: box-shadow .25s, transform .2s !important;
        }
        .gk-nav-cta:hover {
          box-shadow: 0 0 40px rgba(0,240,255,0.5) !important;
          transform: translateY(-1px) !important;
          color: #04060f !important;
          background: #00f0ff !important;
        }

        /* ── Hamburger — mobile only ── */
        .gk-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(0,240,255,0.06);
          border: 1px solid rgba(0,240,255,0.15);
          cursor: pointer;
          padding: 8px;
          flex-shrink: 0;
          transition: background .2s, border-color .2s;
        }
        .gk-burger:hover {
          background: rgba(0,240,255,0.12);
          border-color: rgba(0,240,255,0.35);
        }
        .gk-burger span {
          display: block;
          height: 1.5px;
          background: #00f0ff;
          border-radius: 2px;
          transition: transform .25s, opacity .25s, width .25s;
          transform-origin: center;
        }
        .gk-burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .gk-burger.open span:nth-child(2) { opacity: 0; width: 0; }
        .gk-burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* ── Mobile drawer ── */
        .gk-mobile-menu {
          position: fixed;
          top: 66px; left: 0; right: 0; bottom: 0;
          background: rgba(4,6,15,0.98);
          backdrop-filter: blur(24px);
          z-index: 998;
          padding: 28px 6%;
          display: flex;
          flex-direction: column;
          gap: 6px;
          overflow-y: auto;
          transform: translateX(100%);
          transition: transform .3s cubic-bezier(.4,0,.2,1);
          border-top: 1px solid rgba(0,240,255,0.08);
        }
        .gk-mobile-menu.open {
          transform: translateX(0);
        }
        .gk-mobile-menu a,
        .gk-mobile-menu button {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 16px;
          font-family: 'Space Mono', monospace;
          font-size: .78rem;
          letter-spacing: .07em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          border-radius: 8px;
          border: none;
          background: transparent;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: color .18s, background .18s;
        }
        .gk-mobile-menu a:hover,
        .gk-mobile-menu button:hover,
        .gk-mobile-menu a.gk-active {
          color: #00f0ff;
          background: rgba(0,240,255,0.07);
        }
        .gk-mobile-menu a::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(0,240,255,0.3);
          flex-shrink: 0;
          transition: background .18s;
        }
        .gk-mobile-menu a:hover::before,
        .gk-mobile-menu a.gk-active::before { background: #00f0ff; }
        .gk-mobile-sub {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding-left: 20px;
          margin-top: 2px;
          border-left: 1px solid rgba(0,240,255,0.12);
          margin-left: 24px;
        }
        .gk-mobile-sub a {
          font-size: .72rem;
          padding: 10px 14px;
        }
        .gk-mobile-divider {
          height: 1px;
          background: rgba(0,240,255,0.07);
          margin: 8px 0;
        }
        .gk-mobile-socials {
          display: flex;
          gap: 10px;
          list-style: none;
          padding: 12px 16px 0;
          margin: 0;
        }
        .gk-mobile-socials li a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(0,240,255,0.06);
          border: 1px solid rgba(0,240,255,0.14);
          color: rgba(255,255,255,0.5);
          font-size: .88rem;
          transition: background .2s, border-color .2s, color .2s;
        }
        .gk-mobile-socials li a::before { display: none !important; }
        .gk-mobile-socials li a:hover {
          background: rgba(0,240,255,0.13);
          border-color: rgba(0,240,255,0.5);
          color: #00f0ff;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .gk-nav-links { display: none; }
          .gk-burger { display: flex; }
        }
        @media (min-width: 901px) {
          .gk-mobile-menu { display: none !important; }
        }
      `}</style>

      {/* ── Desktop Header ── */}
      <header id="gk-header" className={scrolled ? "scrolled" : ""}>

        {/* Logo */}
        <Link to="/" className="gk-nav-logo">
          <img src="/assets/images/logo-1.png" alt="Goklyn" />
          <span className="gk-nav-logo-text">GOKLYN</span>
        </Link>

        {/* Desktop nav */}
        <ul className="gk-nav-links">
          <li>
            <Link to="/" className={path === "/" ? "gk-active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <button
              className={["/about-us", "/our-team", "/career"].includes(path) ? "gk-active" : ""}
              onClick={() => setCompanyOpen(o => !o)}
              onBlur={() => setTimeout(() => setCompanyOpen(false), 150)}
            >
              Our Company <i className="fa-solid fa-angle-down" style={{ fontSize: ".6rem" }}></i>
            </button>
            <div className={`gk-dropdown ${companyOpen ? "open" : ""}`}>
              <Link to="/about-us" className={path === "/about-us" ? "gk-active" : ""}>About</Link>
              <Link to="/our-team" className={path === "/our-team" ? "gk-active" : ""}>Our Team</Link>
              <Link to="/career" className={path === "/career" ? "gk-active" : ""}>Careers</Link>
            </div>
          </li>
          <li>
            <Link to="/services" className={path === "/services" ? "gk-active" : ""}>Services</Link>
          </li>
          <li>
            <Link to="/portfolio" className={path === "/portfolio" ? "gk-active" : ""}>Projects</Link>
          </li>
          <li>
            <Link to="/contact-us" className={path === "/contact-us" ? "gk-active" : ""}>Contact Us</Link>
          </li>
        </ul>

        {/* Right side — CTA + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link to="/contact-us" className="gk-nav-cta" style={{ display: window.innerWidth <= 900 ? "none" : "inline-flex" }}>
            Get Started
          </Link>
          <button
            className={`gk-burger ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <nav className={`gk-mobile-menu ${mobileOpen ? "open" : ""}`}>
        <Link to="/" className={path === "/" ? "gk-active" : ""}>Home</Link>
        <Link to="/about-us" className={path === "/about-us" ? "gk-active" : ""}>About</Link>
        <Link to="/our-team" className={path === "/our-team" ? "gk-active" : ""}>Our Team</Link>
        <Link to="/career" className={path === "/career" ? "gk-active" : ""}>Careers</Link>
        <Link to="/services" className={path === "/services" ? "gk-active" : ""}>Services</Link>
        <Link to="/portfolio" className={path === "/portfolio" ? "gk-active" : ""}>Projects</Link>
        <Link to="/contact-us" className={path === "/contact-us" ? "gk-active" : ""}>Contact Us</Link>
        <div className="gk-mobile-divider" />
        <ul className="gk-mobile-socials">
          <li>
            <a href="https://www.linkedin.com/company/goklyn-pvt-ltd/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="#"><i className="fa-brands fa-github"></i></a>
          </li>
          <li>
            <a href="https://www.instagram.com/goklyn_pvt.ltd?igsh=MXNxODI1empyY2MzdA==" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;