import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import Logo from "../../assets/logo.jpg"
import { Link } from "react-router-dom"
import { UserContext } from '../../ContextLayout';
import { CgProfile } from "react-icons/cg";
import axios from 'axios';

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
  const { ready ,user ,setReady , setUser} = useContext(UserContext);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    await axios.post('/user/logout');
    setReady(false);
    setUser(null);
  }
  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 bg-yellow-100 ">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="h-12 w-12 mr-5 rounded-2xl" />
          <h1 className="text-5xl font-extrabold font-serif">PME</h1>
        </div>
        {!user && (
        <>
          <div className="flex ">
            <Link to="/login">
              <Button >Sign In</Button>
            </Link>
            <Link to="/register" >
              <Button>Sign Up</Button>
            </Link>
          </div>
        </>) }
        {
          user &&  (
            <>
              <div className='flex text-2xl gap-4'>
                <Link to={'/dashboard'} className='flex gap-1 border border-solid border-black font-sans rounded-full p-1 font-semibold bg-gray-200 items-center'>
                <CgProfile />
                {user?.data?.name}
                </Link>
                <button onClick={handleSubmit} className='border border-solid border-black rounded-md py-1 px-2 bg-red-500 font-sans text-white'>Logout</button>
              </div>
            </>)
        }
      </div>
    </>
  )
}

export default NavBar
