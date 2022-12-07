import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import iconHour from './../../assets/images/hour.png';
import iconHeart from './../../assets/images/heart.png';
import iconLocal from './../../assets/images/localicon.png';
import { useParams } from 'react-router-dom';
import { APIS } from '../../config';

export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState();
  const [storeInfo, setStoreInfo] = useState();
  const params = useParams();
  const productId = params.id;
  const navigate = useNavigate();

  const purchaseLink = () => {
    if (localStorage.getItem('TOKEN')) {
      navigate(`/payment/${productId}`);
    } else {
      alert('로그인이 필요한 서비스입니다.');
    }
  };

  const productMore = () => {
    navigate(`/store/${storeInfo[0].storeId}`);
  };

  useEffect(() => {
    //상품디테일정보 가져오는 api
    fetch(`${APIS.ipAddress}/products/${productId}`, {
      headers: { authorization: localStorage.getItem('TOKEN') },
    })
      // fetch('/data/productDetail.json') //mockdata
      .then(res => res.json())
      .then(data => {
        console.log(data.productDetailData);
        setProductDetail(data.productDetailData.productDetail[0]);
        setStoreInfo(data.productDetailData.storeInfor);
        console.log(data.isLike);
        setIsActive(data.isLike);
      });
  }, []);

  const [isActive, setIsActive] = useState();

  return (
    <>
      <WrapProductDetail>
        {productDetail && storeInfo && (
          <MainWrap>
            <InfoWrap>
              <Banner
                spaceBetween={30}
                centeredSlides={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {productDetail &&
                  productDetail.images.map((str, index) => {
                    return (
                      <ImgSwiperSlide key={index}>
                        <SlideImg src={str} alt={productDetail.productName} />
                      </ImgSwiperSlide>
                    );
                  })}
              </Banner>

              <ProductName>{productDetail.productName}</ProductName>
              <Price>
                {Number(productDetail.productPrice).toLocaleString()}원
              </Price>
              <StatusList>
                <StatusIcon>
                  <StatusIconImg src={iconHeart} />
                  {productDetail.likeCount}
                </StatusIcon>
                <StatusIcon>
                  <StatusIconImg src={iconHour} />
                  10분 전
                </StatusIcon>
              </StatusList>

              <DetailList>
                <ListElement>
                  <ListElementTit>상품상태</ListElementTit>
                  중고상품
                </ListElement>
                <ListElement>
                  <ListElementTit>거래지역</ListElementTit>
                  <ListElementIcon src={iconLocal} /> {productDetail.location}
                </ListElement>
              </DetailList>

              <ButtonWrap>
                <InfoButton
                  onClick={() => {
                    if (localStorage.getItem('TOKEN')) {
                      if (!isActive) {
                        //좋아요 추가
                        fetch(`${APIS.ipAddress}/likes/${productId}`, {
                          method: 'post',
                          headers: {
                            'Content-Type': 'application/json;charset=utf-8',
                            authorization: localStorage.getItem('TOKEN'),
                          },
                          body: JSON.stringify({
                            follow: false,
                          }),
                        })
                          .then(res => {
                            if (res.status === 201) {
                              alert('찜목록에 저장되었습니다.');
                              setProductDetail({
                                ...productDetail,
                                likeCount: `${
                                  Number(productDetail.likeCount) + 1
                                }`,
                              });
                              setIsActive(true);
                            } else {
                              throw new Error('찜추가를 실패했습니다.');
                            }
                          })
                          .catch(error => alert('찜추가를 실패했습니다.'));
                      } else {
                        //좋아요 취소
                        fetch(`${APIS.ipAddress}/likes/${productId}`, {
                          method: 'post',
                          headers: {
                            'Content-Type': 'application/json;charset=utf-8',
                            authorization: localStorage.getItem('TOKEN'),
                          },
                          body: JSON.stringify({
                            follow: false,
                          }),
                        })
                          .then(res => {
                            if (res.status === 201) {
                              alert('찜목록에서 제거되었습니다.');
                              setProductDetail({
                                ...productDetail,
                                likeCount: `${
                                  Number(productDetail.likeCount) - 1
                                }`,
                              });
                              setIsActive(false);
                            } else {
                              throw new Error('찜삭제를 실패했습니다.');
                            }
                          })
                          .catch(error => alert('찜삭제를 실패했습니다.'));
                      }
                    } else {
                      alert('로그인이 필요한 서비스 입니다.');
                    }
                  }}
                  isActive={isActive}
                >
                  {/* <LikeImg src={isWishAdd ? { Heart } : { Heart2 }}></LikeImg>  */}
                  찜<LikeNumber> {productDetail.likeCount}</LikeNumber>
                </InfoButton>

                <StoreBtn onClick={purchaseLink}>바로구매</StoreBtn>
              </ButtonWrap>
            </InfoWrap>

            <DetailWrap>
              <ProductInfo>
                <PdTitle>상품정보</PdTitle>
                <PdText> {productDetail.productDesc} </PdText>
              </ProductInfo>

              <StoreInfo>
                <StoreBox>
                  <PdTitle>상점정보</PdTitle>
                  <StoreName>{storeInfo[0].nickName}</StoreName>
                  <StoreUl>
                    <StoreLi> 상품 {storeInfo[0].productCount}개 </StoreLi>
                    <StoreLi> 팔로워 {storeInfo[0].followerCount} </StoreLi>
                  </StoreUl>

                  <StoreImgList>
                    <StoreImgLi>
                      <StoreImg src={storeInfo[0].images[0]} />
                      <StorePrice>
                        {Number(storeInfo[0].price).toLocaleString()}원
                      </StorePrice>
                    </StoreImgLi>
                    {storeInfo[1] && (
                      <StoreImgLi>
                        <StoreImg src={storeInfo[1].images[0]} />
                        <StorePrice>
                          {Number(storeInfo[1].price).toLocaleString()}원
                        </StorePrice>
                      </StoreImgLi>
                    )}
                  </StoreImgList>

                  <StoreMoreBtn onClick={productMore}>
                    <BtnRed>{storeInfo[0].productCount - 2}개 </BtnRed>
                    상품 더보기
                  </StoreMoreBtn>
                </StoreBox>

                <StoreBtnWrap>
                  <StoreBtn onClick={purchaseLink}>바로구매</StoreBtn>
                </StoreBtnWrap>
              </StoreInfo>
            </DetailWrap>
          </MainWrap>
        )}
      </WrapProductDetail>
    </>
  );
}
const WrapProductDetail = styled.div`
  padding-top: 150px;
`;
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
  background-color: ${props => (props.isActive ? '#882DC4' : '#cccccc')};
  margin-right: 20px;
  cursor: pointer;
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
  cursor: pointer;
`;

const BtnRed = styled.span`
  color: red;
  cursor: pointer;
`;

const StoreBtnWrap = styled.div`
  margin-top: 50px;
`;

const StoreBtn = styled.button`
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

const LikeNumber = styled.span``;

const Banner = styled(Swiper)`
  position: absolute;
  top: 0;
  left: 0;
  width: 428px;
`;

const ImgSwiperSlide = styled(SwiperSlide)``;

const SlideImg = styled.img`
  width: 428px;
  height: 428px;
  border: 1px solid black;
`;

const LikeImg = styled.img`
  width: 20px;
  line-height: 20px;
`;
