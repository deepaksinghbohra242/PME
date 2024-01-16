import React, { useContext, useState } from 'react'
import WelcomeImg from "../../assets/welcome.png";
import axios from "axios";
import swal from 'sweetalert';
import {Navigate} from "react-router-dom";
import { UserContext } from '../../ContextLayout';

function Register() {
  const {setUser , setReady} = useContext(UserContext);
  const [credentials , setCredentials] = useState({
    name : "",
    email : "",
    password : ""
  });
  const [redirect , setRedirect] = useState(false);
  const handleChange = (e) =>{
    setCredentials({...credentials,[e.target.name]: e.target.value});
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const user = await axios.post('/user/register',{
        email : credentials.email,
        name : credentials.name,
        password: credentials.password
      });
      swal({
        title : "Success",
        text : "Successfully Login",
        icon : "Success",
        buttons : "Ok"
      })
      setReady(true);
      setUser(user);
      setRedirect(true);
    } catch (error) {
      swal({
        title : "Failed",
        text : "Try Again",
        icon : "warning",
        buttons : "Ok"
      })
    }
  }  
  if(redirect){
    return <Navigate to = {'/dashboard'} />
  }
  return (
    <>
    <div className="w-full flex bg-yellow-100 justify-between ">
        <div className="bg-white mb-32 h-3/4 w-1/3 p-8 ml-32 rounded-md shadow-md">
          <h1 className='text-4xl font-bold pl-32 font-serif text-blue-900 mb-4'>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-10">
              <label htmlFor="email" className='text-gray-700 text-lg font-bold mb-2 block'>Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                className="w-full border border-solid rounded-md p-3"
                placeholder="Enter your Email"
              />
              
            </div>
            <div className="mb-4">
              <label htmlFor="username" className='text-gray-700 text-lg font-bold mb-2 block'>Username:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={credentials.name}
                onChange={handleChange}
                className="w-full border border-solid rounded-md p-3"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-lg font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="w-full border border-solid rounded-md p-3"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white ml-32 py-2 px-6 rounded-md hover:bg-blue-900 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="">
          <img src={WelcomeImg} alt="bgimg" className='h-full' />
        </div>
      </div>
    </>
  )
}

export default Register
