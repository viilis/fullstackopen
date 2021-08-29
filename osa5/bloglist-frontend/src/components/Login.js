import React from 'React'
import userLogin from '../services/loginService'

const Login = ({setUsername,setPassword,username,password})  => {

    const tryLogin = (event) =>{
        event.preventDefault()
        userLogin.Login()
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return(<div>
        <h2>Log in to application</h2>
        <form onSubmit={tryLogin}>
            <div>
                username: <input value={username} onChange={handleUsernameChange}/>
            </div>
            <div>
                password: <input value={password} onChange={handlePasswordChange}/>
            </div>
        </form>
    </div>)
}

export default { Login }