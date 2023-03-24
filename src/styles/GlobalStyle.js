import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import AnsungtangmyunBold from '../font/Ansungtangmyun-Bold.ttf';
import EF_jejudoldam from '../font/EF_jejudoldam.ttf';

const GlobalStyle = createGlobalStyle`
${reset}  
@font-face {
    font-family: "AnsungtangmyunBold";
    src: url(${AnsungtangmyunBold})
  }
  @font-face{
    font-family: "EF_jejudoldam";
    src: url(${EF_jejudoldam})
  }
  body{
    font-family: EF_jejudoldam;
  }
  
  `;

export default GlobalStyle;
