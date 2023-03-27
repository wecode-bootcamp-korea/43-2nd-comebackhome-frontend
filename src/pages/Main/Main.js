import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Width } from '../../styles/common';
import * as S from './MainStyled.js';
import Product from '../../components/Product/Product';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
  const [productData, setProductData] = useState([]);
  const [homePartyData, setHomePartyData] = useState([]);
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };

  useEffect(() => {
    fetch('./data/ItemData.json')
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, []);

  useEffect(() => {
    fetch('./data/HomeParty.json')
      .then(res => res.json())
      .then(data => {
        setHomePartyData(data);
      });
  }, []);

  return (
    <Width>
      <S.Carousel>
        <S.SliderSlide {...settings}>
          {homePartyData.map(({ id, img }) => {
            return (
              <div
                to="signin"
                key={id}
                onClick={() => navigate(`homeparty/${id}`)}
              >
                <S.SlidePicture src={img} />
              </div>
            );
          })}
        </S.SliderSlide>
      </S.Carousel>
      <S.Title>쇼핑리스트젷</S.Title>
      <S.P right onClick={() => navigate('/productdetail')}>
        더보기
      </S.P>
      <S.ItemFlex>
        {productData.map(({ id, thumbnail, productName, price, discount }) => (
          <Product
            key={id}
            id={id}
            thumbnail={thumbnail}
            name={productName}
            price={price}
            discount={discount}
          />
        ))}
      </S.ItemFlex>
    </Width>
  );
};

export default Main;
