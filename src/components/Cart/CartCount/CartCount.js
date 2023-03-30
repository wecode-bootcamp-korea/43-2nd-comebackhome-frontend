import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import * as S from './CartCountStyle';

const CartCount = ({ price, onCountChange, productStock, quantity }) => {
  const [count, setCount] = useState(quantity);

  const decreaseCount = () => {
    if (count <= 1) return;
    setCount(prev => prev - 1);
  };

  const increaseCount = () => {
    if (count >= productStock) return;
    setCount(prev => prev + 1);
  };

  useEffect(() => {
    onCountChange(count);
  }, [count]);
  return (
    <S.CartCountInput>
      <S.CartCountInputWrap>
        <S.CartCountMinus onClick={decreaseCount}>-</S.CartCountMinus>
        <S.CartCountButton>{count}</S.CartCountButton>
        <S.CartCountPlus onClick={increaseCount}>+</S.CartCountPlus>
      </S.CartCountInputWrap>

      <S.CartPrice>{Number(price * count).toLocaleString()}원 </S.CartPrice>
    </S.CartCountInput>
  );
};

export default CartCount;
