import React from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Secret from './pages/Secret'
import Forgotpage from './pages/Forgotpage.jsx'

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route exact path="/register" element={<Register />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/forgot" element={<Forgotpage />}></Route>
      <Route exact path="/" element={<Secret />}></Route>
      

    </Routes>
  </BrowserRouter>
}
