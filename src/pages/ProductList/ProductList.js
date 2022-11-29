import React, { useState } from 'react';
import styled from 'styled-components';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import ListItem from './ListItem';

const ProductList = () => {
  const [category, setCategory] = useState('의류'); // 카테고리 변수가 정해지면 searchPrams.get("category")로 변경

  return (
    <WrapBody>
      <WrapProductList>
        <TopSlide
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <EachSlide>
            <SlideImg src="https://media.bunjang.co.kr/images/nocrop/919158390_w2058.jpg" />
          </EachSlide>
          <EachSlide>
            <SlideImg src="https://media.bunjang.co.kr/images/nocrop/919673566_w2058.jpg" />
          </EachSlide>
          <EachSlide>
            <SlideImg src="https://media.bunjang.co.kr/images/nocrop/919571727_w2058.jpg" />
          </EachSlide>
          <EachSlide>
            <SlideImg src="https://media.bunjang.co.kr/images/nocrop/911382877_w2058.jpg" />
          </EachSlide>
        </TopSlide>
        <CategorySelector>
          <HomeIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <IconPath d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
          </HomeIcon>
          >
          <Selector
            onChange={e => {
              setCategory(e.target.value);
            }}
            // value="cloth"
          >
            <CategoryOption value="의류">의류</CategoryOption>
            <CategoryOption value="전자기기">전자기기</CategoryOption>
            <CategoryOption value="악세서리">액세서리</CategoryOption>
          </Selector>
        </CategorySelector>
        <ListTitle>{category}의 추천 상품</ListTitle>
        <WrapList>
          <ListItem />
        </WrapList>
      </WrapProductList>
    </WrapBody>
  );
};
const WrapBody = styled.div`
  width: 100vw;
  background-color: #f9f9f9;
`;
const WrapProductList = styled.div`
  width: 1024px;
  margin: 0 auto;
`;
// Slide
const TopSlide = styled(Swiper)`
  width: 100%;
  height: 300px;
  --swiper-theme-color: #b0aeb3;
`;
const EachSlide = styled(SwiperSlide)``;
const SlideImg = styled.img`
  width: 100%;
  height: 300px;
`;
// 카테고리 선택
const CategorySelector = styled.div`
  margin-top: 30px;
  font-size: 14px;
  font-weight: 500;
`;
const HomeIcon = styled.svg`
  width: 14px;
  height: 14px;
  margin-right: 30px;
  color: currentColor;
`;
const IconPath = styled.path``;
const Selector = styled.select`
  width: 130px;
  height: 25px;
  margin-left: 10px;
  padding-left: 5px;
  border: 1px solid rgb(238, 238, 238);
  font-size: 12px;
  font-weight: 400;
`;
const CategoryOption = styled.option``;
// 상품 리스트
const ListTitle = styled.div`
  margin-top: 10px;
  font-size: 1.5rem;
  line-height: 60px;
`;

const WrapList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
  margin-top: 10px;
`;

export default ProductList;
