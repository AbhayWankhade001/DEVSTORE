import React, { useState, useEffect } from "react";

import './App.css'
import { Hero } from "./Hero";
import { Features } from "./Features";
import Process from "../../component/Process";
import TestoM from "../../component/TestoM";
import TechnologiesWeUse from "./TechnologiesWeUse";
import SliderP from "../../component/SliderP";
import  {Scroll}  from "./ScrollSection.tsx";
import SmoothScroll from "../../component/Mouse/SmoothScroll";
import { Contact } from "./Contact.js";
import Rating from "./Rating.js";
import { Footer } from "./Footer.js";

function Home() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 760);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 760);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const cards = [
    {
      image: 'https://via.placeholder.com/100',
      title: 'Card 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: 'https://via.placeholder.com/100',
      title: 'Card 2',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: 'https://via.placeholder.com/100',
      title: 'Card 3',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: 'https://via.placeholder.com/100',
      title: 'Card 4',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: 'https://via.placeholder.com/100',
      title: 'Card 5',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more cards as needed
  ];

  return (
    <div>



      {isDesktop ? (
    <>
    <SmoothScroll>
          <Hero/>
          <Features/>
          <TechnologiesWeUse/>
          <Process/>
          <div className="scrolll">
          <Scroll/>
          </div>  
         <Contact/>
         <Rating/>
        <Footer/>
          </SmoothScroll>
</>
      ) : (
        <>
       
       <Hero/>
          <Features/>
          <TechnologiesWeUse/>
          <Process/>
          <div className="scrolll">
          <Scroll/>
          </div>  
         <Contact/>
         <Rating/>
         <Footer/>

        </>
      )}
    </div>
  );
}

export default Home;
