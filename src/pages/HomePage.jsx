import React from 'react'
import Banner from '../components/Home/Banner'
import Statistics from '../components/common/Statistics'
import Service from '../components/common/Service'
import About from '../components/Home/About'
import WhoWeAre from '../components/common/WhoWeAre'
import HowWeWork from '../components/Home/HowWeWork'

const HomePage = () => {
    return (
        <div>
            {/* Quantum redesigned hero + marquee + services grid + stats band */}
            <Banner />
            <HowWeWork />
            {/* Original sections below — kept exactly as-is */}
            <About />
            <WhoWeAre />
        </div>
    )
}

export default HomePage
