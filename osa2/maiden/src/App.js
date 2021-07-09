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

}
// vittu mikä himmeli
const WorldDisplay = ({data,filterstate}) =>{
  if((data.filter(c => c.name.toUpperCase().includes(filterstate.toUpperCase()))).map(fc => fc.name).length>10){
    console.log('suurempi kuin 10')
    return(
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
  else if((data.filter(c => c.name.toUpperCase().includes(filterstate.toUpperCase()))).map(fc => fc.name).length<=10 && (data.filter(c => c.name.toUpperCase().includes(filterstate.toUpperCase()))).map(fc => fc.name).length>1){
    console.log('10-1')
    return(
      <div>
        {(data.filter(c => c.name.toUpperCase().includes(filterstate.toUpperCase()))).map(fc => fc.name).slice(0,9)}
      </div>
    )
  }
  else{
    return(
      <div>
        {(data.filter(c => c.name.toUpperCase().includes(filterstate.toUpperCase()))).map(fc => fc.name)}
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
