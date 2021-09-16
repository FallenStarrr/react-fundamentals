import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="navbar">
          <div className="navbar__links">
            <Link to="/about">О сайте</Link>
            <Link to="/posts">Посты</Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar
