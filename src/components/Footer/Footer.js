import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Footerstyle';

const Footer = () => {
  return (
    <S.FooterMain>
      <S.FooterWrap>
        <S.FooterCs>
          {CS.map(({ id, title }) => (
            <S.BlockText key={id} name={title}>
              {title}
            </S.BlockText>
          ))}
        </S.FooterCs>
        <S.Line />
        <S.FooterMember>
          {MEMBER.map(({ id, title }) => (
            <S.InlineText key={id}>{title}</S.InlineText>
          ))}
        </S.FooterMember>
        <S.Line />
        <S.FooterInfo>
          <S.DefaultDiv>{COMPANYINFO[0].title}</S.DefaultDiv>
          <S.DefaultDiv>{COMPANYINFO[1].title}</S.DefaultDiv>
          <S.ImgText>
            {SERVICEINFO.map(({ id, title, src, alt, subtitle }) => (
              <S.DisplayText key={id}>
                <img src={src} alt={alt} />
                <p>
                  {title} <br />
                  {subtitle}
                </p>
              </S.DisplayText>
            ))}
          </S.ImgText>
          <S.DefaultDiv>{COMPANYINFO[2].title}</S.DefaultDiv>
          <S.DefaultDiv>
            {LINK.map(({ id, src, to, alt }) => (
              <Link to={to} key={id}>
                <img src={src} alt={alt} />
              </Link>
            ))}
          </S.DefaultDiv>
          <S.DefaultDiv>{COMPANYINFO[3].title}</S.DefaultDiv>
        </S.FooterInfo>
      </S.FooterWrap>
    </S.FooterMain>
  );
};

export default Footer;

const CS = [
  { id: 1, title: '고객센터' },
  { id: 2, title: '근무시간:  10:00 ~ 24:00' },
  { id: 3, title: '평일: 전체 문의 상담 가능' },
  {
    id: 4,
    title: '주말, 공휴일: 콤배콤 집들이, 쇼핑/ 댓글/ 문의 상담 가능',
  },
  { id: 5, title: '카톡 상담 (평일 10:00~24:00)' },
  { id: 6, title: '이메일 문의' },
];

const MEMBER = [
  { id: 1, title: '팀명' },
  { id: 2, title: 'Product Manager' },
  { id: 3, title: 'Project Manager' },
  { id: 4, title: 'Team members' },
  { id: 5, title: 'Team members' },
  { id: 6, title: 'Team members' },
  { id: 7, title: '콤배콤' },
  { id: 8, title: '이기태' },
  { id: 9, title: '문은빈' },
  { id: 10, title: '신정호' },
  { id: 11, title: '임수정' },
  { id: 12, title: '류승준' },
];

const COMPANYINFO = [
  {
    id: 1,
    title:
      '(주)콤배콤 | 대표이사 이기태 | 서울특별시 강남구 테헤란로 427 위워크 10층 | comebackhome@wecode.com',
  },
  {
    id: 2,
    title:
      ' 사업자등록번호 123-45-678910 사업자정보확인|통신판매업신고번호 제2023-서울강남-0407호',
  },
  {
    id: 3,
    title:
      ' (주)콤배콤은 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다. 단, (주)콤배콤이 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다.',
  },
  {
    id: 4,
    title: 'Copyright 2023. Wecode, Co., Ltd. All rights reserved.',
  },
];

const SERVICEINFO = [
  {
    id: 1,
    title: `콤배콤 프로젝트 기간 `,
    subtitle: '2023. 03. 24~ 2023. 04. 07',
    src: '/images/comebackhome.png',
    alt: 'comebackhome1',
  },
  {
    id: 2,
    title:
      '고객님이 현금결제한 금액에 대해 wecode은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다. 서비스가입사실확인',
    src: '/images/comebackhome.png',
    alt: 'comebackhome2',
  },
];

const LINK = [
  {
    id: 1,
    src: '/images/icons8-github-32.png',
    to: 'https://github.com/wecode-bootcamp-korea/43-2nd-comebackhome-frontend',
    alt: 'github',
  },
  {
    id: 2,
    src: '/images/icons8-notion-32.png',
    to: 'https://wecode.notion.site/B-7b78a31908f543d8bd4f06441f2172c1',
    alt: 'notion',
  },
  {
    id: 3,
    src: '/images/icons8-trello-32.png',
    to: 'https://trello.com/b/Xda4AZzI/2nd-comebackhome',
    alt: 'trello',
  },
];
