import axios from 'axios'
const baseUrl = '/api/login'

const Login = async (userdata) => {
  const res = await axios.post(baseUrl,userdata)
  return res.data
}

export default { Login }