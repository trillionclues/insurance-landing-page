import React from 'react'
import '../src/index.css'
import styled from 'styled-components'
import scrollreveal from 'scrollreveal'
import { Navbar } from '../src/Components/Navbar'
import { Hero } from '../src/Components/Hero'
import { Main } from './Components/Main'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
    </>
  )
}
