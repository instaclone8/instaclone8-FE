import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/common/Wrapper'
import NavTest from '../components/NavTest'
import * as UI from '../variables/styleStore'

function MyPage() {
  return (
    <Wrapper flex={'row'}>
      <NavTest />
      <UI.FlexColumn>
        <UI.FlexRow>
          <ProfileImg />
          <UI.FlexColumn>
            <NicknameDiv>닉네임</NicknameDiv>
            <NicknameDiv>게시글 수</NicknameDiv>
          </UI.FlexColumn>
        </UI.FlexRow>
      </UI.FlexColumn>
    </Wrapper>
  )
}

const NicknameDiv = styled.div`
  width: 100px;
  height: fit-content;
`

const ProfileImg = styled.img`
  width: 300px;
  height: 300px;
`

export default MyPage