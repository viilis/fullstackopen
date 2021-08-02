import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import Phonebook from './services/Phonebook'
import Notification from './components/Notification'
import ErrorNotification from './components/ErrorNotification'

const App = () => {
  const [ newPersons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')
  const [ newMessage, setNewMessage] = useState(null)
  const [ newError, setErrorMessage] = useState(null)

  useEffect(()=>{
    Phonebook.getAll()
    .then(init =>{setPersons(init)})
  },[])

  const addName = (event) =>{
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const names = newPersons.map(person => person.name)
    /*Logic for adding new number to the phonebook
    if persons name is not on the list*/
    if(!(names.find(name => name === personObject.name))){
      //"Add" button mechanics is here
      Phonebook.createPerson(personObject).then(res => {
        if(res[1]===200 && res[0] !== undefined){
          setPersons(newPersons.concat(personObject))
          setNewName('')
          setNewNumber('')
          setNewMessage(`Added ${personObject.name}`)
          Phonebook.getAll().then(init =>{setPersons(init)})
          // "Added"-notification timeout
          setTimeout( () => {
            setNewMessage(null)
          },3000)
          }
      })
      .catch(error => {
        setErrorMessage(`${error.response.data.error}`)
        Phonebook.getAll().then(init =>{setPersons(init)})
        setTimeout( () => {
          setErrorMessage(null)
        },3000)
      })

    }else{ //Logic for updateing number
      if(window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)){
        //finds the id from that person that we are trying to add again
        const id = newPersons.find(p => p.name === personObject.name).id
        Phonebook.update(id,personObject).then(updatedPerson => {
          setNewName('')
          setNewNumber('')
          setNewMessage(`Replaced ${personObject.name}'s number`)
          Phonebook.getAll().then(init =>{setPersons(init)})
          // "Replace"-notification timeout
          setTimeout( () => {
            setNewMessage(null)
          },3000)
        })
        .catch(error => {
          setErrorMessage(`${error.response.data.error}`)
          Phonebook.getAll().then(init =>{setPersons(init)})
          // "Error"-notification timeout
          setTimeout( () => {
            setErrorMessage(null)
          },3000)
        })
      }
    }
  }

  //handlers for input fields and Filter component
  const handleNewNameChange = (event) =>{
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) =>{
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Notification message={newMessage}></Notification>
        <ErrorNotification message={newError}></ErrorNotification>
        <Filter value={newFilter} onChange={handleFilterChange}/>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {/*badly designed and broken part of the App. Have to pass every state twice 
        (from the App component to the Number component and then to the Name component)
         to reach number deletation logic. Stupid but works*/}
        <Numbers newPersons={newPersons} newFilter={newFilter} removePerson={setPersons} notification={setNewMessage}/>
    </div>
  )
}

export default App