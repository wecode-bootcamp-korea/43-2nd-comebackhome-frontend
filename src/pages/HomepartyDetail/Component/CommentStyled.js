import styled from 'styled-components';

export const CommentWrap = styled.div`
  margin-bottom: 10px;
`;

export const SubTitle = styled.div`
  font-family: IBMPlexSansKR-Regular;
  font-size: 17px;
  font-weight: ${({ bold }) => (bold ? '700' : '0')};
  margin-top: ${({ top }) => (top ? '10px' : '0')};
  margin-left: ${({ left }) => (left ? '20px' : '0')};
  color: ${({ color }) => (color ? '#568a35' : 'black')};
  width: ${({ width }) => (width ? '357px' : 'auto')};
`;

export const CommentUserBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentUserPic = styled.img`
  width: 40px;
  margin: 20px 10px;
  border-radius: 50%;
`;

export const SubTitleContents = styled.div`
  font-family: IBMPlexSansKR-Regular;
  font-size: 17px;
  margin-top: 10px;
  font-weight: 700;
  margin-bottom: 15px;
  max-width: 640px;
  line-height: 23px;
`;
export const SubTitleDate = styled.div`
  font-family: IBMPlexSansKR-Regular;
  font-size: 17px;
  margin: -6px -20px 5px 62px;
  cursor: pointer;

  color: ${({ color }) => (color ? '#568a35' : 'black')};

  font-weight: ${({ bold }) => (bold ? '700' : '0')};
`;

export const ReComment = styled.div`
  width: 640px;
  height: auto;
  margin-left: 50px;
  margin-top: 10px;
  background-color: rgba(175, 212, 133, 0.4);
`;

export const Input = styled.input`
  position: relative;
  width: 548px;
  padding-left: 10px;
  height: 40px;
  outline: 2px solid #568a35;
  border-radius: 5px;
  border: none;
  color: #568a35;
  font-weight: 700;
`;
export const CommentBtn = styled.button`
  position: absolute;
  width: 53px;
  right: 105px;
  border: none;
  background-color: white;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 3px;

  &:hover {
    cursor: pointer;
    color: #568a35;
  }
`;

export const ReCommentUserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
`;

export const CommentZone = styled.div`
  height: auto;
`;
