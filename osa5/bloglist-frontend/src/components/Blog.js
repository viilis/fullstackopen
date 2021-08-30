import React from 'react'
const Blog = (props) => {
  console.log('blogPage')

  const logOut = () =>{
    window.localStorage.clear()
  }

  const blogs = []

  return(
    <div>
      <button onClick={logOut}>Logout</button>
      <h2>Blogs</h2>
    </div>
  ) 
}

export default Blog