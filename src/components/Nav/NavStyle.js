import styled from 'styled-components';
export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  padding: 0 60px;
  max-width: 100%;
  margin: auto 0px;
  align-items: center;
  height: 110px;
  background-color: #fff;
  overflow: hidden;
  z-index: 10;
  border-bottom: solid 1px gray;
  font-family: AnsungtangmyunBold;
  margin-bottom: 80px;
`;
export const Container = styled.div`
  display: flex;
  width: 1256px;
  height: 110px;
  margin: auto;
`;
export const TitleLogo = styled.div`
  float: left;
  margin-top: -45px;
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
  display: flex;
  position: relative;
  padding: 0 15px;
  color: #000;
  font-size: 25px;
  line-height: 90px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: #568a35;
  }
`;

export const Astyled = styled(A)`
  font-size: 18px;
`;

export const Logout = styled.div`
  display: flex;
  margin: auto 0px;
  margin-left: 18px;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    color: #568a35;
  }
`;

export const Navcontents = styled.div`
  margin: auto 0px;
  margin-left: auto;
  display: flex;
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
`;
export const ProfileImg = styled.div`
  display: flex;
  margin: auto 20px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
`;
