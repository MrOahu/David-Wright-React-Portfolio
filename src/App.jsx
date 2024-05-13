import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Portfolio from './components/Portfolio'
function App() {
  const dave = "DAVID IS THE MAN"

  return (
    <>
     
        <About />
        <Portfolio />
        <h3>howdy</h3>
        <h4>bonjour</h4> 
        <h5>hola</h5> 
    </>
  )
}

export default App
