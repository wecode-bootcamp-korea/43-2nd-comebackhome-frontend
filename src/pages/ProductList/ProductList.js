import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { API } from '../../config';
import { Width } from '../../styles/common';
import Product from '../../components/Product/Product';
import * as S from './ProductListStyle.js';

const ProductList = () => {
  const [productItem, setProductItem] = useState([]);
  const [searchParams] = useSearchParams();
  const [totalNumber, setTotalNumber] = useState(0);
  const navigate = useNavigate();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const separatePage = new Array(totalNumber / limit).fill(1);

  const handleChangePage = index => {
    navigate(`/productlist?offset=${index * limit}&limit=${limit}`);
  };

  useEffect(() => {
    fetch(`${API.productlist}offset=${offset}&limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setProductItem(data.products.productData);
        setTotalNumber(data.products.productData[0].totalNumber);
      });
  }, [offset]);

  return (
    <Width>
      <S.TitleBox>
        <S.ShoppingCategory>일상을 바꾸는 물건들</S.ShoppingCategory>
        <S.TitleLogo src="images/dinnertable2.png" alt="물건사진" />
      </S.TitleBox>
      <S.DisplayCenter>
        {productItem.map(
          ({ id, imageUrl, name, discountPrice, discount_rate }) => (
            <Product
              key={id}
              id={id}
              imageUrl={imageUrl}
              name={name}
              discountPrice={discountPrice}
              discount_rate={discount_rate}
            />
          )
        )}
      </S.DisplayCenter>
      <S.LinkNumber>
        {separatePage.map((pageBaseNumber, index) => (
          <S.LinkText
            checkBtn={offset / limit === index}
            key={pageBaseNumber + index}
            onClick={e => handleChangePage(index, e)}
          >
            {pageBaseNumber + index}
          </S.LinkText>
        ))}
      </S.LinkNumber>
    </Width>
  );
};

export default ProductList;
