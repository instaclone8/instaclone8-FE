import React from 'react'
import styled from 'styled-components'

function Line({ children }) {
  return (
    <Div>
      {children}
    </Div>

  )
}

const Div = styled.div`
  width: 80%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before, &::after{
    content: "";
        flex-grow: 1;
        background: rgba(0, 0, 0, 0.35);
        height: 2px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 16px;
  }
`

export default Line