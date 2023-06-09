import React from 'react'
import styled from 'styled-components'

function Input({ type, children, max, others, width, value, onChange }) {
  return (
    <StInput type={type} value={value} onChange={onChange} placeholder={children} maxLength={max} width={width} others={others} />
  )
}

const StInput = styled.input`
  background-color: #8080801f;
  width: ${({ width }) => (width ? width : "300px")};
  height: 40px;

  border: 1px solid #73737347;
  border-radius: 10px;

  padding: 10px;
  padding-left: 20px;
  box-sizing: border-box;

  ${(props) => props.others}
`

export default Input