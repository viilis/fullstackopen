import React from 'react'

const Notification = ({message}) =>{

    const addedNotification = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
      }

    if(message != null){
        return(
            <div style={addedNotification}>{message}</div>
        )
    }
    return null
}

export default Notification