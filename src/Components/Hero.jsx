import React from 'react'
import styled from 'styled-components'
import patternRight from '../assets/bg-pattern-intro-right-desktop.svg'
import patetrnLeft from '../assets/bg-pattern-intro-left-desktop.svg'
import heroImg from '../assets/image-intro-desktop.jpg'

export const Hero = () => {
  return (
    <HeroSection>
      <div className='container'>
        <div className='hero-line'></div>
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button>View Plans</button>
      </div>
      <img className='avatar' src={heroImg} alt='Image intro' />
      <img className='image-intro' src={patternRight} alt='Pattern right' />
      <img className='image-outro' src={patetrnLeft} alt='Pattern left' />
    </HeroSection>
  )
}

const HeroSection = styled.div`
  display: flex;
  padding: 3.5rem 0;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(256, 26%, 20%);
  position: relative;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.3rem;
    padding: 0 9rem;

    .hero-line {
      padding: 1px 3.5rem;
      background-color: hsl(273, 4%, 51%);
    }

    h1 {
      font-family: 'DM Serif Display', serif;
      font-size: 3rem;
      padding-right: 40vw;
      color: hsl(0, 0%, 98%);
      /* letter-spacing: -3.3px; */
      word-spacing: none;
      font-weight: 400;
      line-height: 2.8rem;
      padding-top: 1rem;
    }

    p {
      padding-top: 0.5rem;
      color: hsl(273, 4%, 51%);
      /* opacity: 0.7; */
      line-height: 1.2rem;
      /* font-weight: 600; */
      font-size: 1rem;
      padding-right: 35vw;
      font-family: 'Karla', sans-serif;
    }

    button {
      padding: 0.4rem 0.6rem;
      background: transparent;
      border: 2px solid hsl(273, 4%, 51%);
      color: hsl(273, 4%, 51%);
      text-transform: uppercase;
      opacity: 1;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      border-radius: 3px;
      &:hover {
        color: hsl(256, 26%, 20%);
        background-color: white;
        border: none;
        padding: 0.5rem 0.7rem;
        font-weight: 600;
      }
    }
  }

  .avatar {
    position: absolute;
    left: 63%;
    top: 3rem;
    height: 27rem;
  }

  .image-intro {
    position: absolute;
    top: -2%;
    left: 79.7%;
    height: 23rem;
    z-index: 3;
  }

  .image-outro {
    height: 22rem;
    position: absolute;
    right: 90%;
    top: 80%;
  }
`
