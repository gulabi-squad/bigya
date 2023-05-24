import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import CardContainer from '../components/cardcontainer';
import Navbar from './navbar.component';

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
     <Navbar/>
      <div className='px-20 w-full h-[45rem] bg-cover' style={{ backgroundImage: 'url(/src/assets/girl_with_laptop.jpg)' }}>
        <div className='pt-[12rem]'>
          <p className='text-white font-bold text-3xl py-4 max-w-lg mt-4'>NEED AN EXPERT WHO CAN DO YOUR JOB?</p>
          <p className='absolute p-1 mt-1'><FiSearch /></p>
          <input type="text" className='rounded pl-16 h-8'></input>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
    
    <h1 className="text-4xl font-bold text-center font-mono">
      {currentText}
    </h1>
  </div>
  <div className="  bg-gray-100"></div>
  <CardContainer/>

    </div>
  );
};

export default Homepage;