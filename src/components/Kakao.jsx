import React from 'react'
import { RiKakaoTalkFill } from 'react-icons/ri'
import styled from 'styled-components'

function Kakao({ children }) {
  return (
    <Div>
      <RiKakaoTalkFill style={{ color: 'rgb(250, 225, 0)', fontSize: `40px` }} />
      <Atag href="">{children}</Atag>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Atag = styled.a`
  text-decoration: none;
  color: #410dfc;
  margin-left: 10px;
`

export default Kakao