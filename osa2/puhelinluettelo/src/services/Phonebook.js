import axios from "axios";
//for dev use 'http://localhost:3001/api/persons', for build change to only '/api/persons'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () =>{
    const request = axios.get(baseUrl)
    return(request.then(response => response.data))
}

const createPerson = newPerson =>{
    const request = axios.post(baseUrl,newPerson)
    return(request.then(response => [response.data,response.status]))
}

const update = (id,newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`,newPerson)
    return(request.then(response => response.data))
}

const deletePerson = (id) =>{
    const req = axios.delete(`${baseUrl}/${id}`)
    return(req.then(res=> res))
}

const Phonebook ={
    createPerson,
    getAll,
    update,
    deletePerson,
}

export default Phonebook