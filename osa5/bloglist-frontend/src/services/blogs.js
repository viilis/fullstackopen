import axios from 'axios';
const baseUrl = '/api/blogs';

let token = null;

const setToken = () => {
  token = `bearer ${token}`;
  console.log('token setted');
};

const getAll = async () => {
  console.log(token);
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios.get(baseUrl, config);
  return res.data;
};

export default { getAll, setToken };
