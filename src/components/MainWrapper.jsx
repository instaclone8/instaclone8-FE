import React from "react";
import styled from "styled-components";

function MainWrapper({ children, ...rest }) {
  return <StMainWrapper {...rest}>{children}</StMainWrapper>;
}

const StMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainWrapper;
