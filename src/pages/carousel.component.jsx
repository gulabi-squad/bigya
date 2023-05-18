// import React, { useEffect } from 'react';
// import Swiper from 'swiper';

// import 'swiper/css/swiper.css';

// const Carousal = () => {
//   useEffect(() => {
//     new Swiper('.swiper-container', {
//       slidesPerView: 'auto',
//       spaceBetween: 8,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//   }, []);

//   return (
//     <div className="max-w-screen-lg mx-auto">
//       <div className="swiper-container">
//         <div className="swiper-wrapper">
//           {/* Card-like elements */}
//           <div className="swiper-slide">
//             <div className="bg-white rounded-lg shadow-lg p-4">
//               {/* Upload image */}
//               <input type="file" accept="image/*" className="mb-2" />

//               {/* Display uploaded image */}
//               <div className="h-48 w-full bg-gray-300 mb-2">
//                 {/* Render uploaded image */}
//                 {/* <img src={uploadedImage} alt="Uploaded" className="object-cover h-full w-full" /> */}
//               </div>

//               {/* Tag text */}
//               <h2 className="text-xl font-semibold mb-2">Tag 1</h2>

//               {/* Card content */}
//               <p>Card description goes here...</p>
//             </div>
//           </div>

//           {/* Add more card-like elements as needed */}
//           {/* <div className="swiper-slide">
//               ...
//           </div> */}
//         </div>

//         <div className="swiper-button-next"></div>
//         <div className="swiper-button-prev"></div>
//       </div>
//     </div>
//   );
// };

// export default Carousal;
