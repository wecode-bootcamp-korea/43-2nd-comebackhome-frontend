import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ProductStyled.js';

const Product = ({ id, imageUrl, name, discountPrice, discount_rate }) => {
  const navigate = useNavigate();
  const moveToProductDetail = id => {
    navigate(`/productdetail/${id}`);
  };
  console.log('imageUrl', imageUrl);
  return (
    <S.ShoppingMap key={id} onClick={() => moveToProductDetail(id)}>
      <S.ShoppingItem src={imageUrl} alt="제품 사진" />
      <S.ShopingItemSpan>[오늘의 딜] </S.ShopingItemSpan>
      <S.IconSizeImg src="images/sale.png" alt="sale" />
      <S.ShopingItemP>{name}</S.ShopingItemP>
      <span />
      <S.ShopingItemSpan strong>{discount_rate}%</S.ShopingItemSpan>
      <S.ShopingItemSpan>
        {Number(discountPrice).toLocaleString()}원
      </S.ShopingItemSpan>
    </S.ShoppingMap>
  );
};

export default Product;
