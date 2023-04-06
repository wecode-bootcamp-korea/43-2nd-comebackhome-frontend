import styled from 'styled-components';

export const ButtonWrap = styled.div`
  ${({ theme }) => theme.flexBox('', 'space-evenly')};
  margin: 20px 0px 15px 0px;
`;

export const CustomStyles = {
  content: {
    display: 'flex',
    inset: '110px',
    border: '1px solid  #afd485',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '300px',
    height: '105px',
    margin: '229px auto',
    fontSize: '18px',
    fontWeight: '700',
    textAlign: 'center',
    overflow: 'hidden',
    zIndex: '100',
  },
};

export const Button = styled.button`
  display: inline-block;
  width: 50%;
  height: 60px;
  vertical-align: top;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
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

export const Text = styled.div`
  margin-top: 15px;
`;
