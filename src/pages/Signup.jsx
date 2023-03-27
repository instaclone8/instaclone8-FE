import React, { useState } from 'react'
import Line from '../components/login,signup/Line'
import LoginBox from '../components/login,signup/LoginBox'
import useInput, { useValidInput } from '../Hook/useInput'
import * as UI from '../variables/styleStore'
import Wrapper from '../components/common/Wrapper'
import Button from '../components/common/Button'
import Input from '../components/common/Input'
import Kakao from '../components/login,signup/Kakao'
import { useSignupUser } from '../api/hooks/useSignupUser'
import useCheckEmail from '../api/hooks/useCheckEmail'
import useCheckUsername from '../api/hooks/useCheckUsername'
import CheckModal from '../components/login,signup/CheckModal'

function Signup() {
  const [email, emailOnChange, idIsValid, setEmail] = useValidInput({ type: 'email' })
  const [password, passwordOnChange, pwdIsValid] = useValidInput({ type: 'pwd' })
  const [passwordCheck, passwordCheckOnChange] = useInput('')
  const [user, userOnChange, setUser] = useInput('')
  const [openModal, setOpenModal] = useState(false);
  const [type, setType] = useState(true);

  // 회원가입시 서버에 보낼 정보
  const newUser = {
    email: email,
    username: user,
    password: password,
  }
  // 중복확인시 보낼 email 정보
  const checkedEmail = {
    email: email
  }
  // 중복확인시 보낼 username 정보
  const checkedUser = {
    username: user
  }

  const { signup } = useSignupUser();
  const { checkEmail } = useCheckEmail();
  const { checkUser } = useCheckUsername();

  return (
    <Wrapper width={'100vw'}>



      {/* 이메일 중복 확인 시 모달 */}
      <CheckModal openModal={openModal} setOpenModal={setOpenModal} setEmail={setEmail} type={true}>asdfadsf</CheckModal>

      <LoginBox login={false} logoMargin={'0'}>
        <UI.FlexColumn width={`80%`} gap={'15px'}>
          <UI.FlexColumn align={`flex-start`}>

            {/* 이메일 인풋, 중복확인버튼 */}
            <UI.FlexRow justify={'space-between'} gap={'30px'}>
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
                onClick={() => checkEmail(checkedEmail, {
                  onSuccess: () => setOpenModal(true),
                  onError: () => {
                    setType(false)
                    console.log(type);
                    setOpenModal(true)
                    console.log(openModal);
                  }
                })}>
                중복 확인
              </Button>

            </UI.FlexRow>
            {idIsValid ? <UI.Warning color='green'>유효한 아이디 입니다.</UI.Warning> : <UI.Warning color='red'>이메일 형식을 확인해 주세요</UI.Warning>}

            {/* 비밀번호, 비밀번호 확인 인풋 */}
          </UI.FlexColumn>
          <UI.FlexColumn align={`flex-start`}>
            <Input
              type={'password'}
              max={15}
              width={'100%'}
              value={password}
              onChange={passwordOnChange}>
              비밀번호
            </Input>
            {pwdIsValid ? <UI.Warning color='green'>유효한 비밀번호 입니다.</UI.Warning> : <UI.Warning color='red'>알파벳, 숫자, 특수문자를 하나씩 사용하여 6~15자 사이로 입력해 주세요</UI.Warning>}
          </UI.FlexColumn>

          <UI.FlexColumn align={`flex-start`}>
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
          </UI.FlexColumn>
          <UI.FlexColumn align={`flex-start`}>

            {/* 닉네임인풋, 닉네임 중복확인버튼 */}
            <UI.FlexRow justify={'space-between'} gap={'30px'}>
              <Input
                max={8}
                width={'275px'}
                value={user}
                onChange={userOnChange}
              >
                닉네임
              </Input>
              <Button
                type='button'
                size={'check'}
                btnColor={'rgb(113, 194, 244)'}
                color={'white'}
                onClick={() => checkUser(checkedUser)}>
                중복 확인
              </Button>
            </UI.FlexRow>

            <UI.Warning>8자 안으로 입력해주세요</UI.Warning>
          </UI.FlexColumn>

        </UI.FlexColumn>

        {/* 회원가입, 카카오 회원가입 버튼 */}
        <Button type={'button'} size={'medium'} btnColor={'rgb(113, 194, 244)'} color={'white'} onClick={() => signup(newUser)}>회원가입</Button>
        <Line>또는</Line>
        <Kakao> KakaoTalk 로 회원가입</Kakao>
      </LoginBox>
    </Wrapper>
  )
}


export default Signup