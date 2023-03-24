import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function LoginBox({ children, login }) {
  return (
    <>
      <StDiv>
        <Logo src='img/instagram-font.png'></Logo>
        {children}
      </StDiv>
      <StDiv2>{login ? <Div><span>계정이 없으신가요?</span> <Link to={'/signup'}>가입하러 가기</Link></Div> : <Div><span>계정이 있으신가요?</span> <Link to={'/login'}>로그인하러 가기</Link></Div>}</StDiv2>
    </>

  )
}

const Div = styled.div`
  display: flex;
`

const Logo = styled.img`
  width: 450px;
  height: 150px;
  margin-bottom: 40px;
`

const StDiv = styled.div`
  background-color: white;
  width: 500px;
  height: 650px;
  border: 2px solid #d4d4d4;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
`

const StDiv2 = styled.div`
background-color: white;
  width: 500px;
  height: 100px;
  margin-top: 20px;

  border: 2px solid #d4d4d4;

  display: flex;
  justify-content: center;
  align-items: center;
`



export default LoginBox