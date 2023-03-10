import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Err404 from './pages/err404/err404'

function App() {

  return (
    <BrowserRouter> 
          <Routes>

                <Route path='/' index element={<Home />}/>

                <Route path='*' element={<Err404 />}/>

          </Routes>
    </BrowserRouter>
  )
}

export default App
