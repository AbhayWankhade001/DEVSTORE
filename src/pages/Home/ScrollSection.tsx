import { useScroll, useTransform, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Importing useInView
import { users } from './user.js';
import "./scroll.css"
import React, { useEffect, useState } from 'react';


export const Scroll = () => {
  const [HeightS, setHeightS] = useState(1);

  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation triggers only once
  });
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width <= 700) {
        // Mobile
        setHeightS(200);
      } else if (width <= 1024) {
        // Tablet
        setHeightS(150);
      } else {
        // Desktop
        setHeightS(100);
      }
    };

    // Set dimensions initially
    updateDimensions();

    // Update dimensions on window resize
    window.addEventListener('resize', updateDimensions);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
return (
<motion.div
ref={ref}
  initial={{ opacity: 0}}
  animate={inView ? { opacity: 1} : { opacity: 0}}
  transition={{
    duration: 0.4,
    delay: 0.2,
    ease: [0, 0.71, 0.2, 1.01],
  }}>
    <div className="flex flex-col bg-white h-[30vh]">
      <ScrollCore />
    </div>
    </motion.div>
  );
};

export const ScrollCore = () => {
  const { scrollYProgress } = useScroll();
  const { ref, inView } = useInView(); // Using useInView to detect if the component is in view

  const rotate = useTransform(
    scrollYProgress,
    [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9, 1], // Divide the range [0, 1] into three parts: [0, 0.5], [0.5, 1]
    [0,0,0,0,360,80,0,0,0,0, -0] // Corresponding output values for each range
  );
    const scale = useTransform(scrollYProgress, [0,0.5,0.8, 1], [0, 1, 1.3 ,0 ]);
  const translate = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const translateH = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const transitionDuration = `transform ${0.1 / scrollYProgress}s ease-in-out`;

  // Adjusting rotate value based on inView 
  const rotatedValue = inView ? 0 : rotate;

  return (
    <div className="h-[25vh] flex items-center justify-center">
      <div
        className="w-full relative smallD"
        style={{
          perspective: '3000px',
        }}
        ref={ref} // Attaching the ref
      >
        <Header translate={translateH} />
        <Card rotate={rotatedValue} translate={translate} scale={scale} transitionDuration={transitionDuration} />
      </div>
    </div>
  );
};

const Header = ({ translate }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
        transition: 'transform 1s ease-in-out',
      }}
      className="max-w-5xl mx-auto text-center"
    >
      <h1 className="text-4xl font-semibold">
        Unleash the power of <br />
        <span className="text-5xl lg:text-6xl  font-bold mt-1 leading-none" style={{position:"relative", zIndex:"-99999999"}}>
         Our Portfolio
        </span>
      </h1>
    </motion.div>
  );
};
const Card = ({ rotate, scale, translate ,transitionDuration}: {  scale: any; translate: any; rotate: any; transitionDuration: any }) => {


    return (
      <motion.div
        style={{
          rotateX: rotate,
          transition: transitionDuration,
          scale,
          boxShadow:
            '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
        }}
        className="max-w-5xl -mt-12 mx-auto h-[30rem]  w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl innerD"
      >
        <div className="bg-gray-100 h-full w-full rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden content1 c2" style={{overflow:"scroll", scrollbarWidth: "none"}}>
          {users.map((user, idx) => (
            <motion.div
              key={`user-${idx}`}
              className="bg-white rounded-md cursor-pointer relative ml-0"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }}
            >
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                {user.badge}
              </div>
              <img src={user.image} className="rounded-tr-md rounded-tl-md text-sm" alt={user.name} />
              <div className="p-4">
                <h1 className="font-semibold text-sm">{user.name}</h1>
                <h2 className="text-gray-500 text-xs">{user.designation}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };
