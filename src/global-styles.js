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
  .Toastify__toast {
    color: #000;
  }
  .toast-progress-bar-error {
    background: #CB3527;
  }
  .toast-progress-bar-success {
    background: #12a95c;
  }
  .sidebar.animate-enter .sidebar-overlay,
  .sidebar.animate-enter .sidebar-wrapper {
    opacity: 0;
  }
  .sidebar.animate-enter .sidebar-wrapper {
    transform: translateX(360px)
  }
  .sidebar.animate-enter-active .sidebar-overlay,
  .sidebar.animate-enter-active .sidebar-wrapper {
    opacity: 1;
    transition: all .3s;
  }
  .sidebar.animate-enter-active .sidebar-wrapper {
    transform: translateX(0)
  }
  .sidebar.animate-exit .sidebar-overlay,
  .sidebar.animate-exit .sidebar-wrapper {
    opacity: 1;
  }
  .sidebar.animate-exit .sidebar-wrapper {
    transform: translateX(0)
  }
  .sidebar.animate-exit-active .sidebar-overlay,
  .sidebar.animate-exit-active .sidebar-wrapper {
    opacity: 0;
    transition: all .3s;
  }
  .sidebar.animate-exit-active .sidebar-wrapper {
    transform: translateX(360px)
  }
`

export default GlobalStyle