import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'

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

  return (
    <div>
      {user === null ? ( <LoginForm setUser={setUser}/> ) : 
      (
        <div>
          <BlogForm 
          name={user.name} 
          blogs={blogs}
          username={user.username}
          setBlogs={setBlogs}/>
        </div>
      )}
    </div>
  )
}

export default App