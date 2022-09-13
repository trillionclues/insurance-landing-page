import React from 'react'
import styled from 'styled-components'
import processIcon from '../assets/icon-snappy-process.svg'
import priceIcon from '../assets/icon-affordable-prices.svg'
import peopleIcon from '../assets/icon-people-first.svg'
import howWe from '../assets/bg-pattern-how-we-work-desktop.svg'

export const Main = () => {
  return (
    <MainSection id='main'>
      <div className='title'>
        <div className='hero-line'></div>
        <h2>We're Different</h2>
      </div>
      <div className='cycle'>
        <div className='items'>
          <img src={processIcon} alt='' />
          <div className='info'>
            <h3>Snappy Process</h3>
            <p>
              Our application process can be completed in minutes, not hours.
              Don't get stuck filling in tedius forms.
            </p>
          </div>
        </div>

        <div className='items'>
          <img src={priceIcon} alt='' />
          <div className='info'>
            <h3>Affordable Prices</h3>
            <p>
              We don't want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>
        </div>

        <div className='items'>
          <img src={peopleIcon} alt='' />
          <div className='info'>
            <h3>People First</h3>
            <p>
              Our plans aren't full of conditions and clauses to prevent
              payouts. We make sure you're covered when you need it.
            </p>
          </div>
        </div>
      </div>

      <div className='about'>
        <h3>Find out more about how we work</h3>
        <button>How we work</button>
      </div>
      <img src={howWe} className='overlay' />
    </MainSection>
  )
}

const MainSection = styled.div`
  padding: 8rem 9rem 5rem 9rem;
  position: relative;
  .title {
    text-align: left;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    .hero-line {
      padding: 1px 3.5rem;
      background-color: hsl(273, 4%, 51%);
      opacity: 0.5;
    }
    h2 {
      font-size: 3rem;
      font-family: hsl(256, 26%, 20%);
    }
  }

  .cycle {
    display: flex;
    justify-content: center;
    gap: 2rem;
    font-family: 'Karla', sans-serif;

    .items {
      padding: 2rem 0;
      background-color: hsl(0, 0%, 98%);
      img {
        height: 3.5rem;
        border-radius: 3rem;
      }

      .info {
        padding: 1.2rem 0;
        h3 {
          font-family: 'DM Serif Display', serif;
          font-size: 1.3rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: hsl(270, 9%, 17%);
        }
        p {
          color: hsl(273, 4%, 51%);
        }
      }
    }
  }

  .about {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.8rem 2rem;
    margin: 5rem 0 0 0;
    background-color: hsl(256, 26%, 20%);
    position: relative;
    font-family: 'DM Serif Display', serif;

    h3 {
      color: hsl(0, 0%, 98%);
      font-size: 3rem;
      font-weight: 400;
      line-height: 1;
      width: 100%;
      max-width: 50%;
      margin: 0 4rem;
    }
    button {
      padding: 0.4rem 0.6rem;
      margin-right: 2rem;
      background: transparent;
      border: 2px solid hsl(0, 0%, 98%);
      text-transform: uppercase;
      color: hsl(0, 0%, 98%);
      font-size: 0.8rem;
      opacity: 0.7;
      cursor: pointer;
      z-index: 8;
      transition: 0.3s ease-in-out;
      &:hover {
        color: hsl(256, 26%, 20%);
        background-color: white;
        font-weight: 600;
      }
    }
  }

  .overlay {
    display: flex;
    position: absolute;
    top: 68.5%;
    left: 65.2%;
    z-index: 5;
    height: 11.7rem;
  }
`
