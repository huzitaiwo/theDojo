import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

// styles & images
import './Navbar.css'
import Temple from '../assets/temple.svg'

import React from 'react'

export default function Navbar() {
  const { logout, isLoading } = useLogout()

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
          {!isLoading && <button onClick={logout} className='btn'>Logout</button>}
          {isLoading && <button className='btn' disabled>loging out...</button>}
        </li>
      </ul>
    </nav>
  )
}
