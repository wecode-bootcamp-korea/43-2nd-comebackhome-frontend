import React from 'react';
import { useState } from 'react';
import * as S from './CartCountStyle';

const CartCount = () => {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    if (count >= 5) return;
    setCount(prev => prev + 1);
  };

  const decreaseCount = () => {
    if (count <= 1) return;
    setCount(prev => prev - 1);
  };

  return (
    <S.CartCountInput>
      <S.CartCountMinus onClick={decreaseCount}>-</S.CartCountMinus>
      <S.CartCountButton>{count}</S.CartCountButton>
      <S.CartCountPlus
        onClick={() => {
          increaseCount();
        }}
      >
        +
      </S.CartCountPlus>
    </S.CartCountInput>
  );
};

export default CartCount;
