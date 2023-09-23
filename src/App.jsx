import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Partners from './Components/Partners'
import Residencies from './Components/Residencies'
import Value from './Components/Value'
import Contact from './Components/Contact'
import Footer from './components/Footer'
function App() {

  return (
    <>
     <NavBar/>
     <div className="content">
      <Hero/>
      <Partners/>
      <Residencies/>
      <Value/>
      <Contact/>
      <Footer/>
     </div>
    </>
  )
}

export default App
