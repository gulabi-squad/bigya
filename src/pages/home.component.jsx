import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './navbar.component';
import CardContainer from '../components/cardcontainer';
import expertimage from '../assets/expert.jpg'

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
    <div className='bg-gray-100'>
      <Navbar />
      <div className='px-20 w-full h-[45rem] bg-cover' style={{ backgroundImage: 'url(/src/assets/girl_with_laptop.jpg)' }}>
        <div className='pt-[12rem]'>
          <p className='text-white font-bold text-3xl py-4 max-w-lg mt-4'>NEED AN EXPERT WHO CAN DO YOUR JOB?</p>
          <p className='absolute p-1 mt-1'><FiSearch /></p>
          <input type="text" className='rounded pl-16 h-8'></input>
        </div>
      </div>
      <div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
     <div>
    <h1 className="text-4xl font-bold text-center font-mono">
      {currentText}
    </h1>
    </div>
    </div>
    <div className="text-center mt-[4rem] bg-gray-100">
    
    <div className='flex px-20 w-full h-[45rem] bg-cover' style={{ backgroundImage: 'url(/src/assets/expert.jpg)' }}>
       <div className="flex  text-center">
      <h1 className="text-3xl font-bold mt-[7rem]">Got Some Skills?</h1>
      <p className="text-xl text-gray-700 mt-[10rem] ml[-7rem] ">
        <a href="/expertform" className="text-blue-500 hover:underline ml-[-15rem] font-mono">
          Register as an Expert
        </a>
      </p>
      </div>
      </div>

    </div>
  </div>
  <div className="  bg-gray-100">
  <CardContainer/>
  </div>
  <div>
  <footer className="bg-gray-900 py-6">
      <div className="container mx-auto flex justify-center">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Bigya. All rights reserved.
        </p>
      </div>
    </footer>
  </div>

    </div>
    
  
    
  );
};

export default Homepage;
