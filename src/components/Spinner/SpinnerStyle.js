import styled from 'styled-components';

export const Wrap = styled.div`
  ${({ theme }) => theme.flexBox('center', 'center')};
  width: 100%;
  margin-top: 50px;
  min-height: 380px;
`;
