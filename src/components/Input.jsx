import React from 'react'
import styled from 'styled-components'

function Input({ children, max }) {
  return (
    <StInput placeholder={children} maxLength={max} />
  )
}

const StInput = styled.input`
  background-color: #8080801f;
  width: 300px;
  height: 40px;

  border: 1px solid #73737347;
  border-radius: 10px;

  padding: 10px;
  padding-left: 20px;
  box-sizing: border-box;
`

export default Input