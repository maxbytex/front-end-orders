import { useState } from 'react'
import './App.css'
import Register from './layouts/register'
import { Route, Routes } from 'react-router-dom'
import Login from './layouts/login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Register />} /> {/* default page */}
    </Routes>
      <Register />
    </>
  )
}

export default App
