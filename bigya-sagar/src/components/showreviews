import React from 'react';

const Review = ({ name, review, ratings }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <div className="flex items-center mb-2">
        <span className="text-yellow-500 text-lg mr-1">&#9733;</span>
        <span className="text-yellow-500 text-lg mr-1">&#9733;</span>
        <span className="text-yellow-500 text-lg mr-1">&#9733;</span>
        <span className="text-yellow-500 text-lg mr-1">&#9733;</span>
        <span className="text-yellow-500 text-lg">&#9734;</span>
        <span className="text-gray-500 ml-2">{ratings}</span>
      </div>
      <p className="text-gray-700">{review}</p>
    </div>
  );
};

const Showreviews = () => {
  const reviews = [
    {
      name: 'John Doe',
      review: 'Great product! Highly recommended.',
      ratings: '4.5',
    },
    {
      name: 'Jane Smith',
      review: 'Good quality and fast shipping.',
      ratings: '5',
    },
    {
      name: 'Michael Johnson',
      review: 'Average product. Could be better.',
      ratings: '3',
    },
    {
      name: 'Sarah Williams',
      review: 'Excellent customer service!',
      ratings: '4',
    },
    {
      name: 'David Brown',
      review: 'Not satisfied with the product.',
      ratings: '2.5',
    },
  ];

  return (
    
      <div className="">
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
      
  );
};

export default Showreviews;
