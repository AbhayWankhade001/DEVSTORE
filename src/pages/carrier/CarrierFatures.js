import React from 'react'
import {ReactComponent as Svg1} from './fi-rs-laptop.svg'
import {ReactComponent as Svg2} from './fi-rs-briefcase.svg'
import {ReactComponent as Svg3} from './fi-rr-chart-pie-alt.svg'
import {ReactComponent as Svg4} from './fi-rr-rocket.svg'
import {ReactComponent as Svg5} from './fi-rr-graduation-cap.svg'
import {ReactComponent as Svg6} from './fi-rr-apps-add.svg'
const CarrierFatures = () => {
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                    </svg> */}
        const features = [
            {
                icon:<Svg1 className="w-6 h-6 " />,
                title: "Training in New Technologies",
                desc: "Stay ahead of the curve with our training in the latest and most in-demand technologies."
            },
            {
                icon:<Svg2 className="w-6 h-6" />,
                title: "Internship Opportunities",
                desc: "Gain hands-on experience through our structured internship programs."
            },
            {
                icon:<Svg3 className="w-6 h-6" />,
                title: "Project Building",
                desc: "Develop real-world projects that showcase your skills and knowledge."
            },
            {
                icon:<Svg4 className="w-6 h-6" />,
                title: "Working on Live Projects<",
                desc: "Engage with live projects to understand industry practices and workflows."
            },
            {
                icon:<Svg5 className="w-6 h-6" />,
                title: "Portfolio Building<",
                desc: "Create a professional portfolio to highlight your achievements and projects."
            },
            {
                icon:<Svg6 className="w-6 h-6" />,
                title: "Overall Profile Development<",
                desc: "Enhance your profile with comprehensive development programs tailored to your career goals."
            },
        ]
    
        return (
            <section className="relative py-28 bg-gray-900">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
                    <div className="max-w-xl">
                        <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                            Do more with less complexity
                        </h3>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus
                        </p>
                    </div>
                    
                    <div className="mt-12 lg:mt-0">
                        <ul className="grid gap-8 sm:grid-cols-2">
                            {
                                features.map((item, idx) => (
                                    <li key={idx} className="flex gap-x-4">
                                        <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg text-gray-100 font-semibold">
                                                {item.title}
                                            </h4>
                                            <p className="mt-3">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
            </section>
        )
    }

export default CarrierFatures