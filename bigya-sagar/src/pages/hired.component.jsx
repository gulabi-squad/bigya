import axios from 'axios'
import React, { useContext } from 'react'
import { useState ,useEffect} from 'react'

import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Hirerequest = () => {
  let {tokens}=useContext(AuthContext)
  const [hirers,setHirers]=useState([])
    const gethiredata=()=>{
      
       const url="http://127.0.0.1:8000/clientform/"


      axios.get(url,{
        headers: {
          Authorization: `Bearer ${tokens.access}`
      }
      })
      .then(response=>{
        console.log(response.data)
        setHirers(response.data.data)
    })
      .then(errors=>console.log(errors))
    }
    useEffect(()=>{
        gethiredata()
       },[])
    return (
      <div>
        {hirers?(
          hirers.map((hirer)=>{
            return(
            <div className="flex justify-center">
            <div className=" flex flex-col gap-4 justify-center items-center w-[50rem] h-[32rem] border-2 mt-20 text-opacity-70" > 
            <div className="gap-2">You've received a new hire request </div>
      
            <div className="text-opacity-50"> Name: <input className="width-[417px]  border-b-2 border-solid border-black" value={hirer.username}/>  </div> 
            <div> Date: <input className="width-[417px]  border-b-2 border-solid border-black" value={hirer.date}/>  </div> 
            <div> Time: <input className="width-[417px]  border-b-2 border-solid border-black" value={hirer.time}/>  </div> 
            <div> Location:<input className="width-[417px]  border-b-2 border-solid border-black" value={hirer.location}/>  </div> 
            <div> Description: <input className="width-[20rem] h-[10rem] border-2 border-solid border-black" value={hirer.description}/>  </div> 
            <div><button  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">
        Accept
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
            <svg className="h-6 w-6 inline-block mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.375 13.875v3.75c0 0.99-0.81 1.875-1.875 1.875h-2.25v-2.25h1.5v-1.5h-1.5v-1.125c0-0.825 0.675-1.5 1.5-1.5h0.75v2.25h-0.75c-0.165 0-0.375 0.135-0.375 0.375zM12.75 16.875c0-1.215 0.99-2.25 2.25-2.25s2.25 1.035 2.25 2.25-1.035 2.25-2.25 2.25-2.25-1.035-2.25-2.25zM15 2.25c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zM15 22.5c-5.514 0-10.031-4.486-10.031-10s4.517-10 10.031-10c5.514 0 10.031 4.486 10.031 10s-4.517 10-10.031 10z"
              />
            </svg>
            Call Now
          </button>
      
      </div>
      
            </div>
      
        </div>
           ) })




   ):(<div>nigga</div>) }
          </div>
    )
    }
    export default Hirerequest