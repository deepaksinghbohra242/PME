import './App.css'
import { Routes, Route } from 'react-router-dom'
import { UserContextProvider } from './ContextLayout'
import Layout from './Layout'
import axios from 'axios'
import Login from './components/User/Login';

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
