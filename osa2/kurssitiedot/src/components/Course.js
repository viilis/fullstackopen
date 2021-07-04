import React from 'react'

const Course = ({name,parts}) =>{
    return (
      <div>
        <Header course={name}/>
        <Content parts={parts}/>
        <Total parts={parts}/>
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

export default Course