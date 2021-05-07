import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body {
    overflow-x: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    font-family: Inter, sans-serif;
  }

  :root {
    --bg-primary: #363333;
    --bg-secondary: #151515;
    --color-primary: #eee;
    --color-secondary: #a685e2;
  }

  @keyframes up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-up {
  animation-name: up;
  animation-duration: 300ms;
  animation-fill-mode: backwards;
}
`
