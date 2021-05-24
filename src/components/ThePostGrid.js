import React, { useEffect } from 'react'
import styled from 'styled-components'
import theme from '../theme-styles'
import LazyLoad from 'react-lazyload'
import { CSSTransition, TransitionGroup  } from 'react-transition-group'
import Masonry from 'react-masonry-css'
import { BsPencil } from 'react-icons/bs'

const PostGridContainer = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  @media screen and (min-width: 1024px) {
    padding: 1rem 392px 1rem 2rem;
  }
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

const PostGrid = styled.div`
  width: 100%;
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

const PostCard = styled.div`
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
  & .photo-card-body {
    margin-top: 1rem;
    & .title {
      font-weight: 600;
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }
    & .title {
      font-weight: 600;
    }
  }
  & .edit-post-button {
    border: none;
    color: ${theme.color.neutral_400};
    position: absolute;
    top: .5rem;
    right: .5rem;
    cursor: pointer;
    font-size: 1.25rem;
    background-color: transparent;
  }
`

const breakpoints = {
  default: 2,
  768: 2,
  640: 1
}


const ThePostGrid = ({ selectedPost, posts}) => {
  const editPost = (post) => {
    selectedPost(post)
  }

  return (
    <>
      <PostGridContainer>
        <PostGrid>
          <HeaderTitle>Posts Grid</HeaderTitle>
          <Masonry breakpointCols={breakpoints}
                   className="photo-masonry"
                   columnClassName="photo-masonry_column">
            {posts.map((item, index) => (
              <TransitionGroup key={index} className="photo-grid">
                <LazyLoad height={200} offset={10}>
                  <CSSTransition in={true}
                                 timeout={600}
                                 unmountOnExit
                                 classNames="photo-card"
                  >
                    <PostCard>
                      <button className="edit-post-button" onClick={()=> editPost(item)}>
                        <BsPencil />
                      </button>
                      <div className="photo-card-body">
                        <p className="title">{item.title}</p>
                        <p className="body">{item.body}</p>
                      </div>
                    </PostCard>
                  </CSSTransition>
                </LazyLoad>
              </TransitionGroup>
            ))}
          </Masonry>
        </PostGrid>
      </PostGridContainer>
    </>
  )
}

ThePostGrid.defaultProps = {
  gridStart: 1
}

export default ThePostGrid
