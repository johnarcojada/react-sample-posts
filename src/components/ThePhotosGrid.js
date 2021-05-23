import React from 'react'
import styled from 'styled-components'
import theme from '../theme-styles'

const PhotoGridContainer = styled.div`
  grid-column: span ${props => props.gridSpan} / span ${props => props.gridSpan};
  grid-column-start: ${props => props.gridStart};
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`

const HeaderTitle = styled.p`
  font-size: 1rem;
  font-weight: 900;
  color: ${theme.color.neutral_500};
  margin-bottom: 2.5rem;
  display: inline-block;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 2rem;
`
const PhotoCard = styled.div`
  position: relative;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: -8px -8px 16px 0 #FFFFFF, 8px 8px 16px 0 ${theme.color.neutral_300};
  grid-column: span 3 / span 3;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    background-color: ${theme.color.neutral_100};
    z-index: -1;
    border-radius: 1rem;
    filter: blur(4px);
  }
  &:nth-child(even) {
    transform: translateY(2rem)
  }
  & .photo-card-header {
    & img {
      width: 100%;
      border-radius: .5rem;
    }
  }
  & .photo-card-body {
    margin-top: 1rem;
    & .title {
      font-weight: 600;
    }
  }
`


const ThePhotosGrid = ({ gridSpan, gridStart }) => {
  return (
    <PhotoGridContainer gridSpan={gridSpan} gridStart={gridStart}>
      <HeaderTitle>Photo Grid</HeaderTitle>
      <PhotoGrid>
        <PhotoCard>
          <div className="photo-card-header">
            <img src="https://via.placeholder.com/600/92c952" alt=""/>
          </div>
          <div className="photo-card-body">
            <p className="title">accusamus beatae ad facilis cum similique qui sunt</p>
          </div>
        </PhotoCard>
      </PhotoGrid>
    </PhotoGridContainer>
  )
}

ThePhotosGrid.defaultProps = {
  gridStart: 1
}

export default ThePhotosGrid
