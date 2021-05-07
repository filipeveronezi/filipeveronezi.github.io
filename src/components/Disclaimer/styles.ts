import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  z-index: 1;

  h1,
  h2 {
    font-family: Inter, sans-serif;
    color: var(--color-primary);
    text-transform: uppercase;
  }

  h2 {
    font-weight: 300;
    font-size: 1.2rem;
    color: #888;
    letter-spacing: 7px;
  }

  h1 {
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: 15px;
  }

  @media (max-width: 1380px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`
