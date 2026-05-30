import React from 'react'
import ProjectBanner from '../components/Projects/ProjectBanner'
import Portfolio from '../components/common/Portfolio'
import Statistics from '../components/common/Statistics'
import Tastimonial from '../components/common/Tastimonial'
// import Combo from '../components/common/Combo'
import Meet from '../components/common/Meet'

const ProjectPage = () => {
  return (
    <div>
        <ProjectBanner/>
        <Portfolio/>
        <Statistics/>
    </div>
  )
}

export default ProjectPage