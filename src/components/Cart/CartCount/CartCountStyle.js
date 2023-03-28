import styled from 'styled-components';

export const CartCountInput = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 6px;
  background: #ffffff;
  color: #2f3438;
  border: 1px solid #dadde0;
  border-radius: 4px;
  margin-top: 0;
`;

export const CartCountMinus = styled.button`
  display: inline-block;
  width: auto;
  font-size: 15px;
  margin-bottom: 2px;
  border: none;
  background-color: white;
  line-height: 1;
  margin-left: 5px;
  cursor: pointer;
`;

export const CartCountButton = styled.span`
  font-size: 14px;
  line-height: 18px;
  padding: 0;
  border: 0;
  background: none;
  color: #2f3438;
  margin-right: 2px;
`;

export const CartCountPlus = styled.button`
  display: inline-block;
  /* font-size: 20px; */
  border: none;
  width: auto;
  background-color: white;
  line-height: 1;
  margin-right: 5px;
  cursor: pointer;
`;
