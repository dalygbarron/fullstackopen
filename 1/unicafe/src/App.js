import { useState } from 'react'

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>
}

const Stat = ({name, amount}) => {
  return <tr><td>{name}</td><td>{amount}</td></tr>
}

const Stats = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total > 0) {
    return <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Stat name='good' amount={good} />
          <Stat name='neutral' amount={neutral} />
          <Stat name='bad' amount={bad} />
          <Stat name='All' amount={total} />
          <Stat name='Average' amount={(good - bad) / total} />
          <Stat name='Positive' amount={`${good / total * 100}%`} />
        </tbody>
      </table>
    </>
  }
  return <p>No feedback given</p>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const incrementer = (val, setter) => () => setter(val + 1)
  return <div>
    <h1>Give Feedback</h1>
    <Button onClick={incrementer(good, setGood)} text='good' />
    <Button onClick={incrementer(neutral, setNeutral)} text='neutral' />
    <Button onClick={incrementer(bad, setBad)} text='bad' />
    <Stats good={good} neutral={neutral} bad={bad} />
  </div>
}

export default App