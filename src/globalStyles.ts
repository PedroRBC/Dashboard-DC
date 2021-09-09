import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'FiraCode', 'Roboto';
  }
  
  html, body {
    width: 100%;
    height: 100%;
}
  body {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
`

export default GlobalStyle;
