
import React from 'react'
import styled from 'styled-components'

function CheckModal({ children, openModal, setOpenModal, setEmail, type }) {

  if (type) {
    return (
      <ModalBg openModal={openModal}>
        <ModalCheckBox>
          <InsideDiv>
            <InsideMessage>{children}</InsideMessage>
            <InsideButtons>
              <StButton onClick={() => {
                setEmail('')
                setOpenModal(false)
              }}>취소</StButton>
              <StButton button={true} onClick={() => setOpenModal(false)}>사용</StButton>
            </InsideButtons>
          </InsideDiv>

        </ModalCheckBox>

      </ModalBg>
    )
  } else {
    return (
      <ModalBg openModal={openModal}>
        <ModalCheckBox>
          <InsideDiv>
            <InsideMessage>{children}</InsideMessage>
            <InsideButtons>
              <StButton onClick={() => {
                setEmail('')
                setOpenModal(false)
              }} type={type}>취소</StButton>
            </InsideButtons>
          </InsideDiv>

        </ModalCheckBox>

      </ModalBg>)
  }
}

const InsideMessage = styled.div`
  background-color: aqua;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InsideButtons = styled.div`
  background-color: beige;
  width: 100%;
  height: 30%;
`
const StButton = styled.button`
background-color: ${({ button }) => button ? `green` : `red`};
  width: ${({ type }) => type ? `50%` : `100%`};
  height: 100%;
  border: none;
`

const InsideDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const ModalBg = styled.div`
  background-color: rgba(0, 0, 0, 0.275);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  display: ${({ openModal }) => openModal ? `block` : `none`}
`

const ModalCheckBox = styled.div`
  background-color: white;
  width: 300px;
  height: 200px;
  position: fixed;

  border-radius: 10px;
  overflow: hidden;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
`

export default CheckModal