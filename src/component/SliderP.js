import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftArrow from './left.png';

const SliderP = ({ cards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [canScrollUp, setCanScrollUp] = useState(true);
  const [canScrollDown, setCanScrollDown] = useState(true);
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    ref: sliderRef,
  };

  const handleKeyDown = (e) => {
    // Handle keydown events if necessary
  };

  useEffect(() => {
    const handleScroll = () => {
      const slider = sliderRef.current;

      if (currentSlide === 0) {
        setCanScrollUp(true);
        setCanScrollDown(true);
      } else if (currentSlide === cards.length - 1) {
        setCanScrollUp(true);
        setCanScrollDown(false);
      } else {
        setCanScrollUp(false);
        setCanScrollDown(false);
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSlide, cards]);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative overflow-visible" onKeyDown={handleKeyDown} tabIndex="0">
      <div className="h-auto w-[97.666667%]">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index}>
              <div className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="text-center">
                    <img src={card.image} alt={card.title} className="object-cover w-32 h-32 mx-auto rounded-full" />
                    <p className="mt-6 text-lg font-semibold text-black">{card.title}, <span className="font-normal text-gray-600">{card.location}</span></p>
                    <blockquote className="max-w-xl mx-auto mt-7">
                      <p className="text-xl leading-relaxed text-black">{card.text}</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gray-200 h-1">
        <div
          className="bg-blue-500 h-full"
          style={{
            width: `${((currentSlide + 1) / cards.length) * 100}%`,
            transition: `width 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s`,
          }}
        />
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12"
        onClick={goToPrev}
        disabled={!canScrollUp}
      >
        <img src={LeftArrow} alt="previous" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12"
        onClick={goToNext}
        disabled={!canScrollDown}
      >
        <img src={LeftArrow} alt="next" style={{ rotate: '180deg' }} />
      </button>
    </div>
  );
};

export default SliderP;
