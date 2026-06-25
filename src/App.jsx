import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Header from './components/Header'
import AuthProvider from './context/AuthContext'
import ProductDetails from './pages/ProductDetails'
import CartProvider from './context/CartContext'

function App(){

  return (
  
      <AuthProvider>
        <CartProvider>
          <div className='flex flex-col items-center w-full bg-background min-h-dvh'>
        <Header />
          <div className='flex justify-center w-full md:w-2/3 p-10 '>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/auth/:authType' element={<Auth />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          </div>
      </div>
        </CartProvider>
      </AuthProvider>
    
  )
}

export default App
