import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const Name = ({person}) =>{
    return(
      <div>
        {person.name}
      </div>
    )
  }

  const addName = (event) =>{
    event.preventDefault()
    const personObject = {
      name: newName
    }

    const names = persons.map(p => p.name)

    if(!(names.find(name => name === personObject.name))){ //miksei toimi
      setPersons(persons.concat(personObject))
      setNewName('')
    }else{
      alert(`${personObject.name} is already added to phonebook`)
    }
  }

  const handleNewNameChange = (event) =>{
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p => <Name person={p} key={p.name}/>)}
    </div>
  )

}

export default App