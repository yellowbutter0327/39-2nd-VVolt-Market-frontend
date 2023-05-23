import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UnderHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <UnderHeaderWrap>
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
          <MenuDropdown
            onMouseOut={() => {
              setIsMenuOpen(false);
            }}
            onMouseOver={() => {
              setIsMenuOpen(true);
            }}
          >
            <DropMenuList>
              {CATEGORY.map((category, index) => (
                <DropBoxMenuItem key={index}>
                  <MenuLink to={category.path}>{category.label}</MenuLink>
                </DropBoxMenuItem>
              ))}
            </DropMenuList>
          </MenuDropdown>
        </WrapTab>
      )}
    </UnderHeaderWrap>
  );
};

const UnderHeaderWrap = styled.div`
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

const MenuDropdown = styled.div`
  position: absolute;
  width: 300px;
  top: 50px;
  left: 10px;
`;

const DropMenuList = styled.ul`
  border: 1px solid gray;
  background-color: white;
  position: absolute;
  top: -70px;
  left: 30px;
  width: 230px;
`;

const DropBoxMenuItem = styled.div`
  height: 40px;
  display: flex;
  border-top: 1px solid gray;
  padding-bottom: 10px;
  justify-content: left;
  align-items: center;
  line-height: 5px;
  transition: 0.08s;
  &:hover {
    background-color: #882dc4;
    color: #ddd;
  }
`;

const MenuLink = styled(Link)`
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
export default UnderHeader;

const CATEGORY = [
  { label: '전체', path: '/?category=' },
  { label: '의류', path: '/?category=의류' },
  { label: '액세서리', path: '/?category=액세서리' },
  { label: '전자기기', path: '/?category=전자기기' },
  { label: '기타', path: '/?category=기타' },
  { label: '지역 서비스', path: '/?category=지역+서비스' },
];
