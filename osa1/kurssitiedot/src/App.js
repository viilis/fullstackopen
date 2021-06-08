import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total total={course.parts}/>
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
const Content = (props) =>{
  return(
    <div>
      <Part content={props.parts[0]}/>
      <Part content={props.parts[1]}/>
      <Part content={props.parts[2]}/>
    </div>
  )
}
const Total = (props) =>{
  let total = 0;
  props.total.forEach(element => {
    total = total + element.exercises
  })
  return(
    <div>
    <p>Number of exercises {total}</p>
    </div>
  )
}
const Part = (props) =>{
  return(
    <>
      <p>{props.content.name} {props.content.exercises}</p>
    </>
  )
}

export default App