import React, { useEffect, useState } from 'react'
import Profile from './profile.component'

function Navbar(){
  return(
      
<div className='flex justify-between'>
<nav className="bg-white shadow w-screen fixed">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className=" w-[12rem]">
          <a href="/" className="font-bold text-xl text-gray-800">Logo</a>
        </div>
        
        {/* Menu */}
        <div className="ml-6">
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
          <input
            type="text"
            placeholder="Search"
            className="bg-white-200 text-gray-800 px-4 py-2 rounded-xl border border-black-200 focus:outline-none focus:ring focus:ring-blue-300"
          />
          
          {/* Notification Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-12" viewBox="0 0 16 16"> <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/> </svg>
        </div>
        <div className="ml-12 w-[8rem] mr-4"><Profile></Profile> </div>
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

const texts = ['Hire the experts you need. ', 'Post your queries in Bigya-forums. ', 'Enroll in training now. '];

const Homepage = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = texts[currentIndex];
      const text = currentText + current.charAt(currentText.length);

      if (text === current) {
        clearInterval(interval);

        // Move to the next text after a delay
        setTimeout(() => {
          setCurrentText('');
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000);
      } else {
        setCurrentText(text);
      }
    }, 150);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentText, currentIndex]);

  return (
    <div>
      <Navbar></Navbar>
    <div className="flex items-center justify-center h-screen bg-gray-100">
    
      <h1 className="text-4xl font-bold text-center font-mono">
        {currentText}
      </h1>
    </div>
    <div className=" h-[100rem]  bg-gray-100"> Hello </div>
    </div>
    
  );
};

export default Homepage;