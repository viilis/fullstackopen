import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content text={part1} number={exercises1}/>
      <Content text={part2} number={exercises2}/>
      <Content text={part3} number={exercises3}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}
const Header = (props) =>{
  return(
    <>
    <h1>{props.course}</h1>
    </>
  )
}
const Content = (props) =>{
  return(
    <>
    <p>{props.text}: {props.number}</p>
    </>
  )
}
const Total = (props) =>{
  return(
    <>
    <p>Number of exercises {props.total}</p>
    </>
  )
}

export default App