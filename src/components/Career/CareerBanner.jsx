import React from 'react'
import { Link } from 'react-router-dom'

const CareerBanner = () => {
    return (
        <>
            <section className="banner-section position-relative" style={{ paddingTop: '200px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="banner-section-content">
                                <h1 className="text-white" data-aos="fade-up" data-aos-duration="2000">Join Goklyn Technologies</h1>
                                <p className="text-white" data-aos="fade-right" data-aos-duration="2000">
                                    Build the Future with Us!
                                </p>
                                <p className='text-white' data-aos="fade-right" data-aos-duration="2000">
                                    Are you passionate about AI, Machine Learning, Full-Stack Development, Data Science, Cyber Security, Python, React, SEO, Digital Marketing.

                                    At Goklyn Technologies, we offer internships and project-based opportunities to help students and professionals gain real-world exposure while working on cutting-edge innovations.
                                </p>
                                <div className="btn_wrapper" data-aos="fade-up" data-aos-duration="2000">
                                    <span> Home </span><i className="fa-solid fa-angles-right" aria-hidden="true"></i><span className="sub_span">Careers</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="banner_image position-relative">
                                <figure className="banner_main_image mb-0 left_right_shape">
                                    <img src="/assets/newImages/career.jpg" alt="" style={{ borderRadius: '45px', width: '650px', objectFit: 'contain' }} />
                                </figure>
                                <figure className="banner_image_bottom_shape mb-0 position-absolute top_bottom_shape">
                                    <img src="/assets/images/sub_banner_image_bottom_shape.png" alt="" className="img-fluid" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <figure className="banner_top_shape mb-0 position-absolute top_bottom_shape">
                <img src="/assets/images/sub_banner_top_shape.png" alt="" className="img-fluid" />
            </figure>
            <figure className="banner_background_shape mb-0 position-absolute left_right_shape">
                <img src="/assets/images/sub_banner_background_shape.png" alt="" />
            </figure>


            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="fw-bold text-white mb-4">Why Join Goklyn Technologies?</h2>
                        <p className="lead text-muted mb-4">
                            Unlock real-world experience, mentorship, and career growth with us.
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {[
                        { icon: "🚀", title: "Real-World Experience", text: "Work on live projects and build an impressive portfolio." },
                        { icon: "💡", title: "Learn from Industry Experts", text: "Get mentorship from seasoned professionals." },
                        { icon: "🌍", title: "Flexible & Remote Opportunities", text: "Work from anywhere, at your own pace." },
                        { icon: "🎯", title: "Skill Development", text: "Enhance your expertise in AI, ML, Full-Stack Development, Cyber Security, SEO, and more." },
                        { icon: "🤝", title: "Networking & Career Growth", text: "Connect with top talents and unlock new opportunities." }
                    ].map((item, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div className="card shadow-sm h-100 join">
                                <div className="card-body text-start">
                                    <h5 className="card-title fw-bold">{item.icon} {item.title}</h5>
                                    <p className="card-text">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row justify-content-center" style={{ marginTop: '150px' }}>
                    <div className="col-lg-8 text-center">
                        <h2 className="fw-bold text-white mb-4">Internships & Projects We Offer</h2>
                        <p className="lead text-muted mb-4">
                            Explore diverse opportunities tailored to your skills and interests.
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {[
                        { icon: "🔸", title: "Machine Learning & AI", text: "Work on predictive models, NLP, and deep learning solutions." },
                        { icon: "🔸", title: "Full-Stack Development", text: "Build scalable applications with modern frameworks." },
                        { icon: "🔸", title: "Data Science & Analytics", text: "Analyze big data and extract meaningful insights." },
                        { icon: "🔸", title: "Python Development", text: "Create powerful applications and automate solutions." },
                        { icon: "🔸", title: "React Development", text: "Build dynamic, user-friendly web applications." },
                        { icon: "🔸", title: "Cyber Security", text: "Work on ethical hacking, penetration testing, and security audits." },
                        { icon: "🔸", title: "Digital Marketing & SEO", text: "Master online growth strategies and optimize digital presence." },
                        { icon: "🔸", title: "And More!", text: "We are open to exploring new domains based on your skills and interests." }
                    ].map((item, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div className="card shadow-sm h-100 join">
                                <div className="card-body text-start">
                                    <h5 className="card-title fw-bold">{item.icon} {item.title}</h5>
                                    <p className="card-text">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="row justify-content-center" style={{marginTop : '150px'}}>
                <div className="col-lg-8 text-center">
                    <h2 className="fw-bold text-white mb-4">Don’t See Your Domain Listed?</h2>
                    <p className="lead text-muted mb-4">
                        At Goklyn Technologies, we believe in continuous innovation. If you have expertise in a field not listed above but think you can contribute, we’d love to hear from you!
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h2 className="fw-bold text-white mb-4">How to Apply?</h2>
                    <p className="lead text-muted mb-2">📩 Send your resume & a short introduction to <a href="mailto:contact@goklyn.com">hr@goklyn.in</a></p>
                    <p className="lead text-muted mb-4">🔗 Or visit <Link to='/contact-us'>Goklyn Technologies</Link> to explore current opportunities.</p>
                    <h3 className="fw-bold text-white">Join Goklyn Technologies and turn your passion into innovation!</h3>
                </div>
            </div>
        </>
    )
}

export default CareerBanner