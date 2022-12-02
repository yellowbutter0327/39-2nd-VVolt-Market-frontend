import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FollowUser from './FollowUser';

export default function StoreFollow({ curruntMenu, userId }) {
  const [followList, setFollowList] = useState();
  useEffect(() => {
    if (curruntMenu === '팔로잉') {
      fetch(`/data/followUserInfo${userId}.json`)
        // fetch(`${APIS.ipAddress}/`)
        .then(res => res.json())
        .then(result => {
          setFollowList(result);
        });
    } else if (curruntMenu === '팔로워') {
      fetch(`/data/followUserInfo${userId}.json`)
        // fetch(`${APIS.ipAddress}/`)
        .then(res => res.json())
        .then(result => {
          setFollowList(result);
        });
    }
  }, []);
  return (
    <WrapStoreFollow>
      {followList &&
        followList.map((obj, index) => {
          return <FollowUser key={index} followInfo={obj}></FollowUser>;
        })}
    </WrapStoreFollow>
  );
}
const WrapStoreFollow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
