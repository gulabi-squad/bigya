import React from 'react'
import {FiSearch} from 'react-icons/fi'

function Navbar(){
    return(
    <div className='flex justify-between p-4 px-12'>
<div>practice</div>
<div className='flex gap-20'>
<p>Our services</p>
<p>Experts</p>
<form><input className='rounded-full border-2 border-gray-600' placeholder='search'></input>

</form>
<p>Login</p>
<p>Signup</p>

</div>

    </div>)
}


function Homepage() {
  return (
    <div>
        <Navbar />
        <div className='px-20 w-[93%] mx-12 h-[33rem] bg-[url("/src/assets/girl_with_laptop.jpg")] bg-cover'>
            <div className='pt-[12rem]'>
            
            <p className='text-white font-bold text-3xl py-4 max-w-lg'>NEED AN EXPERT WHO CAN DO YOUR JOB?</p>
            <p className='absolute p-1'><FiSearch/></p>
            <input type="text" className=' rounded pl-16'></input>
            </div>
           
        </div>
        <div>
            <div>Hello</div>
            <div>Hello</div>


        </div>
    </div>
  )
}

export default Homepage