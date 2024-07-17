
//  import React, { useState , useRef, useEffect} from 'react';
//  import Slider from 'react-slick';
//  import 'slick-carousel/slick/slick.css';
//  import 'slick-carousel/slick/slick-theme.css';
//  import'./BlogHero.css'
//  import { useInView } from 'react-intersection-observer';
//  const cards = [
//      {
//        imgSrc: 'https:landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png',
//        title: 'How to write content about your photographs',
//        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.',
//        category: 'Growth',
//        duration: '7 Mins Read',
//      },
//      {
//        imgSrc: 'https:landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png',
//        title: 'How to write content about your photographs',
//        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.',
//        category: 'Growth',
//        duration: '7 Mins Read',
//      },
//      {
//        imgSrc: 'https:landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-2.png',
//        title: 'How to write content about your photographs',
//        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.',
//        category: 'Growth',
//        duration: '7 Mins Read',
//      },
//      {
//        imgSrc: 'https:landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-3.png',
//        title: 'How to write content about your photographs',
//        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.',
//        category: 'Growth',
//        duration: '7 Mins Read',
//      },
//    ];
//  const BlogHero = () => {

//    const sliderRef = useRef(null);
//    const [blogItemHero , setblogItemHero] = useState([]);


//    const handleBeforeChange = (current, next) => {
//      if (sliderRef.current && sliderRef.current.innerSlider) {
//        const totalSlides = sliderRef.current.innerSlider.state.slideCount;

//        if (current === totalSlides - 1 && next === 0) {
//           If currently on the last slide and user tries to go to the next slide
//           Manually move to the first slide without reversing
//          sliderRef.current.slickGoTo(0);
//          return false;  Prevent default behavior
//        } else if (current === 0 && next === totalSlides - 1) {
//           If currently on the first slide and user tries to go to the previous slide
//           Manually move to the last slide without reversing
//          sliderRef.current.slickGoTo(totalSlides - 1);
//          return false;  Prevent default behavior
//        }
//      }
//    };



//    useEffect(()=>{
//      fetchingBD()
//    }, [])


//    const fetchFeaturedMedia = async (postId) => {
//      try {
//        const response = await fetch(`https:artizz.in/wp-json/wp/v2/media?parent=${postId}`);
//        const data = await response.json();
//         Return the first media item if available, otherwise return null
//        return data.length > 0 ? data[0].source_url : null;
//      } catch (error) {
//        console.log('Error fetching featured media for post:', error);
//        return null;
//      }
//    };


//    const fetchingBD = async () => {
//      try {
//        const response = await fetch('https:artizz.in/wp-json/wp/v2/posts');
//        const data = await response.json();
//        setblogItemHero(data);
//        console.log(data);

//         Fetch and update featured media for each blog item
//        const updatedBlogItems = await Promise.all(data.map(async (item) => {
//          const featuredMediaUrl = await fetchFeaturedMedia(item.id);
//          return { ...item, featuredMediaUrl };
//        }));

//        console.log('Updated Blog Items:', updatedBlogItems);
//        setblogItemHero(updatedBlogItems);
//      } catch (error) {
//        console.log('Error fetching blog data:', error);
//      }
//    };

//       Function to remove HTML tags and limit text to 20 words followed by ellipsis
//      const stripHtmlAndLimitTextHero = (html) => {
//         Remove HTML tags using a regular expression
//        const plainText = html.replace(/(<([^>]+)>)/gi, '');
//         Split the text into words
//        const words = plainText.split(' ');
//         Limit the number of words to 20
//        const limitedText = words.slice(0, 20).join(' ');
//         Append ellipsis if there are more words
//        return words.length > 20 ? `${limitedText} ...` : limitedText;
//      };

//    const settings = {
//      dots: true,
//      infinite: true,
//      slidesToShow: 1,
//      slidesToScroll: 1,
//      autoplay: true,
//      autoplaySpeed: 5000,
//      beforeChange: handleBeforeChange,
//      pauseOnHover: true
//    };
//       Adjusting slidesToShow based on screen width
//      if (window.innerWidth < 768) {  For mobile devices with a maximum width of 767px
//        settings.slidesToShow = 1;
//      } else {  For desktop devices
//        settings.slidesToShow = 1;
//      }



//      const [ref, inView] = useInView({
//        triggerOnce: true,  Ensures the animation triggers only once
//      });




//    return (
//      <div>
//          <div class="">

//      <section class="relative bg-gray-50 pt-36">
//          <div class="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2">
//              <div class="lg:pr-8">
//                  <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
//                      <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
//                          Community of designers <span class="inline"><img class="inline w-auto h-8 sm:h-10 lg:h-12" src="https:landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-1.svg" alt="shape-1" /></span> made by designers
//                          <span class="inline"><img class="inline w-auto h-8 sm:h-10 lg:h-11" src="https:landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-2.svg" alt="shape-2" /></span>
//                      </h1>
//                      <p class="mt-6 text-base font-normal leading-7 text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>
//                      <svg class="w-auto h-4 mt-8 text-gray-300" viewbox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http:www.w3.org/2000/svg">
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"></line>
//                          <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"></line>
//                      </svg>
//                      <p class="mt-8 text-base font-bold text-gray-900">Join to get free updates every week</p>
//                      <form action="#" method="post" class="relative mt-4">
//                          <div class="absolute transitiona-all duration-1000 opacity-30 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
//                          <div class="relative space-y-4 sm:flex sm:space-y-0 sm:items-end">
//                              <div class="flex-1">
//                                  <label for="" class="sr-only">Email address</label>
//                                  <div>
//                                      <input
//                                          type="email"
//                                          name=""
//                                          id=""
//                                          class="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none sm:text-sm focus:ring-gray-900 focus:border-gray-900"
//                                          placeholder="Enter email address"
//                                      />
//                                  </div>
//                              </div>
//                              <button
//                                  type="button"
//                                  class="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//                              >
//                                  Join Now
//                              </button>
//                          </div>
//                      </form>
//                  </div>
//              </div>
//          </div>
//          <div class="pb-8 lg:absolute lg:inset-0 lg:pb-0 css09 ">
//          <div class="flex flex-col  justify-center  lg:absolute lg:inset-y-0 lg:right-0 lg:w-[45%]">

//          <Slider {...settings} className='css010'>
//          {blogItemHero.map((card, index) => (
//      <div key={index} className="relative snap-start scroll-ml-6 css08 shrink-0 first:pl-6 last:pr-6" style={{ marginLeft: '-5px', marginRight: '-5px' }}>
//      <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
//                <a href="#" title="" className="flex shrink-0 aspect-w-4 aspect-h-3">
//                  <img
//                    className="css07 transition-all duration-200 transform group-hover:scale-110"
//                    src={card.featuredMediaUrl}
//                    alt={`blogs tailwind section ${index}`}
//                  />
//                </a>
//                <div className="flex-1 px-4 py-5 sm:p-6">
//                  <a href="#" title="" className="">
//                    <p className="text-lg font-bold text-gray-900">{card.title.rendered}</p>
//                    <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">{stripHtmlAndLimitTextHero(card.excerpt.rendered)}</p>
//                  </a>
//                </div>
//                <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
//                  <div className="flex items-center justify-between">
//                    <div className="flex items-center space-x-2">
//                      <p className="text-sm font-medium text-gray-900">
//                        <a href="#" title="" className="">
//                          {card.category}
//                        </a>
//                      </p>
//                      <span className="text-sm font-medium text-gray-900">•</span>
//                      <p className="text-sm font-medium text-gray-900">{card.duration}</p>
//                    </div>
//                    <a href={card.link} title="" className="" role="button">
//                      <svg
//                        className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
//                        xmlns="http:www.w3.org/2000/svg"
//                        viewBox="0 0 24 24"
//                        strokeWidth="2"
//                        stroke="currentColor"
//                        fill="none"
//                        strokeLinecap="round"
//                        strokeLinejoin="round"
//                      >
//                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                        <line x1="17" y1="7" x2="7" y2="17"></line>
//                        <polyline points="8 7 17 7 17 16"></polyline>
//                      </svg>
//                    </a>
//                  </div>
//                </div>
//              </div>
//            </div>
//          ))}
//        </Slider>


//              </div>
//          </div>
//      </section>
//  </div>

//      </div>
//    )
//  }

//  export default BlogHero

































import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BlogGrid.css'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const blogItems = [
  {
    imgSrc: 'https:pagedone.io/asset/uploads/1696244059.png',
    title: 'Clever ways to invest in product to organize your portfolio',
    description: 'Discover smart investment strategies to streamline and organize your portfolio. Explore innovative approaches to optimize your...',
    link: '#',
  },
  {
    imgSrc: 'https:pagedone.io/asset/uploads/1696244074.png',
    title: 'How to grow your profit through systematic investment with us',
    description: 'Unlock the power of systematic investment with us and watch your profits soar. Our expert team will guide you on the path to financial..',
    link: '#',
  },
  {
    imgSrc: 'https:pagedone.io/asset/uploads/1696244074.png',
    title: 'How to grow your profit through systematic investment with us',
    description: 'Unlock the power of systematic investment with us and watch your profits soar. Our expert team will guide you on the path to financial..',
    link: '#',
  },
  {
    imgSrc: 'https:pagedone.io/asset/uploads/1696244074.png',
    title: 'How to grow your profit through systematic investment with us',
    description: 'Unlock the power of systematic investment with us and watch your profits soar. Our expert team will guide you on the path to financial..',
    link: '#',
  },
  //Add more blog items as needed
];

const BlogHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blogItems, setblogItems] = useState([]);
  const slidRef = useRef(null);
  const [featuredMedia, setFeaturedMedia] = useState({});


  useEffect(() => {
    fetchingBD()
  }, [])


  const fetchFeaturedMedia = async (postId) => {
    try {
      const response = await fetch(`https:artizz.in/wp-json/wp/v2/media?parent=${postId}`);
      const data = await response.json();
      //  Return the first media item if available, otherwise return null
      return data.length > 0 ? data[0].source_url : null;
    } catch (error) {
      console.log('Error fetching featured media for post:', error);
      return null;
    }
  };

  const fetchingBD = async () => {
    try {
      const response = await fetch('https:artizz.in/wp-json/wp/v2/posts');
      const data = await response.json();
      setblogItems(data);
      console.log(data);

      //  Fetch and update featured media for each blog item
      const updatedBlogItems = await Promise.all(data.map(async (item) => {
        const featuredMediaUrl = await fetchFeaturedMedia(item.id);
        return { ...item, featuredMediaUrl };
      }));

      console.log('Updated Blog Items:', updatedBlogItems);
      setblogItems(updatedBlogItems);
    } catch (error) {
      console.log('Error fetching blog data:', error);
    }
  };

  //  Inside the JSX, update the img src attribute to use blogItem.featuredMediaUrl



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => setCurrentSlide(next),

  };



  // Adjusting slidesToShow based on screen width
  if (window.innerWidth < 768) { // For mobile devices with a maximum width of 767px
    settings.slidesToShow = 1
    settings.slidesToScroll = 1
  } else { // For desktop devices
    settings.slidesToShow = 1
    settings.slidesToScroll = 1

  }


  const handlePrev = (e) => {
    e.preventDefault();
    console.log('sliderRef:', slidRef);
    if (slidRef.current && slidRef.current.slickPrev) {
      slidRef.current.slickPrev();
    }
  };

  const handleNex = (e) => {
    e.preventDefault();
    console.log('sliderRef:', slidRef);
    if (slidRef.current && slidRef.current.slickNext) {
      slidRef.current.slickNext();
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,  //Ensures the animation triggers only once
  });



  //  Function to remove HTML tags and limit text to 20 words followed by ellipsis
  const stripHtmlAndLimitText = (html) => {
    //  Remove HTML tags using a regular expression
    const plainText = html.replace(/(<([^>]+)>)/gi, '');
    //  Split the text into words
    const words = plainText.split(' ');
    //  Limit the number of words to 20
    const limitedText = words.slice(0, 20).join(' ');
    //  Append ellipsis if there are more words
    return words.length > 20 ? `${limitedText} ...` : limitedText;
  };

  return (
    <motion.div
      ref={ref}

      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}>
      <div>
        <div class="">

          <section class="relative bg-gray-50 pt-36">
            <div class="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2">
              <div class="lg:pr-8">
                <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                  <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                    Community of designers <span class="inline"><img class="inline w-auto h-8 sm:h-10 lg:h-12" src="https:landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-1.svg" alt="shape-1" /></span> made by designers
                    <span class="inline"><img class="inline w-auto h-8 sm:h-10 lg:h-11" src="https:landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-2.svg" alt="shape-2" /></span>
                  </h1>
                  <p class="mt-6 text-base font-normal leading-7 text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>
                  <svg class="w-auto h-4 mt-8 text-gray-300" viewbox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http:www.w3.org/2000/svg">
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"></line>
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"></line>
                  </svg>
                  <p class="mt-8 text-base font-bold text-gray-900">Join to get free updates every week</p>
                  <form action="#" method="post" class="relative mt-4">
                    <div class="absolute transitiona-all duration-1000 opacity-30 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                    <div class="relative space-y-4 sm:flex sm:space-y-0 sm:items-end">
                      <div class="flex-1">
                        <label for="" class="sr-only">Email address</label>
                        <div>
                          <input
                            type="email"
                            name=""
                            id=""
                            class="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                            placeholder="Enter email address"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        class="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      >
                        Join Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="pb-8 lg:absolute lg:inset-0 lg:pb-0 css09 ">
              <div class="flex flex-col  justify-center  lg:absolute lg:inset-y-0 lg:right-0 lg:w-[45%]">
                <Slider ref={slidRef} {...settings} >
                  {blogItems.map((blogItem, index) => (
                    <div key={index} className="flex css02 justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
                      <div className="w-full max-lg:max-w-xl lg:w-1/2 group">
                        <div className="flex items-center mb-9">
                          <img src={blogItem.featuredMediaUrl} alt={`blogs tailwind section ${index}`} className="rounded-2xl css06" />
                        </div>
                        <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">{blogItem.title.rendered}</h3>
                        <div className="text-gray-500 leading-6 transition-all duration-500 mb-8">{stripHtmlAndLimitText(blogItem.excerpt.rendered)}</div>
                        <a href={blogItem.link} className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold">
                          Read more
                          <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http:www.w3.org/2000/svg">
                            <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="#4338CA" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>

            </div>
          </section>


        </div>
        </div>
    </motion.div>
  );
};

export default BlogHero;
