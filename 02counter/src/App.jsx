
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  
  const [counter,setCounter] = useState(0);

  const addValue = () =>{
    //if(counter < 16){
      setCounter(counter + 1);
   // }
  }

  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Counter:{counter}</h1>
      <button onClick={addValue} disabled={counter >= 16}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
