import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import theme from '../theme-styles'
import LazyLoad from 'react-lazyload'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Masonry from 'react-masonry-css'

const PhotoGridContainer = styled.div`
  grid-column: span ${props => props.gridSpan} / span ${props => props.gridSpan};
  grid-column-start: ${props => props.gridStart};
  padding: 1rem 2rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  & .photo-masonry {
    display: flex;
    margin-left: -32px;
    width: auto;
  }
  & .photo-masonry_column {
    padding-left: 32px;
    background-clip: padding-box;
  }
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

const PhotoCard = styled.div`
  position: relative;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: -8px -8px 16px 0 #FFFFFF, 8px 8px 16px 0 ${theme.color.neutral_300};
  grid-column: span 3 / span 3;
  z-index: 1;
  margin-bottom: 2rem;
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

const breakpoints = {
  default: 4,
  1024: 4,
  768: 3,
  640: 2
}


const ThePhotosGrid = ({ gridSpan, gridStart }) => {
  const [photos, setPhotos] = useState([])
  useEffect(()=> {
    async function fetchAPI () {
      const url = 'https://jsonplaceholder.typicode.com/photos'
      const response = await fetch(url)
      const data = await response.json()
      setPhotos(data)
    }

    fetchAPI()
  }, [])
  return (
    <>
      <PhotoGridContainer gridSpan={gridSpan} gridStart={gridStart}>
        <HeaderTitle>Photo Grid</HeaderTitle>
        <TransitionGroup className="photo-grid">
          <Masonry breakpointCols={breakpoints}
                   className="photo-masonry"
                   columnClassName="photo-masonry_column">
            {photos.map((item) => (
              <LazyLoad key={item.id} height={200} once  offset={100}>
                <CSSTransition in={true}
                               timeout={600}
                               classNames="photo-card"
                >
                    <PhotoCard>
                      <div className="photo-card-header">
                        <img src={item.url} alt=""/>
                      </div>
                      <div className="photo-card-body">
                        <p className="title">{item.title}</p>
                      </div>
                    </PhotoCard>
                </CSSTransition>
              </LazyLoad>
            ))}
          </Masonry>
        </TransitionGroup>
      </PhotoGridContainer>
    </>
  )
}

ThePhotosGrid.defaultProps = {
  gridStart: 1
}

export default ThePhotosGrid
