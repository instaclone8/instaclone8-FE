import styled from 'styled-components'


export const EmailDiv = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;

  gap: 30px;
`

export const SignupDiv = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`

export const Div = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`

export const Warning = styled.span`
  color: ${props => props.color};
  font-size: 3px;
`