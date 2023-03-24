import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Wrapper from '../components/Wrapper';

function Home() {
  const navigate = useNavigate();

  const onLoginBtnClickHandler = () => {
    navigate('/login')
  }
  const onSignUpBtnClickHandler = () => {
    navigate('/signup')
  }

  return <Wrapper>
    <Img />
    <Button size={'medium'} onClick={onLoginBtnClickHandler} >로그인</Button>
    <Button size={'medium'} onClick={onSignUpBtnClickHandler} >카카오 로그인</Button>
    <Button size={'medium'}>회원가입</Button>
  </Wrapper>;
}

const Img = styled.img`
  background-color: aqua;
  width: 1000px;
  height: 600px;
`

export default Home;