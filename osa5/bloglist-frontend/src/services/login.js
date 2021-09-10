import axios from 'axios';
const baseUrl = '/api/login';

const loginToUser = async (userdata) => {
  const res = await axios.post(baseUrl, userdata);
  return res.data;
};

export default { loginToUser };
