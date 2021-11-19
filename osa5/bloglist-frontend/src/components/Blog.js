import React, { useState } from 'react'
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

const blogStateHandler = (setBlogFull,blogFull) => {
  setBlogFull(!blogFull)
}

const Blog = ({ blog,name }) => {

  /*console.log(blog)
  console.log(name)*/

  const [likes,setLikes] = useState(blog.likes)
  const [blogFull, setBlogFull] = useState(false)

  console.log(blogFull)
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
      {blogFull === false ?
        (
          <div>
            {blog.title} {blog.author}
            <div>
              <button onClick={ () => blogStateHandler(setBlogFull,blogFull)}>view</button>
            </div>
          </div>
        ) : (
          <div>
            {blog.title} {blog.author}
            <div>
              <button onClick={ () => blogStateHandler(setBlogFull,blogFull)}>close</button>
            </div>
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
          </div>
        )}
    </div>
  )
}

export default Blog