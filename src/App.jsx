import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import { div } from 'framer-motion/client'

function App() {
  return (
  <div className='bg-stone-900 grid py-4 min-h-screen'>
  <Todo/>
   </div>
  )
}

export default App

