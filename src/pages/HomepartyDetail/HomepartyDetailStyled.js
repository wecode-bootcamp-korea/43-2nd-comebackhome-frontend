import styled from 'styled-components';

export const WidthMe = styled.div`
  position: relative;
  max-width: 700px;
  margin: 110px auto 0px;
  padding: 0 60px;
  font-family: ${({ font }) => font};
`;

export const SubTitle = styled.div`
  font-family: IBMPlexSansKR-Regular;
  font-size: 15px;
  font-weight: ${({ bold }) => (bold ? '700' : '0')};
  margin-top: ${({ top }) => (top ? '10px' : '0')};
`;

export const Title = styled.div`
  font-family: IBMPlexSansKR-Regular;
  font-size: 30px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 30px;
`;
export const UserDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

export const UserImg = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Button = styled.button`
  height: 40px;
  width: 80px;
  color: white;
  background-color: #568a35;
  font-size: 17px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-bottom: 25px;
  border-radius: 5px;
`;

export const IconFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;
export const BacgroundAptSize = styled.div`
  background-color: #f0f0f0;
  height: 70px;
  display: flex;
  margin-bottom: 15px;
`;

export const AptSize = styled.div`
  display: flex;
  justify-content: space-around;
  width: 280px;
`;

export const Img = styled.img`
  width: 700px;
  height: 700px;
  margin-top: 30px;
`;

export const Contents = styled.p`
  margin: 40px 0;
  font-family: IBMPlexSansKR-Regular;
  font-size: 20px;
  line-height: 40px;
  word-spacing: 5px;
`;

export const ColorSpan = styled.span`
  font-family: IBMPlexSansKR-Regular;
  font-size: 38px;
  font-weight: 700;
  color: #568a35;
`;

export const ShoppingListMap = styled.img`
  border: 3px solid #fff;
  margin-top: 20px;
  width: 150px;
  height: 150px;
  border-radius: 60px;
  margin-bottom: 15px;

  &:hover {
    cursor: pointer;
    border: 3px solid #568a35;
  }
`;

export const ProductListing = styled.div`
  display: flex;
  gap: 26px;
  overflow-x: hidden;
`;

export const Written = styled.div`
  border-top: 2px solid #ebebeb;
  border-bottom: 2px solid #ebebeb;
  margin: 20px 0 40px 0;
  padding-top: 25px;
`;

export const Comment = styled.span`
  font-family: IBMPlexSansKR-Regular;
  font-size: 20px;
  font-weight: 700;

  color: ${({ color }) => (color ? '#568a35' : 'black')};
`;

export const CommentUserBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentUserPic = styled.img`
  width: 30px;
  margin: 20px 10px;
`;

export const Input = styled.input`
  position: relative;
  width: 645px;
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
  width: 80px;
  right: 63px;
  border: none;
  background-color: white;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 3px;

  &:hover {
    cursor: pointer;
    color: #568a35;
  }
`;
