import React from 'react'

function HomePage() {
  return (
    <>
    <div>HomePage</div>
    <button
    onClick={()=>{
      localStorage.removeItem("token") //remove the token from local storage
      window.location="/login" //redirect to login page
    }}
    >logout</button>
    </>
  )
}

export default HomePage