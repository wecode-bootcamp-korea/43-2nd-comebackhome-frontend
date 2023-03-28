import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './EmptyCartStyle';

const EmptyCart = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <S.EmptyCart>
      <S.EmptyCartWrap>
        <S.EmptyCartImg src="/images/empty.png" />
        <S.EmptyCartButton onClick={handleClick}>
          상품 담으러 가기
        </S.EmptyCartButton>
      </S.EmptyCartWrap>
    </S.EmptyCart>
  );
};

export default EmptyCart;
