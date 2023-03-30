import styled from 'styled-components';

export const ShoppingMap = styled.div`
  margin-top: 20px;
  font-size: 15px;
  max-width: 268px;
  height: 420px;
  &:hover {
    cursor: pointer;
  }
`;

export const ShoppingItem = styled.img`
  width: 268px;
  height: 268px;
  margin-bottom: 5px;
  border-radius: 15px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-out;
  }
`;

export const ShopingItemP = styled.p`
  margin: 10px 0 10px 0;
  line-height: 25px;
  font-family: IBMPlexSansKR-Regular;
  font-size: 20px;
  font-weight: 700;
`;

export const ShopingItemSpan = styled.span`
  line-height: 2px;
  font-family: IBMPlexSansKR-Regular;
  font-size: 20px;
  font-weight: 700;
  margin-right: 10px;

  color: ${({ strong }) => (strong ? 'red' : 'black')};
`;

export const IconSizeImg = styled.img`
  width: 30px;
  height: 30px;
`;
