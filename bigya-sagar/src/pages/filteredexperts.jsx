import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FaStar } from 'react-icons/fa'
import axios from 'axios'
const Filteredexperts = () => {
    const {searchkey}=useParams()
    const [filteredexperts,setfilteredExperts]=useState([])
    const handleSubmit= async (e)=>{
        await axios.get(`http://127.0.0.1:8000/filteredexperts/?searchQuery=${searchkey}`)
        .then(response=>{
         setfilteredExperts(response.data.data)
         console.log(response.data)
         console.log(filteredexperts)
        })
        .catch(error=>{
         console.log(error)
        })
      }
      useEffect(()=>{

        handleSubmit()},[searchkey])
  return (
    <div>
      
      <div className="mt-7 antialiased bg-gray-200 text-gray-900 font-sans p-6">
      <div className="container mx-afto">
    <div className="flex flex-wrap -mx-4">

     {filteredexperts.length>0?filteredexperts.map((filteredexperts,index)=>(
      
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4" key={filteredexperts.id}>

      <Link to={`/allexperts/${filteredexperts.id}`} state={filteredexperts}><div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
      <div className="relative pb-48 overflow-hidden">
        <img className="absolute inset-0 h-full w-full object-cover" src={`http://127.0.0.1:8000/${filteredexperts.expert_image}`} alt=""/>
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{filteredexperts.category}</span>
        <h2 className="mt-2 mb-2  font-bold">{filteredexperts.name}</h2>
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
         const ratingValue=filteredexperts.ratingofex
           return(
            <div key={index}>
             
             <FaStar color={(index+1)<=ratingValue? "#facc15": "#d4d4d8"} /></div>
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
          
 )):<div>No experts found</div>}

     </div>

    </div>
    </div>
    </div>
  )
}

export default Filteredexperts
