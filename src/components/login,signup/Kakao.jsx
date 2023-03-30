import React from 'react'
import { RiKakaoTalkFill } from 'react-icons/ri'
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
      <div onClick={kakaoLogin} style={{ cursor: `pointer` }}>{children}</div>
    </FlexRow>
  )
}

export default Kakao