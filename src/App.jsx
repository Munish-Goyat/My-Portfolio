import { React, useEffect, useState } from 'react'
import AOS from 'aos'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import 'aos/dist/aos.css'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <>
      <main className='bg-gray-950'>
        <Hero />
        <About /> 
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
