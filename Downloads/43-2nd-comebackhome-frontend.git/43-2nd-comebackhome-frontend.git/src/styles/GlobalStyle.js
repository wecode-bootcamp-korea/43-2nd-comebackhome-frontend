import { createGlobalStyle } from 'styled-components';
import AnsungtangmyunBold from '../font/Ansungtangmyun-Bold.ttf';
import EF_jejudoldam from '../font/EF_jejudoldam.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "AnsungtangmyunBold";
    src: url(${AnsungtangmyunBold})
  }
  @font-face{
    font-family: "EF_jejudoldam";
    src: url(${EF_jejudoldam})
  }
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,button{margin:0;padding:0}
fieldset,img{border:0 none}
dl,ul,ol,menu,li{list-style:none}
blockquote, q{quotes:none }
blockquote:before, blockquote:after,q:before, q:after{content:'';content:none}
input,select,textarea,button{verticfal-align:middle}
input::-ms-clear{display:none}
button{border:0 none;background-color:transparent;cursor:pointer}
body{background:#fff}
body,th,td,input,select,textarea,button{font-size:14px;line-height:1.5;font-family:EF_jejudoldam;color:#333}

a{color:#333;text-decoration:none}
a:active, a:hover{text-decoration:underline}
a:active{background-color:transparent}
address,caption,cite,code,dfn,em,var{font-style:normal;font-weight:normal}
/* Form */
textarea {border:1px solid #dbdbdb}
select {height:32px;font-size:13px;color:#373737;border:1px solid #e9e9e9;background:#fff;border-radius:5px}
input[type=tel],
input[type=time],
input[type=text],
input[type=password],
input[type=search],
input[type=email],
input[type=file],
input[type=url],
input[type=number],
input[type=date],textarea {width:100%;height:30px;font-size:13px;color:#373737;border:1px solid #e9e9e9;background:#fff;transition:all 0.5s;vertical-align:middle}
input::-webkit-input-placeholder{color:#b5b5b5;font-size:12px;line-height:100%}
select:focus,
textarea:focus,
input:focus {border: 1px solid #727272}
main,header,section,nav,footer,aside,article,figure{display:block}
html{position:relative}
  `;

export default GlobalStyle;
