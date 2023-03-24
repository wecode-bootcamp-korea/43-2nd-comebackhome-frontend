import styled from 'styled-components';

export const ProductWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Imgs = styled.img`
  position: relative;
  width: 820px;
  height: 820px;
  border: 1px solid #e5e5e5;
  border-radius: 15px;
`;

export const ProductInfo = styled.div`
  width: 380px;
`;

export const Title = styled.div`
  border-bottom: 2px solid black;
  font-size: 25px;
`;

export const ProductNumber = styled.div`
  margin: 20px 0;
`;

export const ProductOption = styled.div`
  margin-top: 15px;
  font-size: 12px;
  border: 1px solid #e5e5e5;
`;

export const TotalPrice = styled.div`
  display: block;
  margin: 30px 0;
  text-align: right;
  font-size: 22px;
  line-height: 23px;
  img {
    cursor: pointer;
  }
`;

export const Text = styled.p`
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-family: ${({ font }) => font};
  font-size: ${({ size }) => size};
  text-decoration: ${({ decoration }) => (decoration ? 'line-through' : '')};
  vertical-align: ${({ vertical }) => (vertical ? 'top' : '')};
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Span = styled.span`
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  font-family: ${({ font }) => font};
  font-size: ${({ size }) => size};
  text-decoration: ${({ decoration }) => (decoration ? 'line-through' : '')};
  vertical-align: ${({ vertical }) => vertical};
  color: ${({ color }) => color};
`;

export const ProductButton = styled.button`
  display: inline-block;
  width: 50%;
  height: 60px;
  vertical-align: top;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 58px;
  letter-spacing: -0.01rem;
  cursor: pointer;
  ${({ backColor, color }) => {
    return `
      border: none;
      color:${color};
      background-color:${backColor};
    `;
  }}
`;

export const ProductOptionBox = styled.div`
  position: relative;
  padding: ${({ padding }) => padding};
`;

export const ProductPrice = styled.div`
  position: absolute;
  bottom: 12px;
  right: 14px;
  border: 1px solid #d2d2d2;
`;

export const PriceButton = styled.button`
  width: 23px;
  border: none;
  font-size: 20px;
  text-align: center;
  vertical-align: top;
  cursor: pointer;
  background-color: white;
  border-left: ${({ borderLeft }) =>
    borderLeft ? '1px solid rgb(210, 210, 210)' : ''};
  border-right: ${({ borderRight }) =>
    borderRight ? '1px solid rgb(210, 210, 210)' : ''};
`;

export const PriceCount = styled.div`
  display: inline-block;
  width: 43px;
  font-size: 23px;
  text-align: center;
`;

export const MaxQuantity = styled.div`
  margin: 20px 0 0;
  text-align: end;
`;
