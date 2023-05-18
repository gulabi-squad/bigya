import React from 'react';

const Testing = () => {
  const images = [
    {
      src: require('./doctor.jpeg').default,
      tag: 'Image 1',
    },
    {
      src: require('./doctor.jpeg').default,
      tag: 'Image 2',
    },
    {
        src: require('./doctor.jpeg').default,
        tag: 'Image 3',
      }, 
      {
        src: require('./doctor.jpeg').default,
        tag: 'Image 4',
      }, 
      {
        src: require('./doctor.jpeg').default,
        tag: 'Image 5',
      },

      {
        src: require('./doctor.jpeg').default,
        tag: 'Image 6',
      },
      {
        src: require('./doctor.jpeg').default,
        tag: 'Image 7',
      },
      {
        src: require('./doctor.jpeg').default,
        tag: 'Image 8',
      },
      {
        src: require('./doctor.jpeg').default,
        tag: 'Image 9',
      },
      
  ];

  const [slideIndex, setSlideIndex] = React.useState(0);

  const handlePrevClick = () => {
    setSlideIndex(slideIndex - 1);
  };

  const handleNextClick = () => {
    setSlideIndex(slideIndex + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap -mx-4">
        {images.slice(slideIndex, slideIndex + 4).map((image, index) => (
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/5 p-4" key={index}>
            <div className="relative h-64">
              <img className="w-full h-full object-cover" src={image.src} alt={image.tag} />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-70">
                <p className="text-sm font-medium text-gray-900">{image.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className={`${
            slideIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
          } text-white font-medium py-2 px-4 rounded-l`}
          onClick={handlePrevClick}
          disabled={slideIndex === 0}
        >
          Previous
        </button>
        <button
          className={`${
            slideIndex + 4 >= images.length ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
          } text-white font-medium py-2 px-4 rounded-r`}
          onClick={handleNextClick}
          disabled={slideIndex + 4 >= images.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Testing;
