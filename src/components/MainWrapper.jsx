import React from "react";
import styled from "styled-components";

function MainWrapper({ children, ...rest }) {
  return <StMainWrapper {...rest}>{children}</StMainWrapper>;
}

const StMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //영역확인을 위한 배경색
  /* background-color: #ece7cf; */
`;

export default MainWrapper;
