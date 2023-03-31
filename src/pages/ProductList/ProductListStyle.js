import styled from 'styled-components';

export const ShoppingCategory = styled.div`
  font-family: 'IBMPlexSansKR-Regular';
  color: black;
  font-size: 30px;
  line-height: 2px;
  text-shadow: 0 0 3vw #afd485;
  text-align: center;
  font-weight: 700;
`;

export const TitleLogo = styled.img`
  width: 100px;
  margin: 25px 20px 0 575px;
`;

export const DisplayCenter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 60px;
`;

export const TitleBox = styled.div`
  width: 1256px;
  margin-top: 20px;
  margin-bottom: 45px;
`;

export const LinkNumber = styled.div`
  font-family: 'IBMPlexSansKR-Regular';
  display: flex;
  justify-content: center;
  gap: 80px;
`;

export const LinkText = styled.div`
  text-decoration: none;
  width: 50px;
  height: 50px;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  cursor: pointer;
  ${({ checkBtn }) =>
    checkBtn &&
    `
    background-color: rgb(86, 138, 53); 
    color: white;
    `}
`;
