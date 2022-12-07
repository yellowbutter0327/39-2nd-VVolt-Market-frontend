import React from 'react';
import styled from 'styled-components';
import ReactStars from 'react-stars';

import variables from '../../styles/variables';
import { useNavigate } from 'react-router-dom';

const StoreEachReview = ({ reviewInfo }) => {
  const navigate = useNavigate();
  const { writerImg, writerName, rate, reviewContent, writerId } = reviewInfo;

  return (
    <WrapReview>
      <WrapReviewTop>
        <WriterImg
          src={writerImg}
          onClick={() => {
            navigate(`/store/${writerId}`);
          }}
        />
        <WrapNameScore>
          <WriterName>{writerName}</WriterName>
          <ReactStars count={5} size={18} value={rate} edit={false} />
        </WrapNameScore>
      </WrapReviewTop>
      <ReviewContent>{reviewContent}</ReviewContent>
    </WrapReview>
  );
};

export default StoreEachReview;

const WrapReview = styled.div`
  padding: 10px;
  border: 1px solid #eee;
  margin-bottom: 20px;
`;
const WrapReviewTop = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;
const WriterImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  border-radius: 30px;
  cursor: pointer;
`;
const WrapNameScore = styled.div`
  ${variables.flex('column', 'center', 'auto')}
`;
const WriterName = styled.div`
  margin-bottom: 5px;
`;
const ReviewContent = styled.div`
  margin: 20px 10px;
`;
