import React, { useState, useRef, useEffect } from 'react';
import vokitoki from './Vokitoki.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../Blog/BlogGrid.css';
import Star from './Star.js';
import logo from './Artizz_Dev_Bg_Removed.png'
import './slider.css'
const Rating = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    slidesToScroll: 1,
    slidesToShow :1,
    infinite: true,
    arrows: false,
    beforeChange: (current, next) => handleBeforeChange(current, next),

  };

  // Adjusting slidesToShow based on screen width
  if (window.innerWidth < 768) {
    // For mobile devices with a maximum width of 767px
    settings.slidesToShow = 1;
  } else {
    // For desktop devices
    settings.slidesToShow = 2;
  }

  const handlePrevSlide = (e) => {
    e.preventDefault();
    if (sliderRef.current && sliderRef.current.slickPrev) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextSlide = (e) => {
    e.preventDefault();
    if (sliderRef.current && sliderRef.current.slickNext) {
      const currentSlideIndex = sliderRef.current.innerSlider.state.currentSlide;
      const totalSlides = sliderRef.current.innerSlider.state.slideCount;
      if (currentSlideIndex === totalSlides - 1) {
        // Go to the first slide smoothly without reversing
        sliderRef.current.slickGoTo(0, true);
      } else {
        // Go to the next slide
        sliderRef.current.slickNext();
      }
    }
  };
  


  const handleBeforeChange = (current, next) => {
    const totalSlides = sliderRef.current.innerSlider.state.slideCount;
  
    if (current === totalSlides - 1 && next === 0) {
      // If currently on the last slide and user tries to go to the next slide
      // Manually move to the first slide without reversing
      sliderRef.current.slickGoTo(0);
      return false; // Prevent default behavior
    } else if (current === 0 && next === totalSlides - 1) {
      // If currently on the first slide and user tries to go to the previous slide
      // Manually move to the last slide without reversing
      sliderRef.current.slickGoTo(totalSlides - 1);
      return false; // Prevent default behavior
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation triggers only once
  })

  const testimonials = [
    {
      name: "Vokitoki",
      title: "Startup",
      quote: "Very patient in understanding the requirements, suggesting designs, and changes until the site is completed up to satisfaction.",
      rating: '5',
      imgs: vokitoki
    },
    {
      name: "Abhay Gupta",
      title: "SEO expert",
      quote: "My experience was absolutely amazing!! He offered a personal and professional approach along with magnificent work ethic and detailed work.",
      rating: '5',
      imgs:logo
    }
    ,
    {
      name: "Abhay Gupta",
      title: "SEO expert",
      quote: "My experience was absolutely amazing!! He offered a personal and professional approach along with magnificent work ethic and detailed work.",
      rating: '5',
      imgs:logo
    }
  ];
  
 


  return (
    <motion.div
    ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-4">
            <h2 className="text-4xl font-bold text-gray-900 lg:text-left text-center">Our Rating </h2>
         
            <div class="flex items-center lg:justify-start justify-center gap-4">
            <button onClick={(e) => handlePrevSlide(e)} id="slider-button-left" class="slider-button group flex justify-center items-center border border-solid border-[#ffc460] w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 " data-carousel-prev>
                    <svg class="h-6 w-6 text-[#ffc460] group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        
                </button>
                <button onClick={(e) => handleNextSlide(e)} id="slider-button-right" class="slider-button group flex justify-center items-center border border-solid border-[#ffc460] w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600" data-carousel-next>
                    <svg class="h-6 w-6 text-[#ffc460] group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        
                </button>
            </div>
         
          </div>
          <Slider ref={sliderRef} {...settings} className='slid1'>

          {testimonials.map((data, index) => (
            <div key={index}>
            <div class="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full max-w-sm hover:border-[#ffc460] mx-auto md:mr-0">
                <div class="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-[#ffc460]">
                <Star rating={data.rating} />
                </div>
                <p class="text-lg text-gray-500 leading-8 h-32 transition-all duration-500 mb-9 group-hover:text-gray-800">
                {data.quote}
                </p>
                <div class="flex items-center gap-5">
                    <img src={data.imgs} className='rounder w-10 h-10' alt="Emily image"/>
                    <div class="grid gap-1">
                        <h5 class="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600">{data.name}</h5>
                        <span class="text-sm leading-6 text-gray-500">{data.title}</span>
                    </div>
                </div>
            </div>
            </div>
          ))}
          </Slider>
        </div>
      </section>
    </motion.div>
  );
};

export default Rating;

