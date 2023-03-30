import styled from 'styled-components';

export const CartCountInput = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 0 0 12px 0;
  padding: 12px;
  border-radius: 4px;
  background-color: #f7f9fa;
  width: 100%;
  align-items: center;
  color: #2f3438;
  /* margin-top: 0; */
`;

export const CartCountInputWrap = styled.div`
  display: flex;
  padding: 7px 6px;
  background: #ffffff;
  border: 1px solid #dadde0;

  /* margin-right: 600px; */
  /* padding: 0 6px; */
`;

export const CartCountMinus = styled.button`
  display: inline-block;
  width: auto;
  font-size: 15px;
  margin-bottom: 2px;
  border: none;
  background-color: white;
  line-height: 1;
  cursor: pointer;
`;

export const CartCountButton = styled.span`
  font-size: 14px;
  line-height: 18px;
  padding: 0;
  border: 0;
  background: none;
  color: #2f3438;
  margin-right: 8px;
  margin-left: 8px;
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

export const CartPrice = styled.div`
  width: max-content;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
`;
