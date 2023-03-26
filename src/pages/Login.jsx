import React from 'react'
import Line from '../components/login,signup/Line'
import LoginBox from '../components/login,signup/LoginBox'
import { useMutation } from '@tanstack/react-query'
import useInput from '../Hook/useInput'
import { cookies } from '../shared/cookies'
import apis from '../axios/api'
import Wrapper from '../components/common/Wrapper'
import Button from '../components/common/Button'
import Input from '../components/common/Input'
import Kakao from '../components/login,signup/Kakao'


function Login() {

  const [email, emailChangeHandler] = useInput('');
  const [password, passwordChangeHandler] = useInput('');

  const userInfo = {
    email: email,
    password: password
  }

  const { mutate: login } = useMutation({
    mutationFn: async (userInfo) => {
      const response = await apis.post("/api/user/login", userInfo);
      console.log(response.headers.authorization);
      const token = response.headers.authorization;
      cookies.set('token', token)
      return response
    }
  })

  return (
    <Wrapper>
      <LoginBox login={true}>
        <Input max={25} value={email} onChange={emailChangeHandler} >이메일</Input>
        <Input max={15} value={password} onChange={passwordChangeHandler} >비밀번호</Input>
        <Button onClick={() => login(userInfo)} type={'button'} size={'medium'} btnColor={'rgb(113, 194, 244)'} color={'white'}>로그인</Button>
        <Line>또는</Line>
        <Kakao> KakaoTalk 로 로그인</Kakao>
      </LoginBox>
    </Wrapper>

  )
}


export default Login