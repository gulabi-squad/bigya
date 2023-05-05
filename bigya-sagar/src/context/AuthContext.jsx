import React,{useState} from 'react'
import { createContext } from 'react'
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'
const AuthContext=createContext()
export default AuthContext

export const AuthProvider=({children})=>{
    let navigate=useNavigate()
    let [user,setUser]=useState(localStorage.getItem('authtoken')?jwt_decode(JSON.parse(localStorage.getItem('authtoken')).access):null)
    let [authtoken,setAuthtoken]=useState(localStorage.getItem('authtoken')?JSON.parse(localStorage.getItem('authtoken')):null)

    const loginUser=async(e)=>{
        e.preventDefault()
        let response=await fetch('http://127.0.0.1:8000/loginuser/',{
         method:'POST',
         headers:{
             'Content-Type':'application/json'
         },
         body:JSON.stringify({'email':e.target.email.value,'password':e.target.password.value})
     
        })
        let data=await response.json()
        if(response.status===200){
            setAuthtoken(data.token)
            setUser(jwt_decode(data.token.access))
            console.log(user)
            localStorage.setItem('authtoken',JSON.stringify(data.token))
            navigate('/')
        }
        else{
            alert('Something went wrong')
        }
    }
    const logoutUser=()=>{
        setUser(null)
        setAuthtoken(null)
        localStorage.removeItem('authtoken')
        navigate('/login')
    }
    let contextData={
        tokens:authtoken,
        loginUser:loginUser,
        user:user,
        logoutUser:logoutUser
    }
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}