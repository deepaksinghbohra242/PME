import React, { useState } from 'react'
import SideBar from '../Helpers/SideBar'
import {useParams} from 'react-router-dom'
import Dashboard from './Dashboard'

function RegisterForm() {
  const {subpage} = useParams();
  if(subpage === undefined){
    subpage = "register"
  }
  const [Institute, setInstitute] = useState([
    { title: "Dashboard", page: "/institute/dashboard" },
    { title: "Feeds", page: "/institute/feeds" },
    { title: "Form", page: "/institute/form" },
    { title: "Fees", page: "/institute/fees" },
    { title: "Message", page: "/institute/message" },
  ]);
  const [HeaderValue, setHeaderValue] = useState("Dashboard")
  return (
    <>
      <div className='flex h-screen'>
        <SideBar Heading={Institute} value={HeaderValue} />
        <div className='bg-red-300 w-full'>
          
        </div>
      </div>
    </>
  )
}

export default RegisterForm
