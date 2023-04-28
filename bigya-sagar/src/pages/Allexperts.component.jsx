import React, { useEffect, useState } from 'react'
import doctorimage from './doctor.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import StarRating from '../components/Rating'
import axios from 'axios'
const Allexperts= () => {
  let [experts,setExperts]=useState([])
 const getExperts=()=>{
 axios.get('http://127.0.0.1:8000/submitexpert/')
 .then(response=>{
  setExperts(response.data)
 })
 .catch(error=>{
  console.log(error)
 })
 }
 useEffect(()=>{
  getExperts()
 },[])

  return (
 
        <div class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
    {experts.map((experts)=>(
           <div key={experts.id} class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
     
           <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
           <div class="relative pb-48 overflow-hidden">
             <img class="absolute inset-0 h-full w-full object-cover" src={`http://127.0.0.1:8000/${experts.expert_image}`} alt=""/>
           </div>
           <div class="p-4">
             <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{experts.category}</span>
             <h2 class="mt-2 mb-2  font-bold">{experts.name}</h2>
             <p class="text-sm"></p>
             <div class="mt-3 flex items-center">
               <span class="text-sm font-semibold"><FontAwesomeIcon icon={faMapMarkerAlt}/></span>&nbsp;<span class="font-bold text-xl">Kathmandu</span>
             </div>
           </div> 
           <div className="mx-3">
                <span className="inline text-green-900 font-black"> ● </span>
                <span>
               <p className="inline text-sm">Available Now</p>
                </span>
               </div>
   
           <div class="p-4 flex items-center text-sm text-gray-600"><StarRating/></div>
         </a>
         </div>
               
      ))}
 
           

    </div>
  </div>
  </div>

  )
  
}



  
export default Allexperts


 