import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function KakaoLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];

  useEffect(() => {
    fetch(`http://10.58.52.236:3000/users/kakaoLogin?code=${KAKAO_CODE}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.userData.accessToken);
        if (data.userData.isMember === true) {
          navigate('/');
        } else {
          navigate('/signup');
        }
      });
  }, []);

  return <div>로그인 중 입니다.</div>;
}
