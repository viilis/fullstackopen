import React from 'react'
import Phonebook from '../services/Phonebook'

const Name = ({person,newPersons,setPersons}) =>{

  const handleDelete = () =>{
      if(window.confirm(`Delete ${person.name}?`)){
        Phonebook.deletePerson(person.id)
        setPersons(()=> newPersons.filter(p => person.id !== p.id))
      }
    }

    return(
        <div>
          {person.name} {person.number} <button onClick={handleDelete}>delete</button>
        </div>
      )
    }

export default Name