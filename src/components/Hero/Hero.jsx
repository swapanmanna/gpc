import React from 'react';
import homepageHero from '../../assets/homepage-hero.webp';

// gradient = bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 inset-0 blur-lg

const Hero = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-gray-50 sm:pt-16">
            <div className="px-4 mx-auto max-w-7xl md:px-6 lg:px-8 md:flex">
                <div className="max-w-xl mx-auto mr-8">
                    <button className="px-4 py-2 bg-gray-200 border border-gray-400 text-lg text-brand-gray rounded-lg hover:bg-gray-700 hover:text-white font-bold font-inter">Globally recognised</button>
                    <div className="relative max-w-5xl mt-8">
                        <p className="relative mt-5 text-6xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-5xl lg:leading-tight font-pj text-left">
                            <span className="relative z-10">Become a Certified Internal Auditor</span>
                            <span className="absolute top-0 bottom-0 left-0 right-40 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30"></span>
                        </p>
                        <h1 className="pt-6 md:text-xl text-brand-gray">Become a globally recognized certified Internal Auditor. Join the league of 100+ successful CIA-certified professionals today under our mentor’s guidance! </h1>
                    </div>

                    <div className="md:ml- px-8 sm:px-0 sm:space-x-5 mt-9 md:flex">
                        <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center w-full px-8 py-2 text-lg font-bold text-white transition-all duration-200 bg-brand-dark border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-brand-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Enroll Now
                        </a>
                    </div>
                </div>
            
            <div className="pb-12">
                <div className="relative">
                    <div className="h-full"></div>
                    <div className="relative mx-auto lg:max-w-6xl p-2">
                        <img className="rounded-md shadow-2xl shadow-gray-500/50 mask-image" src={homepageHero} alt="homepage hero" />
                        {/* <div className="absolute -inset-1 rounded-md blur-md bg-gray-300 z-10"></div> */}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hero;