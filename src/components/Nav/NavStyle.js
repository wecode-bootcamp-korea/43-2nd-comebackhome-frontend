import styled from 'styled-components';
export const Header = styled.header`
  ${({ theme }) => theme.flexBox('center')};
  position: sticky;
  top: 0;
  padding: 0 60px;
  max-width: 100%;
  margin: auto 0px;
  height: 110px;
  background-color: #fff;
  overflow: hidden;
  z-index: 10;
  border-bottom: 3px solid #afd485;
  font-family: Nanum;
  font-weight: 700;
  margin-bottom: 80px;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1256px;
  height: 110px;
  margin: auto;
`;
export const TitleLogo = styled.div`
  float: left;
`;
export const NavMenu = styled.div`
  display: flex;
  padding-left: 25px;
  margin: auto 0px;
  gap: 20px;
`;
export const Li = styled.li`
  display: flex;
  list-style: none;
`;
export const A = styled.a`
  ${({ theme }) => theme.flexBox()};
  position: relative;
  padding: 0 15px;
  color: #000;
  font-size: 40px;
  line-height: 90px;
  text-decoration: none;

  &:hover {
    color: #568a35;
    cursor: pointer;
  }
`;

export const Astyled = styled(A)`
  font-size: 35px;
`;

export const Logout = styled.div`
  ${({ theme }) => theme.flexBox()};
  margin: auto 0px;
  margin-left: 18px;
  font-size: 35px;
  &:hover {
    cursor: pointer;
    color: #568a35;
  }
`;

export const Navcontents = styled.div`
  ${({ theme }) => theme.flexBox()};
  margin: auto 0px;
  margin-left: auto;
  gap: 20px;
  position: relative;
`;
export const CartImageBox = styled.div`
  margin: auto;
  background-size: cover;
`;
export const CartImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 7px 0 0 10px;
`;
export const ProfileImg = styled.div`
  ${({ theme }) => theme.flexBox()};
  margin: auto 20px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
`;
