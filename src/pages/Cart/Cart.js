import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import EmptyCart from '../../components/Cart/EmptyCart/EmptyCart';
import GroupCart from '../../components/Cart/GroupCart/GroupCart';
import * as S from './CartStyle';
const Cart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch('./data/CartData.json')
      .then(res => res.json())
      .then(data => {
        setCartData(data);
      });
  }, []);

  return (
    <S.Cart>
      {cartData.length > 0 ? (
        <GroupCart productList={cartData} setProductList={setCartData} />
      ) : (
        <EmptyCart />
      )}
    </S.Cart>
  );
};
export default Cart;
