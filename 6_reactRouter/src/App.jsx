import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Foooter'

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
