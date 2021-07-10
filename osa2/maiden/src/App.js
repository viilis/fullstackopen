import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

const Search = ({value,onChange}) =>{
  return(
    <div>
        search <input value={value} onChange={onChange}/>
    </div>
  )
}
const Country = ({name,capital,population,languages,flag}) =>{
  return(
    <div>
      <h1>{name}</h1>
      <div>capital {capital}</div>
      <div>population {population}</div>
      <h2>languages</h2>
      <ul>
        {languages.flat().map(l=><li key={l.name}>{l.name}</li>)}
      </ul>
      <img src={flag} width="120" heigth="120" alt="Country flag"/>
    </div>
  )

}
// vittu mikä himmeli
const WorldDisplay = ({data,filterstate}) =>{
  if((data.filter(c => c.name.toUpperCase().includes(filterstate.toUpperCase()))).map(fc => fc.name).length>10){
    return(
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
  else if((data.filter(c => c.name.toUpperCase().includes(filterstate.toUpperCase()))).map(fc => fc.name).length<=10 && (data.filter(c => c.name.toUpperCase().includes(filterstate.toUpperCase()))).map(fc => fc.name).length>1){
    return(
      <div>
        {(data.filter(c => c.name.toUpperCase().includes(filterstate.toUpperCase()))).map(fc => fc.name).slice(0,9)}
      </div>
    )
  }
  else if((data.filter(c => c.name.toUpperCase().includes(filterstate.toUpperCase()))).map(fc => fc.name).length===0){
    return(
      <div>
        nothing found
      </div>
    )
  }
  else{
        const country= data.filter(c => c.name.toUpperCase().includes(filterstate.toUpperCase()))
        return(
          <div>
            <Country name={country.map(c=>c.name)} 
            capital={country.map(c=>c.capital)} 
            population={country.map(c=>c.population)} 
            languages={country.map(c=>c.languages)} 
            flag={country.map(c=>c.flag)}/>
          </div>
        )
  }
}

const App = () => {

  const [newData,setNewData] = useState([])
  const [newFilter,setNewFilter] = useState('')

  const axiosData = () =>{
    axios.get('https://restcountries.eu/rest/v2/all').then(
      response => {
        setNewData(response.data)
      }
    )
  }
  useEffect(axiosData,[])

  const handleFilterChange = (event) =>{
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <Search value={newFilter} onChange={handleFilterChange}/>
      <WorldDisplay data={newData} filterstate={newFilter}/>
    </div>
  )
}

export default App;
