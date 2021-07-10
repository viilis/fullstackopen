import React from 'react'
import Country from './Country'

const WorldDisplay = ({list,fc}) =>{
    return(
        <div>
            {list.length === 1 ? <Country 
            name={fc.map(c=>c.name)} 
            capital={fc.map(c=>c.capital)}
            population={fc.map(c=>c.population)}
            languages={fc.map(c=>c.languages)}
            flag={fc.map(c=>c.flag)}/>: list}
        </div>
    )
  }
export default WorldDisplay