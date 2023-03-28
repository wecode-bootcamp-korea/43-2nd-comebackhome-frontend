import React, { useEffect, useState } from 'react';
import { Width } from '../../styles/common';
import Product from '../../components/Product/Product';
import * as S from './ProductListStyle.js';

const ProductList = () => {
  const [productItem, setProductItem] = useState([]);

  useEffect(() => {
    fetch('/data/ProductItem.json')
      .then(res => res.json())
      .then(data => {
        setProductItem(data);
      });
  }, []);

  return (
    <Width>
      <S.TitleBox>
        <S.ShoppingCategory>일상을 바꾸는 물건들,</S.ShoppingCategory>
        <S.TitleLogo src="images/dinnertable2.png" alt="물건사진" />
      </S.TitleBox>
      <S.DisplayCenter>
        {productItem.map(({ id, thumbnail, productName, price, discount }) => (
          <Product
            key={id}
            id={id}
            thumbnail={thumbnail}
            productName={productName}
            price={price}
            discount={discount}
          />
        ))}
      </S.DisplayCenter>
    </Width>
  );
};

export default ProductList;
