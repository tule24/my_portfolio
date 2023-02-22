import React from 'react'
import { ProjectCard } from './'
const Projects = () => {
  return (
    <div id='projects' className='mt-10'>
      <div className='flex items-center mb-10'>
        <h1 className='ribbon'>Projects</h1>
      </div>
      <div>
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects