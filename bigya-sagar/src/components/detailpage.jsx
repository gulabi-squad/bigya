
import doctorimage from '../pages/doctor.jpeg'
import { Link, useLocation } from 'react-router-dom'
import StarRating from './Rating'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Showreviews from './showreviews.jsx'
import AuthContext from '../context/AuthContext'



const Expertdetails = () => {
  const {tokens}=useContext(AuthContext)
  const {state}=useLocation()
  const [userratings,setUserratings]=useState([])
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
    console.log(state)
    getratingreviews()
  },[])
  if(!userratings){
    return(
      <div>Loading</div>
    )
  }
  
  
  return (
    <div className="flex">
    
    <div className='mt-4 w-1/2'>
      

      
      <div className=''>
      
 <div className="w-[350px] h-[197.2px]  ml-[125px] ">
  <div className='flex'>
  <img className="h-120 w-200 object-cover" src={`http://127.0.0.1:8000/${state.expert_image}`} alt="" />
  </div>
  <div className="mt-20">
  <div className="text-center font-bold">{state.name}</div>
  <div className="text-center mt-1 font-light text-opacity-60"> {state.category} </div>
  <div className=" opacity-95 mt-6 font-mono mb-4"> {state.description}  </div>
 <div>
      <FontAwesomeIcon className="mr-4" icon={faGraduationCap} />
      <span className="text-lg"> {state.qualification}</span>
      
    </div>
    <div className=''>
      <FontAwesomeIcon className="mr-4" icon={faBriefcase} />
      <span className="text-lg"> {state.experience} </span>
    </div>
    </div>
    

    



{/* {state.description}  */}
<div className="flex justify-center text-center">
    <div className="bg-green-600 mt-[2rem] w-[150px] h-[50px] border rounded-xl text-white font-bold py-2 text-[20px] hover:bg-green-900"> <Link to="/allexperts/details/clientform" state={state}> HIRE ME</Link> </div>
    </div>

 


 

 {/* <div className="mt-[3rem] ml-[100rem]">
 <StarRating expert={state}/>
 </div> */}
 {userratings.length>0?userratings.map((userratings,index)=>{

  return(
    <div  key={index}>

      {/* ratings and username */}
  

      {/* <div className="ml-[20rem]">
      <div><h1>{userratings.username}</h1></div>
      <div><h3>{userratings.review}</h3></div>
      </div> */}
    
      {/* [star ratings] */}
    <div className="p-4 mt-[-15rem]  flex items-center text-sm text-gray-600 ml-[7rem]"> 
    {[...Array(5)].map((star,index)=>{
      const ratingValue=userratings.rating
        return(<div className="ml">
          <div className= 'bg-gray-100 ml-2' key={index}>
          <FaStar color={(index+1)<=ratingValue? "#facc15": "#d4d4d8"} /></div>
          </div>
        );
    })}
    </div>
    </div>
    

 )
 }):<div className="mt-[-20rem] ml-6 ">No rating and reviews</div>
 }
 </div>
 </div>
 </div>
 <div className="w-1/2 ">
 <Showreviews state={state}/>
 </div>
 </div>

 

  )
  
}

export default Expertdetails