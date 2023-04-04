import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Menue from './components/Navbar/Menue'
import Navabr from './components/Navbar/Navabr'
import Seaction from './components/seaction/Seaction'

function App() {
  return (
    <div className='container border'>
      <Navabr />
      <Header/>
      <Seaction/>
      <Footer/>
    </div>
  )
}

export default App