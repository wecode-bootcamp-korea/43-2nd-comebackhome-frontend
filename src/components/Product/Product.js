import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ProductStyled.js';

const Product = ({ id, thumbnail, productName, price, discount }) => {
  const navigate = useNavigate();
  const moveToProductDetail = id => {
    navigate(`/productDetail/${id}`);
  };

  return (
    <S.ShoppingMap key={id} onClick={() => moveToProductDetail(id)}>
      <S.ShoppingItem src={thumbnail} alt="제품 사진" />
      <S.ShopingItemSpan>[오늘의 딜] </S.ShopingItemSpan>
      <S.IconSizeImg src="images/sale.png" alt="sale" />
      <S.ShopingItemP>{productName}</S.ShopingItemP>
      <span />
      <S.ShopingItemSpan strong>{discount}</S.ShopingItemSpan>
      <S.ShopingItemSpan>{Number(price).toLocaleString()}원</S.ShopingItemSpan>
    </S.ShoppingMap>
  );
};

export default Product;
