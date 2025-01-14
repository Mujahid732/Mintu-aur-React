import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './component/Card'


function App() {
  const [count, setCount] = useState(0)
  let username = "Mujahid Alam"
  let email = "alam539@gmail.com"

  let username1 = "Mintu Babu"
  let email1 = "babu539@gmail.com"

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl' >tailwind test</h1>
     <Card username={username} email = {email}  btnText = "view profile" />
     <Card username={username1} email = {email1} btnText = "view profile" />

    </>
  )
}

export default App
