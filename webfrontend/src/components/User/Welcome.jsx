import React from 'react'
import WelcomeImg from "../../assets/welcome.png";

function Welcome() {
  return (
    <>
      <div className="w-full h-full fixed flex bg-yellow-100 items-center justify-between ">
        <div className="p-20">
          <h1 className='text-5xl font-semibold'>A <span className='text-blue-400'>safe place</span> for <br /> parents to <span className='text-blue-400' >support</span> their <br /> child</h1>
          <h3 className='text-xl'>Talk to other Parents and your child's teachers to get an <br /> understanding of their performance.</h3>
        </div>
        <div className="">
          <img src={WelcomeImg} alt="bgimg" className='h-full' />
        </div>
      </div>
    </>
  )
}

export default Welcome
