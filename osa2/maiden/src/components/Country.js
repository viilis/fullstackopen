const Country = ({name,capital,population,languages,flag}) =>{
    return(
      <div>
        <h1>{name}</h1>
        <p>capital {capital}</p>
        <p>population {population}</p>
        <h2>languages</h2>
        <ul>
          {languages.flat().map(l=><li key={l.name}>{l.name}</li>)}
        </ul>
        <img src={flag} width="120" heigth="120" alt="Country flag"/>
      </div>
    )
}
export default Country