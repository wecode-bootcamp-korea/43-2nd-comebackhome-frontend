import React, { useState, useEffect } from 'react';
import GlobalModal from '../../components/GlobalModal/GlobalModal';
import * as S from './ProductDetailStyle';
import { Width } from '../../styles/common';

const { Kakao } = window;

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState('');

  const buttonClick = e => {
    const { value } = e.target;
    setButtonText(value);
    setIsOpen(isOpen => !isOpen);
  };

  const calculateQuantity = e => {
    const { name } = e.target;
    if (name === 'plus') {
      if (count === product[0].stock) {
        return setCount(count);
      }
      setCount(count => count + 1);
    } else if (name === 'minus' && count > 1) {
      setCount(count => count - 1);
    }
  };

  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '타이틀',
        description: '내용!',
        imageUrl: 'url',
        link: {
          mobileWebUrl: '모바일 url!',
          androidExecParams: 'test',
        },
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: '공유할 url!',
          },
        },
      ],
    });
  };

  useEffect(() => {
    fetch('./data/ProductDetail.json')
      .then(res => res.json())
      .then(data => setProduct(data));
    window.scroll(0, 0);
  }, []);

  return (
    <Width font="AnsungtangmyunBold">
      <S.ProductWrap>
        <S.Imgs src="/images/comebackhome.png" />
        {product.map(({ id, title, price, discount, discountPrice, stock }) => (
          <S.ProductInfo key={id}>
            <S.Title>
              <S.Text marginBottom="15px">{title}</S.Text>
              <S.Text
                decoration
                size="18px"
                color="#787878"
                marginBottom="10px"
              >
                {Number(price).toLocaleString()}
              </S.Text>
              <S.Text marginBottom="60px" size="32px">
                <S.Span color="red" marginRight="10px">
                  {Number(discount)}%
                </S.Span>
                {Number(discountPrice).toLocaleString()}원
              </S.Text>
            </S.Title>
            <S.ProductNumber>
              <S.Text marginBottom="15px" size="20px">
                제품번호
                <S.Span marginLeft="25px" color="#787878">
                  {id}
                </S.Span>
              </S.Text>
              <S.Text marginBottom="15px" size="20px">
                배송정보
                <S.Span marginLeft="25px" color="#787878">
                  무료
                </S.Span>
              </S.Text>
            </S.ProductNumber>
            <S.ProductOption>
              <S.Text padding="10px" backgroundColor="lightgray" size="20px">
                상품옵션
              </S.Text>
              <S.ProductOptionBox padding="9px 10px">
                <S.Text size="16px" marginBottom="15px">
                  아이보리
                </S.Text>
                <S.Text size="16px" marginBottom="15px">
                  <S.Span
                    color="#787878"
                    decoration
                    size="16px"
                    marginRight="10px"
                  >
                    {Number(price).toLocaleString()}원
                  </S.Span>
                  {Number(discountPrice).toLocaleString()}원
                </S.Text>
                <S.ProductPrice>
                  <S.PriceButton
                    borderRight
                    onClick={calculateQuantity}
                    name="minus"
                  >
                    -
                  </S.PriceButton>
                  <S.PriceCount>{count}</S.PriceCount>
                  <S.PriceButton
                    borderLeft
                    onClick={calculateQuantity}
                    name="plus"
                  >
                    +
                  </S.PriceButton>
                </S.ProductPrice>
              </S.ProductOptionBox>
            </S.ProductOption>
            {count === product[0].stock && (
              <S.MaxQuantity>
                <S.Span color="red" size="19px" marginRight="5px">
                  최대수량
                </S.Span>
                입니다!
              </S.MaxQuantity>
            )}
            <S.TotalPrice>
              <S.Text vertical="top">
                <S.Span size="14px" marginRight="10px" vertical="top">
                  결제금액
                </S.Span>
                {(discountPrice * count).toLocaleString()}원
              </S.Text>
            </S.TotalPrice>
            <S.ProductButton onClick={buttonClick} value="cart">
              장바구니
            </S.ProductButton>
            <S.ProductButton
              backColor="#568a35"
              color="white"
              onClick={buttonClick}
              value="order"
            >
              결제하기
            </S.ProductButton>
            <GlobalModal
              text={buttonText}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <S.TotalPrice>
              <img
                src="images/icons8-공유-24.png"
                alt="share"
                onClick={shareKakao}
              />
              <S.Span marginLeft="10px" vertical="text-top" size="16px">
                공유하기
              </S.Span>
            </S.TotalPrice>
          </S.ProductInfo>
        ))}
      </S.ProductWrap>
    </Width>
  );
};

export default ProductDetail;
