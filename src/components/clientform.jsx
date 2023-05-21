import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios'
import AuthContext from '../context/AuthContext'
import { Navbar } from '../pages/home.component'
const Clientform = () => {
    let {state}=useLocation()
    let {user,tokens}=useContext(AuthContext)
    let [status,setStatus]=useState(null)
    
    console.log(state.id)
    const submitClient= (e)=>{
        console.log(e.target.location.value)
        console.log(e.target.date.value)
        e.preventDefault()
       const url="http://127.0.0.1:8000/clientform/"
       const data={"date":e.target.date.value,
       "userid":user.user_id,
       "expertid":state.id,
       "contact":e.target.contact.value,
       "time":e.target.time.value,
        "location":e.target.location.value,
        "description":e.target.desc.value
        }
        axios.post(url,data,{
            headers: {
              Authorization: `Bearer ${tokens.access}`
          }
          })
        .then(response=>{
            console.log(response)
            if(response.data.status===200){
                setStatus('success')
            }
            else{
                setStatus('error')
            }
            
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center">
                <form onSubmit={submitClient}>
                <div className=" flex flex-col gap-4 justify-center items-center w-[50rem] h-[32rem] border-2 mt-20 text-opacity-70" > 
                 <div> <label htmlFor="date">Date</label> <input className="width-[417px]  border-b-2 border-solid border-black" type="date" id="date" name="date"/>  </div> 
                <div> Time: <input type="time" name="time" className="width-[417px]  border-b-2 border-solid border-black"/>  </div> 
                <div> Location: <input id="location" name="location" className="width-[417px]  border-b-2 border-solid border-black"/>  </div> 
                <div> Contact: <input id="contact" name="contact" className="width-[417px]  border-b-2 border-solid border-black"/>  </div> 

                <div> Description: <input id="desc" name="desc" className="width-[30rem] h-[10rem] border-2 border-solid border-black"/>  </div> 
                <div className=" mt-2 w-screen flex items-center justify-center"> <input className="bg-cyan-500 border border-black-100 placeholder-black placeholder-opacity-50 w-[200px] ml-[4rem] h-[43px] rounded-[7px] text-center text-white font-semibold" type="submit" name="" id="" value="Submit" required/>
                </div>
                </div>
                <div>{status==='success' && <p>Hire request is sent.</p>}</div>
                <div>{status==='error' && <p>Sorry the form was not submitted.Please try again</p>}</div>
                </form>


            </div>







        </div>





    )
    }
    export default Clientform