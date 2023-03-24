import React from 'react'
import Button from '../components/Button'
import Line from '../components/Line'
import Input from '../components/Input'
import LoginBox from '../components/LoginBox'
import Wrapper from '../components/Wrapper'

function Login() {
  return (
    <Wrapper>
      <LoginBox>
        <Input>아이디</Input>
        <Input>비밀번호</Input>
        <Button size={'medium'} btnColor={'rgb(113, 194, 244)'} color={'white'}>로그인</Button>
        <Line>또는</Line>
      </LoginBox>
    </Wrapper>

  )
}


export default Login