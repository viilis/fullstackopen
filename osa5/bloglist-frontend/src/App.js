import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import ErrorNotification from './components/ErrorNotification'
import Login from './components/Login'
import Notification from './components/Notification'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [notification, setNotification] = useState(null)
  const [errorNotification, setErrorNotification] = useState(null)

  console.log(notification)
  console.log(errorNotification)

  useEffect( () => {
    window.localStorage.clear()
  }, [])

  return (
    <div>
      <Notification message={notification}/>
      <ErrorNotification message={errorNotification}/>
      {window.localStorage.getItem('token') === null && <Login setUsername={setUsername} setPassword={setPassword} username={username} password={password} setNotification={setNotification} setErrorNotification={setErrorNotification}/>}
      {window.localStorage.getItem('token') !== null && <Blog/>}
    </div>
  )
}

export default App