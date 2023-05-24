import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const Showreviews = ({state}) => {
  const [userratings,setUserratings]=useState([])
  let {tokens}=useContext(AuthContext)
  const getratingreviews=()=>{
    axios.get(`http://127.0.0.1:8000/rateexpert/${state.id}/`,{
      headers: {
        Authorization: `Bearer ${tokens.access}`
    }
    })
    .then(response=>{
      console.log(response)
      setUserratings(response.data.data)
    })
    .catch(error=>console.log(error))
  }
  useEffect(()=>{
    getratingreviews()
  },[])
  if(!userratings){
    return(
      <div>Loading</div>
    )
  }

  return (
    
      <div className="">

{userratings.length>0?userratings.map((userratings,index)=>{

return(
  <div key={index}>
    <div className="bg-white rounded-lg p-4 shadow mb-4"><h2 className="text-lg font-semibold mb-2">{userratings.username}</h2>
    <div className="text-gray-700"><p>{userratings.review}</p></div>
  
  
  <div className="flex items-center mb-2 mt-2">
  {[...Array(5)].map((star,index)=>{
    const ratingValue=userratings.rating
      return(
        <div className="text-yellow-500 text-lg mr-1" key={index}>
        <FaStar color={(index+1)<=ratingValue? "#facc15": "#d4d4d8"} /></div>
      );
  })}
  </div>
  </div>
  </div>

)
}):<div>No rating and reviews</div>
}

        {/* {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))} */}
      </div>
      
  );
};

export default Showreviews;
