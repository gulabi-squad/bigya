
import doctorimage from '../pages/doctor.jpeg'
import { Link, useLocation } from 'react-router-dom'


const Expertdetails = () => {
  const {state}=useLocation()
  
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
 </div>
  )
}
export default Expertdetails