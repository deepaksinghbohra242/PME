import './App.css'
import { Routes, Route } from 'react-router-dom'
import { UserContextProvider } from './ContextLayout'
import Layout from './Layout'
import axios from 'axios'
import Login from './components/User/Login';
import Welcome from './components/User/Welcome'
import Register from './components/User/Register'
import Home from './components/User/Home'
import ProtectedRoute from './components/Helpers/ProtectedRoute'

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Welcome/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<ProtectedRoute element={<Home />} />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
