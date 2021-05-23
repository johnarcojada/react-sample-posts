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
    background-color: #E0E5EC;
    font-family: 'Noto Sans JP', sans-serif;
  }
`

export default GlobalStyle