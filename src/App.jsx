import React, { useEffect } from 'react'
import '../src/index.css'
import scrollreveal from 'scrollreveal'
import { Navbar } from '../src/Components/Navbar'
import { Hero } from '../src/Components/Hero'
import { Main } from './Components/Main'
import { Footer } from './Components/Footer'

export default function App() {
  useEffect(() => {
    const scroll = scrollreveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    })

    scroll.reveal(
      `
      #nav,
      #hero,
      #main,
      #footer
      `,
      {
        opacity: 0,
        interval: 300,
      }
    )
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </>
  )
}
