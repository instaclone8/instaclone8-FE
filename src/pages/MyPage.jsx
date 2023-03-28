import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGetMypost } from '../api/hooks/useGetMypost'
import Wrapper from '../components/common/Wrapper'
import NavTest from '../components/NavTest'
import * as UI from '../variables/styleStore'
import { BsFillSuitHeartFill } from 'react-icons/bs'

function MyPage() {

  const params = useParams();
  const { myPost } = useGetMypost(params.username);

  console.log(`params=====`, params.username);
  console.log('================', myPost?.posts);

  return (
    <Wrapper flex={'row'} align={`flex-start`}>
      <NavTest />
      <UI.FlexColumn width={`850px`}>
        <UI.FlexRow BgColor={`white`} justify={`flex-start`} others={`margin : 50px 0 50px`}>
          <ProfileImg />
          <UI.FlexColumn width={'fit-content'} gap={`20px`}>
            <NicknameDiv>{myPost?.username}</NicknameDiv>
            <NicknameDiv>게시물 {myPost?.postsCnt}개</NicknameDiv>
          </UI.FlexColumn>
        </UI.FlexRow>
        <UI.FlexRow BgColor={`beige`} height={`fit-content`} justify={`space-between`}>
          {myPost?.posts?.map((post) => {
            return (
              <MyCard>
                <BsFillSuitHeartFill />
              </MyCard>
            )

          })}

        </UI.FlexRow>
      </UI.FlexColumn>
    </Wrapper>
  )
}

const MyCard = styled.div`
  background-color: green;
  width: 280px;
  height: 280px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const NicknameDiv = styled.div`
background-color: aqua;
  width: fit-content;
  height: fit-content;
  font-size: 30px;
`

const ProfileImg = styled.img`
background-color: beige;
  width: 150px;
  height: 150px;
  border: none;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 100px;
  margin-left: 100px;
`

export default MyPage