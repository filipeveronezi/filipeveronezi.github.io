import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 10rem;
  align-items: center;
  justify-items: center;

  &.gray {
    --bg-color: var(--bg-primary);
  }

  &.black {
    --bg-color: var(--bg-secondary);
  }

  background: var(--bg-color);

  h1,
  h2 {
    font-family: Inter, sans-serif;
    color: var(--color-primary);
    text-transform: uppercase;
  }

  h2 {
    font-weight: 300;
    font-size: 1.2rem;
    opacity: 20%;
    letter-spacing: 7px;
  }

  h1 {
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: 15px;
  }

  @media (min-width: 1720px) {
    padding: 0 20rem;
  }
`
