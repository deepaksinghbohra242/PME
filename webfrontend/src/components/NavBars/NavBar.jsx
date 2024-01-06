import React from 'react'
import styled from 'styled-components';
import Logo from "../../assets/logo.jpg"
import { Link } from "react-router-dom"


const Button = styled.button`
background: #007671;
border-radius: 5px;
color: white !important;
border: 2px solid #007671;
color: black;
margin: 0 0.5em;
padding: 0.25em 1.5em;
font-size : 1.25em
`

function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between p-5 bg-yellow-100 ">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="h-12 w-12 mr-5 rounded-2xl" />
          <h1 className="text-5xl font-extrabold font-serif">PME</h1>
        </div>
        <div className="flex ">
          <Link to="/login">
            <Button >Sign In</Button>
          </Link>
          <Link to="/register" >
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavBar
