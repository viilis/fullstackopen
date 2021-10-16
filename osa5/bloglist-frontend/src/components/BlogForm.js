import React from 'react'
import Blog from '../components/Blog'
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

    }
}

const logOut = () => {
    window.localStorage.clear()
}

const BlogForm = ({name,setBlogs,setTitle,setAuthor,setUrl,title,author,url,blogs,username}) => {
    return (
    <div>
        <div>
            <h2>Blogs</h2>
            <p>Logged in as {name}</p>
            <button onClick={logOut}>Logout</button>
        </div>
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
        </div>
        <div>
            {blogs.map(blog =>
                <Blog key={blog.id} blog={blog} />
            )}
        </div>
    </div>)
}

export default BlogForm