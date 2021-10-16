import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [url,setUrl] = useState('')
  //const [message, setMessage] = useState(null)

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
      {user === null ? (
      <LoginForm 
      username={username}
      password={password}
      setUser={setUser}
      setUsername={setUserName}
      setPassword={setPassword}
      />) : (
        <div>
          <BlogForm 
          name={user.name} 
          setBlogs={setBlogs} 
          setTitle={setTitle}
          setAuthor={setAuthor}
          setUrl={setUrl}
          title={title}
          author={author}
          url={url}
          blogs={blogs}
          username={user.username}/>
        </div>
      )}
    </div>
  )
}

export default App