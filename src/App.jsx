import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./componets/Navbar/Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>New Run</h1>
    </>
  )
}

export default App