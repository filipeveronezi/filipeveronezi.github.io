import React from 'react'

import { Container } from './styles'
import Button from '../Button'

const Disclaimer: React.FC = () => {
  return (
    <Container>
      <h2 className="animate-up">Filipe Veronezi</h2>
      <h1 className="animate-up">Front-end Engineer</h1>
      <Button
        text="Contact me"
        link="https://api.whatsapp.com/send?phone=5511972550286"
      />
    </Container>
  )
}

export default Disclaimer
