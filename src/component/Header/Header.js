// // import React from 'react'
// // import logo from '../../pages/Home/Artizz_Dev_Bg_Removed.png'
// // import {motion} from 'framer-motion'
// // const Header = () => {
// //   return (
//     // <div style={{
//     //     position: 'fixed',
//     //     width: '100%',
//     //     zIndex: 99999999
//     //   }}>
// // //         <header>
// // //     <nav class="bg-black border-black px-4 lg:px-6 py-2.5 dark:bg-black">
// // //         <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
// // //             <a href="https://flowbite.com" class="flex items-center">
// // //                 {/* <img src={logo} class="mr-3 h-10 sm:h-9" alt="Flowbite Logo" />
// // //                  */}
               
// // //                <motion.div
// // //       className="box"
// // //       initial={{ opacity: 0, scale: 0.5 }}
// // //       animate={{ opacity: 1, scale: 1 }}
// // //       transition={{
// // //         duration: 0.8,
// // //         delay: 0.5,
// // //         ease: [0, 0.71, 0.2, 1.01]
// // //       }}
// // //     >
// // //                     <a href="#" title="" class="inline-flex">
// // //                         <img class="w-auto h-10" src={logo} alt="" />
// // //                     </a>
// // //     </motion.div>     
// // //             </a>
// // //             <div class="flex items-center lg:order-2">
// // //                 <a href="#" class="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
// // //                 <a href="#" class="text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
// // //                 <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
// // //                     <span class="sr-only">Open main menu</span>
// // //                     <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
// // //                     <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
// // //                 </button>
// // //             </div>
// // //             <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
// // //                 <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
// // //                     <li>
// // //                         <a href="#" class="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-black" aria-current="page">Home</a>
// // //                     </li>
// // //                     <li>
// // //                         <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
// // //                     </li>
// // //                     <li>
// // //                         <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
// // //                     </li>
// // //                     <li>
// // //                         <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
// // //                     </li>
// // //                     <li>
// // //                         <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
// // //                     </li>
// // //                     <li>
// // //                         <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
// // //                     </li>
// // //                 </ul>
// // //             </div>
// // //         </div>
// // //     </nav>
// // // </header>
// // <div>

// // <header>
// //     <nav class="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
// //         <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
// //             <a href="https://flowbite.com" class="flex items-center">
// //                 <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
// //                 <span class="self-center text-xl font-semibold blackspace-nowrap dark:text-black">Flowbite</span>
// //             </a>
// //             <div class="flex items-center lg:order-2">
// //                 <a href="#" class="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
// //                 <a href="#" class="text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
// //                 <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
// //                     <span class="sr-only">Open main menu</span>
// //                     <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
// //                     <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
// //                 </button>
// //             </div>
// //             <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
// //                 <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
// //                     <li>
// //                         <a href="#" class="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-black" aria-current="page">Home</a>
// //                     </li>
// //                     <li>
// //                         <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
// //                     </li>
// //                     <li>
// //                         <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
// //                     </li>
// //                     <li>
// //                         <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
// //                     </li>
// //                     <li>
// //                         <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
// //                     </li>
// //                     <li>
// //                         <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
// //                     </li>
// //                 </ul>
// //             </div>
// //         </div>
// //     </nav>
// // </header>
// //     </div>
// //   )
// // }

// // export default Header


// import React, { useState } from 'react';
// import './App.css';
// import logoImage from '../Horizontal_Lockup_on_White_Background-removebg-preview.png';
// import { motion } from "framer-motion";
// import { useInView } from 'react-intersection-observer';
// const Header = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

  

//       const [ref, inView] = useInView({
//           triggerOnce: true, // Ensures the animation triggers only once
//         });
//   return (
//     <div>
//       <header style={{
//         position: 'fixed',
//         width: '100%',
//         zIndex: 99999999
//       }}>
//         <div className="bbg bg-[#7572F4]/[0.8]">
//           <div className="px-4 mx-auto sm:px-6 lg:px-8">
//             <nav className="relative flex items-center justify-between h-16 lg:h-20">
//               <div className=" lg:flex lg:items-center lg:space-x-10">
//                 <div className="flex-shrink-0">
//                   <a href="#" title="" className="flex">
//                     {/* <img
//               style={{
//                 width: '100px',
//                 height: '100px'
//               }}
//                       src={require('../assets/logo-removebg-preview.png')}
//                       alt=""
//                     /> */}

//              <img src={logoImage} className='w-auto h-40' alt=''/>
//                   </a>
//                 </div>
//               </div>

//               <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2"></div>

//               <button
//                 id="sidebarToggle"
//                 type="button"
//                 className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
//                 onClick={toggleSidebar}
//                 // style={{ zIndex: 50 }}
//               >
//                 <svg
//                   className="w-6 h-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 </svg>
//               </button>

//               <div className="hidden lg:flex lg:items-center lg:space-x-10">
//                 <a href="#" title="" className="text-base font-medium text-black">
//                   {' '}
//                   Home{' '}
//                 </a>

//                 <a href="#About" title="" className="text-base font-medium text-black">
//                   {' '}
//                   About{' '}
//                 </a>

//                 <a href="#service" title="" className="text-base font-medium text-black">
//                   {' '}
//                   Services{' '}
//                 </a>

//                 <a href="#contact" title="" className="text-base font-medium text-black">
//                   {' '}
//                   Contact{' '}
//                 </a>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </header>

//       <div className={`flex h-screen bg-gray-200 absolute ${isSidebarOpen ? 'overflow-hidden' : ''}`} style={{ zIndex: 50 }}>
//         <div
//           id="sidebar"
//           className={` bg-white/[0.5] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50   text-black w-64 flex-shrink-0 p-4 fixed inset-y-0 left-0 z-40 lg:hidden 
//           ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}
//         >
//           <div className="mb-6">
//             <h1 className="text-2xl font-semibold">Sidebar Nav</h1>
//           </div>
//           <ul className="space-y-2">
//             <li>
//             <motion.div
//     ref={ref}
//       initial={{ opacity: 0}}
//       animate={inView ? { opacity: 1} : { opacity: 0}}
//       transition={{
//         duration: 2,
//         delay: 0.8,
//         ease: [0, 0.71, 0.2, 1.01],
//       }}>
//               <a href="#" className="block p-2 rounded hover:black">
//                 Home
//               </a>
//               </motion.div>
//             </li>
//             <li>
//             <motion.div
//     ref={ref}
//       initial={{ opacity: 0}}
//       animate={inView ? { opacity: 1} : { opacity: 0}}
//       transition={{
//         duration: 2,
//         delay: 0.8,
//         ease: [0, 0.71, 0.2, 1.01],
//       }}>
//               <a href="#" className="block p-2 rounded hover:black">
//                 About
//               </a>
//               </motion.div>
//             </li>
//             <li>
//             <motion.div
//     ref={ref}
//       initial={{ opacity: 0}}
//       animate={{ opacity: 1} }
//       transition={{
//         duration: 2,
//         delay: 0.8,
//         ease: [0, 0.71, 0.2, 1.01],
//       }}>
//               <a href="#" className="block p-2 rounded hover:black">
//                 Services
//               </a>
//               </motion.div>
//             </li>
//             <li>
//               <a href="#" className="block p-2 rounded hover:black">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useState, useEffect } from 'react';
import './App.css';
import logoImage from '../Horizontal_Lockup_on_White_Background-removebg-preview.png';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Service from '../../pages/Service/Service';
import Home from '../../pages/Home/Home';
import LogoArtizz from'./Artizzlogo-removebg-preview.png';
const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };



  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('sidebar');
      const toggleButton = document.getElementById('sidebarToggle');
      if (sidebar && !sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation triggers only once
  });

  return (
   
    <div  >

      <header style={{
        position: 'fixed',
        width: '100%',
        zIndex: 99999999999
      }}>
        <div className="bbg bg-white/[0.8]">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between h-16 lg:h-20">
              <div className=" lg:flex lg:items-center lg:space-x-10">
                
                <div className="flex-shrink-0">
                <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
                  <a href="#" title="" className="flex">
                    <img src={LogoArtizz} className='w-auto h-40' alt=''/>
                  </a>
                  </motion.div>
                </div>
              </div>

              <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2"></div>

              <button
                id="sidebarToggle"
                type="button"
                className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                onClick={toggleSidebar}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              <AnimatePresence>
              <motion.div className="hidden lg:flex lg:items-center lg:space-x-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
              
              <motion.div
                  initial={{ opacity: 0, X: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 , delay: 0.1 }}
               className="text-base font-medium text-black">
                  {' '}
                  <Link to='/'>Home</Link>{' '}
                </motion.div>

                   <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 , delay: 0.2 }}
                  title="" className="text-base font-medium text-black">
             
             <Link to='/Service' > Services</Link>
                </motion.div>

                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5  , delay: 0.3 }}
                 href="#" title="" className="text-base font-medium text-black">
                  {' '}
                  <Link to='/blog'>Blog</Link>{' '}
                </motion.a>

                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5  , delay: 0.4}}
                 href="#" title="" className="text-base font-medium text-black">
                  {' '}
                  <Link to='/Portfolio'>Portfolio</Link>{' '}
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5  , delay: 0.5}}
                 href="#" title="" className="text-base font-medium text-black">
                  {' '}
                  <Link to='/AboutUs'>About Us</Link>{' '}
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5  , delay: 0.6}}
                 href="#" title="" className="text-base font-medium text-black">
                  {' '}
                  <Link to='/ContactUs'>Contact Us</Link>{' '}
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5  , delay: 0.6}}
                 href="#" title="" className="text-base font-medium text-black">
                  {' '}
                  <Link to='/carrier'>Career</Link>{' '}
                </motion.a>
                {/* <motion.a
                style={{display:'none'}}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5  , delay: 0.7}}
          className="text-base font-medium text-black">
             <Link style={{display:'none'}} to='/Signup'> <button type="button" class="text-[#ffb923] hover:text-white border border-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 ">   Signup</button></Link>
              <Link style={{display:'none'}} to='/Login'> <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white  ">
<span style={{display:'none'}} className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Login
</span>
</button></Link>
                </motion.a> */}
              </motion.div>
              </AnimatePresence>
              
            </nav>
          </div>
          <div>
       
          </div>
        </div>
      </header>

      <div className={`flex h-screen bg-gray-200 absolute ${isSidebarOpen ? 'overflow-hidden' : ''}`} style={{ zIndex: 50 }}>
        <div
          id="sidebar"
          className={` bg-white/[0.5] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 text-black w-64 flex-shrink-0 p-4 fixed inset-y-0 left-0 z-40 lg:hidden 
          ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}
        >
          <div className="mb-12">
            <h1 className="text-2xl font-semibold"></h1>
          </div>
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.ul
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <a  className="block p-2 rounded hover:black">
                  <Link to='/Home'>Home</Link>
                  </a>
                </motion.li> */}
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <a  className="block p-2 rounded hover:black">
                  <Link to='/Home' > Home</Link>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <a  className="block p-2 rounded hover:black">
                  <Link to='/Service' > Services</Link>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <a  className="block p-2 rounded hover:black">
                  <Link to='/blog'>Blog</Link>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <a  className="block p-2 rounded hover:black">
                  <Link to='/Portfolio'>Portfolio</Link>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <a  className="block p-2 rounded hover:black">
                  <Link to='/AboutUs'>About Us</Link>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <a  className="block p-2 rounded hover:black">
                  <Link to='/ContactUs'>Contact Us</Link>
                  </a>
                </motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>


  );
};

export default Header;
