import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import Phonebook from './services/Phonebook'

const App = () => {
  const [ newPersons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')

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
    //if persons name is not on the list
    if(!(names.find(name => name === personObject.name))){
      //"Add" button mechanics is here
      Phonebook.createPerson(personObject)
      setPersons(newPersons.concat(personObject))
      setNewName('')
      setNewNumber('')
      Phonebook.getAll().then(init =>{setPersons(init)})
    }else{
      if(window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)){
        setNewName('')
        setNewNumber('')
      }
    }
  }

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
      <Numbers newPersons={newPersons} newFilter={newFilter} removePerson={setPersons}/>
    </div>
  )
}

export default App