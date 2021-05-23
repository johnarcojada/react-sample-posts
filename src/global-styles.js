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
  .photo-card-enter {
    opacity: 0;
    transform: translateY(2rem);
  }
  .photo-card-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all .6s;
  }
  .photo-card-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .photo-card-exit-active {
    opacity: 0;
    transform: translateY(2rem);
    transition: all .6s;
  }
`

export default GlobalStyle