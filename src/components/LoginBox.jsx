import React from 'react'
import styled from 'styled-components'

function LoginBox({ children }) {
  return (
    <>
      <StDiv>
        <Logo src='https://fontmeme.com/images/instagram-new-logo.png'></Logo>
        {children}
      </StDiv>
      <StDiv2></StDiv2>
    </>

  )
}

const Logo = styled.img`
  width: 450px;
  height: 150px;
`

const StDiv = styled.div`
  background-color: white;
  width: 500px;
  height: 600px;
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
`



export default LoginBox