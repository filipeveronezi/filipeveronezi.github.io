import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;

  img {
    max-height: 900px;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 1150px) {
    position: absolute;
    right: 0;
    left: 10%;
    img {
      z-index: 0;
    }
  }
`
