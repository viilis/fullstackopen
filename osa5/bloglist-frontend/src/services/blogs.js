import axios from 'axios'
import {token, setToken} from '../App'
const baseUrl = '/api/blogs'

const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

export default { getAll }