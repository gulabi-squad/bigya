
import doctorimage from '../pages/doctor.jpeg'
import { Link, useLocation } from 'react-router-dom'
import StarRating from './Rating'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaStar } from "react-icons/fa";



const Expertdetails = () => {
  const {state}=useLocation()
  const [userratings,setUserratings]=useState([])
  const getratingreviews=()=>{
    axios.get(`http://127.0.0.1:8000/rateexpert/${state.id}/`)
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
    <div>
 <div className="w-[230px] h-[197.2px] ml-[125px] mt-[140px] absolute"> This is details page <img src={`http://127.0.0.1:8000/${state.expert_image}`} alt="" width="230" height="185" />
  <div className="text-center mt-3 font-bold">{state.name}</div>
  <div className="text-center font-light text-opacity-60"> {state.category} </div>

 </div>
 <div className=" absolute w-[409px] h-[51px] ml-[63px] mt-[446px]  max-w-full">
{state.description} 
   <div className="flex justify-center text-center">
    <div className="bg-green-800 mt-6 w-[150px] h-[50px] border rounded-xl text-white font-bold py-2 text-[20px]"> <Link to="/allexperts/details/clientform" state={state}> HIRE ME</Link> </div>
    </div>


 </div>

 <div>
 <StarRating expert={state}/>
 </div>
 {userratings.length>0?userratings.map((userratings,index)=>{

  return(
    <div key={index}>
      <div><h1>{userratings.username}</h1></div>
      <div><h3>{userratings.review}</h3></div>
    
    
    <div className="p-4 flex items-center text-sm text-gray-600">
    {[...Array(5)].map((star,index)=>{
      const ratingValue=userratings.rating
        return(
          <div key={index}>
          <FaStar color={(index+1)<=ratingValue? "#facc15": "#d4d4d8"} /></div>
        );
    })}
    </div>
    </div>

 )
 }):<div>No rating and reviews</div>
 }
 </div>
 

  )
}
export default Expertdetails