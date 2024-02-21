import React from 'react'
import HeroImage from '../Home/yello_service image.png'
export const Serv_Hero = () => {
  return (
    <div>

<div class="relative bg-[#f9e9c217]">
    <div class="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <img class="w-auto h-full" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="" />
    </div>



    <section class="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
                <div class="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                    <div class="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                        <h1 class="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Transform your ideas into solutions with <span class="text-3xl font-bold sm:text-4xl xl:text-5xl xl:leading-tight gradient-text">Artizz DEV's</span>.</h1>

                        <div class="mt-8 lg:mt-12 lg:flex lg:items-center">
                            <div class="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                                <img class="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png" alt="" />
                                <img class="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png" alt="" />
                                <img class="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png" alt="" />
                            </div>

                            <p class="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">Check out<span class="font-bold"> Top services</span> and make your online presence better with us</p>
                        </div>
                    </div>

                    <div class="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                        <a
                            href="#"
                            title=""
                            class="inline-flex items-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-white border rounded-full "
                            role="button"
                        >
                            See feedbacks
                        </a>

                        <a
                    
                            class="inline-flex items-center bg-[#fdb9291f] px-4 py-4 mt-4 text-md font-bold transition-all duration-200 bg-transparent border border-transparent sm:mt-0 font-pj justif-center rounded-xl  "
                            role="button"
                        >
                            <img class="w-5 h-5 mr-2" src='https://cdn-icons-png.flaticon.com/128/4526/4526832.png'/>
                            Get Free Consultation now
                        </a>
                    </div>
                </div>

                <div class="xl:col-span-3">
                    <img class="w-full mx-auto scale-110" src={HeroImage} alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

        
    </div>
  )
}
