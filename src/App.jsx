import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TodoApp } from './componentes/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoApp/>
  )
}

export default App
