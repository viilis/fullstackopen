import React from 'react'
import Name from './Name'

const Numbers = ({newPersons,newFilter,removePerson}) =>{
    return(
        <div>
            {(newPersons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))).map(filteredperson =>  <Name person={filteredperson} key={filteredperson.name} newPersons={newPersons} setPersons={removePerson} />)}
        </div>
    )
}

export default Numbers