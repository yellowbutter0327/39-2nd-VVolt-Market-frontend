import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import heartimg from './../../assets/images/heart.png';
import heartimg2 from './../../assets/images/heart2.png';
import qrimg from './../../assets/images/qrcode.png';

export default function SideBar() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [sideProduct, setSideProduct] = useState([]);

  useEffect(() => {
    fetch('/data/sideBar.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSideProduct(data);
      });
  }, []);

  return (
    <SidebarWrap>
      <ProductWrap>
        <ProductTitle>찜한 상품</ProductTitle>
        <WishImg src={heartimg}></WishImg>
      </ProductWrap>
      <ProductWrap>
        <ProductTitle>최근본상품</ProductTitle>
        {sideProduct.map(sideItem => {
          return (
            <>
              <ProductNum>{sideItem.productnum}</ProductNum>
              <ProductImg src={sideItem.productimg} />
              <ProductImg src={sideItem.productimg} />
            </>
          );
        })}
      </ProductWrap>
      <ProductWrap>
        <ProductTitle>앱다운로드</ProductTitle>
        <QrImg src={qrimg}></QrImg>
      </ProductWrap>
      <TopButton onClick={scrollToTop}>TOP</TopButton>
    </SidebarWrap>
  );
}

const SidebarWrap = styled.div`
  width: 90px;
  position: fixed;
  right: 50%;
  top: 50px;
  margin-right: -620px;
  z-index: 110;
`;

const ProductWrap = styled.div`
  border: 1px solid #ccc;
  background: white;
  text-align: center;
  margin-bottom: 10px;
  padding: 10px;
`;

const TopButton = styled.button`
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  line-height: 40px;
  cursor: pointer;
`;

const ProductTitle = styled.h4`
  font-size: 14px;
  margin-bottom: 10px;
`;

const WishImg = styled.img`
  width: 10px;
  margin-top: 10px;
`;

const QrImg = styled.img`
  width: 100%;
`;

const ProductNum = styled.p`
  margin-bottom: 10px;
  color: red;
  &:after {
    content: '';
    display: block;
    margin: 10px 15% 0;
    width: 70%;
    border-top: 2px dotted black;
  }
`;

const ProductImg = styled.img`
  width: 100%;
`;
