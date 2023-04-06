import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import AnsungtangmyunBold from '../font/Ansungtangmyun-Bold.ttf';
import EF_jejudoldam from '../font/EF_jejudoldam.ttf';
import Nanum from '../font/Nanum.ttf';

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
  @font-face {
    font-family: "IBMPlexSansKR-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }  
  @font-face{
    font-family: "Nanum";
    src: url(${Nanum})
  }
  body{
    font-family: IBMPlexSansKR-Regular;
  }
  `;

export default GlobalStyle;
