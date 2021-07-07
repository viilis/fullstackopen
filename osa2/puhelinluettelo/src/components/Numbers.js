import React from 'react'
import Name from './Name'

const Numbers = ({persons,newFilter}) =>{
    return(
        <div>
            {(persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))).map(filteredperson => <Name person={filteredperson} key={filteredperson.name}/>)}
        </div>
    )
}

export default Numbers