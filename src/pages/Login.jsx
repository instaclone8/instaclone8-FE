import React from 'react'
import Button from '../components/Button'
import Line from '../components/Line'
import Input from '../components/Input'
import LoginBox from '../components/LoginBox'
import Wrapper from '../components/Wrapper'
import Kakao from '../components/Kakao'


function Login() {
  return (
    <Wrapper>
      <LoginBox login={true}>
        <Input max={25}>이메일</Input>
        <Input max={15}>비밀번호</Input>
        <Button size={'medium'} btnColor={'rgb(113, 194, 244)'} color={'white'}>로그인</Button>
        <Line>또는</Line>
        <Kakao> KakaoTalk 로 로그인</Kakao>
      </LoginBox>
    </Wrapper>

  )
}


export default Login