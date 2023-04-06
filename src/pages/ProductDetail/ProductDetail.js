import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GlobalModal from '../../components/GlobalModal/GlobalModal';
import { API } from '../../config';
import * as S from './ProductDetailStyle';
import { Width } from '../../styles/common';

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [buttonText, setButtonText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  const buttonClick = e => {
    const { value } = e.target;
    setButtonText(value);
    setIsOpen(isOpen => !isOpen);
  };

  const calculateQuantity = e => {
    const { name, value } = e.target;
    if (name === 'quantity') {
      setCount(value);
    }
    if (name === 'plus') {
      if (count === product[0].stock) {
        return setCount(product[0].stock);
      }
      setCount(count => Number(count) + 1);
    } else if (name === 'minus' && count > 1) {
      setCount(count => Number(count) - 1);
    } else if (Number(count) > product[0].stock) {
      setCount(product[0].stock);
    } else if (Number(count) < 0 || count === '0') {
      setCount(1);
    }
  };

  const shareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_JAVASCRIPT_KEY);
      }

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: product[0].name,
          imageUrl: product[0].image_url,
          link: {
            mobileWebUrl: '모바일 url!',
            androidExecParams: 'test',
          },
        },
        buttons: [
          {
            title: '콤배콤으로 이동',
            link: {
              mobileWebUrl: '공유할 url!',
            },
          },
        ],
      });
    }
  };

  useEffect(() => {
    fetch(`${API.productdetail}/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data.data));
    window.scroll(0, 0);
  }, []);

  return (
    <Width>
      {product.map(
        ({ id, name, price, discount_rate, discountPrice, color, stock }) => (
          <S.ProductWrap weight="700" key={id}>
            <S.Imgs src={product[0].image_url} />
            <S.ProductInfo>
              <S.Title>
                <S.Text marginBottom="15px">{name}</S.Text>
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
                    {Number(discount_rate)}%
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
                <S.Text
                  padding="10px"
                  backgroundColor="rgba(175, 212, 133, 0.4)"
                  size="20px"
                  borderBottom
                >
                  상품옵션
                </S.Text>
                <S.ProductOptionBox padding="9px 10px">
                  <S.Text size="16px" marginBottom="15px">
                    {color}
                    <S.Span marginLeft="230px">재고:{stock}</S.Span>
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
                    <S.PriceCount
                      type="number"
                      name="quantity"
                      value={count}
                      onChange={calculateQuantity}
                      onKeyUp={calculateQuantity}
                    />
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
              {count >= product[0].stock && (
                <S.MaxQuantity>
                  <S.Span color="red" size="19px" marginRight="5px">
                    최대수량
                  </S.Span>
                  입니다!
                </S.MaxQuantity>
              )}
              {count <= 0 && (
                <S.MaxQuantity>
                  <S.Span color="red" size="19px" marginRight="5px">
                    수량은 1 ~ 재고
                  </S.Span>
                  만큼 입력해 주세요
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
              <S.ProductButton onClick={buttonClick} value="Cart">
                장바구니
              </S.ProductButton>
              <S.ProductButton
                backColor="#568a35"
                color="white"
                onClick={buttonClick}
                value="Order"
              >
                결제하기
              </S.ProductButton>
              <GlobalModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                count={count}
                text={buttonText}
                id={id}
              />
              <S.TotalPrice>
                <img
                  src="/images/icons8-공유-24.png"
                  alt="share"
                  onClick={shareKakao}
                />
                <S.Span marginLeft="10px" vertical="text-top" size="16px">
                  공유하기
                </S.Span>
              </S.TotalPrice>
            </S.ProductInfo>
          </S.ProductWrap>
        )
      )}
    </Width>
  );
};

export default ProductDetail;
