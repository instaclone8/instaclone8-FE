import React from 'react'
import { RiKakaoTalkFill } from 'react-icons/ri'
import styled from 'styled-components'
import { FlexRow } from '../../variables/styleStore'

function Kakao({ children }) {
  const REST_API_KEY = "5510a2d8fa3f608595dda5d4b933f6c0"
  const REDIRECT_URI = "http://localhost:3000/kakao"
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }


  return (
    <FlexRow>
      <RiKakaoTalkFill style={{ color: 'rgb(250, 225, 0)', fontSize: `40px` }} />
      {/* <Atag href="kauth.kakao.com/oauth/authorize?client_id=5510a2d8fa3f608595dda5d4b933f6c0&redirect_uri=http://localhost:8080/api/user/kakao/callback&response_type=code">{children}</Atag> */}
      <div onClick={kakaoLogin}>{children}</div>
    </FlexRow>
  )
}

// const Atag = styled.a`
//   text-decoration: none;
//   color: #410dfc;
//   margin-left: 10px;
// `

export default Kakao