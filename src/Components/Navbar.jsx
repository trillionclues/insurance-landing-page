import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

export const Navbar = () => {
  return (
    <Nav>
      <div className='brand'>
        <div className='container'>
          <img src={logo} alt='Insure Logo' />
        </div>
        <div className='toggle'></div>
      </div>

      <ul>
        <li>
          <a href='#'>How we work</a>
        </li>
        <li>
          <a href='#'>Blog</a>
        </li>
        <li>
          <a href='#'>Account</a>
        </li>
        <li>
          <a href='#'>View Plans</a>
        </li>
      </ul>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0.6rem 1rem; */
  background-color: hsl(0, 0%, 98%);
  padding: 1.1rem 9rem;
  cursor: pointer;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1;
    font-weight: 900;
    text-transform: uppercase;
    img {
      height: 1rem;
      color: hsl(273, 4%, 51%);
    }
  }
  .toggle {
    display: none;
  }

  ul {
    display: flex;
    list-style-type: none;
    gap: 1.2rem;
    text-transform: uppercase;
    font-family: 'Karla', sans-serif;
    cursor: pointer;
    li {
      a {
        text-decoration: none;
        font-size: 0.8rem;
        transition: 0.4s ease-in-out;
        color: hsl(273, 4%, 51%);
        font-weight: 400;
        word-spacing: 4px;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: hsl(216, 23%, 36%);
          color: white;
          padding: 0.3rem;
          border-radius: 3px;
          border: none;
        }
      }
      &:last-of-type {
        a {
          border: 2px solid grey;
          color: hsl(216, 23%, 36%);
          padding: 0.4rem;
          word-spacing: 2px;
          font-weight: 700;
          border-radius: 3px;

          &:hover {
            color: white;
            border: none;
          }
        }
      }
    }
  }
`
