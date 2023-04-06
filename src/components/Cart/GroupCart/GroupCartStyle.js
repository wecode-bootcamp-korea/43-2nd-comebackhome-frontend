import styled from 'styled-components';
export const GroupCart = styled.div`
  ${({ theme }) => theme.flexBox()};
  position: relative;
  max-width: 1256px;
  padding: 0 60px;
  font-family: 'IBMPlexSansKR-Regular';
  font-weight: 700;
`;
export const CartContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 1256px;
  max-width: 100%;
  box-sizing: border-box;
  min-height: 1px;
`;
export const CartSelect = styled.div`
  ${({ theme }) => theme.flexBox('', 'space-between')};
  padding: 0 26px;
  background: none;
  border: none;
  margin: 0 0 11px;
`;
export const CheckBox = styled.span``;
export const CheckboxLabel = styled.label`
  flex-direction: row;
  padding-right: 6px;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  width: 100%;
`;
export const CheckboxWrap = styled.div`
  position: relative;
  display: inline-block;
  font-size: 0;
  padding: 9px;
`;
export const CheckboxInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: inherit;
  opacity: 1;
  box-sizing: border-box;
  accent-color: #568a35;
`;
export const CheckboxCheck = styled.span`
  border-color: #35c5f0;
  background-color: #35c5f0;
  color: #fff;
`;
export const CheckboxPoint = styled.svg`
  width: 1em;
  height: 1em;
`;
export const CheckboxAll = styled.span`
  font-size: 18px;
`;
export const CheckboxAllSelect = styled.span`
  display: inline-block;
  line-height: 21px;
  margin-bottom: 2px;
  margin-left: 10px;
  &:hover {
    color: #568a35;
  }
`;
export const DelButton = styled.button`
  flex: 0 0 auto;
  -webkit-box-flex: 0;
  display: inline-block;
  margin: 2px -3px 0;
  padding: 3px;
  background: none;
  border: none;
  color: #424242;
  font-family: 'IBMPlexSansKR-Regular';
  font-weight: 700;
  line-height: 1;
  transition: opacity 0.1s;
  &:hover {
    color: #568a35;
  }
`;
export const CartList = styled.ul`
  list-style: none;
  padding: 0;
`;
export const CartArticle = styled.article`
  border: 1px solid #afd485;
  border-radius: 5px;
  margin-bottom: 40px;
`;
export const CartTitle = styled.h1`
  border-bottom: 1px solid #afd485;
  padding: 10px 0;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #424242;
  background-color: rgba(175, 212, 133, 0.4);
  font-family: 'IBMPlexSansKR-Regular';
  font-weight: 700;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const CartArticleBox = styled.article`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-style: solid;
  border-color: rgb(237, 237, 237);
  border-image: initial;
  border-radius: 6px;
`;
export const CartListGroup = styled.li`
  background-color: rgb(255, 255, 255);
`;
export const CartProduct = styled.article`
  padding: 20px 15px 20px 54px;
  position: relative;
`;
export const CartProductSelect = styled.div`
  left: 20px;
  position: absolute;
  margin: -9px;
  top: 20px;
`;
export const CartCheckboxWrap = styled.div`
  position: relative;
  display: inline-block;
  font-size: 20px;
  padding: 9px;
`;
export const CartCheckbox = styled.input`
  position: absolute;
  top: 10px;
  left: 6px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: inherit;
  opacity: 1;
  box-sizing: border-box;
  accent-color: #568a35;
`;
export const CartSmallProduct = styled.a`
  margin: 0 20px 12px 0;
  display: flex;
`;
export const CartProductImgWrap = styled.div`
  flex: 0 0 auto;
  position: relative;
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 6px;
  background-color: #ededed;
  overflow: hidden;
`;
export const CartProductImg = styled.img`
  border: none;
  cursor: pointer;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transition: transform 0.2s;
  transform: translate(-50%, -50%) scale(1.0001);
  &:hover {
    transform: translate(-50%, -50%) scale(1.3);
  }
`;
export const CartProductContents = styled.div`
  -webkit-box-flex: 1;
  flex: 1 0 0px;
  padding-left: 12px;
`;
export const CartProductTitle = styled.h1`
  min-width: 0;
  font-size: 16px;
  color: #000;
  line-height: 21px;
  overflow-wrap: break-word;
  transition: opacity 0.01s;
  &:hover {
    cursor: pointer;
    color: #568a35;
  }
`;
export const CartProductStock = styled.p`
  margin-top: 8px;
  font-size: 13px;
  line-height: 15px;
  color: #757575;
  overflow-wrap: break-word;
  display: flex;
  align-items: center;
  font-family: 'IBMPlexSansKR-Regular';
  font-weight: 700;
`;
export const CartProductColor = styled.p`
  margin-top: 8px;
  font-size: 10px;
  line-height: 15px;
  color: #757575;
  overflow-wrap: break-word;
  display: flex;
  align-items: center;
`;
export const CartDelete = styled.button`
  right: 20px;
  position: absolute;
  display: inline-block;
  top: 12px;
  padding: 5px;
  background: none;
  border: none;
  font-size: 15px;
  transition: opacity 0.1s;
  color: #424242;
  cursor: pointer;
`;
export const CartCountWrap = styled.article`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 12px;
  border-radius: 4px;
  background-color: #f7f9fa;
`;
export const CartCountArticle = styled.article`
  position: relative;
  margin-bottom: 8px;
  padding: 12px;
  background-color: #f7f9fa;
  border-radius: 4px;
  color: #2f3438;
`;
export const CartCountBox = styled.div`
  ${({ theme }) => theme.flexBox('flex-end', 'space-between')};
`;
export const CartPriceWrap = styled.div`
  flex: 1;
  text-align: right;
`;
export const CartPrice = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
`;
export const CartFooter = styled.footer`
  padding: 10px 0;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #424242;
  box-sizing: border-box;
  position: relative;
  display: block;
  border-top: 1px solid #afd485;
  background-color: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const CartSideBarWrap = styled.div`
  display: block;
  padding-top: 35px;
  padding-right: 0;
  padding-left: 25px;
`;
export const CartSideBarContainer = styled.div`
  position: sticky;
  top: 150px;
  transition: top 0.1s ease 0s;
`;
export const CartSideBarBox = styled.div`
  position: relative;
  padding: 0 0;
`;
export const CartSideBarContents = styled.div`
  margin: 0 0 20px;
  border: 1px solid #afd485;
  border-radius: 6px;
  background-color: #fff;
  padding: 10px 50px;
`;
export const CartTotalPrice = styled.div`
  ${({ theme }) => theme.flexBox('center', 'space-between')};
  width: 325px;
  margin: 20px -20px;
  font-size: 16px;
  color: #424242;
`;
export const CartTotalPriceNumber = styled.span`
  font-weight: 700;
  text-align: right;
  flex: 0 auto;
`;
export const CartTotalDeliver = styled.div`
  ${({ theme }) => theme.flexBox('center', 'space-between')};
  width: 325px;
  margin: 20px -20px;
  font-size: 16px;
  color: #424242;
`;
export const CartTotalDeliverNumber = styled.span`
  font-weight: 700;
  text-align: right;
  flex: 0 auto;
`;
export const CartTotalDiscount = styled.div`
  ${({ theme }) => theme.flexBox('center', 'space-between')};
  width: 325px;
  margin: 20px -20px;
  font-size: 16px;
  color: #424242;
`;
export const CartTotalDiscountNumber = styled.span`
  font-weight: 700;
  text-align: right;
  flex: 0 auto;
`;
export const CartSummary = styled.div`
  ${({ theme }) => theme.flexBox('center', 'space-between')};
  margin: 12px -20px;
  font-size: 20px;
  font-family: 'IBMPlexSansKR-Regular';
  font-weight: 700;
  color: #424242;
  margin-top: 30px;
`;
export const CartSummaryNumber = styled.span`
  font-weight: 700;
  text-align: right;
  flex: 0 auto;
`;
export const CartSideBarButton = styled.button`
  display: block;
  width: 100%;
  padding: 15px 10px;
  line-height: 20px;
  font-size: 17px;
  min-height: 50px;
  background-color: #568a35;
  border: none;
  color: #fff;
  border-radius: 6px 6px 6px 6px;
  font-family: 'IBMPlexSansKR-Regular';
  font-weight: 700;
`;
