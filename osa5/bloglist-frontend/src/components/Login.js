import React from 'react'
import userLogin from '../services/logins'

const Login = ({setUsername,setPassword,username,password,setNotification,setErrorNotification})  => {

    console.log('loginPage')

    const notificationHandler = (message,setter) => {
        setter(message)
        setTimeout( () => {
            setter(null)
        },3000)
    }

    const tryLogin = async (event) => {
        try{
            event.preventDefault()
            const userdata = await userLogin.Login({username: `${username}`,password:`${password}`})
            window.localStorage.setItem('username', userdata.username)
            window.localStorage.setItem('name', userdata.name)
            window.localStorage.setItem('token', userdata.token)
            setUsername('')
            setPassword('')
            notificationHandler(`Successfully login as ${userdata.username}`,setNotification)
        }catch(e){
            console.log(e)
            notificationHandler('Error occured when logging in',setErrorNotification)
        }
    }

    return(<div>
        <h2>Log in to application</h2>
        <form onSubmit={tryLogin}>
            <div>
                username: <input value={username} onChange={({target}) => setUsername(target.value)}/>
            </div>
            <div>
                password: <input type='password' value={password} onChange={({target}) => setPassword(target.value)}/>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>)
}

export default Login