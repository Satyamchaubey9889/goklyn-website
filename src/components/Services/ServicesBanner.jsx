import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const STATS = [
  { val: "99.9%", label: "Detection Rate" },
  { val: "256", label: "Qubits / Op" },
  { val: "140+", label: "Clients Protected" },
  { val: "0.3ms", label: "Response Time" },
]

const MARQUEE = [
  'Post-Quantum Cryptography', 'CRYSTALS-Kyber-1024', 'Zero Trust Architecture',
  'Quantum Key Distribution', 'AI Threat Intelligence', 'Surface Code Error Correction',
  'NIST Level 5 Security', 'Grover Algorithm Defense', 'Ethical Hacking', 'QPen Framework',
  'Post-Quantum Cryptography', 'CRYSTALS-Kyber-1024', 'Zero Trust Architecture',
  'Quantum Key Distribution', 'AI Threat Intelligence', 'Surface Code Error Correction',
  'NIST Level 5 Security', 'Grover Algorithm Defense', 'Ethical Hacking', 'QPen Framework',
]

/* ─── 3D ROTATING CUBE CANVAS ──────────────── */
function CubeCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width = 560
    const H = canvas.height = 560
    let t = 0, animId

    const project = (x, y, z, rx, ry) => {
      const cosY = Math.cos(ry), sinY = Math.sin(ry)
      const x1 = x * cosY - z * sinY
      const z1 = x * sinY + z * cosY
      const cosX = Math.cos(rx), sinX = Math.sin(rx)
      const y1 = y * cosX - z1 * sinX
      const z2 = y * sinX + z1 * cosX
      const fov = 520
      const scale = fov / (fov + z2 + 200)
      return { x: W / 2 + x1 * scale, y: H / 2 + y1 * scale, z: z2, scale }
    }

    const drawLine = (p1, p2, color, alpha, width = 1) => {
      ctx.beginPath()
      ctx.moveTo(p1.x, p1.y)
      ctx.lineTo(p2.x, p2.y)
      ctx.strokeStyle = color
      ctx.globalAlpha = alpha
      ctx.lineWidth = width
      ctx.stroke()
      ctx.globalAlpha = 1
    }

    const drawDot = (p, color, r = 3) => {
      ctx.beginPath()
      ctx.arc(p.x, p.y, r * p.scale, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.globalAlpha = 0.9
      ctx.fill()
      ctx.globalAlpha = 1
    }

    const SIZE = 110
    const verts = [
      [-SIZE, -SIZE, -SIZE], [SIZE, -SIZE, -SIZE], [SIZE, SIZE, -SIZE], [-SIZE, SIZE, -SIZE],
      [-SIZE, -SIZE, SIZE], [SIZE, -SIZE, SIZE], [SIZE, SIZE, SIZE], [-SIZE, SIZE, SIZE],
    ]
    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ]

    const S2 = 55
    const verts2 = [
      [-S2, -S2, -S2], [S2, -S2, -S2], [S2, S2, -S2], [-S2, S2, -S2],
      [-S2, -S2, S2], [S2, -S2, S2], [S2, S2, S2], [-S2, S2, S2],
    ]

    const orbitals = Array.from({ length: 60 }, (_, i) => ({
      angle: (i / 60) * Math.PI * 2,
      radius: 140 + Math.random() * 60,
      tiltX: Math.random() * Math.PI,
      tiltZ: Math.random() * Math.PI,
      speed: 0.008 + Math.random() * 0.012,
      color: Math.random() < 0.5 ? '#00f0ff' : Math.random() < 0.5 ? '#7b2fff' : '#00ff88',
      size: 0.8 + Math.random() * 1.4,
    }))

    const nodes = Array.from({ length: 18 }, (_, i) => ({
      x: (Math.random() - 0.5) * 300,
      y: (Math.random() - 0.5) * 300,
      z: (Math.random() - 0.5) * 300,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      vz: (Math.random() - 0.5) * 0.4,
      color: Math.random() < 0.5 ? '#00f0ff' : '#7b2fff',
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const rx = t * 0.22
      const ry = t * 0.35

      const grd = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, 130)
      grd.addColorStop(0, 'rgba(0,240,255,0.12)')
      grd.addColorStop(0.5, 'rgba(123,47,255,0.06)')
      grd.addColorStop(1, 'transparent')
      ctx.fillStyle = grd
      ctx.beginPath()
      ctx.arc(W / 2, H / 2, 130, 0, Math.PI * 2)
      ctx.fill()

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.z += n.vz
        if (Math.abs(n.x) > 150) n.vx *= -1
        if (Math.abs(n.y) > 150) n.vy *= -1
        if (Math.abs(n.z) > 150) n.vz *= -1
      })
      nodes.forEach((n, i) => {
        const p = project(n.x, n.y, n.z, rx, ry)
        nodes.forEach((m, j) => {
          if (j <= i) return
          const pm = project(m.x, m.y, m.z, rx, ry)
          const dx = p.x - pm.x, dy = p.y - pm.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 90) drawLine(p, pm, '#00f0ff', (1 - d / 90) * 0.12, 0.5)
        })
        drawDot(p, n.color, n.color === '#00f0ff' ? 2 : 1.5)
      })

      const vp = verts.map(([x, y, z]) => project(x, y, z, rx, ry))
      edges.forEach(([a, b]) => drawLine(vp[a], vp[b], '#00f0ff', 0.55, 1.2))
      verts.forEach((_, i) => drawDot(vp[i], '#00f0ff', 3.5))

      const vp2 = verts2.map(([x, y, z]) => project(x, y, z, rx * 1.5, ry * 1.3))
      edges.forEach(([a, b]) => drawLine(vp2[a], vp2[b], '#7b2fff', 0.45, 1))
      verts2.forEach((_, i) => drawDot(vp2[i], '#7b2fff', 2.5))

        ;[0, 1, 2, 3, 4, 5, 6, 7].forEach(i => drawLine(vp[i], vp2[i], '#00ff88', 0.12, 0.5))

      orbitals.forEach(o => {
        o.angle += o.speed
        const cx = o.radius * Math.cos(o.angle) * Math.cos(o.tiltZ)
        const cy = o.radius * Math.sin(o.angle) * Math.cos(o.tiltX)
        const cz = o.radius * Math.sin(o.tiltX) * Math.cos(o.angle) * 0.5
        const p = project(cx, cy, cz, rx * 0.3, ry * 0.3)
        ctx.beginPath()
        ctx.arc(p.x, p.y, o.size * p.scale, 0, Math.PI * 2)
        ctx.fillStyle = o.color
        ctx.globalAlpha = 0.65
        ctx.fill()
        ctx.globalAlpha = 1
      })

      const ringR = 160 + Math.sin(t * 1.2) * 20
      ctx.beginPath()
      ctx.ellipse(W / 2, H / 2, ringR, ringR * 0.3, t * 0.4, 0, Math.PI * 2)
      ctx.strokeStyle = '#00f0ff'
      ctx.globalAlpha = 0.18
      ctx.lineWidth = 1.5
      ctx.stroke()
      ctx.globalAlpha = 1

      ctx.beginPath()
      ctx.ellipse(W / 2, H / 2, ringR * 0.75, ringR * 0.22, -t * 0.3 + 1, 0, Math.PI * 2)
      ctx.strokeStyle = '#7b2fff'
      ctx.globalAlpha = 0.15
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.globalAlpha = 1

      t += 0.012
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animId)
  }, [])
  return (
    <canvas ref={ref}
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, pointerEvents: 'none' }}
    />
  )
}

/* ─── WAVE CANVAS ───────────────────────────── */
export function WaveCanvas({ color = '#00f0ff' }) {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let t = 0, animId
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const draw = () => {
      const W = canvas.width, H = canvas.height
      ctx.clearRect(0, 0, W, H)
      for (let y = 0; y < H; y += 24) {
        ctx.beginPath()
        for (let x = 0; x <= W; x += 3) {
          const w = Math.sin(x * 0.015 + t + y * 0.02) * 10
            + Math.cos(x * 0.01 + t * 0.7 + y * 0.015) * 6
          x === 0 ? ctx.moveTo(x, y + w) : ctx.lineTo(x, y + w)
        }
        ctx.strokeStyle = color
        ctx.globalAlpha = 0.1 + Math.sin(y * 0.015 + t) * 0.05
        ctx.lineWidth = 1
        ctx.stroke()
      }
      ctx.globalAlpha = 1
      t += 0.016
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animId)
  }, [color])
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', borderRadius: 'inherit' }} />
}

/* ─── MAIN BANNER COMPONENT ─────────────────── */
const ServicesBanner = () => {
  const [heroVis, setHeroVis] = useState(false)
  useEffect(() => { const t = setTimeout(() => setHeroVis(true), 100); return () => clearTimeout(t) }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400;700&display=swap');
        #svc-page { background:#04060f; overflow-x:hidden; font-family:'Inter',sans-serif; }
        @keyframes sv-fadein-left  { from{opacity:0;transform:translateX(-32px)} to{opacity:1;transform:none} }
        @keyframes sv-fadein-right { from{opacity:0;transform:translateX(32px)}  to{opacity:1;transform:none} }
        @keyframes sv-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes sv-marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes sv-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(0,240,255,0.4)} 50%{box-shadow:0 0 0 8px rgba(0,240,255,0)} }
        @keyframes sv-blink { 0%,100%{opacity:1;box-shadow:0 0 6px #00ff88} 50%{opacity:.3;box-shadow:none} }

        #sv-hero {
          padding:140px 6% 90px; position:relative; z-index:1;
          border-bottom:1px solid rgba(0,240,255,0.08);
        }
        #sv-hero::before {
          content:''; position:absolute; inset:0; pointer-events:none;
          background:
            radial-gradient(ellipse at 75% 25%, rgba(123,47,255,0.09) 0%, transparent 55%),
            radial-gradient(ellipse at 15% 75%, rgba(0,240,255,0.06) 0%, transparent 50%);
        }
        .sv-hero-grid {
          max-width:1280px; margin:0 auto;
          display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center;
        }
        .sv-pill {
          display:inline-flex; align-items:center; gap:8px; padding:5px 14px;
          font-family:'Space Mono',monospace; font-size:.68rem; letter-spacing:.1em;
          text-transform:uppercase; color:#00ff88; background:rgba(0,255,136,0.07);
          border:1px solid rgba(0,255,136,0.2); border-radius:100px; margin-bottom:24px;
        }
        .sv-pill-dot { width:6px; height:6px; border-radius:50%; background:#00ff88; animation:sv-blink 2s ease-in-out infinite; }
        #sv-hero h1 {
          font-family:'Syne',sans-serif; font-size:clamp(2.4rem,5vw,4.4rem);
          font-weight:800; line-height:1.05; margin-bottom:20px;
        }
        #sv-hero h1 .white { color:#fff; display:block; }
        #sv-hero h1 .grad {
          display:block;
          background:linear-gradient(100deg,#00f0ff 0%,#7b2fff 55%,#ff2060 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .sv-desc { font-size:1rem; color:rgba(255,255,255,0.46); line-height:1.82; max-width:480px; margin-bottom:36px; }
        .sv-btns { display:flex; gap:14px; flex-wrap:wrap; }
        .sv-btn-p {
          display:inline-flex; align-items:center; gap:8px; padding:13px 28px;
          font-family:'Syne',sans-serif; font-size:.76rem; font-weight:700;
          letter-spacing:.07em; color:#04060f; background:#00f0ff; border-radius:8px;
          text-decoration:none; box-shadow:0 0 24px rgba(0,240,255,0.28);
          transition:box-shadow .25s,transform .2s;
        }
        .sv-btn-p:hover { box-shadow:0 0 48px rgba(0,240,255,0.5); transform:translateY(-2px); color:#04060f; }
        .sv-btn-g {
          display:inline-flex; align-items:center; gap:8px; padding:12px 26px;
          font-family:'Syne',sans-serif; font-size:.76rem; font-weight:700;
          letter-spacing:.07em; color:#00f0ff; background:transparent;
          border:1px solid rgba(0,240,255,0.25); border-radius:8px;
          text-decoration:none; transition:background .2s,box-shadow .2s,transform .2s;
        }
        .sv-btn-g:hover { background:rgba(0,240,255,0.07); box-shadow:0 0 24px rgba(0,240,255,0.18); transform:translateY(-2px); color:#00f0ff; }

        .sv-canvas-wrap {
          position:relative; border-radius:20px; overflow:hidden;
          border:1px solid rgba(0,240,255,0.22);
          box-shadow:0 0 80px rgba(0,240,255,0.08);
          height:520px; background:#04060f;
        }
        .sv-fstat {
          position:absolute; background:rgba(8,13,28,0.92);
          border:1px solid rgba(0,240,255,0.22); border-radius:12px;
          padding:12px 16px; backdrop-filter:blur(20px);
          box-shadow:0 16px 48px rgba(0,0,0,0.6); min-width:130px;
          animation:sv-float 4s ease-in-out infinite;
        }
        .sv-fstat-val { font-family:'Syne',sans-serif; font-size:1.3rem; font-weight:800; color:#00f0ff; line-height:1; margin-bottom:3px; }
        .sv-fstat-lbl { font-family:'Space Mono',monospace; font-size:.58rem; letter-spacing:.07em; color:rgba(255,255,255,0.44); text-transform:uppercase; }

        #sv-stats { background:rgba(8,13,28,0.8); border-top:1px solid rgba(0,240,255,0.08); border-bottom:1px solid rgba(0,240,255,0.08); position:relative; z-index:1; }
        .sv-stats-grid { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); }
        .sv-stat { padding:36px 26px; border-right:1px solid rgba(0,240,255,0.08); position:relative; overflow:hidden; transition:background .3s; }
        .sv-stat:last-child { border-right:none; }
        .sv-stat:hover { background:rgba(0,240,255,0.03); }
        .sv-stat::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#00f0ff,transparent); transform:scaleX(0); transition:transform .4s; }
        .sv-stat:hover::before { transform:scaleX(1); }
        .sv-stat-val { font-family:'Syne',sans-serif; font-size:2.4rem; font-weight:800; color:#00f0ff; line-height:1; margin-bottom:7px; }
        .sv-stat-lbl { font-family:'Space Mono',monospace; font-size:.66rem; letter-spacing:.07em; text-transform:uppercase; color:rgba(255,255,255,0.42); }

        .sv-marquee-wrap { padding:16px 0; overflow:hidden; border-top:1px solid rgba(0,240,255,0.08); border-bottom:1px solid rgba(0,240,255,0.08); background:rgba(8,13,28,0.5); position:relative; z-index:1; }
        .sv-marquee-track { display:flex; gap:56px; width:max-content; animation:sv-marquee 30s linear infinite; }
        .sv-marquee-item { display:inline-flex; align-items:center; gap:9px; font-family:'Space Mono',monospace; font-size:.7rem; letter-spacing:.1em; text-transform:uppercase; color:rgba(255,255,255,0.42); white-space:nowrap; flex-shrink:0; }

        @media (max-width:991px) {
          .sv-hero-grid { grid-template-columns:1fr; gap:40px; }
          .sv-canvas-wrap { height:360px; }
          .sv-fstat { display:none; }
          .sv-stats-grid { grid-template-columns:1fr 1fr; }
        }
        @media (max-width:600px) {
          #sv-hero { padding:110px 5% 60px; }
          .sv-stats-grid { grid-template-columns:1fr 1fr; }
        }
      `}</style>

      <div id="svc-page">
        {/* ══ HERO ══ */}
        <section id="sv-hero">
          <div className="sv-hero-grid">
            {/* Text */}
            <div style={{ opacity: heroVis ? 1 : 0, animation: heroVis ? 'sv-fadein-left 0.8s ease both' : 'none' }}>
              <div className="sv-pill">
                <span className="sv-pill-dot" />
                NIST Level-5 Certified Solutions
              </div>
              <h1>
                <span className="white">Quantum-Grade</span>
                <span className="grad">Services & Solutions.</span>
              </h1>
              <p className="sv-desc">
                From post-quantum cryptography and AI threat intelligence to full-stack
                development and digital marketing — we build and teach the technologies
                that power tomorrow's digital world.
              </p>
              <div className="sv-btns">
                <a href="mailto:hr@goklyn.in" className="sv-btn-p">
                  <i className="fa-solid fa-shield-halved" />
                  Get Protected
                </a>
                <Link to="/contact-us" className="sv-btn-g">
                  <i className="fa-solid fa-envelope" />
                  Contact Us
                </Link>
              </div>
            </div>

            {/* 3D Visual */}
            <div style={{ opacity: heroVis ? 1 : 0, animation: heroVis ? 'sv-fadein-right 0.8s ease 0.15s both' : 'none', position: 'relative' }}>
              <div className="sv-canvas-wrap">
                <CubeCanvas />
                <WaveCanvas color="#00f0ff" />
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                  alt=""
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .12, mixBlendMode: 'screen', pointerEvents: 'none' }}
                />
              </div>
              {/* floating stats */}
              {/* {[
                { val: '99.9%', lbl: 'Detection Rate', style: { top: '12%', left: '-6%', animationDelay: '0s' } },
                { val: '256', lbl: 'Qubits / Op', style: { top: '50%', left: '-6%', animationDelay: '1.2s' } },
                { val: '0.3ms', lbl: 'Response Time', style: { bottom: '12%', right: '-6%', animationDelay: '0.6s' } },
              ].map((s, i) => (
                <div key={i} className="sv-fstat" style={s.style}>
                  <div className="sv-fstat-val">{s.val}</div>
                  <div className="sv-fstat-lbl">{s.lbl}</div>
                </div>
              ))} */}
            </div>
          </div>
        </section>

        {/* ══ STATS ══ */}
        {/* <div id="sv-stats">
          <div className="sv-stats-grid">
            {STATS.map((s, i) => (
              <div className="sv-stat" key={i}>
                <div className="sv-stat-val">{s.val}</div>
                <div className="sv-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* ══ MARQUEE ══ */}
        <div className="sv-marquee-wrap">
          <div className="sv-marquee-track">
            {MARQUEE.map((item, i) => (
              <span key={i} className="sv-marquee-item">
                <span style={{ color: '#00f0ff' }}>◆</span> {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesBanner