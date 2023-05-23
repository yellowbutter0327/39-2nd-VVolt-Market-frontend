import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

const Banner = ({ productDetail }) => {
  return (
    <BannerWrap
      spaceBetween={30}
      centeredSlides={true}
      navigation={true}
      modules={[[Swiper.Navigation]]}
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
    </BannerWrap>
  );
};

const BannerWrap = styled(Swiper)`
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

export default Banner;
