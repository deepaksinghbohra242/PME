import React from 'react'
import WelcomeImg from "../../assets/welcome.png";


function Login() {
  return (
    <>
      <div className="w-full h-full fixed flex bg-yellow-100 justify-between ">
        <div className="bg-white mb-32 w-1/3 h-3/4 p-8 ml-32 rounded-md shadow-md">
          <h1 className='text-4xl font-bold pl-32 font-serif text-blue-900 mb-4'>Login</h1>
          <form action="">
            <div className="mb-4 mt-10">
              <label htmlFor="username" className='text-gray-700 text-lg font-bold mb-2 block'>Email:</label>
              <input
                type="text"
                id="email"
                name="email"
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
