import { API, REDIRECT_URI } from '../../config';

export const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

export const KAKAO_AUTH_URL = `${API.auth}id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
