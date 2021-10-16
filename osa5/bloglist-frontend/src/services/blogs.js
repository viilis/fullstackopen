import axios from 'axios'
const baseUrl = '/api/blogs'
let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}
const blogByUser = (username,blogdata) => {
    const blogs = blogdata.filter(blog => blog.users.username === username)
    return blogs
}

//-----------routes------------

const getAllByUser = async (username) => {
  const res = await axios.get(baseUrl)
  return blogByUser(username,res.data)
}

const postBlog = async (content) => {
  const config = {
    headers: {Authorization: token},
  }
  await axios.post(baseUrl,content,config)
}

export default { getAllByUser,setToken,postBlog }