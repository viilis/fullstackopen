import React, { useState } from 'react'
import Toggle from './Toggle'
import BlogService from '../services/blogs'

const deleteHandler = async (blog) => {
  try{
  await BlogService.deleteBlog(blog.id)
  }catch(e){
    console.log(e)
  }
}

const likeHandler = async (setLikes,likes,blog) => {
  setLikes(likes+1)
  const content = {
    user:blog.users.id,
    likes:likes+1,
    author:blog.author,
    title:blog.title,
    url:blog.url
  }
  await BlogService.giveLike(content,blog.id)
}

const Blog = ({blog,name}) => {

  const [likes,setLikes] = useState(blog.likes)

  const blogStyle = {
    paddingTop:10,
    paddingLeft:5,
    border:'solid',
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5
  }

  return(
    <div style={blogStyle}>
      {blog.title} {blog.author}
      <Toggle buttonLabel="view" hideButtonLabel="hide">
        <div>
          {blog.url}
        </div>
        <div>
          likes:{likes}
          <button onClick={ () => likeHandler(setLikes,likes,blog)}> Like </button>
        </div>
        <div>
        {name}
        </div>
        <button onClick={() => deleteHandler(blog)}>delete</button>
      </Toggle>
    </div>  
  )
}

export default Blog