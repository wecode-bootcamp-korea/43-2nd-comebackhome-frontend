import styled from 'styled-components';

export const FooterMain = styled.div`
  margin-top: 80px;
  padding: 40px 0px;
  background-color: rgb(247, 249, 250);
  font-family: IBMPlexSansKR-Regular;
`;

export const FooterWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 2fr;
  column-gap: 30px;
  max-width: 1256px;
  margin: 0px auto;
  padding: 0px 60px;
  line-height: 16px;
`;

export const FooterCs = styled.div`
  color: rgb(47, 52, 56);
`;

export const FooterMember = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, min-content);
  grid-auto-flow: column;
  gap: 20px 10px;
`;

export const FooterInfo = styled.div`
  font-size: 12px;
  line-height: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: rgb(130, 140, 148);
  div {
  }
`;

export const Line = styled.div`
  width: 1px;
  background-color: rgb(234, 237, 239);
`;

export const InlineText = styled.p`
  display: inline-block;
  color: rgb(47, 52, 56);
  font-size: 16px;
  line-height: 16px;
  cursor: Pointer;
`;

export const BlockText = styled.p`
  margin-bottom: 15px;
  font-weight: ${({ name }) => (name === '고객센터' ? '700' : '')};
`;

export const DisplayText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 32px;
    margin-right: 8px;
  }
`;

export const DefaultDiv = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
  img {
    margin-right: 14px;
  }
`;

export const ImgText = styled.div`
  display: grid;
  column-gap: 16px;
  grid-template-columns: max-content 1fr;
`;
