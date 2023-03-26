import styled from 'styled-components'

export const FlexRow = styled.div`
  width: ${({ width }) => width ? width : '100%'};
  height: ${({ height }) => height ? height : 'fit-content'};

  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify ? justify : 'center'};
  align-items: ${({ align }) => align ? align : 'center'};

  gap: ${({ gap }) => gap ? gap : null};
`

export const FlexColumn = styled.div`
  width: ${({ width }) => width ? width : '100%'};
  height: ${({ height }) => height ? height : 'fit-content'};

  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify ? justify : 'center'};
  align-items: ${({ align }) => align ? align : 'center'};

  gap: ${({ gap }) => gap ? gap : null};

`

export const Warning = styled.span`
  color: ${props => props.color};
  font-size: 3px;
`