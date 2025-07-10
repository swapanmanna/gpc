// // optimized code for preloading hero image

// import React, { useEffect } from 'react';
// import heroGirl from '../../assets/hero-girl.webp';
// import { Link } from 'react-router-dom';
// import {height} from "../Notifications/NotificationBanner";

// const Hero = () => {
//     useEffect(() => {
//         // Preload the hero image when the component mounts
//         const img = new Image();
//         img.src = heroGirl;
//     }, []);

//     // sm:pt-${(16 + (height ? height - 4 : 0)).toString()}`}
//     const paddingTop = ((16 + (height ? height - 4 : 0)) * 4).toString()
//     return (
//         <div className={`md:h-screen flex justify-center items-center bg-brand-blue sm:pt-[${paddingTop}px]`} >
//             <div className="md:px-4 md:py-32 pt-32 pb-4 mx-auto md:max-w-8xl md:px-6 lg:px-8 md:flex">
//                 <div className="max-w-sm md:max-w-2xl mx-auto md:mr-20 md:mt-16">
//                     <button className="px-4 py-2 bg-gray-50 border border-gray-400 text-lg text-brand-dark rounded-lg hover:bg-orange-500 hover:text-gray-50 font-bold font-inter transition duration-300 ease-in-out transform hover:scale-105">Trusted by Professionals from Top Corporates</button>
//                     <div className="relative max-w-xl mt-8">
//                         <p className="relative mt-5 text-2xl md:text-4xl font-bold leading-tight text-gray-50 sm:leading-tight lg:leading-tight font-pj text-left">
//                         <span className="text-orange-500">Empowering Risk Professionals</span> Worldwide with Globally Recognized Certifications
//                         </p>
//                         <h1 className="pt-6 md:text-xl text-gray-50">Join a thriving community of auditors, risk managers, and advisors across the globe. With expert mentorship and industry accredited courses like CIA, CRMA, IAP and CISA, we help professionals unlock new career heights in risk assurance and advisory. </h1>
//                     </div>

//                     <div 
//                     className="px-8 sm:px-0 sm:space-x-5 mt-9 md:flex">
//                         <Link
//                             to="/courses"
//                             title=""
//                             className="inline-flex items-center justify-center w-full px-8 py-2 text-lg font-bold text-white transition-all duration-200 bg-orange-500 border-2 border-transparent sm:w-auto rounded-lg font-pj hover:bg-gray-50 hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//                             role="button"
//                         >
//                             Explore our Programs
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="pb-12">
//                     <div className="relative">
//                         <div className="relative mx-auto lg:max-w-6xl p-2 transform lg:scale-125">
//                             <img className="h-[500px] rounded-md hidden md:block" src={heroGirl} alt="homepage hero" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Hero;

import React, { useEffect } from 'react';
import heroGirl from '../../assets/hero-girl.webp';
import { Link } from 'react-router-dom';
import { height } from "../Notifications/NotificationBanner";

const Hero = () => {
    useEffect(() => {
        // Preload the hero image when the component mounts
        const img = new Image();
        img.src = heroGirl;
    }, []);

    // Responsive padding-top: smaller for mobile, larger for desktop
    const paddingTop = ((16 + (height ? height - 4 : 0)) * 4).toString()

    return (
        <div 
            className="min-h-[100vh] pt-32 flex items-center justify-center bg-brand-blue sm:pt-16"
            style={{ paddingTop }}
        >
            <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Text Content */}
                <div className="w-full md:w-1/2 max-w-3xl">
                    <button className="px-4 py-2 bg-gray-50 border border-gray-400 text-base sm:text-lg text-brand-dark rounded-lg hover:bg-orange-500 hover:text-gray-50 font-bold font-inter transition duration-300 ease-in-out transform hover:scale-105 mb-6">
                        Trusted by Professionals from Top Corporates
                    </button>
                    <div className="max-w-2xl">
                        <p className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-50 font-pj text-left">
                            <span className="text-orange-500">Empowering Risk Professionals</span> Worldwide with Globally Recognized Certifications
                        </p>
                        <h1 className="mt-4 text-base sm:text-lg md:text-xl text-gray-50 font-pj">
                            Join a thriving community of auditors, risk managers, and advisors across the globe. With expert mentorship and industry accredited courses like CIA, CRMA, IAP, and CISA, we help professionals unlock new career heights in risk assurance and advisory.
                        </h1>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/courses"
                            className="inline-flex items-center justify-center px-6 py-2 text-base sm:text-lg font-bold text-white bg-orange-500 rounded-lg hover:bg-gray-50 hover:text-brand-dark border-2 border-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Explore our Programs
                        </Link>
                    </div>
                </div>
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative max-w-lg">
                        <img 
                            className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-cover rounded-md"
                            src={heroGirl} 
                            alt="Homepage hero" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;