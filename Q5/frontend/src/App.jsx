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
      <Route path='/' exact element={<HomePage />}/> //if token exists and user is authenticated then default page is homepage
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/signup' exact element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
