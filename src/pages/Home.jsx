import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Wrapper from '../components/common/Wrapper';

function Home() {
  const navigate = useNavigate();

  const onLoginBtnClickHandler = () => {
    navigate('/login')
  }
  const onSignUpBtnClickHandler = () => {
    navigate('/signup')
  }

  return <Wrapper>
    <Img src='img/instagram-font.png' />
    <Button size={'medium'} onClick={onLoginBtnClickHandler} >로그인</Button>
    <Button size={'medium'}  >카카오 로그인</Button>
    <Button size={'medium'} onClick={onSignUpBtnClickHandler}>회원가입</Button>
  </Wrapper>;
}

const Img = styled.img`
  width: 1000px;
  height: 600px;
`

export default Home;