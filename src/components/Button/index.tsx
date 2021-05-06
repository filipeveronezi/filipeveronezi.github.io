import React from 'react'

import { ButtonStyled } from './styles'

interface Props {
  text: string
  link?: string
}

const Button: React.FC<Props> = ({ text, link }) => {
  return (
    <ButtonStyled href={link} target="_blank" rel="noopener">
      {text}
    </ButtonStyled>
  )
}

export default Button
