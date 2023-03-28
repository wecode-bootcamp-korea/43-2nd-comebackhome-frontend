import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Width } from '../../styles/common';
import * as S from './HomepartyListStyled.js';

const Homepartylist = () => {
  const [homeparty, setHomeparty] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('./data/HomepartyList.json')
      .then(res => res.json())
      .then(data => {
        setHomeparty(data);
      });
  }, []);

  return (
    <Width>
      <S.TitleText>어서와 우리집은 처음이지?</S.TitleText>
      <S.Title>
        <S.SelectSort>
          <S.SelectSortText disabled selected>
            정 렬
          </S.SelectSortText>
          {SORT_LIST.map(({ id, category }) => (
            <S.SelectSortText key={id}>{category}</S.SelectSortText>
          ))}
        </S.SelectSort>

        <S.SelectSort>
          <S.SelectSortText disabled selected>
            평 수
          </S.SelectSortText>
          {ROOMSIZE_LIST.map(({ id, category }) => (
            <S.SelectSortText key={id}>{category}</S.SelectSortText>
          ))}
        </S.SelectSort>
      </S.Title>
      <S.DisplayGrid>
        {homeparty.map(({ id, thumbnail, comment, userImage, userName }) => (
          <S.HomepartyBox key={id}>
            <S.HomepartyBoxImg
              src={thumbnail}
              alt="집 세로 사진"
              onClick={() => navigate(`homepartylist/${id}`)}
            />
            <S.HomepartyBoxP>{comment}</S.HomepartyBoxP>
            <S.UserInfo>
              <S.HomepartyBoxUser src={userImage} />
              <S.UserName>{userName}</S.UserName>
            </S.UserInfo>
          </S.HomepartyBox>
        ))}
      </S.DisplayGrid>
    </Width>
  );
};

export default Homepartylist;

const SORT_LIST = [
  { id: 1, category: '인기순' },
  { id: 2, category: '최신순' },
  { id: 3, category: '추천순' },
];

const ROOMSIZE_LIST = [
  { id: 10, category: '1-9평대' },
  { id: 11, category: '10-19평대' },
  { id: 12, category: '20-29평대' },
];
