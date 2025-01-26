import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='p-4 rounded-lg bg-gray-700 text-3xl text-white' >learning redux toolkit in react-dom</h1>
      <AddTodo />
      <Todos />
    
    </>
  )
}

export default App
