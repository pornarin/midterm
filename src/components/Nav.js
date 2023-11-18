import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <nav>
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Nav