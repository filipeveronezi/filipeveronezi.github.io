import React from 'react'

import { Card } from './styles'

interface Project {
  title: string
  url: string
}

interface Props {
  project: Project
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Card>
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={project.url ? '' : 'inactive'}
      >
        {project.title}
      </a>
    </Card>
  )
}

export default ProjectCard
