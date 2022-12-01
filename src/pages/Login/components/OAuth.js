//const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
const REST_API_KEY = '44e7bbcc7947f7c5a6780e0a7f9b48a9';

const REDIRECT_URI = 'http://localhost:3000/users/kakaoLogin';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
