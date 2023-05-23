import React from 'react';
import styled from 'styled-components';

const SearchArea = ({ searchInput, setSearchInput, itemList, navigate }) => {
  return (
    <WrapSearch>
      <SearchInput
        type="text"
        placeholder="상품명, 지역명, @상점명 입력"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <SearchIcon src="/images/searchicon.png" alt="검색 아이콘" />
      <WrapSearchedList>
        {itemList &&
          itemList.map((obj, index) => {
            if (obj.productName.includes(searchInput) && searchInput !== '') {
              return (
                <SearchedList
                  onClick={() => {
                    navigate(`/productdetail/${obj.productId}`);
                  }}
                >
                  {obj.productName}
                </SearchedList>
              );
            } else {
              return null;
            }
          })}
      </WrapSearchedList>
    </WrapSearch>
  );
};

const WrapSearch = styled.div`
  border: 3px solid #dca8ff;
  width: 500px;
  height: 40px;
  box-sizing: border-box;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  display: inline-block;
  margin-left: 10px;
  padding: 4px 0px 0px;
  width: 290px;
  border: none;
  text-align: left;
  font-size: 15px;
  outline: none;
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 160px;
  transform: translateY(20%);
`;

const WrapSearchedList = styled.div`
  width: 470px;
  height: 50px;
  padding: 10px;
  overflow: scroll;
  cursor: pointer;
`;

const SearchedList = styled.div`
  line-height: 130%;
`;

export default SearchArea;
