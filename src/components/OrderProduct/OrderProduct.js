import React from 'react';
import * as S from './OrderProductStyle';
const OrderProduct = ({ list }) => {
  return (
    <S.CartBox>
      <S.CartHeader>
        (주)콤배콤
        <S.ProductContent>배송비 무료</S.ProductContent>
      </S.CartHeader>
      <S.OrderProductWrap padding>
        <S.ProductImgWrap>
          <S.ProductImg src={list.thumbnail} alt="로고사진" />
        </S.ProductImgWrap>
        <S.ProductDetail>
          <S.DetailMargin>{list.productName}</S.DetailMargin>
          <S.DetailElement
            size="14px"
            lineHeight
            color="rgb(130, 140, 148)"
            marginBottom="9px"
          >
            Color: {list.color}
          </S.DetailElement>
          <S.OrderProductWrap align>
            <S.DetailElement
              size="16px"
              color="rgb(47, 52, 56)"
              fontWeight="600"
            >
              {list.price}
            </S.DetailElement>
            <S.Line />
            <S.ProductContent>{list.count}개</S.ProductContent>
          </S.OrderProductWrap>
        </S.ProductDetail>
      </S.OrderProductWrap>
    </S.CartBox>
  );
};

export default OrderProduct;
