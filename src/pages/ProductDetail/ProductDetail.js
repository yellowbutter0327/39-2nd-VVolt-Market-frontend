import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { APIS } from '../../config';
import ProductCard from './ProductCard/ProductCard';
import ProductDescription from './ProductDescription/ProductDescription';

export default function ProductDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState();
  const [storeInfo, setStoreInfo] = useState();
  const [isLike, setIsLike] = useState();
  const productId = params.id;

  const purchaseLink = () => {
    if (localStorage.getItem('TOKEN')) {
      navigate(`/payment/${productId}`);
    } else {
      alert('로그인이 필요한 서비스입니다.');
    }
  };

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `${APIS.ipAddress}/products/${productId}`,
          {
            headers: { authorization: localStorage.getItem('TOKEN') },
          }
        );
        const data = await response.json();
        setProductDetail(data.productDetailData.productDetail[0]);
        setStoreInfo(data.productDetailData.storeInfor);
        setIsLike(data.isLike);
      } catch (error) {
        console.log('fetch error', error);
      }
    };
    fetchProductDetail();
  }, [productId]);

  return (
    <WrapProductDetail>
      {productDetail && storeInfo && (
        <MainWrap>
          <ProductCard
            productId={productId}
            productDetail={productDetail}
            setProductDetail={setProductDetail}
            isLike={isLike}
            setIsLike={setIsLike}
            purchaseLink={purchaseLink}
          />
          <ProductDescription
            productDetail={productDetail}
            storeInfo={storeInfo}
            purchaseLink={purchaseLink}
          />
        </MainWrap>
      )}
    </WrapProductDetail>
  );
}
const WrapProductDetail = styled.div`
  padding-top: 150px;
`;
const MainWrap = styled.div`
  margin: 80px auto;
  width: 1000px;
`;
