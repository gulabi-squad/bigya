import React from 'react'
import {FiSearch} from 'react-icons/fi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export function Navbar(){
  const [searchkey,setSearchkey]=useState('')
  let navigate=useNavigate()
  const handlesubmit=(e)=>{
    console.log('search')
    
    console.log(searchkey)
    navigate(`/allexperts/search/${searchkey}`)


  }

    return(
        
<div className='flex justify-between'>
<nav className="bg-white shadow w-screen fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 w-[12rem]">
            <a href="/" className="font-bold text-xl text-gray-800">Logo</a>
          </div>
          
          {/* Menu */}
          <div className="hidden md:block ml-6">
            <ul className="flex space-x-12">
              <li>
                <a href="/" className="text-gray-800 hover:text-gray-600">Home</a>
              </li>
              <li>
                <a href="/expertlist" className="text-gray-800 hover:text-gray-600">Experts</a>
              </li>
              <li>
                <a href="/forums" className="text-gray-800 hover:text-gray-600">Forums</a>
              </li>
              <li>
                <a href="/training" className="text-gray-800 hover:text-gray-600">Training</a>
  
              </li>
              <li>
                <a href="/login" className="text-gray-800 hover:text-gray-600">Login</a>
  
              </li>
              <li>
                <a href="/signup" className="text-gray-800 hover:text-gray-600">Signup</a>
  
              </li>
            </ul>
          </div>
          <div className="flex items-center ml-12">
         <form onSubmit={handlesubmit}>
            <input
              type="text"
              name="search"
              onChange={(e)=>setSearchkey(e.target.value)}
              placeholder="Search"
              className="bg-white-200 text-gray-800 px-4 py-2 rounded-xl border border-black-200 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input type="submit" className="text-red-700" value="Search"/>

</form>
            
            {/* Notification Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-12" viewBox="0 0 16 16"> <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/> </svg>
          </div>
          <div className="ml-12 w-[8rem] mr-4">Profile </div>
        </div>
      </div>
    </nav>

{/* <div>practice</div>
<div className='flex gap-20'>
<p>Our services</p>
<p><Link to="/expertlist"> Experts</Link></p>
<form><input className='rounded-full border-2 border-gray-600' placeholder='search'></input>

</form>
<p> <Link to="/login">Login</Link> </p>
<p> <Link to= "/signup">Signup</Link></p>

</div> */}

    </div>)
}


function Homepage() {
  return (
    <div>
        <Navbar />
        <div className=' w-[93%] mx-12 h-[33rem]'>
            <div className='pt-[12rem]'>
            
            <p className='text-white font-bold text-3xl py-4 max-w-lg'>NEED AN EXPERT WHO CAN DO YOUR JOB?</p>
            <p className='absolute p-1'><FiSearch/></p>
            <input type="text" className=' rounded pl-16'></input>
            </div>
           
        </div>
        <div>
            
            <div className='h-[50rem]'>Hello</div>


        </div>
    </div>
  )
}

export default Homepage