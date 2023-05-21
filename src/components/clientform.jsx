import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { Navbar } from '../pages/navbar.component';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const Clientform = () => {
  let { state } = useLocation();
  let { user, tokens } = useContext(AuthContext);
  let [status, setStatus] = useState(null);
  let [selectedDate, setSelectedDate] = useState('');

  const timeOptions = [
    { value: '7-10 am', label: '7-10 am' },
    { value: '11-1 pm', label: '11-1 pm' },
    { value: '1-4 pm', label: '1-4 pm' },
    { value: '5-8 pm', label: '5-8 pm' },
  ];

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const submitClient = (e) => {
    e.preventDefault();
    const url = 'http://127.0.0.1:8000/clientform/';
    const data = {
      date: selectedDate,
      userid: user.user_id,
      expertid: state.id,
      contact: e.target.contact.value,
      time: e.target.time.value,
      location: e.target.location.value,
      description: e.target.desc.value,
    };
    axios
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${tokens.access}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <form onSubmit={submitClient}>
          <div className="flex flex-col gap-4 justify-center items-center w-[50rem] h-[32rem] border-2 mt-20 text-opacity-70 bg-white rounded-lg p-8">
            <div>
              <label htmlFor="date">Date: </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-[417px] border border-gray-300 rounded-md p-2 focus:outline-none"
                onChange={handleDateChange}
                value={selectedDate}
              />
            </div>
            <div>
              Time: 
              <select
                name="time"
                className="w-[417px] border border-gray-300 rounded-md p-2 focus:outline-none"
              >
                {timeOptions.map((timeOption) => (
                  <option key={timeOption.value} value={timeOption.value}>
                    {timeOption.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              Location:
              <input
                id="location"
                name="location"
                className="w-[417px] border border-gray-300 rounded-md p-2 focus:outline-none"
              />
            </div>
            <div>
              Contact:
              <input
                id="contact"
                name="contact"
                className="w-[417px] border border-gray-300 rounded-md p-2 focus:outline-none"
              />
            </div>
            <div>
                <div className="mt[-2]">
              Description:
              </div>
              <textarea
                id="desc"
                name="desc"
                className="w-[30rem] h-[10rem] border border-gray-300 rounded-md p-2 focus:outline-none"
              />
            </div>
            <div className="mt-2 w-screen flex items-center justify-center">
              <input
                className="bg-blue-600 border border-black-100 rounded-md text-white px-4 py-2 font-semibold"
                type="submit"
                value="Submit"
                required
              />
            </div>
          </div>
          {status === 'success' && <p>Hire request is sent.</p>}
          {status === 'error' && <p>Sorry, the form was not submitted. Please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export default Clientform;
