import React from 'react'
import { RiKakaoTalkFill } from 'react-icons/ri'
import styled from 'styled-components'
import { FlexRow } from '../../variables/styleStore'

function Kakao({ children }) {
  return (
    <FlexRow>
      <RiKakaoTalkFill style={{ color: 'rgb(250, 225, 0)', fontSize: `40px` }} />
      <Atag href="https://kauth.kakao.com/oauth/authorize?client_id=cbcdb93eedcbe836dc9dc1ca1fb98ffa&redirect_uri=http://43.201.98.79:8080/api/user/kakao/callback&response_type=code">{children}</Atag>
    </FlexRow>
  )
}

const Atag = styled.a`
  text-decoration: none;
  color: #410dfc;
  margin-left: 10px;
`

export default Kakao