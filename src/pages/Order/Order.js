import React, { useEffect, useState } from 'react';
import OrderModal from '../../components/GlobalModal/OrderModal';
import { API } from '../../config';
import { Width } from '../../styles/common';
import OrderProduct from '../../components/OrderProduct/OrderProduct';
import * as S from './OrderStyle';

const Order = () => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [orderer, setOrderer] = useState({
    user: '',
    areaCode: '',
    phone: '',
    address: '',
    detaileAddress: '',
    userPoint: '',
  });

  const { userPoint } = orderer;

  const changeInput = e => {
    const { value, name } = e.target;
    if (name === 'userPoint') {
      if (Number(userPoint) > order[0].point) {
        setOrderer({ ...orderer, userPoint: order[0].point });
      } else {
        setOrderer({ ...orderer, userPoint: value.replace(/[^0-9]/g, '') });
      }
    } else if (name === 'fullPoint') {
      setOrderer({ ...orderer, userPoint: order[0].point });
    } else if (name === 'phone') {
      setOrderer({ ...orderer, phone: value.replace(/[^0-9]/g, '') });
    } else {
      setOrderer({ ...orderer, [name]: value });
    }
  };

  const payment = () => {
    setIsOpen(isOpen => !isOpen);
  };

  useEffect(() => {
    fetch(`${API.orders}`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => {
        setOrder(data.orderList);
        setLoading(false);
      });
  }, []);

  if (loading) return <Width>loading</Width>;

  return (
    <Width font="IBMPlexSansKR-Regular">
      <S.OrderWrap>
        <S.TotalOrderInfo>
          <S.Header>주문/결제</S.Header>
          <S.Title>주문자</S.Title>
          <S.OrderInfo>
            <S.ContentP>{order[0].nickame}</S.ContentP>
            <S.ContentP margin font="'IBMPlexSansKR-Regular'">
              {order[0].email}
            </S.ContentP>
            <S.BoxWrap>
              <S.Checkbox type="checkbox" />
              <S.ContentSpan>기본 구매자로 저장</S.ContentSpan>
            </S.BoxWrap>
          </S.OrderInfo>
          <S.Title>배송지</S.Title>
          <S.OrderInfo>
            <S.BoxWrap>
              <S.InputSpan>받는 사람</S.InputSpan>
              <S.InputWrap>
                <S.Input
                  type="text"
                  name="user"
                  maxLength="3"
                  onChange={changeInput}
                />
              </S.InputWrap>
            </S.BoxWrap>
            <S.BoxWrap>
              <S.InputSpan>연락처</S.InputSpan>
              <S.InputWrap>
                <S.BoxWrap padding>
                  <S.Select
                    defaultValue="선택"
                    name="areaCode"
                    onChange={changeInput}
                  >
                    {AREACODE.map(({ id, number }) => (
                      <option key={id} value={number}>
                        {number}
                      </option>
                    ))}
                  </S.Select>
                  <S.Input
                    type="text"
                    name="phone"
                    maxLength="8"
                    onKeyUp={changeInput}
                    onChange={changeInput}
                  />
                </S.BoxWrap>
              </S.InputWrap>
            </S.BoxWrap>
            <S.BoxWrap>
              <S.InputSpan>주소</S.InputSpan>
              <S.InputWrap maxWidth>
                <S.Input
                  marginBottom
                  type="text"
                  name="address"
                  maxLength="20"
                  onChange={changeInput}
                />
                <S.Input
                  marginBottom
                  placeholder="상세 주소 입력"
                  name="detaileAddress"
                  maxLength="10"
                  onChange={changeInput}
                />
                <S.Select defaultValue="1" width="541px" font weight="600">
                  {REQUEST.map(({ id, detail }) => (
                    <option key={id} value="1">
                      {detail}
                    </option>
                  ))}
                </S.Select>
              </S.InputWrap>
            </S.BoxWrap>
          </S.OrderInfo>
          <S.Title marginTop="30px">포인트</S.Title>
          <S.OrderInfo>
            <S.BoxWrap width="35%">
              <S.Input
                type="text"
                name="userPoint"
                value={userPoint}
                onChange={changeInput}
                onKeyUp={changeInput}
              />
              <S.PointButton name="fullPoint" onClick={changeInput}>
                전액 사용
              </S.PointButton>
            </S.BoxWrap>
            <S.AmountTitle marginTop>
              사용 가능 포인트: {(order[0].point - userPoint).toLocaleString()}P
            </S.AmountTitle>
          </S.OrderInfo>

          <S.Title>
            주문 상품
            <S.OrderPrice>{order.length}건</S.OrderPrice>
          </S.Title>
          {order.map(list => (
            <OrderProduct key={list.cartId} list={list} />
          ))}
        </S.TotalOrderInfo>
        <S.AmountWrap>
          <S.AmountInfo>
            <S.AmountTitle>결제금액</S.AmountTitle>
            <S.AmountTextDivide>
              <S.AmountText>총 상품 금액</S.AmountText>
              <S.AmountPrice weight="bold">
                {Number(order[0].totalPrice).toLocaleString()}원
              </S.AmountPrice>
            </S.AmountTextDivide>
            <S.AmountTextDivide>
              <S.AmountText>배송비</S.AmountText>
              <S.AmountPrice>무료</S.AmountPrice>
            </S.AmountTextDivide>
            <S.AmountTextDivide>
              <S.AmountText>포인트 사용</S.AmountText>
              <S.AmountPrice>
                {Number(userPoint).toLocaleString()}원
              </S.AmountPrice>
            </S.AmountTextDivide>
            <S.AmountTotalElement>
              <S.AmountPrice size="20px">최종 결제 금액</S.AmountPrice>
              <S.AmountPrice size="20px">
                <S.AmountPrice size="20px" color="#568a35" marginRight="5px" />
                {(order[0].totalPrice - userPoint).toLocaleString()}원
              </S.AmountPrice>
            </S.AmountTotalElement>
          </S.AmountInfo>
          <S.OrderButton type="button" onClick={payment}>
            {(order[0].totalPrice - userPoint).toLocaleString()}원 결제하기
          </S.OrderButton>
          {isOpen && (
            <OrderModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              text="구매"
              orderer={orderer}
            />
          )}
        </S.AmountWrap>
      </S.OrderWrap>
    </Width>
  );
};

export default Order;

const AREACODE = [
  { id: 1, number: '선택' },
  { id: 2, number: '02' },
  { id: 3, number: '031' },
  { id: 4, number: '032' },
  { id: 5, number: '010' },
  { id: 6, number: '011' },
  { id: 7, number: '017' },
  { id: 8, number: '070' },
];

const REQUEST = [
  { id: 1, detail: '배송시 요청사항을 선택해주세요' },
  { id: 2, detail: '부재시 문앞에 놓아주세요' },
  { id: 3, detail: '배송전에 미리 연락주세요' },
  { id: 4, detail: '부재시 경비실에 맡겨 주세요' },
];
