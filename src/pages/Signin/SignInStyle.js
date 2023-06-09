import styled from 'styled-components';

export const FlexCenter = styled.div`
  ${({ theme }) => theme.flexBox('', 'center')};
`;

export const Container = styled.div`
  ${({ theme }) => theme.flexBox('center')};
  border: 2px dotted #afd485;
  border-radius: 5px;
  width: 370px;
  height: 300px;
  flex-direction: column;
  line-height: 2;
`;

export const Logo = styled.img`
  width: 250px;
  margin-top: 15px;
`;

export const Text = styled.p`
  font-weight: 700;
  font-family: 'AnsungtangmyunBold';
  font-size: 35px;
  color: #afd485;
  margin-bottom: 35px;
`;
export const KakaoLogin = styled.img`
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;
