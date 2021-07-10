import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import WorldDisplay from './components/WorldDisplay'
import Search from './components/Search'

const App = () => {

  const [newData,setNewData] = useState([])
  const [newFilter,setNewFilter] = useState('')

  const axiosData = () =>{
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(
      response => {
        setNewData(response.data)
      }
    )
  }
  useEffect(axiosData,[])

  const handleFilterChange = (event) => setNewFilter(event.target.value)

  const filteredCountires = (newData.filter(c => c.name.toUpperCase().includes(newFilter.toUpperCase())))
  const country = filteredCountires.map( c => <li key={c.name}> {c.name} <button onClick={() => setNewFilter(c.name)}>show</button></li>)

  return (
    <div>
      <Search value={newFilter} onChange={handleFilterChange}/>
      {country.length > 10 ? <p>Too many matches</p> : <WorldDisplay list={country} fc={filteredCountires}/>}
    </div>
  )
}

export default App;
