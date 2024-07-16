// import React from 'react'

// const BlogGrid2 = () => {
//   return (
//     <div>
//                                                         <section class="py-24 ">
//         <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <h2 class="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Our latest  blog</h2>
//           <div class="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
//              <div class="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
//               <div class="flex items-center">
//                   <img src="https://pagedone.io/asset/uploads/1696244317.png" alt="blogs tailwind section" class="rounded-t-2xl w-full"/>
//               </div>
//               <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
//                   <span class="text-indigo-600 font-medium mb-3 block">Jan 01, 2023</span>
//                   <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">Clever ways to invest in product to organize your portfolio</h4>
//                   <p class="text-gray-500 leading-6 mb-10">Discover smart investment strategies to streamline and organize your portfolio..</p>
//                   <a href="javascript:;" class="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</a>
//               </div>
//              </div>
//              <div class="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
//               <div class="flex items-center">
//                   <img src="https://pagedone.io/asset/uploads/1696244340.png" alt="blogs tailwind section" class="rounded-t-2xl w-full"/>
//               </div>
//               <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
//                   <span class="text-indigo-600 font-medium mb-3 block">Feb 01, 2023</span>
//                   <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">How to grow your profit through systematic investment with us</h4>
//                   <p class="text-gray-500 leading-6 mb-10">Unlock the power of systematic investment with us and watch your profits soar. Our..</p>
//                   <a href="javascript:;" class="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</a>
//               </div>
//              </div>
//              <div class="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
//               <div class="flex items-center">
//                   <img src="https://pagedone.io/asset/uploads/1696244356.png" alt="blogs tailwind section" class="rounded-t-2xl w-full"/>
//               </div>
//               <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
//                   <span class="text-indigo-600 font-medium mb-3 block">Mar 01, 20233</span>
//                   <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">How to analyze every holdings of your portfolio</h4>
//                   <p class="text-gray-500 leading-6 mb-10">Our comprehensive guide will equip you with the tools and insights needed to..</p>
//                   <a href="javascript:;" class="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</a>
//               </div>
//              </div>
//           </div>
//         </div>
//     </section>
                                            
//     </div>
//   )
// }

// export default BlogGrid2


import React, { useEffect, useState, useRef } from 'react';

const BlogGrid2 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchingBD();
  }, []);

  const fetchFeaturedMedia = async (postId) => {
    try {
      const response = await fetch(`https://artizz.in/wp-json/wp/v2/media?parent=${postId}`);
      const data = await response.json();
      return data.length > 0 ? data[0].source_url : null;
    } catch (error) {
      console.log('Error fetching featured media for post:', error);
      return null;
    }
  };

  const fetchingBD = async () => {
    try {
      const response = await fetch('https://artizz.in/wp-json/wp/v2/posts?per_page=3');
      const data = await response.json();
      
      const updatedPosts = await Promise.all(
        data.map(async (post) => {
          const featuredMediaUrl = await fetchFeaturedMedia(post.id);
          return { ...post, featuredMediaUrl };
        })
      );

      setPosts(updatedPosts);
    } catch (error) {
      console.log('Error fetching blog data:', error);
    }
  };

  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Our Latest Blog</h2>
          <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {posts.map(post => (
              <div key={post.id} className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                <div className="flex items-center">
                  <img src={post.featuredMediaUrl || 'default-image-url.jpg'} alt={post.title.rendered} className="rounded-t-2xl h-[15rem] w-full" />
                </div>
                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                  <span className="text-indigo-600 font-medium mb-3 block">{new Date(post.date).toLocaleDateString()}</span>
                  <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h4>
                  <p className="text-gray-500 leading-6 mb-10" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                  <a href={post.link} className="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogGrid2;
