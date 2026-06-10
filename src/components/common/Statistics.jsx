import React from 'react'

const Statistics = () => {
    return (
        <>
            <section className="statistics_section position-relative">
            <h2 className='text-center text-white' data-aos="fade-up" data-aos-duration="2000">Projects</h2>
                <div className="container">
                    <div className="row" data-aos="fade-up" data-aos-duration="2000">
                    

                        <p className='text-center text-white text-light'>Coming Soon..</p>
                    </div>
                    <figure className="statistics_left_shape mb-0 position-absolute top_bottom_shape">
                        <img src="/assets/images/statistics_lefts_shape.png" alt="" className="img-fluid" />
                    </figure>
                    <figure className="statistics_right_shape mb-0 position-absolute top_bottom_shape">
                        <img src="/assets/images/statistics_right_shape.png" alt="" className="img-fluid" />
                    </figure>
                </div>
            </section>
        </>
    )
}

export default Statistics