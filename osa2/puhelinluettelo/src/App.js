import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  const Name = ({person}) =>{
    return(
      <div>
        {person.name} {person.number}
      </div>
    )
  }

  const addName = (event) =>{
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const names = persons.map(person => person.name)

    if(!(names.find(name => name === personObject.name))){
      setPersons(persons.concat(personObject))
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
    console.log(newFilter)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with <input value={newFilter} onChange={handleFilterChange}/>
        </div>
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
      {(persons.filter(person => person.name.includes(newFilter))).map(filteredperson => <Name person={filteredperson} key={filteredperson.name}/>)}
    </div>
  )

}

export default App