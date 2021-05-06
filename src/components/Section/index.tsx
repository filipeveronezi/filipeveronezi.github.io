import React from 'react'

import { Container } from './styles'

interface Props {
  variant: 'gray' | 'black'
  left: React.ReactNode | null
  right: React.ReactNode | null
}

const Section: React.FC<Props> = ({ left, right, variant }) => {
  return (
    <Container className={variant}>
      {left}
      {right}
    </Container>
  )
}

export default Section
