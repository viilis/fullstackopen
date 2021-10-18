import React from 'react'
import Toggle from './Toggle'
import BlogService from '../services/blogs'

const Blog = ({blog,name}) => {

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
          likes:{blog.likes}
        </div>
        <div>
        {name}
        </div>
      </Toggle>
    </div>  
  )
}

export default Blog