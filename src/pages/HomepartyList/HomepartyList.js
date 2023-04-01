import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Width } from '../../styles/common';
import { API } from '../../config';
import * as S from './HomepartyListStyled.js';

const Homepartylist = () => {
  const [homeparty, setHomeparty] = useState([]);
  const [list, setList] = useState({
    sort: '',
    average: '',
  });
  const { sort, average } = list;

  const changeAdress = e => {
    const { value, name } = e.target;
    if (value === '정렬' || value === '평수') {
      setList({ ...list, [name]: '' });
    } else {
      setList({ ...list, [name]: value });
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API.homepartylist}?sorting=${sort}&roomSizeType=${average}`)
      .then(res => res.json())
      .then(data => {
        setHomeparty(data.posts);
      });
  }, [list]);

  return (
    <Width>
      <S.TitleText>어서와 우리집은 처음이지?</S.TitleText>
      <S.Title>
        <S.SelectSort onChange={changeAdress} name="sort" defaultValue="정렬">
          <S.SelectSortText>정렬</S.SelectSortText>
          {SORT_LIST.map(({ id, category, sortlist }) => (
            <S.SelectSortText key={id} value={sortlist}>
              {category}
            </S.SelectSortText>
          ))}
        </S.SelectSort>
        <S.SelectSort
          onChange={changeAdress}
          name="average"
          defaultValue="평수"
        >
          <S.SelectSortText>평수</S.SelectSortText>
          {ROOMSIZE_LIST.map(({ id, category }) => (
            <S.SelectSortText key={id}>{category}</S.SelectSortText>
          ))}
        </S.SelectSort>
      </S.Title>
      <S.DisplayGrid>
        {homeparty.map(({ id, imageUrl, title, nickname, profileImage }) => (
          <S.HomepartyBox key={id}>
            <S.HomepartyBoxImg
              src={imageUrl}
              alt="집 세로 사진"
              onClick={() => navigate(`/homepartydetail/${id}`)}
            />
            <S.HomepartyBoxP>{title}</S.HomepartyBoxP>
            <S.UserInfo>
              <S.HomepartyBoxUser
                src={profileImage ? profileImage : '/images/frog.png'}
              />
              <S.UserName>{nickname}</S.UserName>
            </S.UserInfo>
          </S.HomepartyBox>
        ))}
      </S.DisplayGrid>
    </Width>
  );
};

export default Homepartylist;

const SORT_LIST = [
  { id: 1, category: '최신순', sortlist: 'new' },
  { id: 2, category: '추천순', sortlist: 'recommend' },
];

const ROOMSIZE_LIST = [
  { id: 10, category: '1-9평' },
  { id: 11, category: '10-19평' },
  { id: 12, category: '20-29평' },
  { id: 13, category: '30-39평' },
];
