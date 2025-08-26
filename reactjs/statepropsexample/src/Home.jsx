import React from 'react'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
      <h3>Home component called...</h3>
      <Outlet />
    </div>
  )
}

export default Home
