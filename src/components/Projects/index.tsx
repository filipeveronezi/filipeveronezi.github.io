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
        <img src={VueLogo} alt="Vue Logo" />
        <img src={NuxtLogo} alt="Nuxt Logo" />
        <img src={ReactLogo} alt="React Logo" />
        <img src={NextLogo} alt="Next Logo" />
      </TechsContainer>
      <h1>Projects</h1>
      <Button text="GitHub" link="https://github.com/filipeveronezi" />
    </Container>
  )
}

export default Projects
