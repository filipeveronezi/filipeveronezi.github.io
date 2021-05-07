import React from 'react'

import { Container, WaveContainer } from './styles'

interface Props {
  variant: 'gray' | 'black'
  left: React.ReactNode | null
  right: React.ReactNode | null
  wave: boolean
}

const Section: React.FC<Props> = ({ left, right, variant, wave }) => {
  return (
    <Container className={variant}>
      {left}
      {right}
      {wave && (
        <WaveContainer>
          <svg
            width="1920"
            height="308"
            viewBox="0 0 1920 308"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1L80 39.4989C160 77.3341 320 154.332 480 192.167C640 230.666 800 230.666 960 224.028C1120 218.054 1280 204.779 1440 211.416C1600 218.054 1760 243.278 1840 255.889L1920 268.501V307H1840C1760 307 1600 307 1440 307C1280 307 1120 307 960 307C800 307 640 307 480 307C320 307 160 307 80 307H0V1Z"
              fill="#A685E2"
              stroke="#A685E2"
            />
          </svg>
        </WaveContainer>
      )}
    </Container>
  )
}

export default Section
