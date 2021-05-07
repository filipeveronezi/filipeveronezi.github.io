import React from 'react'

import { Container, TechsContainer } from './styles'

import VueLogo from '../../assets/vue.svg'
import NuxtLogo from '../../assets/nuxt.svg'
import ReactLogo from '../../assets/react.svg'
import NextLogo from '../../assets/next.svg'
import Button from '../Button'

const Projects: React.FC = () => {
  return (
    <Container>
      <TechsContainer>
        <img src={VueLogo} alt="Vue Logo" className="animate-up" />
        <img src={NuxtLogo} alt="Nuxt Logo" className="animate-up" />
        <img src={ReactLogo} alt="React Logo" className="animate-up" />
        <img src={NextLogo} alt="Next Logo" className="animate-up" />
      </TechsContainer>
      <h1 className="animate-up">Projects</h1>
      <Button text="GitHub" link="https://github.com/filipeveronezi" />
    </Container>
  )
}

export default Projects
