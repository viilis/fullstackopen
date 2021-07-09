import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

const Search = (props) =>{

  const addSearch = () =>{
    
  }
  return(
    <div>
      <form onSubmit={}>
        search <input value={}/>
      </form>
    </div>
  )
}

const App = () => {

  const [newData,setNewData] = useState([])
  const [newFilter,setNewFilter] = useState('')

  const fetchData = () =>{
    axios.get('https://restcountries.eu/rest/v2/all').then(
      response => {
        setNewData(response.data)
      }
    )
  }
  useEffect(fetchData,[])
  console.log(newData)

  const handleSearchChange = (search) =>{
    
  }

  return (
    <div>

    </div>
  )
}

export default App;
