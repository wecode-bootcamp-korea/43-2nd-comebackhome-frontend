import React from 'react';
import * as S from './CommentStyled.js';

export const Comment = () => {
  return (
    <S.CommentUserBox>
      <S.CommentUserPic src="/images/frog.png" alt="사용자" />
      <div>
        <S.SubTitle bold>티모와슬라임</S.SubTitle>
        <S.SubTitle top>집이 깔끔하고 예쁘네요</S.SubTitle>
      </div>
    </S.CommentUserBox>
  );
};
