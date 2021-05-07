import React from 'react'
import GlobalStyles from './styles/GlobalStyles'

import Section from './components/Section/'
import Disclaimer from './components/Disclaimer'
import Illustration from './components/Illustration'
import ProjectList from './components/ProjectList'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Section
        variant="gray"
        left={<Disclaimer />}
        right={<Illustration />}
        wave={true}
      ></Section>
      <Section
        variant="black"
        left={<ProjectList />}
        right={<Projects />}
        wave={false}
      ></Section>
      <GlobalStyles />
    </>
  )
}

export default App
