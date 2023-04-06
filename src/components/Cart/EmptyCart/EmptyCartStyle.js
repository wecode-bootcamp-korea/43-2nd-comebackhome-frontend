import styled from 'styled-components';

export const EmptyCart = styled.div`
  ${({ theme }) => theme.flexBox('', 'center')};
  max-width: 1256px;
  margin: 110px auto 0px;
  padding: 0 60px;
  font-weight: 700;
`;

export const EmptyCartWrap = styled.div`
  flex: 0 0 auto;
  width: 100%;
  max-width: 220px;
  margin: 80px auto;
  margin-top: auto;
  box-sizing: border-box;
  text-align: center;
`;

export const EmptyCartImg = styled.img`
  display: block;
  max-width: 160px;
  margin: 0 auto;
  border: 0;
`;

export const EmptyCartButton = styled.div`
  display: block;
  margin-top: 30px;
  padding: 11px 10px;
  font-size: 17px;
  line-height: 26px;
  background-color: #568a35;
  color: #fff;
  cursor: pointer;
`;
