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
      {user&& <Route path='https://uzair-bitnine.vercel.app/' exact element={<HomePage />}/>} //if token exists and user is authenticated then default page is homepage
      <Route path='https://uzair-bitnine.vercel.app/login' exact element={<Login/>}/>
      <Route path='https://uzair-bitnine.vercel.app/signup' exact element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
