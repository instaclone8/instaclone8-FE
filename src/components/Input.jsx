import React from 'react'
import styled from 'styled-components'

function Input({ children }) {
  return (
    <StInput placeholder={children} />
  )
}

const StInput = styled.input`
  background-color: #8080801f;
  width: 200px;
  height: 40px;

  border: 1px solid #73737347;
  border-radius: 10px;

  padding: 10px;
  box-sizing: border-box;
`

export default Input