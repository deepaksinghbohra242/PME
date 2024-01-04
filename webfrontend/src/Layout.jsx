import React from 'react'
import {Outlet} from 'react-router-dom'
import Welcome from './components/User/Welcome'

function Layout() {
  return (
    <>
    <div>
        <Welcome />
        <Outlet />
    </div>
    </>
  )
}

export default Layout
