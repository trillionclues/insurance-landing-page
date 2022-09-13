import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { IoLogoFacebook } from 'react-icons/io'
import { IoLogoTwitter } from 'react-icons/io'
import { FaPinterest } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'

export const Footer = () => {
  return (
    <FooterSection id='footer'>
      <div className='container'>
        <div className='container-icon'>
          <img className='logo' src={logo} />
          <ul>
            <li>
              <IoLogoFacebook />
            </li>
            <li>
              <IoLogoTwitter />
            </li>
            <li>
              <FaPinterest />
            </li>
            <li>
              <AiOutlineInstagram />
            </li>
          </ul>
          <div className='footer-line'></div>
        </div>

        <div className='details'>
          <ul>
            <li>
              <a href='#'>Our company</a>
            </li>
            <li>
              <a href='#'>How we work</a>
            </li>
            <li>
              <a href='#'>why insure?</a>
            </li>
            <li>
              <a href='#'>view plans</a>
            </li>
            <li>
              <a href='#'>reviews</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Help Me</a>
            </li>
            <li>
              <a href='#'>Faq</a>
            </li>
            <li>
              <a href='#'>Terms of use</a>
            </li>
            <li>
              <a href='#'>Privacy policy</a>
            </li>
            <li>
              <a href='#'>cookies</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Sales</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
            <li>
              <a href='#'>Live chat</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Others</a>
            </li>
            <li>
              <a href='#'>Careers</a>
            </li>
            <li>
              <a href='#'>Press</a>
            </li>
            <li>
              <a href='#'>Licences</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='attribute'>
        <span>
          Made With ❤️ By <a href='github.com/trillionclues'>Trillionclues</a>{' '}
          &copy; 2022{' '}
        </span>
      </div>
    </FooterSection>
  )
}

const FooterSection = styled.div`
  /* opacity: 0.3; */
  /* padding-bottom: rem; */
  .container {
    /* background-color: grey; */
    /* text-align: left;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center; */
    position: relative;
    .container-icon {
      padding: 3rem 9rem 0 9rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      img {
        height: 1rem;
        color: hsl(273, 4%, 51%);
        opacity: 0.8;
      }
      ul {
        list-style-type: none;
        display: flex;
        gap: 0.5rem;
        font-size: 1.2rem;
        /* background-color: red; */

        li {
          opacity: 0.7;
          cursor: pointer;
          &:hover {
            opacity: 1;
          }
        }
      }

      .footer-line {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 37%;
        left: 50%;
        height: 2px;
        width: 66rem;
        background-color: hsl(273, 4%, 51%);
        opacity: 0.5;
      }
    }

    .details {
      display: flex;
      justify-content: flex-start;
      text-align: left;
      gap: 10rem;
      margin-left: 9rem;
      font-family: 'Karla', sans-serif;
      margin-top: 2rem;
      ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        gap: 0.2rem;
        li {
          a {
            color: #000;
            font-size: 0.8rem;
            text-decoration: none;
            text-transform: uppercase;

            &:hover {
              text-decoration: underline;
            }
          }
          &:first-of-type {
            margin-bottom: 1rem;
            opacity: 0.6;
          }
        }
      }
    }
  }

  .attribute {
    font-family: 'Karla', sans-serif;
    text-align: center;
    padding: 0.4rem;
    margin: 3rem 0 0rem 0;
    background-color: hsl(273, 4%, 51%);
    span {
      a {
        text-decoration: underline;
        color: black;
      }
    }
  }
`
