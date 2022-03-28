import { Link } from 'react-router-dom'

// styles & images
import './Navbar.css'
import Temple from '../assets/temple.svg'

import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li className='logo'>
          <Link to='/'>
            <img src={Temple} alt="dojo icon" />
            <span>theDojo</span>
          </Link>
        </li>

        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
        <li>
          <button className='btn'>Logout</button>
        </li>
      </ul>
    </nav>
  )
}
