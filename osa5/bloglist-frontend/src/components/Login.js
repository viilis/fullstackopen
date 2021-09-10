import React from 'react';
import loginService from '../services/login';
import BlogService from '../services/blogs';

const Login = ({
  setUsername,
  setPassword,
  setUser,
  setErrorMessage,
  setMessage,
  username,
  password,
}) => {
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.loginToUser({
        username: username,
        password: password,
      });
      console.log(user);
      setUser(user);
      BlogService.setToken(user.token);
      setPassword('');
      setUsername('');
      setMessage(`Successfully loginned to ${user.username}`);
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } catch (e) {
      console.log(e);
      setErrorMessage(`Errormessage: ${e}`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  return (
    <div>
      <h2>Log in to application</h2>
      <form onSubmit={loginHandler}>
        <div>
          username:<input value={username} onChange={usernameHandler}></input>
        </div>
        <div>
          password:
          <input
            value={password}
            type="password"
            onChange={passwordHandler}
          ></input>
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
