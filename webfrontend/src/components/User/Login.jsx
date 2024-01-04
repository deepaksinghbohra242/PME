import React from 'react'
import {UserContext} from '../../ContextLayout'
import { useContext } from 'react'

function Login() {
  const {test} = useContext(UserContext);
  console.log(test);
  return (
    <div>
      <h1>{test?.data[0]?.id}</h1>
      <h1>{test?.data[0]?.name}</h1>
      <h1>{test?.data[0]?.email}</h1>
      <h1>{test?.data[0]?.password}</h1>
    </div>
  )
}

export default Login
