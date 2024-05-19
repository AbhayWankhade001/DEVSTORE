import techLogo from './techLogo.png'
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import React, { useState , useRef, useEffect} from 'react';

const TechnologiesWeUse = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Ensures the animation triggers only once
      });
    return (
    <motion.div
    ref={ref}
      initial={{ opacity: 0}}
      animate={inView ? { opacity: 1} : { opacity: 0}}
      transition={{
        duration: 2,
        delay: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}>
    <div><section class="pt-10 pb-8 overflow-hidden bg-white sm:pt-16 lg:pt-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Unified Technology Hub</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Connect effortlessly with our expertise in various frameworks and languages.</p>
            <a
                href="#"
                title=""
                class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                role="button"
                style={{zIndex:'999999', position:"relative"}}
            >
                Check Our Portfolio
            </a>
        </div>
    </div>

    <img class="w-full min-w-full mx-auto mt-12 scale-150 max-w-7xl lg:min-w-0 lg:mt-0 lg:scale-100" src={techLogo} alt="" />
</section>
</div>
</motion.div>
  )
}

export default TechnologiesWeUse