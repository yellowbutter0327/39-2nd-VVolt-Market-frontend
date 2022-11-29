import React from 'react';
import styled from 'styled-components';

const ListItem = () => {
  return (
    <Product>
      <ProductImg src="/images/product_img_1.jpg" alt="productImg" />
      <ProductBottom>
        <ProductName>상품이름</ProductName>
        <ProductInfo>
          <ProductPrice>22,000 원</ProductPrice>
          <ProductTime>19시간 전</ProductTime>
        </ProductInfo>
      </ProductBottom>
      <ProductLocation>
        <LocationIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <IconPath d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </LocationIcon>
        위치
      </ProductLocation>
    </Product>
  );
};

const Product = styled.div`
  min-width: 194px;
  min-height: 316px;
  max-width: 194px;
  max-height: 316px;
  margin: 0 10px 10px 0;
  border: 1px solid rgb(238, 238, 238);
  background-color: #fff;
  line-height: 20px;
`;
const ProductImg = styled.img`
  width: 194px;
  height: 194px;
`;

const ProductBottom = styled.div`
  width: 90%;
  margin: 10px 5%;
`;
const ProductName = styled.div`
  font-size: 14px;
  overflow: hidden;
  line-height: 30px;
`;
const ProductInfo = styled.div`
  display: flex;
  margin: 10px 0;
`;
const ProductPrice = styled.div`
  width: 125px;
  font-size: 16px;
  font-weight: 600;
`;
const ProductTime = styled.div`
  font-size: 12px;
  font-weight: 300;
`;
const LocationIcon = styled.svg`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  fill: #b0aeb3;
`;
const IconPath = styled.path``;
const ProductLocation = styled.div`
  margin-top: 15px;
  padding: 4px 15px;
  border-top: 1px solid rgb(238, 238, 238);
  font-size: 13px;
  font-weight: 600;
  color: #666;
`;

export default ListItem;
