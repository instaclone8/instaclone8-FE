import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import apis from '../axios/api'
import Button from '../components/Button'
import Input from '../components/Input'
import Kakao from '../components/Kakao'
import Line from '../components/Line'
import LoginBox from '../components/LoginBox'
import Wrapper from '../components/Wrapper'
import useInput, { useValidInput } from '../Hook/useInput'
import * as UI from '../variables/styleStore'

function Signup() {
  const [email, emailOnChange, idIsValid] = useValidInput({ type: 'email' })
  const [password, passwordOnChange, pwdIsValid] = useValidInput({ type: 'pwd' })
  const [passwordCheck, passwordCheckOnChange] = useInput('')
  const [nickname, nicknameOnChange] = useInput('')


  const newUser = {
    email: email,
    username: nickname,
    password: password,
  }

  const checkedEmail = {
    email: email
  }

  const checkedNickname = {
    username: nickname
  }

  const { mutate: signup } = useMutation({
    mutationFn: async (newUser) => {
      const data = await apis.post("/api/user/signup", newUser)
      console.log(data);
      return data
    }
  })

  const { mutate: checkEmail } = useMutation({
    mutationFn: async (email) => {
      const response = await apis.post('/api/user/checkemail', email)
      console.log(response);
      return response
    }
  })

  const { mutate: checkNickname } = useMutation({
    mutationFn: async (checkedNickname) => {
      const response = await axios.post("http://54.180.103.170/api/user/checkusername", checkedNickname)
      console.log(response);
      return response
    }
  })

  return (
    <Wrapper>
      <LoginBox login={false} logoMargin={'0'}>
        <UI.SignupDiv>
          <UI.Div>
            <UI.EmailDiv>
              <Input max={25}
                others={'width : 275px'}
                value={email}
                onChange={emailOnChange}>
                이메일
              </Input>
              <Button
                size={'check'}
                btnColor={'rgb(113, 194, 244)'}
                color={'white'}
                type='button'
                onClick={() => checkEmail(checkedEmail)}>
                중복 확인
              </Button>
            </UI.EmailDiv>
            {idIsValid ? <UI.Warning color='green'>유효한 아이디 입니다.</UI.Warning> : <UI.Warning color='red'>이메일 형식을 확인해 주세요</UI.Warning>}
          </UI.Div>
          <UI.Div>
            <Input
              type={'password'}
              max={15}
              width={'100%'}
              value={password}
              onChange={passwordOnChange}>
              비밀번호
            </Input>
            {pwdIsValid ? <UI.Warning color='green'>유효한 비밀번호 입니다.</UI.Warning> : <UI.Warning color='red'>알파벳, 숫자, 특수문자를 하나씩 사용하여 6~15자 사이로 입력해 주세요</UI.Warning>}
          </UI.Div>

          <UI.Div>
            <Input
              type={'password'}
              max={15}
              width={'100%'}
              value={passwordCheck}
              onChange={passwordCheckOnChange}
            >
              비밀번호 확인
            </Input>
            {passwordCheck === password && password ?
              <UI.Warning color='green'>동일한 비밀번호입니다.</UI.Warning>
              : <UI.Warning color='red'>비밀번호가 일치하지 않습니다.</UI.Warning>}
          </UI.Div>
          <UI.Div>
            <UI.EmailDiv>
              <Input
                max={8}
                width={'275px'}
                value={nickname}
                onChange={nicknameOnChange}
              >
                닉네임
              </Input>
              <Button
                type='button'
                size={'check'}
                btnColor={'rgb(113, 194, 244)'}
                color={'white'}
                onClick={() => checkNickname(checkedNickname)}>
                중복 확인
              </Button>
            </UI.EmailDiv>

            <UI.Warning>8자 안으로 입력해주세요</UI.Warning>
          </UI.Div>

        </UI.SignupDiv>


        <Button type={'button'} size={'medium'} btnColor={'rgb(113, 194, 244)'} color={'white'} onClick={() => signup(newUser)}>회원가입</Button>
        <Line>또는</Line>
        <Kakao> KakaoTalk 로 회원가입</Kakao>
      </LoginBox>
    </Wrapper>
  )
}


export default Signup