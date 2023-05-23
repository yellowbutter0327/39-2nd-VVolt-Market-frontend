import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProductDescription = ({ productDetail, storeInfo, purchaseLink }) => {
  const navigate = useNavigate();
  const productMore = () => {
    navigate(`/store/${storeInfo[0].storeId}`);
  };
  return (
    <ProductDescriptionWrap>
      <ProductInfo>
        <ProductTitle>상품정보</ProductTitle>
        <ProductDesc> {productDetail.productDesc} </ProductDesc>
      </ProductInfo>

      <StoreInfo>
        <StoreBox>
          <ProductTitle>상점정보</ProductTitle>
          <StoreName>{storeInfo[0].nickName}</StoreName>
          <StoreUl>
            <StoreLi> 상품 {storeInfo[0].productCount}개 </StoreLi>
            <StoreLi> 팔로워 {storeInfo[0].followerCount} </StoreLi>
          </StoreUl>

          <StoreProductImgList>
            <StoreProductImgLi>
              <StoreProductImg src={storeInfo[0].images[0]} />
              <StoreProductPrice>
                {Number(storeInfo[0].price).toLocaleString()}원
              </StoreProductPrice>
            </StoreProductImgLi>
            {storeInfo[1] && (
              <StoreProductImgLi>
                <StoreProductImg src={storeInfo[1].images[0]} />
                <StoreProductPrice>
                  {Number(storeInfo[1].price).toLocaleString()}원
                </StoreProductPrice>
              </StoreProductImgLi>
            )}
          </StoreProductImgList>

          <LoadMoreButton onClick={productMore}>
            <LoadMoreCount>{storeInfo[0].productCount - 2}개 </LoadMoreCount>
            상품 더보기
          </LoadMoreButton>
        </StoreBox>
        <PurchaseButton onClick={purchaseLink}>바로구매</PurchaseButton>
      </StoreInfo>
    </ProductDescriptionWrap>
  );
};

const ProductDescriptionWrap = styled.div`
  margin-top: 70px;
  border-top: 1px solid black;
  padding-top: 50px;
  display: flex;
`;

const ProductInfo = styled.div`
  width: 70%;
  padding-right: 30px;
`;

const ProductTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
`;

const StoreName = styled.div`
  font-size: 20px;
`;

const ProductDesc = styled.div`
  font-size: 20px;
`;

const StoreInfo = styled.div`
  width: 30%;
  border-left: 1px solid #eee;
  padding-left: 30px;
`;

const StoreBox = styled.div`
  border-top: 1px solid #eee;
  margin-top: 20px;
  padding-top: 20px;
  &:first-child {
    margin-top: 0;
    padding-top: 0;
    border: 0;
  }
`;

const StoreUl = styled.ul`
  margin-top: 10px;
`;

const StoreLi = styled.li`
  display: inline-block;
  font-size: 16px;
  color: #999;
  & + & {
    margin-left: 5px;
    padding-left: 6px;
    border-left: 1px solid #eee;
  }
`;

const StoreProductImgList = styled.ul`
  margin: 20px -4px 0;
`;

const StoreProductImgLi = styled.li`
  position: relative;
  display: inline-block;
  width: 50%;
  padding: 0 4px;
  &:nth-child(n + 3) {
    display: none;
  }
`;

const StoreProductImg = styled.img`
  display: block;
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const StoreProductPrice = styled.div`
  position: absolute;
  bottom: 0;
  left: 4px;
  width: calc(100% - 8px);
  line-height: 30px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  color: white;
`;

const LoadMoreButton = styled.button`
  margin-top: 20px;
  width: 100%;
  line-height: 40px;
  font-size: 16px;
  background: white;
  border: 1px solid #eee;
  cursor: pointer;
`;

const LoadMoreCount = styled.span`
  color: red;
  cursor: pointer;
`;

const PurchaseButton = styled.button`
  margin-top: 50px;
  height: 50px;
  width: 100%;
  color: #521978;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid #521978;
  background: #fff;
  cursor: pointer;
  &:hover {
    background-color: #521978;
    color: #fff;
  }
`;

export default ProductDescription;
