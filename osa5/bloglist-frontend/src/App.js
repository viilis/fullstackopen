import React, { useState, useEffect, useRef } from 'react'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Blog from './components/Blog'
import Toggle from './components/Toggle'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

  useEffect( () => {
    const userdata = window.localStorage.getItem('userdata')
    if(userdata){
      const parsedUser = JSON.parse(userdata)
      setUser(parsedUser)
      blogService.setToken(parsedUser.token)
    }
  },[])

  useEffect(() => {
    if(user !== null){
      blogService.getAllByUser(user.username).then(blogs => setBlogs(blogs))
    }
  },[user])


  const LogOut = () => {
    window.localStorage.clear()
    location.reload()
  }

  const Ref = useRef()

  return (
    <div>
      {user === null ? (
        <div>
          <LoginForm setUser={setUser}/>
        </div> ) :
        (
          <div>
            <h2>Blogs</h2>
            <div>
              Logged in as {user.name}
              <button id="logout-button" onClick={LogOut}>Logout</button>
            </div>
            <Toggle buttonLabel="create new blogpost" hideButtonLabel="cancel" ref={Ref}>
              <BlogForm
                username={user.username}
                setBlogs={setBlogs}/>
            </Toggle>
            {blogs.map(blog =>
              <Blog key={blog.id} blog={blog} name={user.name} />
            )}
          </div>
        )}
    </div>
  )
}

export default App