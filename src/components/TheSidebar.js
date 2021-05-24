import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import theme from '../theme-styles'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BsX } from 'react-icons/bs'

const Sidebar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 360px;
  padding: 2rem;
  z-index: 99;
  background-color: ${theme.color.neutral_100};
  @media screen and (min-width: 1024px) {
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
  }
`
const SidebarOverlay = styled.div`
  position: fixed;
  z-index: 98;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  @media screen and (min-width: 1024px) {
    display: none;
  }
  
`
const SidebarTitle = styled.p`
  font-size: 1rem;
  font-weight: 900;
  color: ${theme.color.neutral_500};
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
  & .close-sidenav {
    color: ${theme.color.neutral_400};
    font-size: 2rem;
    cursor: pointer;
    transition: all .3s;
    &:hover {
      color: ${theme.color.neutral_500}
    }
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
`
const Input = styled.div`
  border-radius: .5rem;
  padding: .5rem 1rem;
  box-shadow: inset 8px 8px 16px 0 ${theme.color.neutral_300};
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  margin-bottom: 1rem;
  & .input-label {
    font-size: .75rem;
    color: ${theme.color.neutral_400};
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: .25rem;
    display: block;
  }
  & input,
  & textarea {
    border: none;
    font-size: 1rem;
    background-color: ${theme.color.neutral_100};
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  & textarea {
    resize: none;
    font-family: 'Noto Sans JP', sans-serif;
  }
`
const Button = styled.button`
  border: none;
  background-color: ${theme.color.neutral_600};
  color: #FFFFFF;
  padding: 1rem;
  text-align: center;
  width: 100%;
  border-radius: .5rem;
  text-transform: uppercase;
  font-size: .75rem;
  letter-spacing: 2px;
  font-weight: 700;
  cursor: pointer;
  transition: all .3s;
  margin-bottom: .5rem;
  &:hover {
    background-color: ${theme.color.neutral_700};
  }
`
const DeletePost = styled.p`
  color: #CB3527;
  text-transform: uppercase;
  text-align: center;
  display: block;
  cursor: pointer;
  font-weight: 700;
  font-size: .875rem;
  &:hover {
    text-decoration: underline;
  }
`
const Cancel = styled.p`
  color: ${theme.color.neutral_400};
  text-transform: uppercase;
  text-align: center;
  display: block;
  cursor: pointer;
  font-weight: 700;
  font-size: .875rem;
  margin-bottom: .5rem;
  &:hover {
    text-decoration: underline;
  }
`

const TheSidebar = ({ addPost, selectedPost, isEdit, cancelEdit, deletePost, updatePost, close }) => {
  const [title, setTitle] = useState(selectedPost.title)
  const [body, setBody] = useState(selectedPost.body)

  async function onSubmitPost (event) {
    event.preventDefault()
    if (title !== '' && body !== '') {
      if (isEdit === false) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {title, body})
        addPost(response.data)
      } else {
        const response = await axios.put('https://jsonplaceholder.typicode.com/posts/'+selectedPost.id, {...selectedPost, title, body})
        updatePost(response.data)
      }
      toast(isEdit ? 'Post updated.' : 'Post successfully added!', {
        position: "bottom-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        progressClassName: 'toast-progress-bar-success'
      })
      setTitle('')
      setBody('')
    } else {
      toast('All fields are required!', {
        position: "bottom-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        progressClassName: 'toast-progress-bar-error'
      })
    }
  }

  useEffect(()=> {
    setTitle(selectedPost.title)
    setBody(selectedPost.body)
  }, [selectedPost.title, selectedPost.body])

  return (
    <div className="sidebar">
      <SidebarOverlay className="sidebar-overlay" />
      <Sidebar className="sidebar-wrapper">
        <SidebarTitle>
          Manage Post
          <BsX className="close-sidenav" onClick={close}/>
        </SidebarTitle>
        <form action="" onSubmit={(event)=> onSubmitPost(event)}>
          <Input>
            <label htmlFor="post-title-input" className="input-label">Title</label>
            <input type="text" id="post-title-input" value={title} onChange={(event)=> setTitle(event.target.value)}/>
          </Input>
          <Input>
            <label htmlFor="post-body-input" className="input-label">Body</label>
            <textarea rows="10" id="post-body-input" value={body} onChange={(event)=> setBody(event.target.value)}/>
          </Input>
          <Button type="submit">Save changes</Button>
          {isEdit && (
            <>
              <Cancel onClick={()=> cancelEdit()}>Cancel</Cancel>
              <DeletePost onClick={deletePost}>Delete Post</DeletePost>
            </>
          )}
        </form>
      </Sidebar>
    </div>
  )
}

export default TheSidebar
