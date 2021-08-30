import React from 'react'

const ErrorNotification = ({message}) =>{
    
    const errorNotification = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
      }

    if(message != null){
        return(
            <div style={errorNotification}>{message}</div>
        )
    }
    return null
}

export default ErrorNotification