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
  height: ${({ height }) => height ? height : null};
  margin: auto;
  gap: 10px;
  position: relative;
  right: 0;
`;

export default Wrapper;
