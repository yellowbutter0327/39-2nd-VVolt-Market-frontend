import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import iconHour from './../../assets/images/hour.png';
import iconHeart from './../../assets/images/heart.png';
import iconView from './../../assets/images/view.png';
import iconLocal from './../../assets/images/localicon.png';
import starRatingBg from './../../assets/images/icon_star_score_bg.png';
import starRating from './../../assets/images/icon_star_score.png';
import Store from '../Store/Store';

export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    fetch('/data/productDetail.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductDetail(data);
      });
  }, []);

  return (
    <MainWrap>
      {productDetail.map(productItem => {
        return (
          <>
            <InfoWrap>
              <ProductImg
                src={productItem.productThumbnail}
                alt={productItem.productTitle}
              ></ProductImg>
              <ProductName>{productItem.productTitle}</ProductName>
              <Price>{productItem.productPrice.toLocaleString()}원</Price>
              <StatusList>
                <StatusIcon>
                  <StatusIconImg src={iconHeart} />
                  {productItem.productWish}
                </StatusIcon>
                <StatusIcon>
                  <StatusIconImg src={iconView} /> {productItem.productView}
                </StatusIcon>
                <StatusIcon>
                  <StatusIconImg src={iconHour} />
                  {productItem.productTime} 전
                </StatusIcon>
              </StatusList>

              <DetailList>
                <ListElement>
                  <ListElementTit>상품상태</ListElementTit>
                  {productItem.productState}
                </ListElement>
                <ListElement>
                  <ListElementTit>거래지역</ListElementTit>
                  <ListElementIcon src={iconLocal} /> {productItem.productLocal}
                </ListElement>
              </DetailList>

              <ButtonWrap>
                <InfoButton>찜</InfoButton>
                <InfoButton>바로구매</InfoButton>
              </ButtonWrap>
            </InfoWrap>

            <DetailWrap>
              <ProductInfo>
                <PdTitle>상품정보</PdTitle>
                <PdText> {productItem.productInfo} </PdText>
              </ProductInfo>

              <StoreInfo>
                <StoreBox>
                  <PdTitle>상점정보</PdTitle>
                  <StoreName>{productItem.storeName}</StoreName>
                  <StoreUl>
                    <StoreLi> 상품 {productItem.storeItem} </StoreLi>
                    <StoreLi> 팔로워 {productItem.storeFollower}</StoreLi>
                  </StoreUl>
                  <StoreFollowBtn>팔로우 </StoreFollowBtn>

                  <StoreImgList>
                    <StoreImgLi>
                      <StoreImg src={productItem.storeProduct[0].storeImg} />
                      <StorePrice>
                        {productItem.storeProduct[0].storePrice.toLocaleString()}
                        원
                      </StorePrice>
                    </StoreImgLi>
                    <StoreImgLi>
                      <StoreImg src={productItem.storeProduct[1].storeImg} />
                      <StorePrice>
                        {productItem.storeProduct[1].storePrice.toLocaleString()}
                        원
                      </StorePrice>
                    </StoreImgLi>
                    <StoreImgLi>
                      <StoreImg src={productItem.storeProduct[0].storeImg} />
                      <StorePrice>
                        {productItem.storeProduct[0].storePrice.toLocaleString()}
                        원
                      </StorePrice>
                    </StoreImgLi>
                    <StoreImgLi>
                      <StoreImg src={productItem.storeProduct[0].storeImg} />
                      <StorePrice>
                        {productItem.storeProduct[0].storePrice.toLocaleString()}
                        원
                      </StorePrice>
                    </StoreImgLi>
                    <StoreImgLi>
                      <StoreImg src={productItem.storeProduct[0].storeImg} />
                      <StorePrice>
                        {productItem.storeProduct[0].storePrice.toLocaleString()}
                        원
                      </StorePrice>
                    </StoreImgLi>
                  </StoreImgList>

                  <StoreMoreBtn>
                    <BtnRed>13개</BtnRed>
                    상품 더보기
                  </StoreMoreBtn>
                </StoreBox>

                <StoreBox>
                  <SubTit>
                    상점후기
                    <TitNum>1</TitNum>
                  </SubTit>
                  <StoreReviewList>
                    <StoreReviewLi>
                      <StoreReviewImgbox>
                        <StoreReviewImg src={productItem.reviewImg} />
                      </StoreReviewImgbox>
                      <StoreNickName>누냥2</StoreNickName>
                      <StoreDate>3주 전</StoreDate>
                      <StoreStarRating>
                        <StoreRating
                          style={{ width: `${productItem.starRating}%` }}
                        ></StoreRating>
                      </StoreStarRating>
                      <StoreTxt>{productItem.reviewTxt}</StoreTxt>
                    </StoreReviewLi>
                  </StoreReviewList>
                  <StoreMoreBtn>상점후기 더보기</StoreMoreBtn>
                </StoreBox>

                <StoreBtnWrap>
                  <StoreBtn>바로구매</StoreBtn>
                </StoreBtnWrap>
              </StoreInfo>
            </DetailWrap>
          </>
        );
      })}
    </MainWrap>
  );
}

const MainWrap = styled.div`
  margin: 80px auto;
  width: 1000px;
`;

const ProductImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 428px;
  height: 428px;
  border: 1px solid black;
`;

const ProductName = styled.div`
  line-height: 40px;
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: 600;
`;

const Price = styled.div`
  font-size: 40px;
  font-weight: 500;
`;

const InfoWrap = styled.div`
  position: relative;
  padding-left: 468px;
  min-height: 428px;
`;

const DetailWrap = styled.div`
  margin-top: 70px;
  border-top: 1px solid black;
  padding-top: 50px;
  display: flex;
`;

const ProductInfo = styled.div`
  width: 70%;
  padding-right: 30px;
`;

const ListElementIcon = styled.img`
  margin-right: 10px;
  width: 18px;
`;

const StatusList = styled.ul`
  display: flex;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #ddd;
`;

const StatusIcon = styled.li`
  display: inline-flex;
  align-items: center;
  margin-left: 15px;
  padding-left: 15px;
  font-size: 18px;
  border-left: 1px solid #ddd;
  &:first-child {
    margin-left: 0;
    padding-left: 0;
    border: 0;
  }
`;

const DetailList = styled.ul`
  margin-top: 30px;
`;

const ListElement = styled.li`
  margin-top: 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
  &:first-child {
    margin-top: 0;
  }
`;

const ListElementTit = styled.strong`
  color: #999;
  width: 100px;
`;

const StatusIconImg = styled.img`
  display: inline-block;
  margin-right: 5px;
  width: 20px;
`;

const InfoButton = styled.button`
  height: 50px;
  width: 100%;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border: none;
  background: #ddd;
  & + & {
    margin-left: 10px;
    background: #f70000;
  }
`;

const PdTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
`;

const StoreName = styled.div`
  font-size: 20px;
`;

const PdText = styled.div`
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

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 100px;
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

const StoreFollowBtn = styled.button`
  margin-top: 20px;
  font-size: 16px;
  border: 1px solid #eee;
  background: none;
  width: 100%;
  line-height: 40px;
`;

const StoreImgList = styled.ul`
  margin: 20px -4px 0;
`;

const StoreImgLi = styled.li`
  position: relative;
  display: inline-block;
  width: 50%;
  padding: 0 4px;
  &:nth-child(n + 3) {
    display: none;
  }
`;

const StoreImg = styled.img`
  display: block;
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const StorePrice = styled.div`
  position: absolute;
  bottom: 0;
  left: 4px;
  width: calc(100% - 8px);
  line-height: 30px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  color: white;
`;

const StoreMoreBtn = styled.button`
  margin-top: 20px;
  width: 100%;
  line-height: 40px;
  font-size: 16px;
  background: white;
  border: 1px solid #eee;
`;

const BtnRed = styled.span`
  color: red;
`;

const SubTit = styled.div`
  font-size: 18px;
`;

const TitNum = styled.span`
  color: red;
  margin-left: 5px;
`;

const StoreReviewList = styled.ul`
  margin-top: 15px;
`;

const StoreReviewLi = styled.li`
  position: relative;
  padding-left: 45px;
`;

const StoreReviewImgbox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
`;

const StoreReviewImg = styled.img`
  width: 100%;
`;

const StoreNickName = styled.span`
  color: #999;
`;

const StoreDate = styled.span`
  color: #999;
  font-size: 14px;
  margin-left: 5px;
`;

const StoreStarRating = styled.div`
  margin: 10px 0 0;
  width: 100px;
  height: 20px;
  background: url(${starRatingBg}) no-repeat;
  background-size: 100px 20px;
`;

const StoreRating = styled.div`
  height: 20px;
  background: url(${starRating}) no-repeat;
  background-size: 100px 20px;
`;

const StoreTxt = styled.div`
  margin-top: 10px;
`;

const StoreBtnWrap = styled.div`
  margin-top: 50px;
`;

const StoreBtn = styled.button`
  height: 50px;
  width: 100%;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border: none;
  background: #f70000;
`;
