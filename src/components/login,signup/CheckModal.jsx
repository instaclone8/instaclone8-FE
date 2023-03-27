
import React from 'react'
import styled from 'styled-components'

function CheckModal({ children, openModal }) {
  return (
    <ModalBg openModal={openModal}>
      <ModalCheckBox>
        {children}
      </ModalCheckBox>

    </ModalBg>
  )
}

const ModalBg = styled.div`
  background-color: rgba(0, 0, 0, 0.275);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  display: ${({ openModal }) => openModal ? `block` : `none`}
`

const ModalCheckBox = styled.div`
background-color: rgba(0, 0, 0, 0.275);
  width: 500px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
`

export default CheckModal