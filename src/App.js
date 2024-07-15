import React from 'react'
import Home from './pages/Home/Home'
import Header from './component/Header/Header'
import ReactGA from 'react-ga';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Service from './pages/Service/Service';
import Blog from './pages/Blog/Blog';
import Portfolio from './pages/Portfolio/Portfolio';
import AboutUs from './pages/AboutUs/AboutUs';
import { Contact } from './pages/Home/Contact';
import { Footer } from './pages/Home/Footer';
import ContactUs from './pages/ContactUs/ContactUs';
import SmoothScroll from './component/Mouse/SmoothScroll';
import Registertion from './pages/User/Registertion';
import Login from './pages/User/Login';
import InternshipForm from './pages/User/Internship.js';
import ReviewForm from './pages/User/Ratingform';
import Subs from './pages/Subscribe/subs';
ReactGA.initialize('G-3L0S0NBRMP');

const App = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);

  console.log(process.env.REACT_APP_RAZPAY_KEY)



  
  
  return (
    <div>
     



     <div><Header/></div>

    <Routes>
    <Route path="/blog" element={<Blog />} />
    <Route path="/" element={<div style={{padding:'20px 0px 0px 0px'}}><Home/></div>} />
    <Route path="/Home" element={<div style={{padding:'20px 0px 0px 0px'}}><Home/></div>} />
   

      <Route path="/Service" element={<Service/>} />
      <Route path="/Portfolio" element={<Portfolio/>} />
      <Route path="/AboutUs" element={<AboutUs/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/Register" element={<Registertion/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/internship" element={<InternshipForm/>} />
    </Routes>
    

      
    </div>
  )
}

export default App