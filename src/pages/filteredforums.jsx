import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useParams } from 'react-router-dom';

const BASE_URL = 'http://localhost:8000';

function Filteredforums() {
  const {searchkey}=useParams()
  const {tokens}=useContext(AuthContext)
  const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState({ title: '', contentvalue: '' });
  const [newComment, setNewComment] = useState({ postid: '', comment: '' });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/filteredforums/?searchQuery=${searchkey}`);
      console.log(response.data)
      setPosts(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };



  const createComment = async () => {
    try {
      await axios.post(`${BASE_URL}/comments/`, newComment,{
        headers: {
          Authorization: `Bearer ${tokens.access}`
      }
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });

      fetchPosts();
      setNewComment({ postid: '', comment: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Forum</h1>


      {posts.map((post) => (
        <div key={post.id} className="border border-gray-300 rounded p-4 mb-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.contentvalue}</p>
         <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Comments</h3>
            {post.comments.map((comment) => (
              <p className="mb-2">
                {comment.comment}
              </p>
            ))}

            <input
              className="border border-gray-300 rounded p-2 mr-2"
              type="text"
              placeholder="Add a comment"
              value={newComment.content}
              onChange={(e) =>
                setNewComment({ postid: post.id, comment: e.target.value })
              }
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={createComment}
            >
              Add Comment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Filteredforums;





















// import React, { useState,useEffect, useContext } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router";
// import AuthContext from "../context/AuthContext";

// function Createpost() {
//     const navigate=useNavigate()
//     const {tokens}=useContext(AuthContext)
  

//   const Handlesubmit=(e)=>{
//     e.preventDefault()
//     const formdata=new FormData(e.target)

//     axios.post('http://127.0.0.1:8000/forums/',formdata,{
//       headers: {
//         Authorization: `Bearer ${tokens.access}`
//     }}).then((response)=>{
//       console.log(response)
//       navigate('/')
//       }
//       )
//       .catch((err)=>console.log(err))

//   }

//   return (
//     <div className="ml-20 mt-8 h-[30rem] " >
//       <form class="w-full max-w-xl flex flex-col gap-6" onSubmit={Handlesubmit}>
       
//         <div>
//         <label for='title'  className='text-sm'>Enter the title</label>

//         <input id='title' type='text' name="title" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='enter the title here' required/>

//         </div>
//         <div>
//         <label for='textarea' className='text-sm'>Enter the content</label>
//         <textarea id="textarea" name="contentvalue" className="h-[20rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >      </textarea>
//         </div>
//         <div className='text-center'>
//             <input type='submit' value='submit' className='bg-green-700 p-2.5 px-3.5 rounded'/>
//         </div>
//       </form>
//     </div>
    
//   );
// }

// export default Createpost;
