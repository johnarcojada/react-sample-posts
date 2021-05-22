import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  *, ::before, ::after {
    box-sizing: border-box;
  }
  body, html, #root {
    height: 100%;
    width: 100%;
  }
`

export default GlobalStyle