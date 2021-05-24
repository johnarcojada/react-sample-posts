import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import GlobalStyle from '../global-styles'
import theme from '../theme-styles'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BsPlus } from 'react-icons/bs'
import { CSSTransition } from 'react-transition-group'

import TheSidebar from './TheSidebar'
import ThePostGrid from './ThePostGrid'

const Layout = styled.div`
 height: 100%;
`

const Fab = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background-color: ${theme.color.neutral_600};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  position: fixed;
  z-index: 9;
  bottom: 2rem;
  right: 2rem;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .6)
`

function App() {

  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState({title: '', body: ''})
  const [isActive, setIsActive] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const sidebar = () => {
    if(window.matchMedia('(max-width: 1024px)').matches) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  useEffect(() => {
    sidebar()
    window.addEventListener('resize', sidebar)

    async function fetchAPI () {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      const response = await axios.get(url)
      setPosts(response.data)
    }

    fetchAPI()
  }, [])

  const pushData = (post) => {
    post.id = posts.reduce((a, c) => a.id > c.id ? a : c).id + 1
    setPosts((data)=> [post, ...data] )
  }

  const cancelEdit = () => {
    setIsEdit(false)
    setSelectedPost({title: '', body: ''})
  }

  const deletePost = () => {
    const filteredPost = posts.filter(data => data.id !== selectedPost.id)
    setPosts(filteredPost)
    cancelEdit()
    toast('Post deleted!', {
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      progressClassName: 'toast-progress-bar-success'
    })
    if(window.matchMedia('(max-width: 1024px)').matches) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  const updatePost = (post) => {
    const updatedPosts = posts.map(data => data.id === post.id ? post : data)
    setPosts(updatedPosts)
    setIsEdit(false)
  }

  return (
    <>
      <ToastContainer />
      <Layout>
        <ThePostGrid posts={posts} selectedPost={(post)=> {
          setSelectedPost(post)
          setIsEdit(true)
        }}/>
        {!isActive && (
          <Fab onClick={()=> setIsActive(true)}>
            <BsPlus />
          </Fab>
        )}
        <CSSTransition in={isActive || isEdit}
                       timeout={300}
                       classNames="animate"
                       unmountOnExit
                       onEnter={()=> setIsActive(true)}
                       onExit={()=> [setIsActive(false), setIsEdit(false)]}
        >
          <TheSidebar addPost={(e) => pushData(e)}
                      selectedPost={selectedPost}
                      isEdit={isEdit} cancelEdit={()=> cancelEdit()}
                      deletePost={()=> deletePost()}
                      updatePost={(post)=> updatePost(post)}
                      close={()=> [setIsActive(false), setIsEdit(false)]}
          />
        </CSSTransition>
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default App;
