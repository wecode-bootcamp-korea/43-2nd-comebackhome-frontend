import styled from 'styled-components';

export const OrderWrap = styled.div`
  ${({ theme }) => theme.flexBox('flex-start', 'space-between')};
  font-weight: 700;
`;

export const TotalOrderInfo = styled.div`
  width: 730px;
`;

export const Header = styled.h1`
  margin: 0px 0px 20px;
  line-height: 36px;
  font-size: 40px;
  font-weight: 700;
  color: rgb(0, 0, 0);
`;

export const Title = styled.div`
  height: 56px;
  margin-top: ${({ marginTop }) => marginTop || '20px'};
  border-bottom: 1px solid #afd485;
  line-height: 56px;
  font-size: 25px;
  font-weight: bold;
`;

export const OrderInfo = styled.div`
  overflow: hidden;
  min-height: 150px;
  margin: -3px;
  padding: 23px 3px 3px;
  font-size: 20px;
`;

export const ContentP = styled.p`
  margin: ${({ margin }) => margin && '15px 0'};
  font-size: 20px;
  font-family: ${({ font }) => font};
`;

export const ContentSpan = styled.span`
  margin: 0px 0px 0px 6px;
  line-height: 26px;
  font-size: 15px;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #568a35;
`;

export const InputSpan = styled.div`
  ${({ theme }) => theme.flexBox('center')};
  width: 72px;
  max-height: 40px;
  white-space: pre-line;
  line-height: 18px;
  font-size: 15px;
  color: rgb(117, 117, 117);
`;

export const Input = styled.input`
  display: inline-block;
  width: 89%;
  margin: 0;
  margin-bottom: ${({ marginBottom }) => marginBottom && '15px'};
  padding: 8px 15px 9px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: #000;
  line-height: 21px;
  font-size: 15px;
  background-color: #fff;
  &:focus {
    box-shadow: 0 0 5px #568a35;
    border-color: #568a35;
    outline: none;
  }
`;

export const BoxWrap = styled.div`
  ${({ theme }) => theme.flexBox()};
  padding: ${({ padding }) => padding || '8px 0px'};
  width: ${({ width }) => width && '35%'};
`;

export const InputWrap = styled.div`
  flex: 1 0 0px;
  max-width: ${({ maxWidth }) => (maxWidth ? '570px' : '270px')};
`;

export const Select = styled.select`
  position: relative;
  width: ${({ width }) => width || '85px'};
  margin-right: 8px;
  padding: 8px 15px 9px;
  border-radius: 5px;
  font-size: 15px;
  font-family: ${({ font }) =>
    font ? 'IBMPlexSansKR-Regular' : 'AnsungtangmyunBold'};
  font-weight: ${({ weight }) => weight};
`;

export const PointButton = styled.button`
  width: 55px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #568a35;
  cursor: pointer;
  color: #fff;
  &:hover {
    opacity: 0.7;
    color: #fff;
  }
`;

export const AmountWrap = styled.div`
  position: sticky;
  top: 150px;
  width: 390px;
  margin: 0 0 0 35px;
`;

export const OrderPrice = styled.span`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  font-size: 17px;
  line-height: 57px;
`;

export const AmountInfo = styled.div`
  padding: 20px 24px 23px;
  border: 1px solid #afd485;
  border-radius: 5px;
`;

export const AmountTitle = styled.p`
  margin-top: ${({ marginTop }) => marginTop && '20px'};
  margin-bottom: 20px;
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
`;

export const AmountTextDivide = styled.div`
  ${({ theme }) => theme.flexBox('flex-start', 'space-between')};
  margin-bottom: 8px;
`;

export const AmountText = styled.span`
  width: 100px;
  line-height: 22px;
  font-size: 15px;
  color: rgb(130, 140, 148);
`;

export const AmountPrice = styled.span`
  margin-right: ${({ marginRight }) => marginRight};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color || 'rgb(47, 52, 56)'};
`;

export const AmountTotalElement = styled.div`
  ${({ theme }) => theme.flexBox('flex-start', 'space-between')};
  margin-top: 20px;
  padding-top: 19px;
  border-top: 1px solid #afd485;
`;

export const OrderButton = styled.button`
  width: 100%;
  min-height: 50px;
  margin-top: 20px;
  padding: 15px 10px;
  border: none;
  border-radius: 5px;
  line-height: 20px;
  font-size: 17px;
  font-weight: 700;
  background-color: #568a35;
  cursor: pointer;
  color: #fff;
  &:hover {
    opacity: 0.7;
    color: #fff;
  }
`;
