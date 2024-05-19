import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from 'react-intersection-observer';

const BlogHero = () => {
  const sliderRef = useRef(null);
  const [HblogItem, setHblogItems] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation triggers only once
  });

  useEffect(() => {
    fetchingBD();
  }, []);

  const HfetchFeaturedMedia = async (postId) => {
    try {
      const response = await fetch(`https://artizz.in/wp-json/wp/v2/media?parent=${postId}`);
      const data = await response.json();
      // Return the first media item if available, otherwise return null
      return data.length > 0 ? data[0].source_url : null;
    } catch (error) {
      console.log('Error fetching featured media for post:', error);
      return null;
    }
  };

  const fetchingBD = async () => {
    try {
      const response = await fetch('https://artizz.in/wp-json/wp/v2/posts');
      const data = await response.json();
      // Fetch and update featured media for each blog item
      const updatedBlogItems = await Promise.all(data.map(async (item) => {
        const featuredMediaUrl = await HfetchFeaturedMedia(item.id);
        return { ...item, featuredMediaUrl };
      }));

      console.log('Updated Blog Items:', updatedBlogItems);
      setHblogItems(updatedBlogItems);
    } catch (error) {
      console.log('Error fetching blog data:', error);
    }
  };

  const handleBeforeChange = (current, next) => {
    if (sliderRef.current && sliderRef.current.innerSlider) {
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
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: window.innerWidth < 768 ? 1 : 2, // Adjust slidesToShow based on screen width
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    beforeChange: handleBeforeChange,
  };

  // Function to remove HTML tags and limit text to 20 words followed by ellipsis
  const HstripHtmlAndLimitText = (html) => {
    // Remove HTML tags using a regular expression
    const plainText = html.replace(/(<([^>]+)>)/gi, '');
    // Split the text into words
    const words = plainText.split(' ');
    // Limit the number of words to 20
    const limitedText = words.slice(0, 20).join(' ');
    // Append ellipsis if there are more words
    return words.length > 20 ? `${limitedText} ...` : limitedText;
  };

  return (
    <div>
      <div className="">
        <section className="relative bg-gray-50 pt-36">
          <div className="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                  Community of designers{' '}
                  <span className="inline">
                    <img className="inline w-auto h-8 sm:h-10 lg:h-12" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-1.svg" alt="shape-1" />
                  </span>{' '}
                  made by designers
                  <span className="inline">
                    <img className="inline w-auto h-8 sm:h-10 lg:h-11" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-2.svg" alt="shape-2" />
                  </span>
                </h1>
                <p className="mt-6 text-base font-normal leading-7 text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.
                </p>
                <svg className="w-auto h-4 mt-8 text-gray-300" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)" />
                  <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)" />
                  <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)" />
                  <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)" />
                  <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)" />
                  <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)" />
                  <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)" />
                  <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)" />
                  <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)" />
                  <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)" />
                  <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)" />
                  <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)" />
                  <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)" />
                  <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)" />
                </svg>
              </div>
            </div>
            <div ref={ref} className={`slider-container max-w-3xl mx-auto mt-8 lg:mt-0 lg:max-w-none ${inView ? 'animate' : ''}`}>
              <Slider ref={sliderRef} {...settings}>
                {HblogItem.map((blogItem) => (
                  <div key={blogItem.id} className="pr-2 lg:pr-5">
                    <div className="flex flex-col overflow-hidden bg-white shadow-lg rounded-xl">
                      {blogItem.featuredMediaUrl && (
                        <img className="flex-shrink-0 object-cover w-full h-56" src={blogItem.featuredMediaUrl} alt="" />
                      )}
                      <div className="flex flex-col justify-between flex-1 p-6">
                        <div className="flex-1">
                          <a href={blogItem.link} className="block mt-2">
                            <p className="text-xl font-semibold text-neutral-600">
                              {blogItem.title.rendered}
                            </p>
                            <p className="mt-3 text-base font-normal text-gray-500">
                              {HstripHtmlAndLimitText(blogItem.content.rendered)}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogHero;
