import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background-color: #fff;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;