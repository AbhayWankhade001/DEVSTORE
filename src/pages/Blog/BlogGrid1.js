// import React from 'react'

// const BlogGrid1 = () => {
//   return (
//     <div>
//                                                         <section class="py-24 ">
//         <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div class="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
//               <div class="w-full flex justify-between flex-col lg:w-2/5">
//                   <div class="block lg:text-left text-center">
//                   <h2 class="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">Our latest <span class=" text-indigo-600">blogs</span></h2>
//                   <p class="text-gray-500 mb-10  max-lg:max-w-xl max-lg:mx-auto">Welcome to our blog section, where knowledge meets inspiration. Explore insightful articles, expert tips, and the latest trends in our field.</p>
//                   <a href="javascript:;" class="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100">View All</a>
//                 </div>
//                <div class="flex items-center lg:justify-start justify-center lg:mt-0 mt-4 gap-4">
//                   <button id="slider-button-left" class="slider-button group flex justify-center items-center border border-solid border-indigo-600 w-14 h-14 transition-all duration-500 rounded-full hover:bg-indigo-600" data-carousel-prev>
//                       <svg class="h-6 w-6 text-indigo-600 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                           </svg>
                          
//                   </button>
//                   <button id="slider-button-right" class="slider-button group flex justify-center items-center border border-solid border-indigo-600 w-14 h-14 transition-all duration-500 rounded-full hover:bg-indigo-600" data-carousel-next>
//                       <svg class="h-6 w-6 text-indigo-600 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                           </svg>
                          
//                   </button>
//               </div>
//               </div>
//               <div class="w-full lg:w-3/5">
//                   <div class="flex justify-center items-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
//                       <div class="w-full max-lg:max-w-xl lg:w-1/2 group">
//                           <div class="flex items-center mb-9">
//                               <img src="https://pagedone.io/asset/uploads/1696244059.png" alt="blogs tailwind section" class="rounded-2xl w-full"/>
//                           </div>
//                           <h3 class="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">Clever ways to invest in product to organize your portfolio</h3>
//                           <p class="text-gray-500 leading-6 transition-all duration-500 mb-8">
//                               Discover smart investment strategies to streamline and organize your portfolio. Explore innovative approaches to optimize your...
//                           </p>
//                           <a href="javascript:;" class="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold">
//                               Read more<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                   <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="#4338CA" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
//                                   </svg>
//                                 </a>
//                       </div>
//                       <div class="w-full max-lg:max-w-xl lg:w-1/2 group">
//                           <div class="flex items-center mb-9">
//                               <img src="https://pagedone.io/asset/uploads/1696244074.png" alt="blogs tailwind section" class="rounded-2xl w-full"/>
//                           </div>
//                           <h3 class="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">How to grow your profit through systematic investment with us</h3>
//                           <p class="text-gray-500 leading-6 transition-all duration-500 mb-8">
//                               Unlock the power of systematic investment with us and watch your profits soar. Our expert team will guide you on the path to financial..
//                           </p>
//                           <a href="javascript:;" class="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold">
//                               Read more<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                   <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="#4338CA" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
//                                   </svg>
//                                 </a>
//                       </div>
//                   </div>
//               </div>
//           </div>
//         </div>
//     </section>
                                            
//     </div>
//   )
// }

// export default BlogGrid1







import React, { useState , useRef, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BlogGrid.css'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


// const blogItems = [
//   {
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244059.png',
//     title: 'Clever ways to invest in product to organize your portfolio',
//     description: 'Discover smart investment strategies to streamline and organize your portfolio. Explore innovative approaches to optimize your...',
//     link: '#',
//   },
//   {
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244074.png',
//     title: 'How to grow your profit through systematic investment with us',
//     description: 'Unlock the power of systematic investment with us and watch your profits soar. Our expert team will guide you on the path to financial..',
//     link: '#',
//   },
//   {
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244074.png',
//     title: 'How to grow your profit through systematic investment with us',
//     description: 'Unlock the power of systematic investment with us and watch your profits soar. Our expert team will guide you on the path to financial..',
//     link: '#',
//   },
//   {
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244074.png',
//     title: 'How to grow your profit through systematic investment with us',
//     description: 'Unlock the power of systematic investment with us and watch your profits soar. Our expert team will guide you on the path to financial..',
//     link: '#',
//   },
//   // Add more blog items as needed
// ];

const BlogGrid1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blogItems , setblogItems] = useState([]);
    const slidRef = useRef(null);
    const [featuredMedia, setFeaturedMedia] = useState({});


    useEffect(()=>{
      fetchingBD()
    }, [])


    const fetchFeaturedMedia = async (postId) => {
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
        setblogItems(data);
        console.log(data);
    
        // Fetch and update featured media for each blog item
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
    
    // Inside the JSX, update the img src attribute to use blogItem.featuredMediaUrl
    


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
    settings.slidesToScroll= 1
  } else { // For desktop devices
    settings.slidesToShow = 1
    settings.slidesToScroll= 1

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
  triggerOnce: true, // Ensures the animation triggers only once
});



  // Function to remove HTML tags and limit text to 20 words followed by ellipsis
  const stripHtmlAndLimitText = (html) => {
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
    <motion.div
    ref={ref}
      
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}>
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 css01" >
          <div className="flex justify-center  md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
            <div className="w-full flex justify-between flex-col lg:w-2/5 Blogorg">
              <div className="block lg:text-left text-center">
                <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">Our latest <span className=" text-indigo-600">blogs</span></h2>
                <p className="text-gray-500 mb-10 max-lg:max-w-xl max-lg:mx-auto">Welcome to our blog section, where knowledge meets inspiration. Explore insightful articles, expert tips, and the latest trends in our field.</p>
                {/* <a href="javascript:;" style={{dispaly:"none"}} className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100" >View All</a> */}
              </div>
              <div className="flex items-center lg:justify-start justify-center lg:mt-0 mt-4 gap-4 pt-20">
                <button onClick={(e) => handlePrev(e)}  id="slider-button-left" className="slider-button group flex justify-center items-center border border-solid border-indigo-600 w-14 h-14 transition-all duration-500 rounded-full hover:bg-indigo-600" data-carousel-prev>
                  <svg className="h-6 w-6 text-indigo-600 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <button onClick={(e) => handleNex(e)} id="slider-button-right" className="slider-button group flex justify-center items-center border border-solid border-indigo-600 w-14 h-14 transition-all duration-500 rounded-full hover:bg-indigo-600" data-carousel-next>
                  <svg className="h-6 w-6 text-indigo-600 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 slick-C" style={{width:'45rem'}}>
        <Slider ref={slidRef} {...settings} >
          {blogItems.map((blogItem, index) => (
            <div key={index} className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
              <div className="w-full max-lg:max-w-xl lg:w-1/2 group">
                <div className="flex items-center mb-9">
                  <img src={blogItem.featuredMediaUrl} alt={`blogs tailwind section ${index}`} className="rounded-2xl w-full" />
                </div>
                <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">{blogItem.title.rendered}</h3>
                <div className="text-gray-500 leading-6 transition-all duration-500 mb-8">{stripHtmlAndLimitText(blogItem.excerpt.rendered)}</div>
                <a href={blogItem.link} className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold">
                  Read more
                  <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </motion.div>
  );
};

export default BlogGrid1;
