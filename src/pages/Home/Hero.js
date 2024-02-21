import React from 'react'
import logoImage from './Horizontal_Lockup_on_White_Background-removebg-preview.png';
import './App.css'
import { motion } from "framer-motion";

export const Hero = () => {

    return (
        <div><section>
        {/*         <header class="bg-white  ">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
                    <div class="flex items-center justify-between h-16 lg:h-[72px]">
                    <div class="flex items-center flex-shrink-0">


                        </div>

                        <div class="hidden lg:flex lg:justify-center lg:space-x-10 xl:space-x-14">
                            <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-gray-900"> Home </a>

                            <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-gray-900"> Services </a>

                            <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-gray-900"> Blog </a>

                            <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-gray-900">  Portfolio </a>

                            <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-gray-900"> About Us </a>

                            <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-gray-900"> Contact Us </a>
                        </div>
                    </div>
                </div>
            </header> */}

            <div class="relative py-12 bg-white sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
                <div class="absolute inset-0 hidden lg:block">

                    <motion.div
                        className="absolute inset-0 hidden lg:block"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >


                        <img class="object-cover object-right-bottom w-full h-full" src="https://www.landingfolio.com/_nuxt/img/hero-image.d5bd8e9.png" alt="" />

                    </motion.div>

                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.6,
                        delay: 0.8,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <div class="relative px-4 top-24 mx-auto sm:px-6 lg:px-8 max-w-full">
                        <div class="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-[40rem] lg:text-left lg:mx-0">
                            <h1 class="text-3xl font-bold text-black sm:text-4xl xl:text-5xl xl:leading-tight">
                                Elevate Your Brand with <span class="text-3xl font-bold sm:text-4xl xl:text-5xl xl:leading-tight gradient-text">Artizz DEV's</span> Digital Excellence
                            </h1>

                            <p class="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">DEV Store: Your digital partner for innovative web solutions. Elevate your brand with custom design, development, and streamlined tech services. Where excellence meets innovation.</p>

                            <div class="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
                                <a
                                    href="#"
                                    title=""
                                    class="
                            inline-flex
                            items-center
                            justify-center
                            px-3
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-gray-900
                            transition-all
                            duration-200
                            bg-white
                            border border-transparent
                            rounded-md
                            sm:px-6
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                            hover:bg-gray-200
                        "
                                    role="button"
                                >
                                    Get quotation
                                </a>
                                <a
                                    href="#"
                                    title=""
                                    class="
                            inline-flex
                            items-center
                            justify-center
                            px-3
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-gray-900
                            transition-all
                            duration-200
                            bg-white
                            border border-[#fedbe1]
                            rounded-md
                            sm:px-6
                            focus:ring-white
                            hover:bg-gray-200
                        "
                                    role="button"
                                >
                                    Order Now
                                </a>

                            </div>
                        </div>
                    </div>
</motion.div>
                    <div class="mt-8 lg:hidden">
                        <img class="object-cover w-full h-full css21" src="https://www.landingfolio.com/_nuxt/img/hero-image.d5bd8e9.png" alt="" />
                    </div>
            </div>
        </section>
        </div>
    )
}
