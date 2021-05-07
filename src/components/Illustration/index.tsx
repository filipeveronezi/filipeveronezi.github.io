import React from 'react'

import { Container } from './styles'
import Image from '../../assets/illustration.svg'

const Illustration: React.FC = () => {
  return (
    <Container>
      <img src={Image} alt="Illustration" className="animate-up" />
    </Container>
  )
}

export default Illustration
