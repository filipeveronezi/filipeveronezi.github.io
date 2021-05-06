import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
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
`
