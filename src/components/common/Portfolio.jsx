import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <section className="portfolio_section py-5">
            <div className="container">
                <div className="row pb-3">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                        <h2 className="text-white">Our Portfolio</h2>
                    </div>
                </div>
                <div className="row justify-content-center" style={{ gap: '20px 0' }}>
                    {/* Government Projects */}
                    <div className="service_item col-lg-6 col-md-8 col-sm-12">
                        <div className="border rounded p-4 shadow-lg bg-black text-white" style={{ borderRadius: '10px', borderColor: 'rgba(0, 240, 255, 0.15)' }}>
                            <h4 className="mb-3" style={{ color: '#00f0ff', fontFamily: "'Syne', sans-serif" }}>Government Projects</h4>
                            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                We collaborate with government agencies to develop secure and efficient solutions 
                                that streamline administrative processes, enhance security, and improve public services. 
                                Our expertise spans infrastructure, cybersecurity, and digital transformation.
                            </p>
                            {/* <div className="btn_wrapper">
                                <Link to="/portfolio" className="text-decoration-none fw-bold" style={{ color: '#00f0ff' }}>Learn More <i className="fa-solid fa-angle-right"></i></Link>
                            </div> */}
                        </div>
                    </div>

                    {/* Client Projects */}
                    <div className="service_item col-lg-6 col-md-8 col-sm-12">
                        <div className="border rounded p-4 shadow-sm bg-black text-white" style={{ borderRadius: '10px', borderColor: 'rgba(0, 240, 255, 0.15)' }}>
                            <h4 className="mb-3" style={{ color: '#00f0ff', fontFamily: "'Syne', sans-serif" }}>Client Projects</h4>
                            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                Our client projects focus on delivering tailored solutions for businesses of all sizes. 
                                From custom software development to scalable cloud-based applications, we help organizations 
                                optimize their operations and enhance customer experiences.
                            </p>
                            {/* <div className="btn_wrapper">
                                <Link to="/portfolio" className="text-decoration-none fw-bold" style={{ color: '#00f0ff' }}>Learn More <i className="fa-solid fa-angle-right"></i></Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;