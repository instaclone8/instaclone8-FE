import React from "react";
import styled from "styled-components";

function Wrapper({ children, ...rest }) {
  return <StWrapper {...rest}>{children}</StWrapper>;
}

const StWrapper = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => flex ? flex : 'column'};
  justify-content: center;
  align-items: ${({ align }) => align ? align : 'center'};;
  width: ${({ width }) => width ? width : '90vw'};
  min-width: 900px;
  height: 100vh;
  margin: auto;
  gap: 10px;
  overflow: ${({ overflow }) => overflow ? overflow : null};
  // 고정 테스트
  position: fixed;
  right: 0;
`;

export default Wrapper;
