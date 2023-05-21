import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';


function ProposalList() {
    let {tokens}=useContext(AuthContext)
  const [proposals, setProposals] = useState([]);
  const getProposals=()=>{
    axios.get("http://127.0.0.1:8000/clientside/",{
        headers: {
          Authorization: `Bearer ${tokens.access}`
      }
      })
    .then(response=>{
        setProposals(response.data.data)
    })
    .catch(errors=>console.log(errors))
  }

  useEffect(() => {
    getProposals()
  }, []);

  return (
    <div className="bg-gray-100">
    <div className=" bg-white mx-auto max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Proposals</h2>
      {proposals.length > 0 ? (
        proposals.map((proposal,index) => {
            index=index+1
            return(
          <div  key={index} className="bg-orange-100 border rounded-lg p-4 mb-4">{proposal.expertname}
            <h3 className="text-xl font-bold mb-2"></h3>
            <p className="text-gray-600 text-sm mb-2">{proposal.description}</p>
            <p className="text-gray-500 text-sm">{proposal.date}</p>
            <div>Status:<span className="text-gray-500 text-sm">{proposal.status}</span> </div>
          </div>)
}
   
)
      ) : (
        <p className="text-gray-500">No proposals found.</p>
      )}
    </div>
    </div>
  );
}

export default ProposalList;
