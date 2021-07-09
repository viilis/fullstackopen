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

const WorldDisplay = ({data,filterstate}) =>{
  return(
    <div>
      {(data.filter(c => c.name.toUpperCase().includes(filterstate.toUpperCase()))).map(fc => fc.name)}
    </div>
  )
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
