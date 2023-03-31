import styled from 'styled-components';

export const TitleText = styled.p`
  margin-bottom: 25px;
  font-family: 'IBMPlexSansKR-Regular';
  font-size: 23px;
  font-weight: 700;
`;

export const Title = styled.div`
  display: flex;
  font-family: 'IBMPlexSansKR-Regular';
  font-size: 18px;
  font-weight: 700;
`;

export const SelectSort = styled.select`
  position: relative;
  width: 160px;
  margin-right: 30px;
  padding: 5px;
  border: 2px solid #afd485;
  border-radius: 10px;
  outline: 2px solid #afd485;
  color: rgb(62 62 62);
  font-family: 'IBMPlexSansKR-Regular';
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  z-index: 3;
`;

export const SelectSortText = styled.option`
  font-family: 'IBMPlexSansKR-Regular';
  font-size: 18px;
  cursor: pointer;
`;

export const DisplayGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 56px;
`;

export const HomepartyBox = styled.div`
  margin-top: 20px;
  max-width: 380px;
  height: 440px;
  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-out;
    cursor: pointer;
  }
`;
export const HomepartyBoxImg = styled.img`
  width: 380px;
  height: 330px;
  border-radius: 15px;
`;

export const HomepartyBoxP = styled.p`
  margin: 10px 0 10px 0;
  line-height: 25px;
  font-family: IBMPlexSansKR-Regular;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const HomepartyBoxUser = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.span`
  margin-left: 8px;
  font-family: IBMPlexSansKR-Regular;
  font-size: 15px;
  font-weight: 500;
`;
