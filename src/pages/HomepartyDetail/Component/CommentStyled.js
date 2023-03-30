import styled from 'styled-components';

export const SubTitle = styled.div`
  font-family: IBMPlexSansKR-Regular;
  font-size: 15px;
  font-weight: ${({ bold }) => (bold ? '700' : '0')};
  margin-top: ${({ top }) => (top ? '10px' : '0')};
`;

export const CommentUserBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentUserPic = styled.img`
  width: 30px;
  margin: 20px 10px;
`;
