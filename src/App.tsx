import React from 'react'
import GlobalStyles from './styles/GlobalStyles'

import Section from './components/Section/'
import Disclaimer from './components/Disclaimer'
import Illustration from './components/Illustration'

function App() {
  return (
    <>
      <Section
        variant="gray"
        left={<Disclaimer />}
        right={<Illustration />}
      ></Section>
      {/* <Section variant="black"></Section> */}
      <GlobalStyles />
    </>
  )
}

export default App
