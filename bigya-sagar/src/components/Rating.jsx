import React, { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import AuthContext from "../context/AuthContext";
const StarRating = ({expert}) => {
    let {user}=useContext(AuthContext)
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleRatingChange=()=>{
      console.log(user.id)
      const url = `http://127.0.0.1:8000/rateexpert/${expert.id}/`;
    const data = { ratingofex: rating,
                   user:user            
    };
    axios.post(url, data)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
    }
    return (
      <div>
        {[...Array(5)].map((star, index) => {
         const ratingValue=index+1
          return (
         <button key={ratingValue} value={ratingValue} onClick={()=>{setRating(ratingValue)}}>
          <FaStar color={ratingValue<=rating ?  "#facc15": "#d4d4d8"}/>
         </button>
         
          );
        })}
        <div className="font-bold text-white bg-green-500">
        <button onClick={handleRatingChange}>Submit Rating</button>
        </div>
      </div>
    );
  };
  export default StarRating