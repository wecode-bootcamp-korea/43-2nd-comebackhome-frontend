import styled from 'styled-components';

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0px 15px 0px;
`;

export const CustomStyles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    height: '68px',
    margin: '229px auto',
    fontSize: '18px',
    fontFamily: 'AnsungtangmyunBold',
    textAlign: 'center',
    overflow: 'hidden',
    zIndex: '100',
  },
};

export const Button = styled.button`
  width: 95px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 16px;
  font-family: AnsungtangmyunBold;
  background-color: rgba(255, 255, 255, 0.75);
  &:hover {
    background-color: #568a35;
    color: white;
  }
`;

export const Text = styled.div`
  margin: 10px 0;
`;
