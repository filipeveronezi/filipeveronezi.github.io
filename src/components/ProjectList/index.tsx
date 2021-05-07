import React from 'react'

import { Container } from './styles'

import ProjectCard from '../ProjectCard'

import { projects } from '../../projects'

const ProjectList: React.FC = () => {
  return (
    <Container>
      {projects.map((project, index) => (
        <ProjectCard project={project} />
      ))}
    </Container>
  )
}

export default ProjectList
