import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameSubmit=(event)=>{
    event.preventDefault()
    setPersons(...persons,persons.push(event.target))
  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }

  const Person = ({name}) =>{
    return(
      <div>
        {name}
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNameSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(n => <Person name={n.name} key={n.name}/>)}
    </div>
  )

}

export default App