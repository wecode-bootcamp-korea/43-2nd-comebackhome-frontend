export const BASE_URL = 'http://10.58.52.128:3000';
export const KAKAO_BASE_URL = 'https://kauth.kakao.com';
export const REDIRECT_URI = 'http://localhost:3000/auth/kakao/callback';

export const API = {
  auth: `${KAKAO_BASE_URL}/oauth/authorize?client_`,
  getToken: `${KAKAO_BASE_URL}/oauth/token?grant_type=authorization_code&client_`,
  redirect: `${BASE_URL}/users/kakao/login`,
  homepartylist: `${BASE_URL}/posts`,
  getComment: `${BASE_URL}/comments`,
  comment: `${BASE_URL}/comments/post`,
  reply: `${BASE_URL}/comments/reply`,
  productdetail: `${BASE_URL}/products`,
  carts: `${BASE_URL}/carts`,
  productlist: `${BASE_URL}/products?`,
};
