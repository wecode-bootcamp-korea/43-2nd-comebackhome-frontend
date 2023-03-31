import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';
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
    fetch(`${API.productlist}`)
      .then(res => res.json())
      .then(data => {
        setProductData(data.products.productData);
      });
  }, []);

  useEffect(() => {
    fetch(`${API.homepartylist}`)
      .then(res => res.json())
      .then(data => {
        setHomePartyData(data.posts);
      });
  }, []);

  return (
    <Width>
      <S.Carousel>
        <S.Room>
          <S.SliderSlide {...settings}>
            {homePartyData.map(({ id, imageUrl }) => {
              return (
                <div
                  to="signin"
                  key={id}
                  onClick={() => navigate(`homepartydetail/${id}`)}
                >
                  <S.SlidePicture src={imageUrl} />
                </div>
              );
            })}
          </S.SliderSlide>
        </S.Room>
        <S.Advertise>
          <S.SliderSlide {...settings}>
            {CAROUSEL_PICTURE_LIST.map(({ id, img }) => {
              return (
                <div key={id}>
                  <S.SlidePicture src={img} />
                </div>
              );
            })}
          </S.SliderSlide>
        </S.Advertise>
      </S.Carousel>
      <S.Title>쇼핑리스트젶</S.Title>
      <S.P right onClick={() => navigate('/productlist?offset=0&limit=8')}>
        더보기
      </S.P>
      <S.ItemFlex>
        {productData.map(
          (item, index) =>
            index >= 0 &&
            index <= 7 && (
              <Product
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                discountPrice={item.discountPrice}
                discount_rate={item.discount_rate}
              />
            )
        )}
      </S.ItemFlex>
    </Width>
  );
};

export default Main;

const CAROUSEL_PICTURE_LIST = [
  { id: 101, img: '/images/slide/pic/pic3.png' },
  { id: 102, img: '/images/slide/pic/pic2.png' },
  { id: 103, img: '/images/slide/pic/pic1.png' },
];
