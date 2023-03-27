import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Productstyle.js';

const Product = ({ id, thumbnail, name, price, discount }) => {
  const navigate = useNavigate();
  const moveToProductDetail = id => {
    navigate(`/productDetail/${id}`);
  };

  return (
    <S.ShoppingMap key={id} onClick={() => moveToProductDetail(id)}>
      <S.ShoppingItem src={thumbnail} alt="제품 사진" />
      <S.ShopingItemSpan>[오늘의 딜] </S.ShopingItemSpan>
      <S.IconSizeImg src="images/sale.png" alt="sale" />
      <S.ShopingItemP>{name}</S.ShopingItemP>
      <span />
      <S.ShopingItemSpan strong>{discount}</S.ShopingItemSpan>
      <S.ShopingItemSpan>{price.toLocaleString()}</S.ShopingItemSpan>
    </S.ShoppingMap>
  );
};

export default Product;
