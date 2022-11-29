import React from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';
import { KAKAO_AUTH_URL } from './components/OAuth';

export default function Login() {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <LoginWrapper>
      <LoginHandEmoji>⚡️⚡️⚡️</LoginHandEmoji>
      <LoginGreeting>반갑습니다!</LoginGreeting>
      <LoginVvoltMarket>당신이 찾는 모든 것, VVolt Market</LoginVvoltMarket>
      <LoginButton onClick={handleLogin}>
        <KakaoLogoSvg xmlns="http://www.w3.org/2000/svg">
          <KakaoLogoPath d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
        </KakaoLogoSvg>
        카카오로 바로 시작
      </LoginButton>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  width: 35%;
  padding: 100px 20px;
  display: flex;
  ${variables.flex('column', 'center', 'center')}
  margin: auto;
  border: 1px solid lightgray;
  border-radius: 5%;
`;

const LoginHandEmoji = styled.div`
  font-size: 30px;
`;

const LoginGreeting = styled.div`
  font-size: 30px;
  margin: 30px 0 15px 0;
`;

const LoginVvoltMarket = styled.p`
  font-size: 15px;
`;

const LoginButton = styled.button`
  width: 70%;
  height: 50px;
  color: #3a1d1d;
  font-size: 15px;
  background-color: #f9e000;
  border: none;
  border-radius: 12px;
  margin-top: 70px;
  cursor: pointer;
`;

const KakaoLogoSvg = styled.svg`
  width: 16px;
  height: 16px;
  fill: currentColor;
  margin-right: 10px;
`;

const KakaoLogoPath = styled.path``;
