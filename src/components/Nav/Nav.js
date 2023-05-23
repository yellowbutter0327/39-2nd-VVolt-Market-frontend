import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { APIS } from '../../config';
import SearchArea from './SearchArea';
import UnderHeader from './UnderHeader';

const Nav = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(1);
  const [itemList, setItemList] = useState();
  const [searchInput, setSearchInput] = useState();

  const isLoginCheck = !!localStorage.getItem('TOKEN');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(`${APIS.ipAddress}/users/1`, {
          headers: { authorization: localStorage.getItem('TOKEN') },
        });
        const userData = await userResponse.json();
        setUserId(userData.myData.writerId);

        const productsResponse = await fetch(`${APIS.ipAddress}/products`);
        const productsData = await productsResponse.json();
        setItemList(productsData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // 판매하기 핸들러 함수
  const handleSellClick = () => {
    if (localStorage.getItem('TOKEN')) {
      navigate('/productregister');
    } else {
      alert('로그인이 필요한 서비스입니다.');
    }
  };

  // 내상점 핸들러 함수
  const handleMyStoreClick = () => {
    if (localStorage.getItem('TOKEN') && userId) {
      navigate(`/store/${userId}`);
    } else {
      alert('로그인이 필요한 서비스입니다.');
    }
  };

  // 로그아웃 핸들러 함수
  const handleLogoutClick = () => {
    localStorage.removeItem('TOKEN');
  };

  return (
    <Header>
      <InlineHeader>
        <MainLogo>
          <Link to="/?category=">
            <MainlogoImg src="/images/mainlogo.png" alt="번개장터 로고" />
          </Link>
        </MainLogo>

        <SearchArea
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          itemList={itemList}
          navigate={navigate}
        />

        <LinkArea>
          <SellArea>
            <SellIcon src="/images/sellicon.png" alt="판매 아이콘" />
            <Selling onClick={handleSellClick}>판매하기</Selling>
          </SellArea>

          <Mystore onClick={handleMyStoreClick}>
            {' '}
            <MystoreIcon src="/images/mystoreicon.png" alt="내 상점 아이콘" />
            <MystoreSpan>내상점</MystoreSpan>
          </Mystore>

          <LoginArea>
            <LoginIcon
              src="/images/loginicion.png"
              alt="로그인 회원가입 아이콘"
            />
            {isLoginCheck ? (
              <LogoutTitlespan to="/login" onClick={handleLogoutClick}>
                로그아웃
              </LogoutTitlespan>
            ) : (
              <LogTitleSpan to="/login">회원가입/로그인</LogTitleSpan>
            )}
          </LoginArea>
        </LinkArea>
      </InlineHeader>
      <UnderHeader />
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
  width: 140px;
  height: 60px;
  margin-left: 10px;
`;

const Selling = styled.span`
  padding-right: 10px;
  border-right-color: black;
  cursor: pointer;
`;

const Mystore = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
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
  cursor: pointer;
`;

const LogoutTitlespan = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
export default Nav;
