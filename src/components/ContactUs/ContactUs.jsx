import React, { useState } from 'react'

const API_URL = (
    process.env.REACT_APP_API_URL
        ? process.env.REACT_APP_API_URL.replace(/\/+$/, '')
        : 'http://localhost:5000'
) + '/api/contact'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        phone: '',
        emailaddress: '',
        msg: '',
    })
    const [status, setStatus] = useState({ state: 'idle', message: '' }) // idle | submitting | success | error
    const [fieldErrors, setFieldErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus({ state: 'submitting', message: '' })
        setFieldErrors({})

        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullname: formData.fullname,
                    email: formData.emailaddress,
                    phone: formData.phone,
                    message: formData.msg,
                }),
            })

            const data = await res.json()

            if (!res.ok) {
                if (data.errors && Array.isArray(data.errors)) {
                    const errs = {}
                    data.errors.forEach((er) => {
                        errs[er.field] = er.message
                    })
                    setFieldErrors(errs)
                }
                setStatus({ state: 'error', message: data.message || 'Something went wrong. Please try again.' })
                return
            }

            setStatus({ state: 'success', message: data.message || "Thanks for reaching out! We'll get back to you shortly." })
            setFormData({ fullname: '', phone: '', emailaddress: '', msg: '' })
        } catch (err) {
            setStatus({
                state: 'error',
                message: "Couldn't reach the server. Please check your connection and try again.",
            })
        }
    }

    return (
        <>
            <style>{`
        #ct-page {
          background: #04060f;
          min-height: 100vh;
          overflow-x: hidden;
          font-family: 'Poppins', sans-serif;
        }

        /* ── shared structural parameters ── */
        .ct-inner { max-width: 1280px; margin: 0 auto; }
        .ct-tag {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Poppins', sans-serif; font-size: .66rem;
          letter-spacing: .14em; text-transform: uppercase; color: #00f0ff;
          margin-bottom: 14px;
        }
        .ct-tag::before { content:''; width:14px; height:1px; background:#00f0ff; flex-shrink:0; }

        .ct-h2 {
          font-family: 'Montserrat', sans-serif;
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
          padding: 5px 14px; font-family: 'Poppins', sans-serif;
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
          font-family: 'Montserrat', sans-serif; font-size: clamp(2.4rem, 5vw, 4.2rem);
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
        
        /* Two-column Master Layout Split matching your uploaded design framework */
        .ct-comms-grid {
          display: grid; 
          grid-template-columns: 1.25fr 0.75fr; 
          gap: 40px;
          align-items: start;
        }

        /* Left Side: Form Panel */
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
          font-family: 'Montserrat', sans-serif; font-size: 1.35rem; font-weight: 800;
          color: #fff; margin-bottom: 28px;
          margin-top: 0;
        }

        /* Nested input grid structure matching image reference alignment */
        .ct-form-row {
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 20px; 
          margin-bottom: 24px;
        }
        .ct-full-width-input {
          grid-column: span 2;
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
          display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 14px 32px;
          font-family: 'Montserrat', sans-serif; font-size: .78rem; font-weight: 700;
          letter-spacing: .07em; color: #04060f; background: #00f0ff; border-radius: 8px;
          border: none; cursor: pointer; text-transform: uppercase;
          box-shadow: 0 0 24px rgba(0,240,255,0.22);
          transition: box-shadow .25s, transform .2s, background-color .2s;
          width: 100%; /* Spans full width at bottom of form card */
        }
        .ct-submit-btn:hover {
          box-shadow: 0 0 48px rgba(0,240,255,0.45); transform: translateY(-2px);
          background: #e0ffff;
        }
        .ct-submit-btn i { font-size: 0.65rem; transition: transform 0.2s; }
        .ct-submit-btn:hover i { transform: translateX(3px); }
        .ct-submit-btn:disabled {
          opacity: 0.6; cursor: not-allowed; transform: none;
          box-shadow: 0 0 24px rgba(0,240,255,0.22);
        }

        .ct-field-error {
          color: #ff5470; font-size: 0.76rem; margin-top: 4px;
        }

        .ct-status-msg {
          margin-bottom: 20px; padding: 12px 16px; border-radius: 10px;
          font-size: 0.85rem; line-height: 1.5;
        }
        .ct-status-msg.success {
          background: rgba(0, 230, 130, 0.08); border: 1px solid rgba(0, 230, 130, 0.3); color: #4fffb0;
        }
        .ct-status-msg.error {
          background: rgba(255, 60, 90, 0.08); border: 1px solid rgba(255, 60, 90, 0.3); color: #ff8597;
        }

        /* Right Side: Information Content Stack */
        .ct-info-stack { display: flex; flex-direction: column; gap: 24px; }
        
        .ct-info-box {
          background: rgba(255, 255, 255, 0.012);
          border: 1px solid rgba(0, 240, 255, 0.08);
          border-radius: 20px; padding: 36px;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }
        .ct-details-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ct-info-row-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .ct-info-icon-frame {
          width: 24px; height: 24px;
          display: flex; align-items: center; justify-content: center;
          color: #00f0ff; font-size: 1.1rem; flex-shrink: 0;
        }
        .ct-info-row-item h5 {
          font-family: 'Poppins', sans-serif; font-size: 0.65rem;
          color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 0.05em;
          margin: 0 0 4px 0;
          display: none; /* Removed title strings contextually for sleek alignment */
        }
        .ct-info-row-item p { font-size: 0.95rem; color: #fff; margin: 0; font-weight: 500; line-height: 1.5; }
        .ct-info-row-item p a { color: #fff; text-decoration: none; transition: color 0.2s; }
        .ct-info-row-item p a:hover { color: #00f0ff; }

        /* Map Embed Alignment Frame */
        .ct-map-box {
          background: rgba(255, 255, 255, 0.012);
          border: 1px solid rgba(0, 240, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
          width: 100%;
          height: 250px;
          position: relative;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
          transition: border-color .3s;
        }
        .ct-map-box:hover {
          border-color: rgba(0, 240, 255, 0.22);
        }
        .ct-map-box iframe {
          width: 100%;
          height: 100%;
          border: 0;
          filter: grayscale(1) invert(0.92) contrast(1.2); 
          opacity: 0.85;
          transition: filter 0.3s, opacity 0.3s;
        }
        .ct-map-box:hover iframe {
          filter: grayscale(0.3) invert(0) contrast(1);
          opacity: 1;
        }

        /* ── Responsive Viewports ── */
        @media (max-width: 991px) {
          .ct-hero-grid { grid-template-columns: 1fr; gap: 48px; }
          #ct-hero { padding-top: 120px; padding-bottom: 70px; }
          .ct-image-frame { max-width: 550px; margin: 0 auto; aspect-ratio: 16/10; }
          .ct-comms-grid { grid-template-columns: 1fr; gap: 48px; }
          .ct-form-panel { padding: 32px 24px; }
        }

        @media (max-width: 768px) {
          .ct-form-row { grid-template-columns: 1fr; }
          .ct-full-width-input { grid-column: span 1; }
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
                                    Home  <i className="fa-solid fa-angles-right"></i>  <span className="sub_span">Contact</span>
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

                            {/* Left Side Container: Dynamic Message Fields */}
                            <div>
                                <div className="ct-form-panel">
                                    <h4>Send us a Message</h4>

                                    {status.state === 'success' && (
                                        <div className="ct-status-msg success">
                                            <i className="fa-solid fa-circle-check" style={{ marginRight: 8 }} />
                                            {status.message}
                                        </div>
                                    )}
                                    {status.state === 'error' && (
                                        <div className="ct-status-msg error">
                                            <i className="fa-solid fa-circle-exclamation" style={{ marginRight: 8 }} />
                                            {status.message}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} noValidate>
                                        <div className="ct-form-row">
                                            <div>
                                                <input
                                                    type="text"
                                                    name="fullname"
                                                    id="name"
                                                    className="ct-input-field"
                                                    placeholder="Name:"
                                                    value={formData.fullname}
                                                    onChange={handleChange}
                                                    disabled={status.state === 'submitting'}
                                                    required
                                                />
                                                {fieldErrors.fullname && <div className="ct-field-error">{fieldErrors.fullname}</div>}
                                            </div>

                                            <div>
                                                <input
                                                    type="email"
                                                    name="emailaddress"
                                                    id="emailaddrs"
                                                    className="ct-input-field"
                                                    placeholder="Email:"
                                                    value={formData.emailaddress}
                                                    onChange={handleChange}
                                                    disabled={status.state === 'submitting'}
                                                    required
                                                />
                                                {fieldErrors.email && <div className="ct-field-error">{fieldErrors.email}</div>}
                                            </div>

                                            <div className="ct-full-width-input">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    id="phonenum"
                                                    className="ct-input-field"
                                                    placeholder="Phone:"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    disabled={status.state === 'submitting'}
                                                />
                                                {fieldErrors.phone && <div className="ct-field-error">{fieldErrors.phone}</div>}
                                            </div>

                                            <div className="ct-full-width-input">
                                                <textarea
                                                    rows="5"
                                                    name="msg"
                                                    id="comment"
                                                    className="ct-input-field"
                                                    placeholder="Message:"
                                                    value={formData.msg}
                                                    onChange={handleChange}
                                                    disabled={status.state === 'submitting'}
                                                    required
                                                ></textarea>
                                                {fieldErrors.message && <div className="ct-field-error">{fieldErrors.message}</div>}
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            name="get_started"
                                            id="started"
                                            className="ct-submit-btn"
                                            disabled={status.state === 'submitting'}
                                        >
                                            {status.state === 'submitting' ? (
                                                <>Sending <i className="fa-solid fa-spinner fa-spin" /></>
                                            ) : (
                                                <>Submit Now <i className="fa-solid fa-angle-right" /></>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Right Side Container: Info stack card & Map box */}
                            <div className="ct-info-stack">
                                <div className="ct-info-box">
                                    <h2 className="ct-h2" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Contact Info</h2>

                                    <div className="ct-details-wrapper">
                                        <div className="ct-info-row-item">
                                            <div className="ct-info-icon-frame">
                                                <i className="fa-solid fa-location-dot" />
                                            </div>
                                            <div>
                                                <h5>Location:</h5>
                                                <p>
                                                    <a href="https://maps.app.goo.gl/DapSZegfKc3xs84w8" target="_blank" rel="noreferrer">
                                                        Jaipur
                                                    </a>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="ct-info-row-item">
                                            <div className="ct-info-icon-frame">
                                                <i className="fa-solid fa-envelope" />
                                            </div>
                                            <div>
                                                <h5>Email Us:</h5>
                                                <p><a href="mailto:hr@goklyn.in">hr@goklyn.in</a></p>
                                            </div>
                                        </div>

                                        <div className="ct-info-row-item">
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

                                {/* ── GOOGLE MAPS EMBED BOX ── */}
                                <div className="ct-map-box">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d541785.9429943709!2d75.66306809093062!3d26.863336021043917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc17923ff319f%3A0x858197dd7f260fb2!2sGoklyn%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1782753163267!5m2!1sen!2sin"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        title="Goklyn Location Map Telemetry"
                                    />
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