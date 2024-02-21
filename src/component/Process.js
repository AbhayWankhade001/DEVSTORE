// import React from 'react'

// const Process = () => {
//   return (
//     <div><section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
//     <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div class="max-w-2xl mx-auto text-center">
//             <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How do we create success</h2>
//             <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
//         </div>

//         <ul class="max-w-md mx-auto mt-16 space-y-12">
//             <li class="relative flex items-start">
//                 <div class="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

//                 <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
//                     <svg class="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                     </svg>
//                 </div>
//                 <div class="ml-6">
//                     <h3 class="text-lg font-semibold text-black">Create a free account</h3>
//                     <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
//                 </div>
//             </li>

//             <li class="relative flex items-start">
//                 <div class="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

//                 <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
//                     <svg class="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
//                     </svg>
//                 </div>
//                 <div class="ml-6">
//                     <h3 class="text-lg font-semibold text-black">Build your website</h3>
//                     <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
//                 </div>
//             </li>

//             <li class="relative flex items-start">
//                 <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
//                     <svg class="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                     </svg>
//                 </div>
//                 <div class="ml-6">
//                     <h3 class="text-lg font-semibold text-black">Release & launch</h3>
//                     <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
//                 </div>
//             </li>
//         </ul>
//     </div>
// </section>
// </div>
//   )
// }

// export default Process


import React, { useState, useEffect } from 'react';

const Process = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Requirements Analysis',
      description: 'Identify your needs, laying the foundation for a tailored solution with precision.',
      icon: 'https://cdn-icons-png.flaticon.com/512/11449/11449832.png'
    },
    {
      title: 'Research',
      description: 'Extensive market research ensures insights that shape an effective development strategy.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055645.png'
    },
    {
      title: 'Development',
      description: 'Crafting your solution with expertise and dedication to bring your vision to life.',
      icon: 'https://cdn-icons-png.flaticon.com/512/7991/7991055.png'
    },
    {
      title: 'Testing',
      description: 'Thorough testing at every step to guarantee a flawless and secure final product.',
      icon: 'https://cdn-icons-png.flaticon.com/512/6403/6403868.png'
    },
    {
      title: 'Release & launch',
      description: 'Ensure a successful launch by following best practices and optimizing for excellence.',
      icon: 'https://cdn-icons-png.flaticon.com/512/2285/2285537.png'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div>
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How do we create success</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
          </div>

          <ul className="max-w-md mx-auto mt-16 space-y-12">
            {steps.map((step, index) => (
              <li key={index} className={`relative flex items-start ${index === currentStep ? 'text-fuchsia-600' : 'text-gray-600'}`}>
                {index !== 0 && (
                  <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>
                )}
                  <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                <div className={`relative flex items-center justify-center flex-shrink-0 w-16 h-16 rounded-full shadow ${index === currentStep ? 'bg-white' : 'bg-gray-300'}`}>
                  <img src={step.icon} alt={`Step ${index + 1}`} className="w-10 h-10" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-black">{step.title}</h3>
                  <p className="mt-4 text-base text-gray-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Process;
