import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Header from './components/Header'
import AuthProvider from './context/AuthContext'

function App(){

  return (
  
      <AuthProvider>
        <div className='flex flex-col items-center w-full bg-background min-h-dvh'>
        <Header />
          <div className='flex justify-center w-full md:w-2/3 p-10 '>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          </div>
      </div>
      </AuthProvider>
    
  )
}

export default App
