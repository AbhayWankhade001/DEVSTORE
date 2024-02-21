import React from 'react'
import img1 from './Horizontal_Lockup_on_White_Background-removebg-preview.png'
import img2 from './pexels-fauxels-3182773.jpg'
import img3 from './pexels-olia-danilevich-4974914.jpg'
const TestoM = () => {
  return (
    <div>
        <div class="container mx-auto py-8">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="relative overflow-hidden rounded-lg shadow-lg">
      <img class="w-full h-full object-cover" src={img1} alt="Testimonial 1"/>
      <div class="absolute bottom-0 right-0 p-4">
        <div class="flex items-center space-x-2">
          <div class="bg-white p-2 rounded-full">

            <svg class="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 3l14 9L5 21V3z"></path>
            </svg>
          </div>
          <div class="text-white">
            <p class="font-semibold">John Doe</p>
            <p class="text-xs">CEO, Company ABC</p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative overflow-hidden rounded-lg shadow-lg">
      <img class="w-full h-full object-cover" src={img2} alt="Testimonial 2"/>
      <div class="absolute bottom-0 right-0 p-4">
        <div class="flex items-center space-x-2">
          <div class="bg-white p-2 rounded-full">

            <svg class="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 3l14 9L5 21V3z"></path>
            </svg>
          </div>
          <div class="text-white">
            <p class="font-semibold">Jane Smith</p>
            <p class="text-xs">CTO, Company XYZ</p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative overflow-hidden rounded-lg shadow-lg">
      <img class="w-full h-full object-cover" src={img3} alt="Testimonial 3"/>
      <div class="absolute bottom-0 right-0 p-4">
        <div class="flex items-center space-x-2">
          <div class="bg-white p-2 rounded-full">
            <svg class="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 3l14 9L5 21V3z"></path>
            </svg>
          </div>
          <div class="text-white">
            <p class="font-semibold">Sam Brown</p>
            <p class="text-xs">COO, Company XYZ</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default TestoM