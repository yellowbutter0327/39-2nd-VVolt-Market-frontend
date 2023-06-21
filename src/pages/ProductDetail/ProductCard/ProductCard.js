import React from 'react';
import iconHour from '../../../assets/images/hour.png';
import iconHeart from '../../../assets/images/heart.png';
import iconLocal from '../../../assets/images/localicon.png';
import styled from 'styled-components';
import { APIS } from '../../../config';
import Banner from '../ProductCard/Banner';

const ProductCard = ({
  productId,
  productDetail,
  setProductDetail,
  isLike,
  setIsLike,
  purchaseLink,
}) => {
  return (
    <ProductCardWrap>
      <Banner productDetail={productDetail} />
      <ProductName>{productDetail.productName}</ProductName>
      <Price>{Number(productDetail.productPrice).toLocaleString()}원</Price>
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
              if (!isLike) {
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
                    //찜하기
                    if (res.status === 201) {
                      alert('찜목록에 저장되었습니다.');
                      setProductDetail({
                        ...productDetail,
                        likeCount: `${Number(productDetail.likeCount) + 1}`,
                      });
                      setIsLike(true);
                    } else {
                      throw new Error('찜추가를 실패했습니다.');
                    }
                  })
                  .catch(error => alert('찜추가를 실패했습니다.'));
              } else {
                //찜 취소
                fetch(`${APIS.ipAddress}/likes/${productId}`, {
                  method: 'delete',
                  headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    authorization: localStorage.getItem('TOKEN'),
                  },
                  body: JSON.stringify({
                    follow: false,
                  }),
                })
                  .then(res => {
                    if (res.status === 200) {
                      alert('찜목록에서 제거되었습니다.');
                      setProductDetail({
                        ...productDetail,
                        likeCount: `${Number(productDetail.likeCount) - 1}`,
                      });
                      setIsLike(false);
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
          isLike={isLike}
        >
          찜<LikeNumber> {productDetail.likeCount}</LikeNumber>
        </InfoButton>

        <PurchaseButton onClick={purchaseLink}>바로구매</PurchaseButton>
      </ButtonWrap>
    </ProductCardWrap>
  );
};

const ProductCardWrap = styled.div`
  position: relative;
  padding-left: 468px;
  min-height: 428px;
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 100px;
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

const StatusIconImg = styled.img`
  display: inline-block;
  margin-right: 5px;
  width: 20px;
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

const StatusList = styled.ul`
  display: flex;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #ddd;
`;

const DetailList = styled.ul`
  margin-top: 30px;
`;

const ListElementIcon = styled.img`
  margin-right: 10px;
  width: 18px;
`;

const ListElementTit = styled.strong`
  color: #999;
  width: 100px;
`;

const LikeNumber = styled.span``;

const InfoButton = styled.button`
  height: 50px;
  width: 100%;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border: none;
  background-color: ${props => (props.isLike ? '#882DC4' : '#cccccc')};
  margin-right: 20px;
  cursor: pointer;
`;

const PurchaseButton = styled.button`
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

export default ProductCard;
