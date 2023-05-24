import React, { useContext } from 'react';
import { useState } from 'react';
import { HiOutlineLogout } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
const Profile = () => {
    const {tokens,user,logoutUser}=useContext(AuthContext)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDelete=()=>{
    axios
    .delete(`http://127.0.0.1:8000/deleteexpert/${user.user_id}/`,{
        headers: {
          Authorization: `Bearer ${tokens.access}`
      }
      })
    .then(response => {
      console.log('response.data');
    })
    .catch(error => {
      console.error('Error deleting product:', error);
    });
  }

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-end space-x-4">
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400"
            onClick={handleDropdownToggle}
          >
            <span className="sr-only">Toggle Dropdown</span>
            <IoMdArrowDropdown className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        {isDropdownOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <div className="px-4 py-2 text-sm text-gray-700">
                Logged in as: John Doe
              </div>
              <button
                type="button"
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={logoutUser}
              >
                <div className="flex items-center">
                  <HiOutlineLogout className="w-4 h-4 mr-2" />
                  Logout
                </div>
              </button>
            </div>
            <div className="px-4 py-2 text-sm text-gray-700"> <Link to="/hirerequests"> Hire Requests </Link></div>
            <div className="px-4 py-2 text-sm text-gray-700"> <Link to="/proposals"> Proposals </Link> </div>
            <div className="flex items-center px-4 py-2 text-sm text-gray-700">
                <button onClick={handleDelete}>
                  <FaTrash className="w-4 h-4 mr-2" />
                  Delete Your Expert Account
                  </button>
                </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Profile;