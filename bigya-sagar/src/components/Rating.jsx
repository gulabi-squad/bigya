import React, { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import AuthContext from "../context/AuthContext";
import { useLocation } from "react-router-dom";
const StarRating = () => {
    const {state}=useLocation()
    let {tokens}=useContext(AuthContext)
    const [rating, setRating] = useState(0);
    const [review,setReview]=useState('')
    const [hover, setHover] = useState(0);

    const handleRatingChange=()=>{
      const url = `http://127.0.0.1:8000/rateexpert/${state}/`;
    const data = { ratingofex: rating,
                   review:review         
    };
    axios.post(url, data,{
      headers: {
        Authorization: `Bearer ${tokens.access}`
    }
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
    }
    return (
      <div>
        <div>
        {[...Array(5)].map((star, index) => {
         const ratingValue=index+1
          return (
         <button key={ratingValue} value={ratingValue} onClick={()=>{setRating(ratingValue)}}>
          <FaStar color={ratingValue<=rating ?  "#facc15": "#d4d4d8"}/>
         </button>
         
          );
        })}
        </div>
        <div>
         <input className="border-2 border-red-300 mb-2" type='text' placeholder="Your review" onChange={(e)=>setReview(e.target.value)}></input>
         </div>
        <div className="font-bold text-white bg-green-500">
         
        <button onClick={handleRatingChange}>Submit rating and review</button>
        </div>
      </div>
    );
  };
  export default StarRating