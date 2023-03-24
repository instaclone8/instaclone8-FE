import React from "react";
import styled from 'styled-components';
import Button from '../components/Button';
import Wrapper from '../components/Wrapper';

function Home() {
  return <Wrapper>
    <Img />
    <Button size={'medium'} >로그인</Button>
    <Button size={'medium'}>카카오 로그인</Button>
    <Button size={'medium'}>회원가입</Button>
  </Wrapper>;
}

const Img = styled.img`
  background-color: aqua;
  width: 1000px;
  height: 600px;
`

export default Home;