import React from 'react'
import User from './components/User'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import State from './pages/State'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/state' element={<State />} />
    </Routes>
    <User name="deva" department="ML"/>
    </>
  )
}

export default App