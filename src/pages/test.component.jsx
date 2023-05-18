import React, { useEffect, useState } from 'react';
import Carousel from './carousel.component';

const Homepage = () => {
  const texts = ['Hire the experts you need. ', 'Post your queries in Bigya-forums. ', 'Enroll in training now. '];
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
      <div className='flex items-center justify-center mt-[4rem] h-[39rem] opacity-100 bg-[url("/src/assets/girl_with_laptop.jpg")] bg-cover'>
        <div className="flex text-center"></div>
     
      <div className="flex items-center justify-center ">
        <h1 className="text-7xl font-bold text-white drop-shadow-lg shadow-black">
          {currentText}
        </h1>
      </div>
      </div>
      <div className="h-[16rem] bg-gray-100"></div>
      <div className="h-[30rem] bg-gray-500"></div>
    </div>
  );
};

export default Homepage;
