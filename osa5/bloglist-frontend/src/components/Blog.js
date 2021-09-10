import React from 'react';
import BlogService from '../services/blogs';

const Blog = async ({ setBlogs }) => {
  const allBlogs = await BlogService.getAll();
  console.log(allBlogs);
  return <div>blogs</div>;
};
export default Blog;
