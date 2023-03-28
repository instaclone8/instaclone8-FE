import React from 'react'
import Line from '../components/login,signup/Line'
import LoginBox from '../components/login,signup/LoginBox'
import useInput from '../Hook/useInput'
import Wrapper from '../components/common/Wrapper'
import Button from '../components/common/Button'
import Input from '../components/common/Input'
import Kakao from '../components/login,signup/Kakao'
import useLogin from '../api/hooks/useLogin'
import * as UI from '../variables/styleStore'


function Login() {

  const [email, emailChangeHandler] = useInput('');
  const [password, passwordChangeHandler] = useInput('');

  const userInfo = {
    email: email,
    password: password
  }

  const { login } = useLogin();

  return (
    <Wrapper width={'100vw'}>
      <LoginBox login={true}>
        <Input max={25} value={email} onChange={emailChangeHandler} >이메일</Input>
        <Input type='password' max={15} value={password} onChange={passwordChangeHandler} >비밀번호</Input>
        <Button onClick={() => login(userInfo)} type={'button'} size={'medium'} btnColor={'rgb(113, 194, 244)'} color={'white'}>로그인</Button>
        <Line>또는</Line>
        <Kakao> KakaoTalk 로 로그인</Kakao>
      </LoginBox>
    </Wrapper>

  )
}



export default Login