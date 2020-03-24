import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0 ;
    box-sizing: border-box;
  }
  body {
    background: #f4f4f4;
    -webkit-font-smoothing: antialiased !important
  }
  body, input, button {
    font: 14px Roboto, sans-serif;
  }
  #root {
    height: 100%;
  }
  button {
    cursor: pointer;
  }
`;
