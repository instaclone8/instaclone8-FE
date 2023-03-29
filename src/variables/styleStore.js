import styled from 'styled-components'

export const FlexRow = styled.div`
  width: ${({ width }) => width ? width : '100%'};
  height: ${({ height }) => height ? height : 'fit-content'};

  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify ? justify : 'center'};
  align-items: ${({ align }) => align ? align : 'center'};
  flex-wrap: ${({ wrap }) => wrap ? wrap : null};
  font-size: ${({ fontSize }) => fontSize ? fontSize : ``};
  color: ${({ color }) => color ? color : ``};
  
  background-color: ${({ BgColor }) => BgColor ? BgColor : 'none'};

  overflow: ${({ overflow }) => overflow ? overflow : null};

  gap: ${({ gap }) => gap ? gap : null};
  ${({ others }) => others}
`

export const FlexColumn = styled.div`
  width: ${({ width }) => width ? width : '100%'};
  height: ${({ height }) => height ? height : 'fit-content'};

  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify ? justify : 'center'};
  align-items: ${({ align }) => align ? align : 'center'};
  overflow: ${({ overflow }) => overflow ? overflow : null};

  margin: ${({ margin }) => margin ? margin : null};

  background-color: ${({ BgColor }) => BgColor ? BgColor : 'none'};

  gap: ${({ gap }) => gap ? gap : null};

`

export const Warning = styled.span`
  color: ${props => props.color};
  font-size: 3px;
`

export const Img = styled.img`
  height: 100%;
`