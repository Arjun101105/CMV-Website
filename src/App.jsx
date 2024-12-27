import { useState } from 'react'
import './App.css'
import { Navbar } from './Navbar'
import ImageCarousel from './Carousel'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/><br/>
    <Routes>
      <Route path='/' element={<ImageCarousel/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
