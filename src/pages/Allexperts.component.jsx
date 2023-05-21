import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom'
import doctorimage from './doctor.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import StarRating from '../components/Rating'
import { Navbar } from './navbar.component';

import axios from 'axios'
const Allexperts= () => {
  let [experts,setExperts]=useState([])

 const getExperts=()=>{
 axios.get('http://127.0.0.1:8000/submitexpert/')
 .then(response=>{
  console.log(response)
  setExperts(response.data.data)
 })
 .catch(error=>{
  console.log(error)
 })
 }



 useEffect(()=>{
  getExperts()
 },[])
 if(!experts){
  return(
    <div>Loading</div>
  )
 }

  return (<div>
      <Navbar />
  
        <div className="mt-7 antialiased bg-gray-200 text-gray-900 font-sans p-6">
  <div className="container mx-afto">
    <div className="flex flex-wrap -mx-4">
    {experts.map((experts)=>(
      
           <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4" key={experts.id}>
     
           <Link to={`/allexperts/${experts.id}`} state={experts}><div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
           <div className="relative pb-48 overflow-hidden">
             <img className="absolute inset-0 h-full w-full object-cover" src={`http://127.0.0.1:8000/${experts.expert_image}`} alt=""/>
           </div>
           <div className="p-4">
             <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{experts.category}</span>
             <h2 className="mt-2 mb-2  font-bold">{experts.name}</h2>
             <p className="text-sm"></p>
             <div className="mt-3 flex items-center">
               <span className="text-sm font-semibold"><FontAwesomeIcon icon={faMapMarkerAlt}/></span>&nbsp;<span className="font-bold text-xl">Kathmandu</span>
             </div>
           </div> 
           <div className="mx-3">
                <span className="inline text-green-900 font-black"> ● </span>
                <span>
               <p className="inline text-sm">Available Now</p>
                </span>
               </div>
   
           <div className="p-4 flex items-center text-sm text-gray-600">
            {[...Array(5)].map((star,index)=>{
              const ratingValue=experts.ratingofex
                return(
                  <div key={index}>
                  
                  <FaStar color={(index+1)<=ratingValue? "#facc15": "#d4d4d8"} /> </div>
                );
            })}
                 {/* {[...Array(5)].map((star, index) => {
         const ratingValue=index+1
          return (
         <button key={ratingValue} value={ratingValue} onClick={()=>{setRating(ratingValue)}}>
          <FaStar color={ratingValue<=rating ?  "#facc15": "#d4d4d8"}/>
         </button>
         
          );
        })} */}
            {/* <StarRating expert={experts}/> */}
            </div>
           </div> </Link>
         </div>
               
      ))}
 
           

    </div>
  </div>
  </div>
  </div>

  )
  
}



  
export default Allexperts


 