import React from 'react'
import Navbar from '../components/Navbar'

function HomePage() {
  return (
    <>
    <Navbar/>
    <div className='bg-white h-screen pt-20 md:pt-36'>
    <h1 className='text-xl text-red-600'>비트나인의 DB 기술과 PG 전문성의 융합</h1>
    <button
    className=' '
    onClick={()=>{
      localStorage.removeItem("token") //remove the token from local storage
      window.location="/login" //redirect to login page
    }}
    >logout</button>
    </div>
    <div className='bg-red-300 h-screen w-full'>
this is another screen
    </div>
    </>
  )
}

export default HomePage