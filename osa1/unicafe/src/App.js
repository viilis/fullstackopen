import React, { useState } from 'react'

//1.10 tehty

const Button = (props) =>{
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const StatisticLine = ({text,value}) =>{
  return(
    <tr>
      <td>
      {text} {value}
      </td>
    </tr>
  )
} 

const Statistics = ({good,bad,neutral}) => {
  const all = good + bad + neutral;
  const averge = (good + (bad*-1) + (neutral*0))/all;
  const positive = good / all *100 + ' %';

  if(all === 0){
    return(
      <h2>
        No feedback given
      </h2>
    )
  }

  return(
    <table>
      <tbody>
        <StatisticLine text='good' value={good}></StatisticLine>
        <StatisticLine text='bad' value={bad}></StatisticLine>
        <StatisticLine text='neutral' value={neutral}></StatisticLine>
        <StatisticLine text='all' value={all}></StatisticLine>
        <StatisticLine text='average' value={averge}></StatisticLine>
        <StatisticLine text='positive' value={positive}></StatisticLine>
      </tbody>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleClick={() => setGood(good + 1)}/>
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)}/>
      <Button text='bad' handleClick={() => setBad(bad + 1)}/>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  )
}

export default App