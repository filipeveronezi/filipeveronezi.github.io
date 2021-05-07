import styled from 'styled-components'

export const ButtonStyled = styled.a`
  width: 227px;
  height: 43px;
  margin-top: 33px;

  font-family: Inter, sans-serif;
  font-weight: 300;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: var(--color-primary);
  text-decoration: none;

  display: grid;
  place-items: center;

  background: rgba(255, 255, 255, 0);
  outline: none;
  border: 1px solid var(--color-primary);

  cursor: pointer;
  transition: 0.4s;

  z-index: 2;

  &:hover {
    background: var(--color-secondary);
  }
`
