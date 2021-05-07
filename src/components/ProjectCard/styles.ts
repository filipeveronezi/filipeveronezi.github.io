import styled from 'styled-components'

export const Card = styled.div`
  width: 174px;
  height: 174px;
  background: var(--bg-primary);

  cursor: pointer;
  transition: 0.4s;
  box-shadow: 0 0 15px #000;

  padding: 0 5%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: auto;
    height: 100%;
    color: var(--color-primary);
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 300;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 7px;
    margin-right: -7px;
    text-align: center;
    line-height: 1.5;
  }

  &:hover {
    background: var(--color-secondary);
  }
`
