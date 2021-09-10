import React, { useState, useEffect } from 'react';
import Blog from './components/Blog';
import Login from './components/Login';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errormessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    console.log('effect');
    setUser(null);
    setBlogs(null);
  }, []);

  if (user === null) {
    return (
      <div>
        <Login
          setUsername={setUsername}
          setPassword={setPassword}
          setUser={setUser}
          setErrorMessage={setErrorMessage}
          setMessage={setMessage}
          username={username}
          password={password}
        />
      </div>
    );
  } else {
    return <div></div>;
  } /* else {
    return (
      <div>
        <h2>blogs</h2>
        <Blog setBlogs={setBlogs} />
      </div>
    );
  }*/
};

export default App;
