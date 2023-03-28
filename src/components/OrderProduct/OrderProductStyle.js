import styled from 'styled-components';

export const CartBox = styled.div`
  overflow: hidden;
  margin: 15px 0;
  border: 1px solid #afd485;
  border-radius: 5px;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 11px 16px 10px;

  background-color: #afd485;
`;

export const OrderProductWrap = styled.div`
  display: flex;
  align-items: ${({ align }) => align && ' center'};
  padding: ${({ padding }) => padding && '16px'};
`;

export const ProductImg = styled.img`
  width: 64px;
  height: 64px;
  border: 1px solid rgb(247, 248, 250);
  border-radius: 5px;
`;

export const ProductContent = styled.span`
  margin-right: ${({ marginRight }) => marginRight && '4px'};
  line-height: 16px;
  font-size: 12px;
  color: black;
`;

export const ProductImgWrap = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  margin-right: 12px;
`;

export const ProductDetail = styled.div`
  flex: 1 0 0px;
  line-height: 18px;
  font-size: 14px;
  color: rgb(47, 52, 56);
`;

export const DetailElement = styled.div`
  margin-bottom: ${({ marginBottom }) => marginBottom};
  line-height: ${({ lineHeight }) => (lineHeight ? '18px' : '20px')};
  font-size: ${({ size }) => size};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;

export const DetailMargin = styled.div`
  margin-bottom: 8px;
`;

export const Line = styled.div`
  height: 12px;
  margin: 0px 8px;
  border-right: 1px solid rgb(234, 235, 239);
`;
