export const BASE_URL = 'http://10.58.52.209:3000';
export const KAKAO_BASE_URL = 'https://kauth.kakao.com';
export const REDIRECT_URI = 'http://localhost:3000/auth/kakao/callback';

export const API = {
  auth: `${KAKAO_BASE_URL}/oauth/authorize?client_`,
  getToken: `${KAKAO_BASE_URL}/oauth/token?grant_type=authorization_code&client_`,
  redirect: `${BASE_URL}/users/kakao/login`,
};
