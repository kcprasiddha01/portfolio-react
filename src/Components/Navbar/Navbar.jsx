import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src='Sid_website.png' alt="" />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}
