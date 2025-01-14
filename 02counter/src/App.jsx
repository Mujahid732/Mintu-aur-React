import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);


  const addValue = () => {
    if (counter < 22) {
      counter = counter += 1;
      setCounter(counter)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>Counter Project</h1>
      <div className="container">
        <div className="counter">
          <h2>Count : <span>{counter}</span> </h2>
        </div>
        <div className="btn">
          <button
            onClick={addValue}
          >add</button>
          <button
            onClick={removeValue}
          >remove</button>
        </div>
      </div>

    </>
  )
}

export default App
