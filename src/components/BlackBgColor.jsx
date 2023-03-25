import styled from "styled-components";

import React from "react";

function BlackBgColor({ setOpenModal }) {
  return (
    <BlackBackground
      className="body-blackout-style"
      onClick={() => setOpenModal(false)}
    ></BlackBackground>
  );
}

export default BlackBgColor;

const BlackBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.65);
`;
