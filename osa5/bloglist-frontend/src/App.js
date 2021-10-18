import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Blog from './components/Blog'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

  useEffect( () => {
    const userdata = window.localStorage.getItem('userdata')
    if(userdata){
      const parsedUser = JSON.parse(userdata)
      setUser(parsedUser)
    }
  },[])
  
 useEffect(() => {
   if(user !== null){
    async function fetch() {
      setBlogs(await blogService.getAllByUser(user.username))
      }
    fetch()
    }
   },[user])

   const logOut = () => {
    window.localStorage.clear()
}

  return (
    <div>
      {user === null ? ( <LoginForm setUser={setUser}/> ) : 
      (
        <div>
          <h2>Blogs</h2>
          <div>
              Logged in as {user.name} 
              <button onClick={logOut}>Logout</button>
          </div>
          <BlogForm 
          name={user.name}
          username={user.username}
          setBlogs={setBlogs}/>
          {blogs.map(blog =>
                <Blog key={blog.id} blog={blog} name={user.name} />
            )}
        </div>
      )}
    </div>
  )
}

export default App