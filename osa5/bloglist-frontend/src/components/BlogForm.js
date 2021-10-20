import React,{useState} from 'react'
import blogService from '../services/blogs'

const handleBlogs = async (event,setBlogs,setTitle,setAuthor,setUrl,title,author,url,username) => {
    try{
        event.preventDefault()
        const content = {
            title: title,
            author: author,
            url: url
        }
        await blogService.postBlog(content)
        setBlogs(await blogService.getAllByUser(username))
        setTitle('')
        setAuthor('')
        setUrl('')
        
    }catch(e){
        console.log(e)
    }
}

const BlogForm = ({username,setBlogs}) => {

    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [url,setUrl] = useState('')

    return (
    <div>
        <h2>Create new </h2>
            <form onSubmit={(event) =>
                handleBlogs(
                        event,
                        setBlogs,
                        setTitle,
                        setAuthor,
                        setUrl,
                        title,
                        author,
                        url,
                        username
                    )
                }>
                <div>
                    title:
                    <input 
                    type="text"
                    value={title}
                    onChange={({target}) => {setTitle(target.value)}}
                    />
                </div>
                <div>
                    author:
                    <input 
                    type="text"
                    value={author}
                    onChange={({target}) => {setAuthor(target.value)}}
                    />
                </div>
                <div>
                    url:
                    <input 
                    type="text"
                    value={url}
                    onChange={({target}) => {setUrl(target.value)}}
                    />
                </div>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
    </div>)
}

export default BlogForm