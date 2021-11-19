import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
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

  component.debug()

  expect(component.container).toHaveTextContent('title' && 'author')
})