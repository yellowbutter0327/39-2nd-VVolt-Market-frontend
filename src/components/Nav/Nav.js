import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 1. 메뉴에 마우스를 올리면 아이콘 변경 (+ 메뉴 출력)
// 2. 메뉴에서 마우스를 빼면 아이콘 변경 (+ 메뉴 사라짐)
// 3. 따라서, 메뉴에 마우스를 올렸는지 뺐는지를 알 수 있는 state 생성
// 4. 마우스를 올리는 이벤트 발생 시, state에 올렸다!(true) 라고 바꿔줌
// 5. 마우스를 빼는 이벤트 발생 시, state에 뺐다!(false) 라고 바꿔줌
// 6. state => true면 빨간 이미지, fll

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isMenuMouseOn, setIsMenuMouseOn] = useState(false);

  const isLoginCheck = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const alertlogin = () => {
    alert('로그인 후 사용할 수 있습니다.');
  };

  return (
    <Header>
      <InlineHeader>
        <MainLogo>
          <Link to="/">
            <MainlogoImg src="/images/mainlogo.png" alt="번개장터 로고" />
          </Link>
        </MainLogo>

        <SearchArea>
          <SearchInput
            type="text"
            placeholder="상품명, 지역명, @상점명 입력"
          ></SearchInput>
          <SearchIcon
            src="/images/searchicon.png"
            alt="검색 아이콘"
          ></SearchIcon>
        </SearchArea>

        <LinkArea>
          <SellArea>
            <SellIcon src="/images/sellicon.png" alt="판매 아이콘"></SellIcon>
            <Selling>판매하기</Selling>
            {isLoginCheck ? <Link to="/productregister"></Link> : alertlogin}
          </SellArea>

          <Mystore>
            <MystoreIcon
              src="/images/mystoreicon.png"
              alt="내 상점 아이콘"
            ></MystoreIcon>
            <MystoreSpan>내상점</MystoreSpan>
            {isLoginCheck ? <Link to="/store"></Link> : alertlogin}
          </Mystore>

          <LoginArea>
            <LoginIcon
              src="/images/loginicion.png"
              alt="로그인 회원가입 아이콘"
            ></LoginIcon>
            {/* <LoginSpan>회원가입/로그인</LoginSpan> */}
            {isLoginCheck ? (
              <LogoutTitlespan to="/login">로그아웃</LogoutTitlespan>
            ) : (
              <LogTitleSpan to="/login">회원가입/로그인</LogTitleSpan>
            )}
          </LoginArea>
        </LinkArea>
      </InlineHeader>

      <UnderHeader>
        <MenuBtn
          onMouseOver={() => {
            setIsMenuOpen(true);
          }}
          src={isMenuOpen ? '/images/tabimg2.png' : '/images/tabimg.png'}
          alt="메뉴 버튼"
        />
        {isMenuOpen && (
          <WrapTab
            onMouseOut={() => {
              setIsMenuOpen(false);
            }}
          >
            <DropBox
              onMouseOut={() => {
                setIsMenuOpen(false);
              }}
              onMouseOver={() => {
                setIsMenuOpen(true);
              }}
            >
              <DropBoxUl>
                <DropBoxCtHeadTop>
                  <DropBoxCt1>전체 카테고리</DropBoxCt1>
                </DropBoxCtHeadTop>

                <DropBoxCtHead>
                  <DropBoxCt to="/?catagory=의류">의류</DropBoxCt>
                </DropBoxCtHead>

                <DropBoxCtHead>
                  <DropBoxCt to="/?catagory=액세사리">액세사리</DropBoxCt>
                </DropBoxCtHead>

                <DropBoxCtHead>
                  <DropBoxCt to="/?catagory=전자기기">전자기기</DropBoxCt>
                </DropBoxCtHead>

                <DropBoxCtHead>
                  <DropBoxCt to="/?catagory=지역+서비스">지역 서비스</DropBoxCt>
                </DropBoxCtHead>
              </DropBoxUl>
            </DropBox>
          </WrapTab>
        )}
      </UnderHeader>
    </Header>
  );
};

const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 150px;
  background: #fff;
  z-index: 100;
  margin-bottom: 100px;
`;

const InlineHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
`;

const MainLogo = styled.h1``;

const MainlogoImg = styled.img`
  width: 136px;
  height: 40px;
`;

const SearchArea = styled.div`
  border: 3px solid #dca8ff;
  width: 500px;
  height: 40px;
  box-sizing: border-box;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  margin-left: 10px;
  padding: 8px 0px;
  width: 290px;
  color: #aaa;
  border: none;
  text-align: left;
  font-size: 15px;
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 160px;
  transform: translateY(20%);
`;

const Selling = styled.span`
  padding-right: 10px;
  border-right-color: black;
`;

const Mystore = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

const MystoreIcon = styled.img`
  width: 23px;
  height: 26px;
  margin-right: 5px;
`;

const MystoreSpan = styled.span``;

const LinkArea = styled.div`
  display: flex;
  align-items: center;
`;

const SellArea = styled.div`
  position: relative;
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

const SellIcon = styled.img`
  width: 23px;
  height: 26px;
  margin-right: 5px;
`;

const LoginArea = styled.div`
  position: relative;
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

const LoginIcon = styled.img`
  width: 23px;
  height: 26px;
  margin-right: 5px;
`;

const LogTitleSpan = styled(Link)`
  text-decoration: none;
  color: black;
`;

const LogoutTitlespan = styled(Link)`
  text-decoration: none;
  color: black;
`;

const UnderHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0px 50px;
  height: 10px;
  border-bottom: 1px solid #ddd;
  background-color: white;
`;

const MenuBtn = styled.img`
  width: 25px;
  position: absolute;
  top: -30px;
`;

const DropBox = styled.div`
  position: absolute;
  width: 300px;
  /* border: 1px solid #ddd; */
  top: 50px;
  left: 10px;
`;

const DropBoxUl = styled.ul`
  border: 1px solid gray;
  background-color: white;
  position: absolute;
  top: -70px;
  left: 30px;
  width: 230px;
`;

const DropBoxCtHeadTop = styled.div``;

const DropBoxCtHead = styled.div`
  height: 40px;
  display: flex;
  border-top: 1px solid gray;
  padding-bottom: 10px;
  justify-content: left;
  align-items: center;
  &:hover {
    background-color: #d80c18;
    color: #ddd;
  }
`;

const DropBoxCt1 = styled.div`
  font-weight: bold;
  padding: 20px 20px;
  /* border-bottom: 1px solid #ddd; */
`;

const DropBoxCt = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 20px;
  text-decoration: none;
  font-size: 17px;
  color: black;
  &:hover {
    color: white;
  }
`;

const WrapTab = styled.div`
  position: absolute;
  top: 30px;
  left: 0px;
  width: 310px;
  height: 300px;
`;

export default Nav;
