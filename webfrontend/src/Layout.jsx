import React from 'react'
import { Outlet } from 'react-router-dom'
import Welcome from './components/User/Welcome'
import NavBar from './components/NavBars/NavBar'

function Layout() {
  return (
    <>
      <div>
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}

export default Layout
