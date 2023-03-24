import styled from 'styled-components';

const Width = styled.div`
  max-width: 1256px;
  margin: 110px auto 0px;
  padding: 0 60px;
  font-size: 16px;
`;

const TextColor = styled.span`
  color: ${Props => (Props.color ? '#afd485' : 'black')};
`;

const theme = { Width, TextColor };

export default theme;
