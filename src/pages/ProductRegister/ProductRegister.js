import React from 'react';
import styled from 'styled-components';

export default function ProductRegister() {
  return (
    <ProductRegisterWrap>
      <RegisterProductText>상품 등록하기</RegisterProductText>
      <RegisterProductContent>
        <ProductContentWrap>
          <ProductContentTitle>상품이미지</ProductContentTitle>
          <ProductImgInput>이미지 등록 라이브러리</ProductImgInput>
        </ProductContentWrap>
        <ProductContentWrap>
          <ProductContentTitle>제목</ProductContentTitle>
          <ProductNameInput placeholder="상품 제목을 입력해주세요." />
          <ProductNameInputLength>0/40</ProductNameInputLength>
        </ProductContentWrap>
        <ProductContentWrap>
          <ProductContentTitle>카테고리</ProductContentTitle>
          <ProductCategorySelect>
            <option>선택</option>
            <option>의류</option>
            <option>전자기기</option>
            <option>액세서리</option>
          </ProductCategorySelect>
        </ProductContentWrap>
        <ProductContentWrap>
          <ProductContentTitle>거래지역</ProductContentTitle>
          <ProductRegionInput>
            <RegionBtnWrap>
              <RegionBtn>주소 검색</RegionBtn>
              <RegionBtn>주소 불러오기</RegionBtn>
              <RegionBtn>현재 위치</RegionBtn>
            </RegionBtnWrap>
            <RegionInput placeholder="지역 설정" />
          </ProductRegionInput>
        </ProductContentWrap>
        <ProductContentWrap>
          <ProductContentTitle>상태</ProductContentTitle>
          <ProductStatusLabel>
            <ProductStatusInput
              type="radio"
              name="status"
              value="usedProduct"
            />
            중고상품
          </ProductStatusLabel>
          <ProductStatusLabel>
            <ProductStatusInput type="radio" name="status" value="newProduct" />{' '}
            새상품
          </ProductStatusLabel>
        </ProductContentWrap>
        <ProductContentWrap>
          <ProductContentTitle>가격</ProductContentTitle>
          <ProductPriceInput type="text" placeholder="숫자만 입력해주세요." />
          <ProductPriceWon>원</ProductPriceWon>
        </ProductContentWrap>
        <ProductContentWrap>
          <ProductContentTitle>설명</ProductContentTitle>
          <ProductExplanationInput placeholder="여러 장의 상품 사진과 구입 연도, 브랜드, 사용감, 하자 유무 등 구매자에게 필요한 정보를 꼭 포함해 주세요. (10자 이상)" />
        </ProductContentWrap>
      </RegisterProductContent>
      <RegisterProductBtn>등록하기</RegisterProductBtn>
    </ProductRegisterWrap>
  );
}

const ProductRegisterWrap = styled.div`
  padding: 50px 130px;
`;

const RegisterProductText = styled.div`
  font-size: 30px;
  border-bottom: 2px solid black;
  padding-bottom: 50px;
`;

const RegisterProductContent = styled.div`
  padding-top: 50px;
`;

const ProductContentWrap = styled.div`
  display: flex;
  padding: 30px 0;
  border-bottom: 1px solid lightgray;
`;

const ProductContentTitle = styled.div`
  width: 200px;
  font-size: 17px;
`;

const ProductImgInput = styled.div``;

const ProductNameInput = styled.input`
  width: 800px;
  height: 50px;
  border: 1px solid lightgray;
  border-radius: 0;
  padding: 10px;
  font-size: 15px;
  &:hover {
    border: 1px solid black;
  }
  &:focus {
    outline: none;
  }
`;

const ProductNameInputLength = styled.div`
  margin: 18px 0 0 10px;
`;

const ProductCategorySelect = styled.select`
  width: 200px;
  height: 50px;
  border: 1px solid lightgray;
  padding: 10px;
  font-size: 15px;
  &:focus {
    outline: 1px solid black;
  }
`;

const ProductRegionInput = styled.div``;

const RegionBtnWrap = styled.div`
  margin-bottom: 20px;
`;

const RegionBtn = styled.button`
  width: 130px;
  height: 50px;
  margin-right: 20px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #f4f4fa;
  }
`;

const RegionInput = styled.input`
  width: 800px;
  height: 50px;
  background-color: #f4f4fa;
  border: 1px solid lightgray;
  padding: 10px;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

const ProductStatusLabel = styled.label`
  margin-right: 40px;
`;

const ProductStatusInput = styled.input``;

const ProductPriceInput = styled.input`
  width: 200px;
  height: 50px;
  border: 1px solid lightgray;
  padding: 10px;
  font-size: 15px;
  &:hover {
    border: 1px solid black;
  }
  &:focus {
    outline: none;
  }
`;

const ProductPriceWon = styled.div`
  margin: 18px 0 0 10px;
`;

const ProductExplanationInput = styled.textarea`
  resize: none;
  width: 800px;
  height: 180px;
  border: 1px solid lightgray;
  padding: 10px;
  font-size: 15px;
  &:hover {
    border: 1px solid black;
  }
  &:focus {
    outline: none;
  }
`;

const RegisterProductBtn = styled.button`
  width: 180px;
  height: 60px;
  margin: 30px 0;
  border: none;
  border-radius: 5px;
  background-color: #ff564a;
  font-size: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #e34d42;
  }
`;
