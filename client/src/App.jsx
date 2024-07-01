import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home, Auth, Dashboard } from './pages'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
