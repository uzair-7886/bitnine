import { useState } from 'react'
import {Routes,Route,Navigate,BrowserRouter} from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import HomePage from './pages/HomePage'


function App() {

  const user = localStorage.getItem("token") //get the token from local storage

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/' element={user ? <HomePage /> : <Navigate to='/login' />} />
        {/* If user is authenticated, show HomePage, else navigate to Login */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;