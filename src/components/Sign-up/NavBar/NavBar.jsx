import './NavBar.css'
import React from 'react'

const NavBar = () => {
  return (
    <nav>
         <a href='/'>PluTO UI</a>
        <div>
            <p>Welcome, <span>Guets</span></p>
            <i className='fa fa-user'></i>
        </div>
    </nav>
  )
}

export default NavBar