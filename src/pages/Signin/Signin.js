import React from 'react';
import { KAKAO_AUTH_URL } from './Oauth';
import { Width } from '../../styles/common';
import * as S from './SignInStyle.js';

const Signin = () => {
  const kakaologin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Width>
      <S.FlexCenter>
        <S.Container className="container">
          <S.Logo src="/images/logo/CBH2.png" />
          <S.Text>포근한 나의 집으로,</S.Text>
          <S.KakaoLogin src="/images/kakao_login.png" onClick={kakaologin} />
        </S.Container>
      </S.FlexCenter>
    </Width>
  );
};

export default Signin;
