import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalModal from '../../GlobalModal/GlobalModal';
import CheckboxInput from './CheckboxInput/CheckboxInput';
import CartCheckbox from './CartCheckbox/CartCheckbox';
import CartCount from '../CartCount/CartCount';
import EmptyCart from '../EmptyCart/EmptyCart';
import { API } from '../../../config';
import * as S from './GroupCartStyle';

const GroupCart = () => {
  const [cartData, setCartData] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [checkboxNum, setcheckboxNum] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const changeSingleBox = (checked, id) => {
    if (checked) {
      setCheckList([...checkList, id]);
    } else {
      setCheckList(checkList.filter(el => el !== id));
    }
  };

  const changeAllBox = checked => {
    if (checked) {
      const allCheckBox = [];
      cartData.forEach(el => allCheckBox.push(el.cartId));
      setCheckList(allCheckBox);
    } else {
      setCheckList([]);
    }
  };

  const deleteCartItem = id => {
    const filteredCartData = cartData.filter(item => item.productId !== id);
    setCartData(filteredCartData);
    setcheckboxNum(filteredCartData.length);
    setCheckList(checkList.filter(itemId => itemId !== id));

    fetch(`${API.carts}?cartId=${id}`, {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(data => {
        setCartData(data.cartDeleteResult);
        setcheckboxNum(data.cartDeleteResult.length);
      });
  };

  const deleteSelectedCartItems = () => {
    const selectedIds = checkList;

    const filteredCartData = cartData.filter(
      item => !selectedIds.includes(item.productId)
    );
    setCartData(filteredCartData);
    setcheckboxNum(filteredCartData.length);
    setCheckList([]);
    fetch(`${API.carts}?cartId=${selectedIds}`, {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(data => {
        setCartData(data.cartDeleteResult);
        setcheckboxNum(data.cartDeleteResult.length);
        setCheckList([]);
      });
  };

  const handleCountChange = (id, count) => {
    const updatedCartData = cartData.map(item => {
      if (item.productId === id) {
        return {
          ...item,
          count: count,
        };
      }
      return item;
    });
    setCartData(updatedCartData);
    fetch(`${API.carts}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
      body: JSON.stringify({
        quantity: count,
        productId: id,
      }),
    })
      .then(response => response.json())
      .then(data => setCartData(data.updateProduct));
  };

  const open = () => {
    if (checkList.length > 0) {
      navigate('/order');
    } else {
      setIsOpen(isopen => !isopen);
    }
  };

  const cartTotalPrice = cartData
    .filter(item => checkList.includes(item.cartId))
    .reduce((acc, item) => acc + Number(item.price) * Number(item.quantity), 0);

  const totalDiscountPrice = cartData
    .filter(item => checkList.includes(item.cartId))
    .reduce((acc, item) => Number(item.totalDiscountPrice), 0);

  const totalProductPrice = cartTotalPrice - totalDiscountPrice;

  useEffect(() => {
    fetch(`${API.carts}`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
    })
      .then(res => res.json())

      .then(data => {
        setCartData(data.carts);
        setcheckboxNum(data.carts.length);
      });
  }, []);

  if (cartData.length === 0) {
    return <EmptyCart />;
  }

  return (
    <S.GroupCart>
      {cartData.length && (
        <S.CartContainer>
          <S.CartSelect>
            <S.CheckBox>
              <S.CheckboxLabel>
                <S.CheckboxWrap>
                  <CheckboxInput
                    changeAllbox={changeAllBox}
                    checkList={checkList}
                    checkboxNum={checkboxNum}
                  />
                  <S.CheckboxCheck>
                    <S.CheckboxPoint />
                  </S.CheckboxCheck>
                </S.CheckboxWrap>
                <S.CheckboxAll>
                  <S.CheckboxAllSelect>모두선택</S.CheckboxAllSelect>
                </S.CheckboxAll>
              </S.CheckboxLabel>
            </S.CheckBox>

            <S.DelButton onClick={deleteSelectedCartItems}>
              선택삭제
            </S.DelButton>
          </S.CartSelect>
          {cartData.map(
            ({
              cartId,
              productId,
              productImage,
              productName,
              productStock,
              productColor,
              price,
              quantity,
            }) => (
              <S.CartList key={productId}>
                <S.CartArticle>
                  <S.CartTitle>콤배콤 배송</S.CartTitle>
                  <S.CartArticleBox>
                    <S.CartListGroup>
                      <S.CartProduct>
                        <S.CartProductSelect>
                          <S.CartCheckboxWrap>
                            <CartCheckbox
                              id={cartId}
                              changeSingleBox={changeSingleBox}
                              data={cartData}
                              checkList={checkList}
                              productPrice={price}
                            />
                          </S.CartCheckboxWrap>
                        </S.CartProductSelect>
                        <S.CartSmallProduct>
                          <S.CartProductImgWrap>
                            <S.CartProductImg src={productImage} />
                          </S.CartProductImgWrap>
                          <S.CartProductContents>
                            <S.CartProductTitle>
                              {productName}
                            </S.CartProductTitle>
                            <S.CartProductStock>
                              재고수량 : {productStock}
                            </S.CartProductStock>
                            <S.CartProductColor>
                              {productColor}
                            </S.CartProductColor>
                          </S.CartProductContents>
                        </S.CartSmallProduct>
                        <S.CartDelete onClick={() => deleteCartItem(cartId)}>
                          X
                        </S.CartDelete>
                        <CartCount
                          price={price}
                          setCartData={setCartData}
                          id={productId}
                          onCountChange={count =>
                            handleCountChange(productId, count)
                          }
                          productStock={productStock}
                          quantity={quantity}
                        />
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
                <S.CartTotalPriceNumber>
                  {cartTotalPrice.toLocaleString()}원
                </S.CartTotalPriceNumber>
              </S.CartTotalPrice>
              <S.CartTotalDeliver>
                총 배송비
                <S.CartTotalDeliverNumber>+ 0 원</S.CartTotalDeliverNumber>
              </S.CartTotalDeliver>
              <S.CartTotalDiscount>
                총 할인금액
                <S.CartTotalDiscountNumber>
                  -{totalDiscountPrice.toLocaleString()}원
                </S.CartTotalDiscountNumber>
              </S.CartTotalDiscount>
              <S.CartSummary>
                결제금액
                <S.CartSummaryNumber>
                  {totalProductPrice.toLocaleString()}원
                </S.CartSummaryNumber>
              </S.CartSummary>
            </S.CartSideBarContents>
            <S.CartSideBarButton onClick={open}>구매하기</S.CartSideBarButton>
            <GlobalModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              checkList={checkList}
              text="구매"
            />
          </S.CartSideBarBox>
        </S.CartSideBarContainer>
      </S.CartSideBarWrap>
    </S.GroupCart>
  );
};

export default GroupCart;
