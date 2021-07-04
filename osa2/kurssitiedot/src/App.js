import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course}/>
    </div>
  )
}
const Course = ({course}) =>{
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = ({parts}) =>{
  return(
    <div>
      {parts.map(p => <Part name={p.name} exercises={p.exercises} key={p.id}/>)}
    </div>
  )
}

const Part = ({name,exercises}) =>{
  return(
    <>
      <p>{name} {exercises}</p>
    </>
  )
}

const Total = ({parts}) =>{
  return(
    <div>
      <b>total of {parts.reduce((acc,current) => { return acc + current.exercises},0)} exercises</b>
    </div>
  )
}

export default App