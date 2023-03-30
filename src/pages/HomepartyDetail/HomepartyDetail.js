import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Comment } from './Component/Comment.js';
import * as S from './HomepartyDetailStyled.js';

const HomepartyDetail = () => {
  const [shoppingItem, setShoppingItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('./data/ItemData.json')
      .then(res => res.json())
      .then(data => {
        setShoppingItem(data);
      });
  }, []);
  return (
    <S.WidthMe>
      <S.SubTitle bold>온라인 집들이</S.SubTitle>
      <S.Title>통창 너머 따뜻한 봄이 들어오는 신혼집 리모델링</S.Title>
      <S.UserDetail>
        <S.UserInfo>
          <S.UserImg src="/images/thumbnail.jpg" alt="사용자프로필사진" />
          <S.SubTitle bold>무능빈씨</S.SubTitle>
        </S.UserInfo>
        <S.Button>+팔로우</S.Button>
      </S.UserDetail>
      <S.BacgroundAptSize>
        <S.AptSize>
          <S.IconFlex>
            <S.ImgIcon src="/images/shoppingItem/apt.png" />
            <S.SubTitle bold>아파트</S.SubTitle>
          </S.IconFlex>
          <S.IconFlex>
            <S.ImgIcon src="/images/shoppingItem/blueprint.png" />
            <S.SubTitle bold>32평</S.SubTitle>
          </S.IconFlex>
        </S.AptSize>
      </S.BacgroundAptSize>
      <S.Img src="/images/pic.jpg" />
      <S.Contents>
        안녕하세요 :-) 작년에 결혼해서 결혼생활 4개월 차가 된 신혼부부입니다!{' '}
        <br />
        남편은 회사원 그리고 와이프인 저는 네이버 스토어 팜에서 의류를 소소하게
        판매 중입니다. 결혼 준비 중에 좋은 기회가 생겨 너무 감사하게도 첫
        보금자리를 가질 수 있게 되었습니다. <br /> <br />
        많은 선택과 고민을 하고 완성된 저층이라 매력적인 집, 강변과 나무가
        보이고 빛이 잘 드는 정남향의 저희 집을 소개해 드립니다 ♥ 아직 많이
        부족하지만 조금이라도 도움되셨으면 하는 마음입니다! 예쁘게 많이
        봐주세요. <br />
        감사합니다 :-){' '}
      </S.Contents>
      <S.ImgIcon src="/images/sale.png" />
      <S.ColorSpan>3초컷 집들이 미리보기</S.ColorSpan>

      <S.Img src="/images/30평 거실.jpg" />
      <S.ProductListing>
        {shoppingItem.map(({ id, thumbnail }) => (
          <S.ShoppingListMap
            key={id}
            id={id}
            src={thumbnail}
            onClick={() => navigate(`shoppingdetail/${id}`)}
          />
        ))}
      </S.ProductListing>
      <S.Written>
        <S.UserInfo>
          <S.UserImg src="/images/thumbnail.jpg" alt="사용자프로필사진" />
          <S.SubTitle bold>무능빈씨</S.SubTitle>
        </S.UserInfo>
      </S.Written>
      <S.Comment>댓글&nbsp;</S.Comment>
      <S.Comment color>23</S.Comment>
      <S.CommentUserBox>
        <S.CommentUserPic src="/images/frog.png" alt="사용자" />

        <S.Input placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)" />
        <S.CommentBtn>입력</S.CommentBtn>
      </S.CommentUserBox>
      <Comment />
    </S.WidthMe>
  );
};

export default HomepartyDetail;
