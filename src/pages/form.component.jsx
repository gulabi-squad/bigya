import React from 'react'
import { Link } from 'react-router-dom'
const Clientform = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className=" flex flex-col gap-4 justify-center items-center w-[50rem] h-[32rem] border-2 mt-20 text-opacity-70" > 

                <div className="text-opacity-50"> Name: <input className="width-[417px]  border-b-2 border-solid border-black"/>  </div> 
                <div> Date: <input className="width-[417px]  border-b-2 border-solid border-black"/>  </div> 
                <div> Time: <input className="width-[417px]  border-b-2 border-solid border-black"/>  </div> 
                <div> Location: <input className="width-[417px]  border-b-2 border-solid border-black"/>  </div> 
                <div> Description: <input className="width-[30rem] h-[10rem] border-2 border-solid border-black"/>  </div> 
                </div>

            </div>







        </div>





    )
    }
    export default Clientform