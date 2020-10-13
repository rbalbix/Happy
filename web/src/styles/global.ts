import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

}

body {
  color: #FFF;
  background: #ebf2f5;

}

html {
  font-size: 62.5%;
}

body, input, button, textarea {
  font: 600 1.8rem Nunito, sans-serif;
}

`;

export default GlobalStyle;
