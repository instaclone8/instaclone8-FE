import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGetMypost } from '../api/hooks/useGetMypost'
import Wrapper from '../components/common/Wrapper'
import NavTest from '../components/NavTest'
import * as UI from '../variables/styleStore'

function MyPage() {

  const params = useParams()
  const { myPost } = useGetMypost(params.username)

  console.log('================', useGetMypost(params.username));

  // console.log(myPost.data);



  // useEffect({
  //   myPost
  // }, [])

  return (
    <Wrapper flex={'row'}>
      <NavTest />
      {/* <UI.FlexColumn> */}
      <UI.FlexRow>
        <ProfileImg />
        <UI.FlexColumn width={'fit-content'}>
          <NicknameDiv>닉네임</NicknameDiv>
          <NicknameDiv>게시글 수</NicknameDiv>
        </UI.FlexColumn>
      </UI.FlexRow>
      {/* </UI.FlexColumn> */}
    </Wrapper>
  )
}

const NicknameDiv = styled.div`
background-color: aqua;
  width: 100px;
  height: fit-content;
`

const ProfileImg = styled.img`
background-color: beige;
  width: 300px;
  height: 300px;
`

export default MyPage