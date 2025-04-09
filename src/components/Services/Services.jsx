import React, { useEffect } from "react";
import heroGirl from '../../assets/hero-girl.webp';
import heroGirlCorrectedTwo from '../../assets/heroGirlCorrectedTwo.png';
import heroGirlThree from "../../assets/heroGirlThree.png"
import { Link } from "react-router-dom";
import examOne from "../../assets/exam-1.webp";
import examTwo from "../../assets/exam-2.webp";
import testimonialOne from "../../assets/testimonial-1.png";
import testimonialTwo from "../../assets/testimonial-2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import pinkyPhoto from "../../assets/pinky-photo.jpg";
import akshdeepSingh from "../../assets/akshdeep-singh.png";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";

export default function Services() {
    useEffect(() => {
        // Preload the hero image when the component mounts
        const img = new Image();
        img.src = heroGirl;
    }, []);

    return (
        <>
            {/* Hero */}
            <section className="md:h-screen flex justify-center items-center bg-brand-blue sm:pt-16">
                <div className="md:px-4 md:py-32 pt-32 pb-4 mx-auto md:max-w-8xl md:px-6 lg:px-8 md:flex">
                    <div className="max-w-sm md:max-w-2xl mx-auto md:mr-20 md:mt-16">
                        <button className="px-4 py-2 bg-gray-50 border border-gray-400 text-lg text-brand-dark rounded-lg hover:bg-orange-500 hover:text-gray-50 font-bold font-inter">Globally recognised</button>
                        <div className="relative max-w-xl mt-8">
                            <p className="relative mt-5 text-2xl md:text-6xl font-bold leading-tight text-gray-50 sm:leading-tight sm:text-5xl lg:text-5xl lg:leading-tight font-pj text-left">
                                Become a Certified Internal Auditor
                            </p>
                            <h1 className="pt-6 md:text-xl text-gray-50">Become a globally recognized certified Internal Auditor. Join the league of 100+ successful CIA-certified professionals today under our mentor’s guidance! </h1>
                        </div>

                        <div className="md:ml- px-8 sm:px-0 sm:space-x-5 mt-9 md:flex">
                            <Link
                                to="https://pages.razorpay.com/CIASessions"
                                target='blank'
                                title=""
                                className="inline-flex items-center justify-center w-full px-8 py-2 text-lg font-bold text-white transition-all duration-200 bg-orange-500 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-50 hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button"
                            >
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                    <div className="pb-12">
                        <div className="relative">
                            <div className="relative mx-auto lg:max-w-6xl p-2 transform lg:scale-110">
                                <img className="h-[500px] rounded-md hidden md:block" src={heroGirlCorrectedTwo} alt="homepage hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="flex md:justify-center flex-col items-center md:mt-20">
                <h1 className="text-4xl font-bold text-brand-blue mb-10">COURSES</h1>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div class="mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left shadow-lg">
                        <div class="mb-4 md:mr-6 md:mb-0">
                            <img class="h-56 rounded-lg object-cover md:w-full" src={examOne} alt="" />
                        </div>
                        <div class="w-1/2 flex flex-col justify-between h-full">
                            <p class="text-xl font-medium text-brand-dark">CIA All 3 Parts with Gleim Content</p> 
                            <p className="font-medium text-brand-gray mb-8">Master the complete CIA exam with expert guidance and comprehensive study materials</p>
                            <div className="flex justify-between gap-4">
                                <div className="flex flex-col text-sm justify-center">
                                    <p>
                                        <span className="text-brand-gray">INR 58999</span>
                                    </p>
                                    <p className="text-brand-gray">Incl. GST</p>
                                </div>
                                <Link
                                    target="blank"
                                    className="flex items-center justify-center rounded-md bg-brand-blue px-4 py-2 text-center font-medium text-white hover:bg-brand-purple focus:outline-none focus:ring-4 focus:ring-blue-300"
                                >
                                    Enroll Now
                                    <FaArrowRightLong className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left shadow-lg">
                        <div class="mb-4 md:mr-6 md:mb-0">
                            <img class="h-56 rounded-lg object-cover md:w-full" src={examTwo} alt="" />
                        </div>
                        <div class="w-1/2 flex flex-col justify-between h-full">
                            <p class="text-xl font-medium text-brand-dark">CIA All 3 Parts with Gleim Content</p> 
                            <p className="font-medium text-brand-gray mb-8">Master the complete CIA exam with expert guidance and comprehensive study materials</p>
                            <div className="flex justify-between gap-4">
                                <div className="flex flex-col text-sm justify-center">
                                    <p>
                                        <span className="text-brand-gray">INR 58999</span>
                                    </p>
                                    <p className="text-brand-gray">Incl. GST</p>
                                </div>
                                <Link
                                    target="blank"
                                    className="flex items-center justify-center rounded-md bg-brand-blue px-4 py-2 text-center font-medium text-white hover:bg-brand-purple focus:outline-none focus:ring-4 focus:ring-blue-300"
                                >
                                    Enroll Now
                                    <FaArrowRightLong className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Testimonials */}
            <section class="bg-gray-200 py-8 dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    {/* Header before Testimonials */}
                    <div class="mx-auto max-w-screen-sm">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-brand-dark dark:text-white">What Our Students Say</h2>
                    </div> 

                    {/* Testimonials container starts */}
                    <div class="grid mb-8 mt-16 lg:mb-12 lg:grid-cols-2 gap-4">
                        <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border border-gray-400 rounded-xl md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700 shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <blockquote class="mx-auto mb-8 max-w-2xl text-brand-gray dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-600 dark:text-white">Truly an outstanding learning experience, practice MCQs after each topic solidified my understanding. Exceptional guidance and learning! </h3>
                            </blockquote>
                            <figcaption class="flex justify-center items-center space-x-3">
                                <img class="w-9 h-9 rounded-full" src={testimonialTwo} alt="profile picture" />
                                <div class="space-y-0.5 font-medium dark:text-white text-left">
                                    <div className="text-brand-dark">Starwin PJ</div>
                                    <div class="text-sm font-light text-brand-gray dark:text-gray-400">Wells Fargo, AVP</div>
                                </div>
                            </figcaption>    
                        </figure>
                        <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border rounded-xl border-gray-400 md:p-12 dark:bg-gray-800 dark:border-gray-700 shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <blockquote class="mx-auto mb-8 max-w-2xl dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-brand-gray dark:text-white">Excellent faculty with comprehensive coverage and extensive MCQ practice. Revisions through the LMS are incredibly helpful.</h3>
                            </blockquote>
                            <figcaption class="flex justify-center items-center space-x-3">
                                <img class="w-9 h-9 rounded-full" src={testimonialOne} alt="profile picture" />
                                <div class="space-y-0.5 font-medium dark:text-white text-left">
                                    <div className="text-brand-dark">Ashoor Marikar</div>
                                    <div class="text-sm font-light text-brand-gray dark:text-gray-400">Atlas Corp., Associate Manager</div>
                                </div>
                            </figcaption>    
                        </figure>
                        <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border rounded-xl border-gray-400 md:p-12 dark:bg-gray-800 dark:border-gray-700 shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <blockquote class="mx-auto mb-8 max-w-2xl dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-brand-gray dark:text-white">The learning modules are well-structured, making complex topics easy to understand. The practice tests provided a solid foundation for exam preparation.</h3>
                            </blockquote>
                            <figcaption class="flex justify-center items-center space-x-3">
                                <img class="w-9 h-9 rounded-full" src={pinkyPhoto} alt="profile picture" />
                                <div class="space-y-0.5 font-medium dark:text-white text-left">
                                    <div className="text-brand-dark">Pinky Agarwal</div>
                                    <div class="text-sm font-light text-brand-gray dark:text-gray-400">Emami Limited, Head Internal Audit</div>
                                </div>
                            </figcaption>    
                        </figure>
                        <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border rounded-xl border-gray-400 md:p-12 dark:bg-gray-800 dark:border-gray-700 shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <blockquote class="mx-auto mb-8 max-w-2xl dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-brand-gray dark:text-white">The faculty's expertise and personalized guidance made the learning process seamless. The extensive practice questions helped me build confidence for the exam.</h3>
                            </blockquote>
                            <figcaption class="flex justify-center items-center space-x-3">
                                <img class="w-9 h-9 rounded-full" src={akshdeepSingh} alt="profile picture" />
                                <div class="space-y-0.5 font-medium dark:text-white text-left">
                                    <div className="text-brand-dark">Akshdeep Singh</div>
                                    <div class="text-sm font-light text-brand-gray dark:text-gray-400">KPMG, Manager</div>
                                </div>
                            </figcaption>    
                        </figure>
                    </div>
                </div>
            </section> 

            <div className="md:mt-20 md:mb-20 w-full">
                <div className="flex justify-center">
                    <div className=" bg-[#ffebcd] grid grid-cols-1 grid-cols-2 md:w-[72rem] py-10 rounded-2xl shadow-xl">
                        <div className="flex flex-col px-10">
                            <h1 className="text-2xl md:text-4xl black font-bold mb-8">From Learning to Leadership!</h1>
                            <div className="flex space-x-2 mb-4 items-center text-xl">
                                <span><FaMoneyBillTrendUp className="h-6 w-6 md:h-8 md:w-8 mt-1 mr-2 text-black" /></span>
                                <span className="text-black font-semibold">Earn competitive pay with great growth potential</span>
                            </div>
                            <div className="flex space-x-2 mb-4 items-center text-xl">
                                <span><MdOutlineSecurity className="h-6 w-6 md:h-8 md:w-8 mt-1 mr-2 text-black" /></span>
                                <span className="text-black font-semibold">Enjoy stability in a thriving industry</span>
                            </div>
                            <div className="flex space-x-2 mb-4 items-center text-xl">
                                <span><RiGlobalFill className="h-6 w-6 md:h-8 md:w-8 mt-1 mr-2 text-grayblack" /></span>
                                <span className="text-black font-semibold">Build a career with worldwide opportunities</span>
                            </div>
                            <div className="flex space-x-2 mb-4 items-center text-xl">
                                <span><BsGraphUpArrow className="h-6 w-6 md:h-8 md:w-8 mt-1 mr-2 text-black" /></span>
                                <span className="text-black font-semibold">Progress from entry-level to leadership roles</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center relative">
                            <Link
                                to={"/contact"}
                                className="flex items-center justify-center rounded-xl bg-[#E0C4A8] px-16 py-8 text-center text-3xl font-medium text-gray-800 hover:bg-[#D4B190] transition ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
                            >
                                Enroll Now
                                <FaArrowRightLong className="ml-2 h-8 w-8" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}