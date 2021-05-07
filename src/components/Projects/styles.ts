import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 0.8fr;
  align-items: center;
  justify-items: start;

  h1 {
    font-family: Inter, sans-serif;
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--color-primary);
    letter-spacing: 15px;
  }

  @media (max-width: 1150px) {
    grid-row: 1;
    justify-items: center;

    margin: 40px 0;

    h1 {
      font-size: 2rem;
    }
  }
`

export const TechsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0;
  align-items: center;
  justify-items: start;
`
