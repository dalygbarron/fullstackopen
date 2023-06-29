import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (<button onClick={onClick}>{text}</button>)
}

const Stat = ({name, amount}) => {
  return (<p>{name} {amount}</p>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const incrementer = (val, setter) => () => setter(val + 1)
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={incrementer(good, setGood)} text='good' />
      <Button onClick={incrementer(neutral, setNeutral)} text='neutral' />
      <Button onClick={incrementer(bad, setBad)} text='bad' />
      <h1>Statistics</h1>
      <Stat name='good' amount={good} />
      <Stat name='neutral' amount={neutral} />
      <Stat name='bad' amount={bad} />
    </div>
  )
}

export default App