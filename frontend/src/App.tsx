// Main App Imports
import { useState } from 'react'

// Components
import ToDoCreate from './components/ToDoCreate.tsx'
import ToDoList from './components/ToDoList.tsx'

// CSS
import './App.css'

function App() {
  return (
    <>
      <ToDoCreate/>
      <ToDoList/>
    </>
  )
}

export default App
