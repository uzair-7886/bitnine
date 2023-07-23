import React, { useState } from 'react'
import logo from '../assets/b_logo.png'
import { MenuOutline } from 'react-ionicons'
// import Button from './Button';

const Nav = () => {
    let Links =[
      {name:"PRODUCTS",link:"/"},
      {name:"USE CASES",link:"/"},
      {name:"SERVICES",link:"/"},
      {name:"RESOURCES",link:"/"},
      {name:"BLOG",link:"/"},
      {name:"COMPANY",link:"/"},
      {name:"IR",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <nav className=' w-full fixed top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className=' cursor-pointer flex items-center '>
        <img src={logo} alt="logo" className='w-24 md:w-60' />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
      <MenuOutline 
        color={'#00000'}
        title={'Menu'}
        height="30px"
        width="30px"
        className='hover:text-yellow-500'
        />
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-3 transition-all duration-300 ease-out ${open ? 'top-10 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <div>
            <li key={link.name} className=' border-t border-gray-200 md:border-none md:ml-8 md:text-md text-sm md:my-0 my-7 '>
              <a href={link.link} className=' hover:text-yellow-400 '>{link.name}</a>
            </li>
            </div>
          ))
        }
        <div className='bg-blue-800 text-white px-3 py-2 md:ml-8  rounded hover:text-yellow-400 md:text-md text-sm font-bold w-24 text-center cursor-pointer '>
          Tree Free
        </div>
      </ul>
      </div>
    </nav>
  )
}

export default Nav