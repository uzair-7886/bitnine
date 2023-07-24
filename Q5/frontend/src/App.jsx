import { useState } from 'react'
import {Routes,Route,Navigate,BrowserRouter} from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import HomePage from './pages/HomePage'


function App() {

  const user=localStorage.getItem("token") //get the token from local storage

  return (
    <>
    <BrowserRouter>
    <Routes>

      {
        user?<Route path='/' exact element={<HomePage />}/>:<Route path='/login' exact element={<Login/>}/>
      }
       //if token exists and user is authenticated then default page is homepage
      <Route path='/signup' exact element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
