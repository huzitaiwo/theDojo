import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

// styles & images
import './Navbar.css'
import Temple from '../assets/temple.svg'
import Ellipse from '../assets/ellipse.svg'

import React from 'react'

export default function Navbar({ setActive, active }) {
  const { logout, isLoading } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className='navbar'>
      <ul>
        <li className='logo'>
          <Link to='/'>
            <img src={Temple} alt="dojo icon" />
            <span>theDojo</span>
          </Link>
          <img onClick={() => setActive(!active)} className='menu' src={Ellipse} alt="menu icon" />
        </li>

        {!user && (
          <>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
          </>
        )}

        {user && (
          <li>
            {!isLoading && <button onClick={logout} className='btn'>Logout</button>}
            {isLoading && <button className='btn' disabled>loging out...</button>}
          </li>
        )}
      </ul>
    </nav>
  )
}
