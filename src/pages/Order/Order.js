import React, { useEffect, useState } from 'react';
import { Width } from '../../styles/common';
import OrderProduct from '../../components/OrderProduct/OrderProduct';
import * as S from './OrderStyle';

const Order = () => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('./data/Order.json')
      .then(res => res.json())
      .then(data => {
        setOrder(data);
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
            <S.ContentP>{order[0].nickname}</S.ContentP>
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
                <S.Input />
              </S.InputWrap>
            </S.BoxWrap>
            <S.BoxWrap>
              <S.InputSpan>연락처</S.InputSpan>
              <S.InputWrap>
                <S.BoxWrap padding>
                  <S.Select defaultValue="010">
                    {AREACODE.map(({ id, number }) => (
                      <option key={id} defaultValue="1" value={number}>
                        {number}
                      </option>
                    ))}
                  </S.Select>
                  <S.Input />
                </S.BoxWrap>
              </S.InputWrap>
            </S.BoxWrap>
            <S.BoxWrap>
              <S.InputSpan>주소</S.InputSpan>
              <S.InputWrap maxWidth>
                <S.Input marginBottom />
                <S.Input marginBottom placeholder="상세 주소 입력" />
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
            <S.BoxWrap width>
              <S.Input type="number" name="usePoint" />
              <S.PointButton>확인</S.PointButton>
            </S.BoxWrap>
            <S.AmountTitle marginTop>
              사용 가능 포인트: {order[0].point}
            </S.AmountTitle>
          </S.OrderInfo>

          <S.Title>
            주문 상품
            <S.OrderPrice>{order[0].cartlist.length}건</S.OrderPrice>
          </S.Title>
          {order[0].cartlist.map(list => (
            <OrderProduct key={list.id} list={list} />
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
                {Number(order[0].point).toLocaleString()}원
              </S.AmountPrice>
            </S.AmountTextDivide>
            <S.AmountTotalElement>
              <S.AmountPrice size="20px">최종 결제 금액</S.AmountPrice>
              <S.AmountPrice size="20px">
                <S.AmountPrice size="20px" color="#568a35" marginRight="5px" />
                {(order[0].totalPrice - order[0].point).toLocaleString()}원
              </S.AmountPrice>
            </S.AmountTotalElement>
          </S.AmountInfo>
          <S.OrderButton type="button">
            {(order[0].totalPrice - order[0].point).toLocaleString()}원 결제하기
          </S.OrderButton>
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
