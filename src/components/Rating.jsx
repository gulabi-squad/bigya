import React, { useState, useContext } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import AuthContext from "../context/AuthContext";
// import KhaltiLogo from "./khalti-logo.svg";

const StarRating = ({ expert }) => {
  const { tokens } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    const expertId = expert.id;
    const url = `http://127.0.0.1:8000/rateexpert/${expertId}/`;
    const data = {
      ratingofex: rating,
      review: review,
    };

    axios
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${tokens.access}`,
        },
      })
      .then((response) => {
        console.log(response);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
      });
  };

  const handlePayment = () => {
    // Implement the payment logic using Khalti
    // Redirect the user to Khalti payment gateway or use Khalti API
    // to process the payment
    // You can include your own implementation or refer to Khalti documentation
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-4 font-mono">Rate and Review the Expert, Help your fellow hirers to make a Prudent Decision</h1>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <button
                key={ratingValue}
                className={`${
                  ratingValue <= rating ? "text-yellow-400" : "text-gray-300"
                } text-2xl focus:outline-none`}
                onClick={() => handleRatingChange(ratingValue)}
              >
                <FaStar />
              </button>
            );
          })}
        </div>
      </div>
      <div className="mb-4 flex">
        <input
          className="border-2 border-gray-300 rounded-md py-2 px-4 w-1/2 h-[6rem] ml-[19rem]"
          type="text"
          placeholder="Your review"
          value={review}
          onChange={handleReviewChange}
        />
      </div>
      <div className="text-center">
        <button
          className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Rating and Review"}
        </button>
      </div>
      <hr className="my-6" />
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Make Your Payment</h2>
        {/* <img src={KhaltiLogo} alt="Khalti" className="mx-auto h-8 mb-4" /> */}
        <p className="text-sm mb-4">
          Please proceed with the payment to complete your transaction.
        </p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handlePayment}
        >
          Pay with Khalti
        </button>
      </div>
    </div>
  );
};

export default StarRating;
