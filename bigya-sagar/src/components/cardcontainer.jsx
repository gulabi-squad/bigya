import React from 'react';
import forumimage from '../assets/forums.png'
import expertimage from '../assets/expert.jpg'
import trainingimage from '../assets/training.avif'
import { Link } from 'react-router-dom';



const Hirecard = () => {
    return (
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 mx-2 w-1/3">
        <img src={expertimage}  className="w-32 h-32 rounded-full mb-4" />
        <p className="text-gray-700 text-center mb-4">Hire the experts of your need.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         <Link to="/allexperts">Hire</Link>
        </button>
      </div>
    );
  };

  const Forumcard = () => {
    return (
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 mx-2 w-1/3">
        <img src={forumimage} alt="Dummy Photo" className="w-32 h-32 rounded-full mb-4" />
        <p className="text-gray-700 text-center mb-4 ">Drop your queries in forum and get answered by our experts.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <Link to="/forums">Forum</Link>
        </button>
      </div>
    );
  };

  const Trainingcard = () => {
    return (
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 mx-2 w-1/3">
        <img src={trainingimage} alt="Dummy Photo" className="w-32 h-32 rounded-full mb-4" />
        <p className="text-gray-700 text-center mb-4">Enroll in trainig provided by top-notch professionals</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/training">Enroll Now</Link>
        </button>
      </div>
    );
  };

const CardContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex justify-center">
        <Hirecard />
        <Forumcard />
        <Trainingcard />
      </div>
    </div>
  );
};

export default CardContainer;