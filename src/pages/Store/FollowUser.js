import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import variables from '../../styles/variables';

const FollowUser = ({ followInfo }) => {
  const { user_id, userNickname, user_image, product_count, follower_count } =
    followInfo;
  const navigator = useNavigate();
  return (
    <FollowUserBox
      onClick={() => {
        navigator(`/store/${user_id}`);
        window.location.reload();
      }}
    >
      <FollowUserImg src={user_image} />
      <FollowUserName>{userNickname}</FollowUserName>
      <FollwUserCount>
        상품{product_count} | 팔로워{follower_count}
      </FollwUserCount>
    </FollowUserBox>
  );
};

export default FollowUser;

const FollowUserBox = styled.div`
  ${variables.flex('column', 'center', 'center')}
  min-width: 194px;
  min-height: 216px;
  max-width: 194px;
  max-height: 216px;
  margin: 0 10px 10px 0;
  border: 1px solid rgb(238, 238, 238);
  background-color: #fff;
  color: #000;
  text-decoration: none;
  line-height: 20px;
`;
const FollowUserImg = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 50px;
`;
const FollowUserName = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
`;
const FollwUserCount = styled.div`
  font-size: 14px;
`;
