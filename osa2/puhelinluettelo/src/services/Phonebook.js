import axios from "axios";

const baseUrl = '/api/persons'

const getAll = () =>{
    const request = axios.get(baseUrl)
    return(request.then(response => response.data))
}

const createPerson = newPerson =>{
    const request = axios.post(baseUrl,newPerson)
    return(request.then(response => response.data))
}

const update = (id,newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`,newPerson)
    return(request.then(response => response.data))
}

const deletePerson = (id) =>{
    axios.delete(`${baseUrl}/${id}`)
}

const Phonebook ={
    createPerson,
    getAll,
    update,
    deletePerson,
}

export default Phonebook