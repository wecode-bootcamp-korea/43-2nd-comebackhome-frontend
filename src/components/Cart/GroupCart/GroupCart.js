import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CartCount from '../CartCount/CartCount';
import * as S from './GroupCartStyle';

const GroupCart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch('./data/CartData.json')
      .then(res => res.json())
      .then(data => {
        setCartData(data);
      });
  }, []);

  return (
    <S.GroupCart>
      {cartData.length && (
        <S.CartContainer>
          <S.CartSelect>
            <S.CheckBox>
              <S.CheckboxLabel>
                <S.CheckboxWrap>
                  <S.CheckboxCheck>
                    <S.CheckboxPoint />
                  </S.CheckboxCheck>
                </S.CheckboxWrap>
                <S.CheckboxAll>
                  <S.CheckboxAllSelect>모두선택</S.CheckboxAllSelect>
                </S.CheckboxAll>
              </S.CheckboxLabel>
            </S.CheckBox>
            <S.DelButton>선택삭제</S.DelButton>
          </S.CartSelect>
          {cartData.map(
            ({ id, thumbnail, productName, stock, color, price, count }) => (
              <S.CartList key={id}>
                <S.CartArticle>
                  <S.CartTitle>콤배콤 배송</S.CartTitle>
                  <S.CartArticleBox>
                    <S.CartListGroup>
                      <S.CartProduct>
                        <S.CartProductSelect>
                          <S.CartCheckboxWrap />
                        </S.CartProductSelect>
                        <S.CartSmallProduct>
                          <S.CartProductImgWrap>
                            <S.CartProductImg src={thumbnail} />
                          </S.CartProductImgWrap>
                          <S.CartProductContents>
                            <S.CartProductTitle>
                              {productName}
                            </S.CartProductTitle>
                            <S.CartProductStock>
                              재고수량 : {stock}
                            </S.CartProductStock>
                            <S.CartProductColor>{color}</S.CartProductColor>
                          </S.CartProductContents>
                        </S.CartSmallProduct>
                        <S.CartDelete>X</S.CartDelete>
                        <CartCount price={price} />
                      </S.CartProduct>
                    </S.CartListGroup>
                  </S.CartArticleBox>
                  <S.CartFooter>
                    <p>배송비 무료</p>
                  </S.CartFooter>
                </S.CartArticle>
              </S.CartList>
            )
          )}
        </S.CartContainer>
      )}
      <S.CartSideBarWrap>
        <S.CartSideBarContainer>
          <S.CartSideBarBox>
            <S.CartSideBarContents>
              <S.CartTotalPrice>
                총 상품금액
                <S.CartTotalPriceNumber>1,565,000 원</S.CartTotalPriceNumber>
              </S.CartTotalPrice>
              <S.CartTotalDeliver>
                총배송비
                <S.CartTotalDeliverNumber>+ 0 원</S.CartTotalDeliverNumber>
              </S.CartTotalDeliver>
              <S.CartTotalDiscount>
                총 할인금액
                <S.CartTotalDiscountNumber>
                  - 365,050 원
                </S.CartTotalDiscountNumber>
              </S.CartTotalDiscount>
              <S.CartSummary>
                결제금액
                <S.CartSummaryNumber>1,200,450 원</S.CartSummaryNumber>
              </S.CartSummary>
            </S.CartSideBarContents>
            <S.CartSideBarButton>구매하기 </S.CartSideBarButton>
          </S.CartSideBarBox>
        </S.CartSideBarContainer>
      </S.CartSideBarWrap>
    </S.GroupCart>
  );
};
export default GroupCart;
