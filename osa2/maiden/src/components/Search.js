import React from 'react'
//basic responsive searchbar
const Search = ({value,onChange}) =>{
    return(
      <div>
          find countries <input value={value} onChange={onChange}/>
      </div>
    )
}
export default Search