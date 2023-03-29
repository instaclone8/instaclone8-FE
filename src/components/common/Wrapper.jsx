import React from "react";
import styled from "styled-components";

function Wrapper({ children, ...rest }) {
  return <StWrapper {...rest}>{children}</StWrapper>;
}

const StWrapper = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => flex ? flex : 'column'};
  justify-content: ${({ justify }) => justify ? justify : `center`};
  align-items: ${({ align }) => align ? align : 'center'};;
  width: 100vw;
  min-width: 900px;
  height: 100vh;
  margin: auto;
  gap: 10px;
  overflow: ${({ overflow }) => overflow ? overflow : `scroll`};
  // 고정 테스트
  position: relative;
  right: 0;
`;

export default Wrapper;
