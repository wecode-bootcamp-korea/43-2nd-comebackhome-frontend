import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './NavStyle';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다.');
  };
  return (
    <S.Header>
      <S.Container>
        <S.TitleLogo>
          <Link to="/" className="LinkLogo">
            <img
              src="/images/comebackhome2.png"
              alt="콤배콤"
              className="ImgLogo"
            />
          </Link>
        </S.TitleLogo>
        <S.NavMenu>
          <S.Li
            onClick={() => {
              navigate('/homepartylist');
            }}
          >
            <S.A>집들이</S.A>
          </S.Li>
          <S.Li
            onClick={() => {
              navigate('/productlist');
            }}
          >
            <S.A>쇼핑</S.A>
          </S.Li>
        </S.NavMenu>
        <S.Navcontents>
          {false ? (
            <S.Li>
              <S.Astyled>
                <S.ProfileImg>
                  <img src="/images/thumbnail.jpg" alt="프로필" />
                </S.ProfileImg>
                닉네임
              </S.Astyled>
              <S.Logout onClick={handleLogout}>로그아웃</S.Logout>
            </S.Li>
          ) : (
            <S.Li
              onClick={() => {
                navigate('/signin');
              }}
            >
              <S.Astyled>로그인</S.Astyled>
            </S.Li>
          )}
          <S.Li
            onClick={() => {
              navigate('/signin');
            }}
          >
            <S.Astyled>회원가입</S.Astyled>
          </S.Li>
          <S.CartImageBox>
            <Link to="/cart">
              <S.CartImage src="/images/add-cart.png" alt="장바구니" />
            </Link>
          </S.CartImageBox>
        </S.Navcontents>
      </S.Container>
    </S.Header>
  );
};

export default Nav;
