import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import Phonebook from './services/Phonebook'

const App = () => {
  const [ newpersons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  useEffect(()=>{
    Phonebook.getAll()
    .then(init =>{setPersons(init)})
  },[])
  console.log(newpersons)

  const addName = (event) =>{
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const names = newpersons.map(person => person.name)

    if(!(names.find(name => name === personObject.name))){
      //Add button mechanics is here
      Phonebook.createPerson(personObject)
      setPersons(newpersons.concat(personObject))
      setNewName('')
      setNewNumber('')

    }else{
      alert(`${personObject.name} is already added to phonebook`)
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
      <Numbers persons={newpersons} newFilter={newFilter}/>
    </div>
  )

}

export default App