import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FlexRow } from '../../variables/styleStore'

function LoginBox({ children, login, logoMargin }) {
  return (
    <>
      <TopBox>
        <Logo src='img/instagram-font.png' marginBottom={logoMargin}></Logo>
        {children}
      </TopBox>
      <BottomBox>{login ? <FlexRow gap={`10px`}><span>계정이 없으신가요?</span> <Link to={'/signup'}>가입하러 가기</Link></FlexRow> : <FlexRow gap={`10px`}><span>계정이 있으신가요?</span> <Link to={'/login'}>로그인하러 가기</Link></FlexRow>}</BottomBox>
    </>

  )
}

const Logo = styled.img`
  width: 450px;
  height: 150px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '40px')};
`

const TopBox = styled.form`
  background-color: white;
  width: 500px;
  height: 650px;
  border: 2px solid #d4d4d4;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
`

const BottomBox = styled.div`
background-color: white;
  width: 500px;
  height: 100px;
  margin-top: 20px;

  border: 2px solid #d4d4d4;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`



export default LoginBox