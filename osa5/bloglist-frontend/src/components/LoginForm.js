import React from "react";
import loginService from "../services/login";
import blogService from "../services/blogs"

const handleLogin = async (event,setPassword,setUserName,setUser,username,password) => {
    event.preventDefault()
    try{
        const user = await loginService.login({
            username, 
            password
        })
        window.localStorage.setItem('userdata',JSON.stringify(user))
        blogService.setToken(user.token)
        setUser(user)
        setPassword('')
        setUserName('')
    }catch(e){
        console.log(e)
    }
}

const LoginForm = ({ username,password,setUser,setUsername,setPassword}) => {

    return (
    <div>
        <h2>Login</h2>
        <form onSubmit={async (event) =>
            await handleLogin(
                event,
                setPassword,
                setUsername,
                setUser,
                username,
                password
            ) 
        }>
            <div>
                Username:
                <input 
                type="text"
                value={username} 
                onChange={({target})=>setUsername(target.value)}
                />
            </div>
            <div>
                Password:
                <input 
                type="password"
                value={password}
                onChange={({target})=>setPassword(target.value)}
                />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>)
}

export default LoginForm