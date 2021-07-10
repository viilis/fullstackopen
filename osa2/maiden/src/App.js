import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

//basic responsive searchbar
const Search = ({value,onChange}) =>{
  return(
    <div>
        search <input value={value} onChange={onChange}/>
    </div>
  )
}
/*Gets specific countries data parsed. Languages is objects inside of array inside of other array, so
 it needs to be flatten and mapped for building list*/
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
/*list gets sliced part of previously filtered countries. every*/
const SmallListOfCountries = ({list}) =>{
  console.log(list)
  const handleButtonPress = (country) =>{
    
  }
  return(
    <div>
      {list.map(c=> <li key={c.name}>{c.name} <button onClick={handleButtonPress()}>show</button> </li>)}
    </div>
  )
}
/* Tässä tarkastellaan kuinka monta tulost filtteriä 
käyttäen tulee ja sen mukaan valitaan mitä renderöidään.
tuo data.filter himmeli tosiaan palauttaa pituuden siitä listasta jossa on kaikki filtterillä löydetyt maat*/
const WorldDisplay = ({data,filterstate}) =>{
  const countries = (data.filter(c => c.name.toUpperCase().includes(filterstate.toUpperCase())))
  if(countries.length>10){
    return(
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
  else if(countries.length<=10 && countries.length>1){
    return <SmallListOfCountries list={countries.slice(0,9)}/>
  }
  else if(countries.length===0){
    return(
      <div>
        nothing found
      </div>
    )
  }
  /*tätä käytetään kun löytyy vain yksi oikea, tällöin renderöinti annetaan Country 
  komponentille koska tarvitaan laajempaa tietoa maasta*/
  else{
        return(
          <div>
            <Country 
            name={countries.map(c=>c.name)} 
            capital={countries.map(c=>c.capital)} 
            population={countries.map(c=>c.population)} 
            languages={countries.map(c=>c.languages)} 
            flag={countries.map(c=>c.flag)}
            />
          </div>
        )
  }
}

const App = () => {

  const [newData,setNewData] = useState([])
  const [newFilter,setNewFilter] = useState('')

  //axios data fetch from restcountires.eu
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
//Searchbar and other part of program
  return (
    <div>
      <Search value={newFilter} onChange={handleFilterChange}/>
      <WorldDisplay data={newData} filterstate={newFilter}/>
    </div>
  )
}

export default App;
