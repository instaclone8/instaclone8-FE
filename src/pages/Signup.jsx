import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Input from '../components/Input'
import Kakao from '../components/Kakao'
import Line from '../components/Line'
import LoginBox from '../components/LoginBox'
import Wrapper from '../components/Wrapper'
import { useInput } from '../Hook/useInput'

function Signup() {
  const [email, emailOnChange] = useInput('')
  const [password, passwordOnChange] = useInput('')
  const [passwordCheck, passwordCheckOnChange] = useInput('')

  return (
    <Wrapper>
      <LoginBox login={false}>
        <SignupDiv>
          <EmailDiv>
            <Input max={25} others={'width : 275px'} value={email} onChange={emailOnChange}>이메일</Input>
            <Button size={'check'} btnColor={'rgb(113, 194, 244)'} color={'white'}>중복 확인</Button>
          </EmailDiv>

          <Input type={'password'} max={15} width={'100%'} value={password} onChange={passwordOnChange}>비밀번호</Input>
          <Input type={'password'} max={15} width={'100%'} value={passwordCheck} onChange={passwordCheckOnChange}>비밀번호 확인</Input>
        </SignupDiv>


        <Button size={'medium'} btnColor={'rgb(113, 194, 244)'} color={'white'}>회원가입</Button>
        <Line>또는</Line>
        <Kakao> KakaoTalk 로 회원가입</Kakao>
      </LoginBox>
    </Wrapper>
  )
}

const EmailDiv = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;

  gap: 30px;
`

const SignupDiv = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
`


export default Signup