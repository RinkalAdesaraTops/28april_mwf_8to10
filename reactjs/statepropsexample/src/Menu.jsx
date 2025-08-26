import React from 'react'
import { Link } from 'react-router'

const Menu = () => {
  return (
    <div>
        <Link to='/home'>Home
            <Link to='/home/h1'> Home1</Link> ||
            <Link to='/home/h2'> Home2</Link>
        </Link> ||

        <Link to='/about'>About</Link> ||
      {/* <a href="/home">Home</a> ||
      <a href="/about">About</a> || */}
      <a href="/contact">Contact</a>
    </div>
  )
}

export default Menu
