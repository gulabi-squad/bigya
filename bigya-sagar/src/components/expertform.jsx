import React from 'react'
import { useState } from 'react'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'

import { Link, Navigate, useNavigate } from 'react-router-dom'

const Expertform = () => {
  let [status,setStatus]=useState('')
  let {user,tokens}=useContext(AuthContext)
  let [ename, setEname] = useState('')
  let [desc, setDesc] = useState('')
  let [category, setCategory] = useState('')
  let [qualification, setQualification] = useState('')
  let [experience, setExperience] = useState('')
  const [image, setImage] = useState();
  let navigate=useNavigate()
  const [file, setFile] = useState(null);

   const expertSubmit=async (e)=>{
    const uploadData = new FormData();
    uploadData.append('name',ename)
    uploadData.append('description', desc)
    uploadData.append('expert_image',image)
    uploadData.append('category', category)
    uploadData.append('qualification', qualification)
    uploadData.append('experience', experience)
    uploadData.append('userid',user.user_id)
    e.preventDefault()
    console.log("function hit")
    let response=await fetch('http://127.0.0.1:8000/submitexpert/',{
     method:'POST',
     headers:{
      Authorization: `Bearer ${tokens.access}`
     },
     body:uploadData
 
    })
    let data=await response.json()
    console.log(data)
    if (data.status===200){
        console.log('haha saved')
        setStatus('success')
        navigate('/signup/otp')
        
        
       }
       else{
        alert('Something went wrong')
        setStatus('error')
       }

   }
  return (
    <div className="">
      <div className="text-center font-bold my-10">Upload your details</div>
      <form onSubmit={expertSubmit}>
      
    <div className="mt-2 w-screen flex items-center justify-center">
    <input className="border border-black-100 placeholder-black placeholder-opacity-50 w-[340px] ml-[4rem] h-[43px] rounded-[7px] text-center" value={ename} onChange={(event)=>setEname(event.target.value)} type="text" name="ename" id="" placeholder="Name" required/>
    </div>
    <div className=" mt-2 w-screen flex items-center justify-center">
    <label className="font-semibold " for="">Upload photo</label><input className=" placeholder-black placeholder-opacity-50 w-[340px] ml-[1rem] h-[43px] rounded-[7px] text-center" name="expert_image" onChange={(event) => setImage(event.target.files[0])} type="file"/>
   </div>
   <div className="mt-2 w-screen flex items-center justify-center"> <input className="border border-black-100 placeholder-black placeholder-opacity-50 w-[340px] ml-[4rem] h-[43px] rounded-[7px] text-center" type="text" name="desc" value={desc} id="" placeholder="Description" onChange={(event)=>setDesc(event.target.value)} required/>
   </div>
   <div className="mt-2 w-screen flex items-center justify-center"> <input className="border border-black-100 placeholder-black placeholder-opacity-50 w-[340px] ml-[4rem] h-[43px] rounded-[7px] text-center" type="text" name="category" id="" placeholder="category" value={category} onChange={(event)=>setCategory(event.target.value)} required/>
</div>

<div className="mt-2 w-screen flex items-center justify-center"> <input className="border border-black-100 placeholder-black placeholder-opacity-50 w-[340px] ml-[4rem] h-[43px] rounded-[7px] text-center" type="text" name="qualification" id="" placeholder="Qualification" value={qualification} onChange={(event)=>setQualification(event.target.value)} required/>
</div>

<div className="mt-2 w-screen flex items-center justify-center"> <input className="border border-black-100 placeholder-black placeholder-opacity-50 w-[340px] ml-[4rem] h-[43px] rounded-[7px] text-center" type="text" name="experience" id="" placeholder="Experience" value={experience} onChange={(event)=>setExperience(event.target.value)} required/>
</div>

<div className=" mt-2 w-screen flex items-center justify-center"> <input className="bg-cyan-500 border border-black-100 placeholder-black placeholder-opacity-50 w-[340px] ml-[4rem] h-[43px] rounded-[7px] text-center text-white font-semibold" type="submit" name="" id="" value="Submit" required/>
</div>

</form>
<div>
{status=="success" && <div>Expert form has been submitted</div>}
{status=="error" && <div>You already have an expert profile</div>}
</div>
</div>
  )
}

export default Expertform
