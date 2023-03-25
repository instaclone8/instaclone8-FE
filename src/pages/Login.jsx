import React from 'react'
import Button from '../components/Button'
import Line from '../components/Line'
import Input from '../components/Input'
import LoginBox from '../components/LoginBox'
import Wrapper from '../components/Wrapper'
import Kakao from '../components/Kakao'
import { useMutation } from '@tanstack/react-query'
import instance from '../axios/api'
import useInput from '../Hook/useInput'
import axios from 'axios'


function Login() {

  const [email, emailChangeHandler] = useInput('');
  const [password, passwordChangeHandler] = useInput('');

  const userInfo = {
    email: email,
    password: password
  }

  const { mutate: login, status } = useMutation({
    mutationFn: async (userInfo) => {
      const data = await axios.post("http://54.180.103.170/api/user/login", userInfo);
      console.log(data);
      return data
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