import React from 'react'
import { Link } from 'react-router'

const Menu = () => {
  return (
    <div>
        <Link to='/home'>Home</Link> ||
        <Link to='/about'>About</Link> ||
      {/* <a href="/home">Home</a> ||
      <a href="/about">About</a> || */}
      <a href="/contact">Contact</a>
    </div>
  )
}

export default Menu
