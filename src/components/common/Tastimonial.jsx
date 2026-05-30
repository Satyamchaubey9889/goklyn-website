import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from 'react-slick';
const Tastimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Show more slides for larger screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1, dots: false },
            },
        ],
    };

    return (
        <>
            <section className="testimonials_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="testimonials_content">
                                <h6>Testimonials</h6>
                                <h2>Hear it From Our Clients</h2>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row" data-aos="fade-up">
                        <Slider {...settings} className='vs-carousel' >
                            <div className="item px-2">
                                <div className="testimonials_box">
                                    <div className="testimonials_image">
                                        <figure className="mb-0"><img src="/assets/images/testimonial_image1.png" alt="" className="img-fluid hover-effect" /></figure>
                                        <div className="testimonials_image_content_wrappper">
                                            <p className="person_name">Kevin Andrew</p>
                                            <p className="testimonials_text text-size-16 mb-0">Head of informatics at EBI</p>
                                        </div>
                                    </div>
                                    <p className="testimonials_paragraph mb-0"><span>“</span>Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.<span>”</span></p>
                                    <figure className="testimonial_apostrophy_shape position-absolute mb-0"><img src="/assets/images/testimonial_apostrophy_shape.png" alt="" className="img-fluid hover-effect" /></figure>
                                </div>
                            </div>
                            <div className="item px-2">
                                <div className="testimonials_box">
                                    <div className="testimonials_image">
                                        <figure className="mb-0"><img src="/assets/images/testimonial_image2.png" alt="" className="img-fluid hover-effect" /></figure>
                                        <div className="testimonials_image_content_wrappper">
                                            <p className="person_name">Perin Rames</p>
                                            <p className="testimonials_text text-size-16 mb-0">Head of Management at ZE</p>
                                        </div>
                                    </div>
                                    <p className="testimonials_paragraph mb-0"><span>“</span>Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.<span>”</span></p>
                                    <figure className="testimonial_apostrophy_shape position-absolute mb-0"><img src="/assets/images/testimonial_apostrophy_shape.png" alt="" className="img-fluid hover-effect" /></figure>
                                </div>
                            </div>
                            <div className="item px-2">
                                <div className="testimonials_box">
                                    <div className="testimonials_image">
                                        <figure className="mb-0"><img src="/assets/images/testimonial_image1.png" alt="" className="img-fluid hover-effect" /></figure>
                                        <div className="testimonials_image_content_wrappper">
                                            <p className="person_name">Kevin Andrew</p>
                                            <p className="testimonials_text text-size-16 mb-0">Head of informatics at EBI</p>
                                        </div>
                                    </div>
                                    <p className="testimonials_paragraph mb-0"><span>“</span>Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.<span>”</span></p>
                                    <figure className="testimonial_apostrophy_shape position-absolute mb-0"><img src="/assets/images/testimonial_apostrophy_shape.png" alt="" className="img-fluid hover-effect" /></figure>
                                </div>
                            </div>
                            <div className="item px-2">
                                <div className="testimonials_box">
                                    <div className="testimonials_image">
                                        <figure className="mb-0"><img src="/assets/images/testimonial_image2.png" alt="" className="img-fluid hover-effect" /></figure>
                                        <div className="testimonials_image_content_wrappper">
                                            <p className="person_name">Perin Rames</p>
                                            <p className="testimonials_text text-size-16 mb-0">Head of Management at ZE</p>
                                        </div>
                                    </div>
                                    <p className="testimonials_paragraph mb-0"><span>“</span>Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.<span>”</span></p>
                                    <figure className="testimonial_apostrophy_shape position-absolute mb-0"><img src="/assets/images/testimonial_apostrophy_shape.png" alt="" className="img-fluid hover-effect" /></figure>
                                </div>
                            </div>
                            <div className="item px-2">
                                <div className="testimonials_box">
                                    <div className="testimonials_image">
                                        <figure className="mb-0"><img src="/assets/images/testimonial_image1.png" alt="" className="img-fluid hover-effect" /></figure>
                                        <div className="testimonials_image_content_wrappper">
                                            <p className="person_name">Kevin Andrew</p>
                                            <p className="testimonials_text text-size-16 mb-0">Head of informatics at EBI</p>
                                        </div>
                                    </div>
                                    <p className="testimonials_paragraph mb-0"><span>“</span>Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.<span>”</span></p>
                                    <figure className="testimonial_apostrophy_shape position-absolute mb-0"><img src="/assets/images/testimonial_apostrophy_shape.png" alt="" className="img-fluid hover-effect" /></figure>
                                </div>
                            </div>
                            <div className="item px-2">
                                <div className="testimonials_box">
                                    <div className="testimonials_image">
                                        <figure className="mb-0"><img src="/assets/images/testimonial_image2.png" alt="" className="img-fluid hover-effect" /></figure>
                                        <div className="testimonials_image_content_wrappper">
                                            <p className="person_name">Perin Rames</p>
                                            <p className="testimonials_text text-size-16 mb-0">Head of Management at ZE</p>
                                        </div>
                                    </div>
                                    <p className="testimonials_paragraph mb-0"><span>“</span>Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.<span>”</span></p>
                                    <figure className="testimonial_apostrophy_shape position-absolute mb-0"><img src="/assets/images/testimonial_apostrophy_shape.png" alt="" className="img-fluid hover-effect" /></figure>
                                </div>
                            </div>
                        </Slider>
                    </div> */}
                    <p className='text-center text-white'>Coming Soon..</p>
                    <figure className="testimonials_background_shape mb-0 position-absolute left_right_shape">
                        <img src="/assets/images/testimonial_background_shape.jpg" alt="" />
                    </figure>
                    <figure className="testimonials_top_shape mb-0 position-absolute top_bottom_shape">
                        <img src="/assets/images/testimonial_top_shape.png" alt="" className="img-fluid" />
                    </figure>
                </div>
            </section>
        </>
    )
}

export default Tastimonial;
