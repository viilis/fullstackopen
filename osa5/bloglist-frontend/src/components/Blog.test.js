import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('testing blog component, most contain atleast title and author', () => {
  const blog = {
    title: 'title',
    author: 'author'
  }

  const name = 'name'

  const component = render(
    <Blog blog={blog} name={name}/>
  )

  expect(component.container).toHaveTextContent('title' && 'author')
})

test('view button test', async () => {

  const blog = {
    title: 'title',
    author: 'author'
  }

  const name = 'name'

  const component = render(
    <Blog blog={blog} name={name}/>
  )

  const button = component.getByText('view')
  fireEvent.click(button)

  const url = component.container.querySelector('.url')

  expect(component.container).toHaveTextContent('likes')
  expect(url).toBeDefined()
})

test('like button does counting properly', async () => {

  const blog = {
    title: 'title',
    author: 'author',
    likes: 0
  }

  const name = 'name'

  const component = render(
    <Blog blog={blog} name={name}/>
  )

  const button = component.getByText('view')
  fireEvent.click(button)

  const likeclass = component.container.querySelector('.likeclass')

  const likebutton = component.getByText('Like')
  fireEvent.click(likebutton)
  fireEvent.click(likebutton)

  component.debug()

  expect(likeclass).toHaveTextContent('likes:2')

})