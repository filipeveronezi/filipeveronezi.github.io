import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 10rem;
  align-items: center;
  justify-items: center;

  position: relative;

  &.gray {
    --bg-color: var(--bg-primary);
  }

  &.black {
    --bg-color: var(--bg-secondary);
  }

  background: var(--bg-color);

  @media (min-width: 1720px) {
    padding: 0 20rem;
  }

  @media (max-width: 1150px) {
    grid-template-columns: 1fr;
    position: relative;
  }

  @media (max-width: 780px) {
    padding: 0 5%;
  }
`

export const WaveContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;

  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
  }
`
