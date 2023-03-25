import React from "react";
import styled from "styled-components";

function Wrapper({ children, ...rest }) {
  return <StWrapper {...rest}>{children}</StWrapper>;
}

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1600px;
  min-width: 900px;
  height: 100vh;
  margin: auto;
  gap: 10px;
  // 구분용 백그라운드
  background-color: #f1f1f1;
`;

export default Wrapper;
