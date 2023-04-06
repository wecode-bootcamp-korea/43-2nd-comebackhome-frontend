import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GlobalModal from '../../components/GlobalModal/GlobalModal';
import * as S from './NavStyle';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const nickname = localStorage.getItem('nickname');
  const profileImage = localStorage.getItem('profileImage');
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('nickname');
    localStorage.removeItem('profileImage');
    navigate('/');
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <S.Header>
      <S.Container>
        <S.TitleLogo>
          <Link to="/" className="LinkLogo">
            <img
              style={{ width: '130px' }}
              src="/images/콤배콤 로고제작.png"
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
              navigate('/productlist?offset=0&limit=8');
            }}
          >
            <S.A>쇼핑</S.A>
          </S.Li>
        </S.NavMenu>
        <S.Navcontents>
          {token ? (
            <S.Li>
              <S.Astyled>
                <S.ProfileImg>
                  <img src={profileImage} alt="프로필" />
                </S.ProfileImg>
                {nickname}
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
          {token && (
            <S.CartImageBox>
              <Link to="/cart">
                <S.CartImage src="/images/add-cart.png" alt="장바구니" />
              </Link>
            </S.CartImageBox>
          )}
        </S.Navcontents>
        <GlobalModal isOpen={isOpen} setIsOpen={setIsOpen} text="로그아웃" />
      </S.Container>
    </S.Header>
  );
};

export default Nav;
