import React from 'react'
import styled from 'styled-components'
import theme from '../theme-styles'

const Sidebar = styled.div`
  grid-column: span ${props => props.gridSpan} / span ${props => props.gridSpan};
  grid-column-start: ${props => props.gridStart};
  position: relative;
  border-left: 2px solid ${theme.color.neutral_200};
  &:before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    width: 1px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 0 2px rgba(255, 255, 255, .3);
  }
`

const TheSidebar = ({ gridSpan, gridStart }) => {
  return (
    <Sidebar gridSpan={gridSpan} gridStart={gridStart}>

    </Sidebar>
  )
}

export default TheSidebar
