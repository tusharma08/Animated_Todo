import React from 'react'
import Background from "./components/Background"
import Front from './components/Front'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-800'>
      <Background />
      <Front />
    </div>
  )
}

export default App