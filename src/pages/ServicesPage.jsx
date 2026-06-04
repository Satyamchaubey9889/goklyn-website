import React from 'react'
import ServicesBanner from '../components/Services/ServicesBanner'
import Service from '../components/common/Service'
import WhoWeAre from '../components/common/WhoWeAre'
import Tastimonial from '../components/common/Tastimonial'
import Combo from '../components/common/Combo'
import SecurityProcess from '../components/Services/SecurityProcess'
// import Meet from '../components/common/Meet'

const ServicesPage = () => {
  return (
    <div>
      <ServicesBanner />
      <Service />
      <SecurityProcess />
      <WhoWeAre />
      <Tastimonial />
      {/* <Meet/> */}
    </div>
  )
}

export default ServicesPage