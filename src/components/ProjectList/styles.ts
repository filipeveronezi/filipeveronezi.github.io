import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 23px;
  margin: 40px 0;

  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`
