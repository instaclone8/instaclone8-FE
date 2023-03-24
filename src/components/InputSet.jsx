import React from 'react'
import styled from 'styled-components'

function InputSet({ children }) {
  return (
    <Label>{children}</Label>
  )
}

const Label = styled.label`
  font-size: 20px;
`

const Input = styled.div`
  
`

export default InputSet