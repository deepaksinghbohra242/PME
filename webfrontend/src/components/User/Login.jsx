import React, { useContext, useState } from 'react'
import WelcomeImg from "../../assets/welcome.png";
import swal from "sweetalert";
import axios from "axios";
import {Navigate} from "react-router-dom"
import { UserContext } from '../../ContextLayout';

function Login() {
  const {setUser ,setReady} = useContext(UserContext);
  const [credential , setCrendtial] = useState({
    email : "",
    password: ""
  });
  const [redirect ,setRedirect] = useState(false);
  const handleChange = (e) =>{
    setCrendtial({...credential , [e.target.name] : e.target.value});
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      console.log(credential);
      const data = await axios.post('/user/login',{
        email : credential.email,
        password : credential.password
      })
      setUser(data);
      setRedirect(true);
      setReady(true);
      swal({
        title:"Login Successfully!",
        icon:'success',
        button:'OK'
      })
    } catch (error) {
      swal({
        title:"Error!",
        text:`Try Again`,
        icon:"warning",
        buttons:"ok"
      })
      console.log(error)
    }
  }

  if(redirect){
    return <Navigate to={'/dashboard'} />
  }
  return (
    <>
      <div className="w-full flex bg-yellow-100 justify-between ">
        <div className="bg-white mt-24 mb-32 w-1/3 h-3/4 p-8 ml-32 rounded-md shadow-md">
          <h1 className='text-4xl font-bold pl-32 font-serif text-blue-900 mb-4'>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-10">
              <label htmlFor="username" className='text-gray-700 text-lg font-bold mb-2 block'>Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={credential.email}
                onChange={handleChange}
                className="w-full border border-solid rounded-md p-3"
                placeholder="Enter your email"
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
                value={credential.password}
                onChange={handleChange}
                className="w-full border border-solid rounded-md p-3"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white ml-32 py-2 px-6 rounded-md hover:bg-blue-900 transition duration-300"
            >
              Sign In
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

export default Login
