import React from 'react';
import { Width } from '../../styles/common';
import * as S from './SignInStyle.js';

const Signin = () => {
  return (
    <Width>
      <S.FlexCenter>
        <S.Container className="container">
          <S.Logo src="/images/logo/CBH2.png" />
          <S.Text>포근한 나의 집으로,</S.Text>
          <S.KakaoLogin src="/images/kakao_login.png" />
        </S.Container>
      </S.FlexCenter>
    </Width>
  );
};

export default Signin;
