import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  // let counter = 5;

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  }

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  }

  return (
    <>
      <h1>CHAI  aur React</h1>
      <h2>COUNTER VALUE: {counter}</h2>
      <button
      onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Descrease value</button>
    </>
  )
}

export default App
