import axios from 'axios'
const baseUrl = '/api/login'

const Login = async (userdata) => {
  const req = axios.post(baseUrl,userdata)
  const res = await req
  return res.data
}

export default { Login }