// optimized code for preloading hero image

import React, { useEffect } from 'react';
import heroGirl from '../../assets/hero-girl.webp';
import { Link } from 'react-router-dom';
import {height} from "../Notifications/NotificationBanner";

const Hero = () => {
    useEffect(() => {
        // Preload the hero image when the component mounts
        const img = new Image();
        img.src = heroGirl;
    }, []);

    // sm:pt-${(16 + (height ? height - 4 : 0)).toString()}`}
    const paddingTop = ((16 + (height ? height - 4 : 0)) * 4).toString()
    return (
        <div className={`md:h-screen flex justify-center items-center bg-brand-blue sm:pt-[${paddingTop}px]`} >
            <div className="md:px-4 md:py-32 pt-32 pb-4 mx-auto md:max-w-8xl md:px-6 lg:px-8 md:flex">
                <div className="max-w-sm md:max-w-2xl mx-auto md:mr-20 md:mt-16">
                    <button className="px-4 py-2 bg-gray-50 border border-gray-400 text-lg text-brand-dark rounded-lg hover:bg-orange-500 hover:text-gray-50 font-bold font-inter transition duration-300 ease-in-out transform hover:scale-105">Trusted by Professionals from Top Corporates</button>
                    <div className="relative max-w-xl mt-8">
                        <p className="relative mt-5 text-2xl md:text-4xl font-bold leading-tight text-gray-50 sm:leading-tight lg:leading-tight font-pj text-left">
                        <span className="text-orange-500">Empowering Risk Professionals</span> Worldwide with Globally Recognized Certifications
                        </p>
                        <h1 className="pt-6 md:text-xl text-gray-50">Join a thriving community of auditors, risk managers, and advisors across the globe. With expert mentorship and industry accredited courses like CIA, CRMA, IAP and CISA, we help professionals unlock new career heights in risk assurance and advisory. </h1>
                    </div>

                    <div 
                    className="px-8 sm:px-0 sm:space-x-5 mt-9 md:flex">
                        <Link
                            to="/courses"
                            title=""
                            className="inline-flex items-center justify-center w-full px-8 py-2 text-lg font-bold text-white transition-all duration-200 bg-orange-500 border-2 border-transparent sm:w-auto rounded-lg font-pj hover:bg-gray-50 hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Explore our Programs
                        </Link>
                    </div>
                </div>
                <div className="pb-12">
                    <div className="relative">
                        <div className="relative mx-auto lg:max-w-6xl p-2 transform lg:scale-125">
                            <img className="h-[500px] rounded-md hidden md:block" src={heroGirl} alt="homepage hero" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;