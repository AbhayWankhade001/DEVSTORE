import React from 'react'
import faqimg from './pexels-nikolai-ulltang-3239333.jpg'
const ServFaq = () => {
  return (
    <div>
                                                        <section class="py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full"
        >
          <div class="w-full lg:w-1/2 rounded-3xl ">
            <img
              src={faqimg}

              alt="FAQ tailwind section"
              class="w-full rounded-3xl"

              
            />
          </div>
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-xl">
              <div class="mb-6 lg:mb-16">
                <h6
                  class="text-lg text-center font-medium text-indigo-600 mb-2 lg:text-left"
                >
                  faqs
                </h6>
                <h2
                  class="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left"
                >
                  Looking for answers?
                </h2>
              </div>
              <div class="accordion-group" data-accordion="default-accordion">
                <div
                  class="accordion pb-8 border-b border-solid border-gray-200 active"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    class="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium always-open"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                  >
                    <h5 >What web development technologies do you specialize in?</h5>
                    <svg
                      class="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    class="accordion-content w-full px-0 overflow-hidden pr-4 active"
                 
                    style={{maxHeight:"100px"}}
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p class="text-base font-normal text-gray-600 ">
                    Answer: We specialize in a wide range of technologies, including Webflow, WordPress, MongoDB, Express.js, React.js, Node.js, React Native, Flutter, HTML, CSS, and more
                    </p>
                  </div>
                </div>
                <div
                  class="accordion py-8 border-b border-solid border-gray-200 "
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    class="accordion-toggle group inline-flex items-center justify-between font-normal text-xl leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                  >
                    <h5>How do you handle website maintenance and hosting?</h5>
                    <svg
                      class="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    class="accordion-content w-full px-0 overflow-hidden pr-4"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  
                  >
                    <p class="text-base text-gray-500 font-normal">
                    Answer: We provide comprehensive solutions, including server management, maintenance, hosting services, and expertise in AWS. Our team ensures the smooth functioning and security of your website.
                    </p>
                  </div>
                </div>
                <div
                  class="accordion py-8 border-b border-solid border-gray-200"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    class="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5>What marketing and analytics services do you offer?</h5>
                    <svg
                      class="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    class="accordion-content w-full px-0 overflow-hidden pr-4"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p class="text-base text-gray-500 font-normal">
                    Answer: We cover the spectrum of digital marketing, including Google Analytics, SEO optimization, automated post generation, chatbots, AdSense, Google Ads, and Facebook Ads, enhancing your online presence and reach.
                    </p>
                  </div>
                </div>
                <div
                  class="accordion py-8 "
                  id="basic-heading-four-with-arrow-always-open"
                >
                  <button
                    class="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                    aria-controls="basic-collapse-four-with-arrow-always-open"
                  >
                    <h5>Can you help with custom themes, plugins, and e-commerce solutions?</h5>
                    <svg
                      class="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow-always-open"
                    class="accordion-content w-full px-0 overflow-hidden pr-4"
                    aria-labelledby="basic-heading-four-with-arrow-always-open"
                  >
                    <p class="text-base text-gray-500 font-normal">
                    Answer: Absolutely! We excel in crafting custom themes and plugins. Our expertise extends to e-commerce solutions, payment gateways, and creating a seamless online shopping experience for your customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
                                            
    </div>
  )
}

export default ServFaq