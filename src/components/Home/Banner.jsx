import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ── Particle Canvas ── */
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Fewer particles on mobile for better performance
    const N = window.innerWidth < 768 ? 40 : 100;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.3,
      color:
        Math.random() < 0.55
          ? "#00f0ff"
          : Math.random() < 0.7
            ? "#7b2fff"
            : "#00ff88",
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.55;
        ctx.fill();
      });
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "#00f0ff";
            ctx.globalAlpha = (1 - d / 90) * 0.07;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.6,
      }}
    />
  );
}

/* ── Hero 3D Canvas ── */
function HeroCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let t = 0,
      animId;
    const W = 520,
      H = 520;
    canvas.width = W;
    canvas.height = H;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2,
        cy = H / 2;
      // Glow orb
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 70);
      g.addColorStop(0, "rgba(0,240,255,0.75)");
      g.addColorStop(0.5, "rgba(123,47,255,0.25)");
      g.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, 70 + Math.sin(t * 2) * 6, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
      // DNA helix
      const TURNS = 3,
        STEPS = 80;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= STEPS; i++) {
        const angle = (i / STEPS) * TURNS * Math.PI * 2 + t * 0.5;
        const y = (i / STEPS) * H;
        const x = cx + Math.cos(angle) * 85;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(0,240,255,0.75)";
      ctx.stroke();
      ctx.beginPath();
      for (let i = 0; i <= STEPS; i++) {
        const angle =
          (i / STEPS) * TURNS * Math.PI * 2 + t * 0.5 + Math.PI;
        const y = (i / STEPS) * H;
        const x = cx + Math.cos(angle) * 85;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(123,47,255,0.75)";
      ctx.stroke();
      // Rungs
      for (let i = 0; i <= STEPS; i += 8) {
        const angle = (i / STEPS) * TURNS * Math.PI * 2 + t * 0.5;
        const y = (i / STEPS) * H;
        const x1 = cx + Math.cos(angle) * 85;
        const x2 = cx + Math.cos(angle + Math.PI) * 85;
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.strokeStyle = "rgba(0,255,136,0.4)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      // Rings
      [
        [105, "#00f0ff", 0.5],
        [140, "#7b2fff", 0.38],
        [172, "#00ff88", 0.28],
      ].forEach(([r, color, alpha], i) => {
        ctx.beginPath();
        ctx.ellipse(
          cx,
          cy,
          r,
          r * 0.35,
          t * (i % 2 === 0 ? 0.4 : -0.3) + i,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });
      t += 0.012;
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    />
  );
}

/* ── Counter Hook ── */
function useCounter(target, suffix, decimals, active) {
  const [val, setVal] = useState("0" + suffix);
  useEffect(() => {
    if (!active) return;
    const dur = 1800;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const v = target * ease;
      setVal((decimals ? v.toFixed(1) : Math.round(v)) + suffix);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active]);
  return val;
}

/* ── Floating Stat ── */
function FloatStat({ label, target, suffix, dec, className, style }) {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 600);
    return () => clearTimeout(t);
  }, []);
  const val = useCounter(target, suffix, dec, vis);
  return (
    <div
      ref={ref}
      className={`gk-float-stat ${className || ""}`}
      style={{
        position: "absolute",
        background: "rgba(8,13,28,0.92)",
        border: "1px solid rgba(0,240,255,0.22)",
        borderRadius: 12,
        padding: "12px 16px",
        backdropFilter: "blur(20px)",
        boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
        minWidth: 130,
        animation: "gk-float 4s ease-in-out infinite",
        ...style,
      }}
    >
      <div
        style={{
          fontFamily: "'Montserrat',sans-serif",
          fontSize: "1.3rem",
          fontWeight: 800,
          color: "#00f0ff",
          lineHeight: 1,
          marginBottom: 4,
        }}
      >
        {val}
      </div>
      <div
        style={{
          fontFamily: "'Poppins',sans-serif",
          fontSize: ".58rem",
          letterSpacing: ".07em",
          color: "rgba(255,255,255,0.46)",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ── Marquee ── */
const MARQUEE_ITEMS = [
  "Quantum Computing", "AI & Machine Learning", "Zero Trust Architecture",
  "Quantum Key Distribution", "Cybersecurity & Ethical Hacking", "Quantum Cryptography",
  "Data Analysis & Business Intelligence", "Web Development & UI/UX",
  "Quantum Computing", "AI & Machine Learning", "Zero Trust Architecture",
  "Quantum Key Distribution", "Cybersecurity & Ethical Hacking", "Quantum Cryptography",
  "Data Analysis & Business Intelligence", "Web Development & UI/UX",
];

/* ── Main Banner Component ── */
const Banner = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Responsive stylesheet context injection */}
      <style>{`
        @keyframes gk-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes gk-blink { 0%,100%{opacity:1;box-shadow:0 0 6px #00ff88} 50%{opacity:.3;box-shadow:none} }
        @keyframes gk-marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes gk-fadein-left { from{opacity:0;transform:translateX(-32px)} to{opacity:1;transform:none} }
        @keyframes gk-fadein-right { from{opacity:0;transform:translateX(32px)} to{opacity:1;transform:none} }
        .gk-btn-p:hover { box-shadow: 0 0 48px rgba(0,240,255,0.55) !important; transform: translateY(-2px); }
        .gk-btn-g:hover { background: rgba(0,240,255,0.08) !important; box-shadow: 0 0 24px rgba(0,240,255,0.2) !important; transform: translateY(-2px); }
        .gk-svc:hover { background: rgba(255,255,255,0.07) !important; transform: perspective(800px) translateY(-6px); }
        .gk-svc:hover img { transform: perspective(800px) rotateX(0deg) scale(1.04) !important; }
        .gk-proc:hover { transform: translateY(-6px); border-color: rgba(0,240,255,0.25) !important; }
        .gk-stat-card:hover::before { transform: scaleX(1) !important; }

        /* Structural Layout Definitions */
        .gk-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .gk-services-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          border: 1px solid rgba(0,240,255,0.1);
          border-radius: 18px;
          overflow: hidden;
        }

        .gk-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .gk-hero-visual-wrapper {
          position: relative;
          max-width: 520px;
          width: 100%;
          margin: 0 auto;
        }

        /* Tablet and Small Laptop Optimization */
        @media (max-width: 1024px) {
          .gk-services-container {
            grid-template-columns: repeat(2, 1fr);
          }
          .gk-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .gk-stat-card {
            border-bottom: 1px solid rgba(0,240,255,0.1);
          }
          .gk-stat-card:nth-child(2) {
            border-right: none !important;
          }
          .gk-stat-card:nth-child(3) {
            border-bottom: none !important;
          }
          .gk-stat-card:nth-child(4) {
            border-bottom: none !important;
          }
        }

        /* Mobile UI Adjustments */
        @media (max-width: 768px) {
          .gk-hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }
          .gk-hero-left {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .gk-hero-actions {
            justify-content: center;
          }
          .gk-services-container {
            grid-template-columns: 1fr;
          }
          .gk-svc {
            border-right: none !important;
            border-bottom: 1px solid rgba(0,240,255,0.1) !important;
          }
          .gk-svc:last-child {
            border-bottom: none !important;
          }
          .gk-hero-visual-container {
            height: 420px !important; 
          }
          
          /* Anchor absolute stats over the animation box safely */
          .gk-float-stat {
            padding: 8px 12px !important;
            min-width: 120px !important;
            z-index: 10;
          }
          .stat-1 { top: 8% !important; left: 2% !important; }
          .stat-2 { bottom: 8% !important; right: 2% !important; }
          .stat-3 { top: 50% !important; left: 2% !important; }
        }

        /* Extremely Narrow Displays */
        @media (max-width: 480px) {
          .gk-stats-grid {
            grid-template-columns: 1fr;
          }
          .gk-stat-card {
            border-right: none !important;
            border-bottom: 1px solid rgba(0,240,255,0.1) !important;
          }
          .gk-stat-card:last-child {
            border-bottom: none !important;
          }
          .gk-hero-visual-container {
            height: 320px !important;
          }
          
          /* Scale dynamically down for tiny viewports */
          .gk-float-stat {
            padding: 6px 10px !important;
            min-width: 105px !important;
          }
          .stat-1 { top: 6% !important; left: 2% !important; }
          .stat-2 { bottom: 6% !important; right: 2% !important; }
          .stat-3 { top: 48% !important; left: 2% !important; }
        }
      `}</style>

      <ParticleCanvas />

      {/* ══ HERO SECTION ══ */}
      <section
        id="gk-home"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "100px 6% 60px",
          zIndex: 1,
          background: "transparent",
        }}
      >
        <div className="gk-hero-grid" style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>

          {/* Headline and Copy Elements */}
          <div
            className="gk-hero-left"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? "gk-fadein-left 0.8s ease both" : "none",
            }}
          >
            {/* <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "5px 14px",
                fontFamily: "'Poppins',sans-serif",
                fontSize: ".68rem",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "#00ff88",
                background: "rgba(0,255,136,0.07)",
                border: "1px solid rgba(0,255,136,0.2)",
                borderRadius: 100,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#00ff88",
                  animation: "gk-blink 2s ease-in-out infinite",
                }}
              />
              Quantum Security Protocol Active
            </div> */}

            <h1
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: 22,
              }}
            >
              <span style={{ display: "block", color: "#fff" }}>
                Goklyn
              </span>
              <span
                style={{
                  display: "block",
                  background:
                    "linear-gradient(100deg,#00f0ff 0%,#7b2fff 60%,#ff2060 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Inspired by Wisdom &amp; Innovation.
              </span>
            </h1>

            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                maxWidth: 460,
                marginBottom: 36,
              }}
            >
              Your all-in-one destination for cutting-edge internships,
              industrial project development, quantum computing, and
              cybersecurity solutions and seminars that shape the future.
            </p>

            <div className="gk-hero-actions" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link
                to="/about-us"
                className="gk-btn-p"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 28px",
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: ".74rem",
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  color: "#04060f",
                  background: "#00f0ff",
                  borderRadius: 7,
                  textDecoration: "none",
                  boxShadow: "0 0 24px rgba(0,240,255,0.3)",
                  transition: "box-shadow .25s,transform .2s",
                }}
              >
                <i className="fa-solid fa-angle-right" />
                Explore Goklyn
              </Link>
              <Link
                to="/contact-us"
                className="gk-btn-g"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 26px",
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: ".74rem",
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  color: "#00f0ff",
                  background: "transparent",
                  border: "1px solid rgba(0,240,255,0.22)",
                  borderRadius: 7,
                  textDecoration: "none",
                  transition: "background .2s,box-shadow .2s,transform .2s",
                }}
              >
                <i className="fa-solid fa-envelope" />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Graphical Frame & Absolute Elements Anchor */}
          <div
            className="gk-hero-visual-wrapper"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? "gk-fadein-right 0.8s ease 0.15s both" : "none",
            }}
          >
            <div
              className="gk-hero-visual-container"
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(0,240,255,0.22)",
                boxShadow: "0 0 80px rgba(0,240,255,0.08)",
                height: 520,
              }}
            >
              <HeroCanvas />
              <img
                src="/assets/newImages/home.jpg"
                alt="Goklyn Technologies"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.22,
                  mixBlendMode: "screen",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Bound floating stats layer
            <FloatStat
              className="stat-1"
              label="Detection Rate"
              target={99.9}
              suffix="%"
              dec={true}
              style={{ top: "14%", left: "-8%", animationDelay: "0s" }}
            />
            <FloatStat
              className="stat-2"
              label="Clients Protected"
              target={140}
              suffix="+"
              dec={false}
              style={{ bottom: "14%", right: "-8%", animationDelay: "0.7s" }}
            />
            <FloatStat
              className="stat-3"
              label="Qubits / Op"
              target={256}
              suffix=""
              dec={false}
              style={{ top: "50%", left: "-8%", animationDelay: "1.4s" }}
            /> */}
          </div>

        </div>
      </section>

      {/* ══ MARQUEE INFOBAR ══ */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "18px 0",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,240,255,0.1)",
          borderBottom: "1px solid rgba(0,240,255,0.1)",
          background: "rgba(8,13,28,0.6)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 64,
            width: "max-content",
            animation: "gk-marquee 28s linear infinite",
          }}
        >
          {MARQUEE_ITEMS.map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                flexShrink: 0,
                fontFamily: "'Poppins',sans-serif",
                fontSize: ".72rem",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.46)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "#00f0ff" }}>◆</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══ CAPABILITIES SECTOR ══ */}
      <section
        id="gk-services"
        style={{
          position: "relative",
          zIndex: 1,
          padding: "80px 6%",
          background: "transparent",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontFamily: "'Poppins',sans-serif",
                fontSize: ".66rem",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#00f0ff",
                marginBottom: 14,
              }}
            >
              <span style={{ display: "inline-block", width: 18, height: 1, background: "#00f0ff" }} />
              Capabilities
            </div>
            <h2
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: 12,
              }}
            >
              Services We Can{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#00f0ff,#7b2fff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontStyle: "normal",
                }}
              >
                Help You With
              </span>
            </h2>
            <p
              style={{
                fontSize: ".95rem",
                color: "rgba(255,255,255,0.46)",
                lineHeight: 1.8,
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              From quantum cryptography to AI-driven solutions — we build and teach the technologies that power tomorrow.
            </p>
          </div>

          {/* Adaptable Services Grid Wrapper */}
          <div
            className="gk-services-container"
            style={{
              border: "1px solid rgba(0,240,255,0.1)",
              borderRadius: 18,
              overflow: "hidden",
            }}
          >
            {[
              {
                icon: "fa-solid fa-atom",
                title: "Quantum Computing",
                desc: "Integrating high-performance quantum algorithms with classical machine learning models to develop resilient post-quantum data protection perimeters.",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=85",
                tags: ["QML", "NIST Level-5", "BB84"],
                link: "/services"
              },
              {
                icon: "fa-solid fa-shield-halved",
                title: "Cybersecurity",
                desc: "Proactively scanning system vectors using automated scripts to flag structural architectural vulnerabilities and apply real-time zero-day mitigations.",
                img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&q=85",
                tags: ["PenTesting", "Zero-Trust", "SOC Pipelines"],
                link: "/services"
              },
              {
                icon: "fa-solid fa-chart-column",
                title: "Data & Business Analysis",
                desc: "Converting structural information repositories into real-time visual streams to empower predictive data modeling and modern strategic analysis.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=85",
                tags: ["Python BI", "Predictive Systems", "Databases"],
                link: "/services"
              },
              {
                icon: "fa-solid fa-globe",
                title: "Web Development & UI/UX",
                desc: "Engineering highly responsive web interfaces with custom micro-frontend structures, combining production-ready performance with interface design standards.",
                img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&q=85",
                tags: ["Next.js", "Tailwind CSS", "Figma Frameworks"],
                link: "/services"
              },

              {
                icon: "fa-solid fa-chalkboard-user",
                title: "Cybersecurity Seminars & Training",
                desc: "Hands-on workshops, bootcamps, and corporate training sessions covering ethical hacking, penetration testing, and zero-trust security — designed for students, professionals, and enterprise teams.",
                img: "/assets/newImages/career.jpg",
                tags: ["Workshops", "Bootcamps", "Corporate Training"],
                link: "/services"
              },
              {
                icon: "fa-solid fa-graduation-cap",
                title: "Quantum Computing Seminars & Training",
                desc: "Structured seminars and certification programs that take students and professionals from quantum fundamentals through to post-quantum cryptography and QML implementation.",
                img: "/assets/newImages/teams.jpg",
                tags: ["Bootcamps", "Certification", "QML Curriculum"],
                link: "/services"
              }, {
                icon: "fa-solid fa-chart-line",
                title: "Digital Growth & Marketing",
                desc: "Optimizing audience interaction across network matrices using predictive automation tools to scale target performance metrics reliably.",
                img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=700&q=85",
                tags: ["Growth Engines", "Data Attribution", "SEO Matrices"],
                link: "/services"
              }
            ].map((svc, i) => (
              <div
                key={i}
                className="gk-svc"
                style={{
                  padding: "34px 28px",
                  background: "rgba(255,255,255,0.032)",
                  borderRight: "1px solid rgba(0,240,255,0.1)",
                  borderBottom: "1px solid rgba(0,240,255,0.1)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "background .3s, transform .3s",
                }}
              >
                <img
                  src={svc.img}
                  alt={svc.title}
                  style={{
                    width: "100%",
                    height: 140,
                    objectFit: "cover",
                    borderRadius: 10,
                    marginBottom: 18,
                    border: "1px solid rgba(0,240,255,0.1)",
                    filter: "brightness(0.82) saturate(1.2)",
                    transition: "transform .4s",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: "rgba(0,240,255,0.08)",
                    border: "1px solid rgba(0,240,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    marginBottom: 14,
                    color: "#00f0ff",
                  }}
                >
                  <i className={svc.icon}></i>
                </div>
                <h3
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: ".95rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 9,
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontSize: ".83rem",
                    color: "rgba(255,255,255,0.46)",
                    lineHeight: 1.72,
                    marginBottom: 14,
                  }}
                >
                  {svc.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        display: "inline-block",
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: ".6rem",
                        letterSpacing: ".04em",
                        color: "#00f0ff",
                        background: "rgba(0,240,255,0.07)",
                        border: "1px solid rgba(0,240,255,0.15)",
                        borderRadius: 4,
                        padding: "2px 7px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: 16 }}>
                  <Link
                    to={svc.link}
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: ".68rem",
                      color: "#00f0ff",
                      textDecoration: "none",
                      letterSpacing: ".06em",
                    }}
                  >
                    Read More <i className="fa-solid fa-angle-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS HIGHLIGHT DATA BLOCK ══
      <div
        style={{
          background: "rgba(8,13,28,0.8)",
          borderTop: "1px solid rgba(0,240,255,0.1)",
          borderBottom: "1px solid rgba(0,240,255,0.1)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="gk-stats-grid" style={{ maxWidth: 1280, margin: "0 auto" }}>
          {[
            { n: "99.9%", label: "Threat Detection Rate" },
            { n: "256", label: "Qubits Per Operation" },
            { n: "140+", label: "Clients Protected" },
            { n: "0.3ms", label: "Avg Response Time" },
          ].map((s, i) => (
            <div
              key={i}
              className="gk-stat-card"
              style={{
                padding: "38px 26px",
                borderRight: "1px solid rgba(0,240,255,0.1)",
                position: "relative",
                overflow: "hidden",
                transition: "background .3s",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background:
                    "linear-gradient(90deg,transparent,#00f0ff,transparent)",
                }}
              />
              <div
                style={{
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "2.2rem",
                  fontWeight: 800,
                  color: "#00f0ff",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: ".67rem",
                  letterSpacing: ".07em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.46)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Banner;