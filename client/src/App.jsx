import React from 'react'
import {Routes,Route} from "react-router-dom"
import { HomePage } from './pages/homepage/HomePage'
import RegisterPage from './pages/registerpage/RegisterPage'
import LoginPage from './pages/loginpage/LoginPage'
import CreateEvent from './components/event/CreateEvent'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/createevent' element={<CreateEvent/>}  />
    </Routes>
  )
}

export default App