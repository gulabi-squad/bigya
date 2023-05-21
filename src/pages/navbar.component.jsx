import React from 'react'
import {FiSearch} from 'react-icons/fi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from './profile.component'
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
              <a href="/" className="font-bold text-2xl font-mono text-blue-700 ">Bigya</a>
            </div>
            
            {/* Menu */}
            <div className="hidden md:block ml-6">
              <ul className="flex space-x-12">
                <li>
                  <a href="/" className="text-gray-800 hover:text-gray-600">Home</a>
                </li>
                <li>
                  <a href="/allexperts" className="text-gray-800 hover:text-gray-600">Experts</a>
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
              <div className="text-blue-800 ml-[18rem] mt-[-2rem]">
              <input type="submit"  value="Search"/>
              </div>
  
  </form>
             
            </div>
            <div className="ml-12 w-[8rem] mr-4"><Profile/></div>
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
  