import React from "react";
import styled, { css } from "styled-components";

function Button({ children, size, onClick, btnColor, color, others }) {

  const buttonSize = SIZE[size]


  return (
    <StButton buttonSize={buttonSize} onClick={onClick} bgColor={btnColor} color={color} others={others}>
      {children}
    </StButton>
  );
}

const SIZE = {
  small: css`
    width: 100px;
    height: 30px;
  `,
  medium: css`
    width: 200px;
    height: 40px;
    font-size: 17px;
    font-weight: bold;
  `,
  large: css`
    width: 300px;
    height: 60px;
    font-size: 25px;
    font-weight: bold;
  `,
  check: css`
    width: 100px;
    height: 40px;
    font-size: 17px;
    font-weight: bold;
  `
}

const StButton = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: 1px solid lightgray;
  border-radius: 10px;
  ${(props) => props.buttonSize}
  ${(props) => props.others}

  cursor: pointer;
`;

export default Button;
