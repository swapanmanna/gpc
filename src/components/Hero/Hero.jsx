import React from 'react';
import heroGirl from '../../assets/hero-girl.webp';

// gradient = bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 inset-0 blur-lg

const Hero = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-brand-blue sm:pt-16">
            <div className="px-4 mx-auto max-w-8xl md:px-6 lg:px-8 md:flex">
                <div className="max-w-2xl mx-auto mr-20 mt-16">
                    <button className="px-4 py-2 bg-gray-50 border border-gray-400 text-lg text-brand-dark rounded-lg hover:bg-orange-500 hover:text-gray-50 font-bold font-inter">Globally recognised</button>
                    <div className="relative max-w-xl mt-8">
                        <p className="relative mt-5 text-6xl font-bold leading-tight text-gray-50 sm:leading-tight sm:text-5xl lg:text-5xl lg:leading-tight font-pj text-left">
                            Become a Certified Internal Auditor
                        </p>
                        <h1 className="pt-6 md:text-xl text-gray-50">Become a globally recognized certified Internal Auditor. Join the league of 100+ successful CIA-certified professionals today under our mentor’s guidance! </h1>
                    </div>

                    <div className="md:ml- px-8 sm:px-0 sm:space-x-5 mt-9 md:flex">
                        <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center w-full px-8 py-2 text-lg font-bold text-white transition-all duration-200 bg-orange-500 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-50 hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Enroll Now
                        </a>
                    </div>
                </div>
            
            <div className="pb-12">
                <div className="relative">
                    <div className="relative mx-auto lg:max-w-6xl p-2 transform lg:scale-125">
                        <img className="h-[500px] rounded-md" src={heroGirl} alt="homepage hero" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero;