import React from "react";
import { PiBrain } from "react-icons/pi";
import arpitGarg from "../../assets/arpit-garg.jpg";
import ourMissionOne from "../../assets/our-mission-1.webp";
import ourMissionTwo from "../../assets/our-mission-2.png";
import ourVision from "../../assets/our-vision.webp";
import testimonialOne from "../../assets/testimonial-1.png";
import testimonialTwo from "../../assets/testimonial-2.png";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <>
            <section className="bg-brand-blue py-20 md:py-32 relative md:h-screen md:mb-10 md:flex md:justify-center md:items-center">
                <div className="w-full mt-10 max-w-sm md:max-w-[75rem] px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                <h2 className="text-gray-50 text-xl md:text-3xl md:pb-4 font-bold font-manrope leading-normal lg:text-start text-center">Take your career to the next level in Risk Assurance and Advisory Domain</h2>
                                <p className="text-gray-50 text-medium font-normal leading-relaxed lg:text-start text-center">At Global Professional Certifications (GPC), we are dedicated to empowering professionals worldwide by providing top-tier certification programs that unlock career growth, enhance expertise, and elevate industry standards.</p>
                            </div>
                            <Link to="https://pages.razorpay.com/CIASessions" target="blank"><button className="sm:w-fit w-full px-8 py-3 bg-orange-500 text-gray-50 hover:text-brand-dark hover:bg-gray-50 transition-all duration-300 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span className="px-2 font-bold text-xl">Enroll Now</span>
                            </button></Link>
                        </div>
                        <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover shadow-2xl shadow-gray-500/50 mask-image" src="https://pagedone.io/asset/uploads/1717751272.png" alt="about Us image" />
                    </div>
                </div>
            </section>   
            <section class="py-16 d:py-24 relative mb-10">
                <div class="w-full max-w-sm md:max-w-[75rem] px-4 md:px-5 lg:px-5 mx-auto">
                    <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div
                            class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img class=" rounded-xl object-cover" src={ourMissionTwo} alt="about Us image" />
                            </div>
                            <img class="sm:ml-0 ml-auto rounded-xl object-cover h-64" src={ourMissionOne}
                                alt="about Us image" />
                        </div>
                        <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div class="w-full flex-col justify-center items-start gap-8 flex">
                                <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        class="text-brand-dark text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Our Mission</h2>
                                    <p class="text-brand-gray text-base font-normal leading-relaxed lg:text-start text-center">
                                    Our mission is to bridge the gap between ambition and achievement, transforming learners into leaders through rigorous, globally recognized certifications. Headquartered in India and affiliated with The Institute of Internal Auditors, we specialize in preparing individuals for prestigious credentials like the Certified Internal Auditor (CIA), which is widely regarded as the gold standard in the risk assurance and advisory domain. </p>
                                </div>
                                <div class="w-full lg:justify-start md:justify-center sm:gap-10 gap-5 flex">
                                    <div class="flex-col w-1/3 justify-start items-start inline-flex">
                                        <h3 class="text-gray-900 text-xl md:text-3xl font-bold font-manrope leading-normal">100+</h3>
                                        <h6 class="text-gray-500 text-sm md:text-base font-normal leading-relaxed">CIAs</h6>
                                    </div>
                                    <div class="flex-col w-1/3 justify-start items-start inline-flex">
                                        <h4 class="text-gray-900 text-xl md:text-3xl font-bold font-manrope leading-normal">25+</h4>
                                        <h6 class="text-gray-500 text-sm md:text-base font-normal leading-relaxed">Batches Completed</h6>
                                    </div>
                                    <div class="flex-col w-1/3 justify-start items-start inline-flex">
                                        <h4 class="text-gray-900 text-xl md:text-3xl font-bold font-manrope leading-normal">100+</h4>
                                        <h6 class="text-gray-500 text-sm md:text-base font-normal leading-relaxed">Professionals from Top Companies</h6>
                                    </div>
                                </div>
                            </div>
                            <Link to="https://pages.razorpay.com/CIASessions" target="blank"><button
                                class="sm:w-fit w-full px-6 py-3 bg-brand-blue hover:bg-brand-purple transition-all duration-300 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span class="text-white font-bold leading-6">Join Us</span>
                            </button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-brand-blue py-32 relative">
                <div className="w-full max-w-sm md:max-w-[75rem] px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1 ">
                        <img className="lg:mx-0 transform scale-110 md:scale-100 mx-auto h-full rounded-3xl object-cover h-108 shadow-2xl shadow-gray-500/50 mask-image" src={ourVision} alt="about Us image" />
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 pl-4 flex">
                                <h2 className="text-gray-50 text-4xl md:text-5xl font-bold font-manrope leading-normal lg:text-start text-center">Our Vision </h2>
                                <p className="text-gray-50 text-base md:text-xl font-normal leading-relaxed lg:text-start text-center">We envision a world where professionals are equipped with the knowledge, skills, and confidence to excel in their careers and make a lasting impact in their industries. By offering cutting-edge training and support, we aim to foster a community of highly skilled auditors, risk managers, and advisors who drive organizational success on a global scale. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
            <section className="py-24 relative bg-gray-50">
                <div className="md:grid md:grid-cols-3 md:gap-4 md:max-w-[72rem] md:mx-auto">
                    <div className="col-span-2 rounded-2xl flex border border-gray-400 shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <div className="p-8 flex flex-col justify-center">
                            <h1 className="text-brand-dark text-4xl pb-6 font-bold">What Sets Us Apart</h1>
                            <p className="text-brand-gray font-semibold">Global Professional Certifications stands out as a leader in professional development through our unique value proposition and differentiators</p>
                        </div>
                        <div className="px-32 py-16 rounded-lg md:w-1/2 flex items-center justify-center">
                            <PiBrain className="text-brand-blue w-32 h-32 mb-3 bg-gray-50" />
                        </div>
                    </div>
                    <div className="col-span-1 border border-gray-400 rounded-2xl shadow-lg flex flex-col py-8 px-8 transform transition-transform duration-300 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={45} height={45} fill={"none"} className="text-brand-blue">
                            <path d="M21.0985 7.84477C20.458 8.55417 19.5311 9 18.5 9C16.567 9 15 7.433 15 5.5C15 4.46895 15.4458 3.54203 16.1552 2.90149M21.0985 7.84477C21.6774 9.11025 22 10.5174 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.4826 2 14.8898 2.32262 16.1552 2.90149M21.0985 7.84477C20.0998 5.66155 18.3384 3.90018 16.1552 2.90149" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M10 8H10.0064" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 14H7.00635" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 16C16 17.1046 15.1046 18 14 18C12.8954 18 12 17.1046 12 16C12 14.8954 12.8954 14 14 14C15.1046 14 16 14.8954 16 16Z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        <h1 className="pt-4 text-xl font-bold text-brand-dark">Globally Recognized Certification</h1>
                        <p className="pt-2 text-brand-gray font-semibold">Our CIA program is internationally accredited, opening doors to opportunities across borders and industries, with endorsements from top companies. </p>
                    </div>
                    <div className="col-span-1 border border-gray-400 rounded-2xl shadow-lg flex flex-col py-8 px-8 transform transition-transform duration-300 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={45} height={45} fill={"none"} className="text-brand-blue">
                            <path d="M17.7705 4.99408L14.3145 3.66279C13.1674 3.22093 12.5939 3 12.0001 3C11.4062 3 10.8327 3.22093 9.68561 3.66279L6.22941 4.99417C4.07647 5.82351 2.99999 6.23818 3 7.00021C3.00001 7.76225 4.07649 8.17688 6.22946 9.00616L9.68542 10.3373C10.8324 10.7791 11.4058 11 11.9996 11C12.5934 11 13.1668 10.7791 14.3138 10.3374L17.7704 9.0061C19.9235 8.17685 21 7.76223 21 7.00018C21 6.23814 19.9235 5.82345 17.7705 4.99408Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.5 9.50488L17.7705 9.99429C19.9235 10.8237 21 11.2383 21 12.0004C21 12.7624 19.9235 13.1771 17.7704 14.0063L14.3138 15.3376C13.1668 15.7793 12.5934 16.0002 11.9996 16.0002C11.4058 16.0002 10.8324 15.7793 9.68542 15.3375L6.22946 14.0064C4.07649 13.1771 3.00001 12.7625 3 12.0004C2.99999 11.2384 4.07647 10.8237 6.22941 9.99437L7.50011 9.50488" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 10.5L8.76086 14.8882M5 13.5L10.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.6352 14.5566L17.7705 14.9939C19.9235 15.8233 21 16.238 21 17.0001C21 17.7621 19.9235 18.1767 17.7704 19.006L14.3138 20.3373C13.1668 20.779 12.5934 20.9999 11.9996 20.9999C11.4058 20.9999 10.8324 20.779 9.68542 20.3372L6.22946 19.006C4.07649 18.1768 3.00001 17.7621 3 17.0001C2.99999 16.238 4.07647 15.8234 6.22941 14.994L7.36476 14.5567" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h1 className="pt-4 text-xl font-bold text-brand-dark">Expert-Led Traning</h1>
                        <p className="pt-2 text-brand-gray font-semibold">Our programs are delivered by industry veterans and subject matter experts who bring years of practical experience, ensuring you receive the highest quality.</p>
                    </div>
                    <div className="col-span-1 border border-gray-400 rounded-2xl shadow-lg flex flex-col py-8 px-8 transform transition-transform duration-300 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={45} height={45} fill={"none"} className="text-brand-blue">
                            <path d="M6.5825 7.23786C9.58958 7.768 11.3818 8.87693 12 9.51357C12.6182 8.87693 14.4104 7.768 17.4175 7.23786C18.9409 6.96929 19.7026 6.83501 20.3513 7.3497C21 7.8644 21 8.70019 21 10.3718V16.3791C21 17.9076 21 18.6718 20.5837 19.1489C20.1673 19.626 19.2507 19.7876 17.4175 20.1108C15.7833 20.3989 14.5079 20.8579 13.5847 21.3192C12.6765 21.7731 12.2223 22 12 22C11.7777 22 11.3235 21.7731 10.4153 21.3192C9.4921 20.8579 8.2167 20.3989 6.5825 20.1108C4.74929 19.7876 3.83268 19.626 3.41634 19.1489C3 18.6718 3 17.9076 3 16.3791V10.3718C3 8.70019 3 7.8644 3.6487 7.3497C4.29741 6.83501 5.05911 6.96929 6.5825 7.23786Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 9L12 22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M8.5 3.05857C9.51136 2.38797 10.7089 2 11.9926 2C13.2825 2 14.4855 2.39177 15.5 3.06841M13.6222 5.5C13.1421 5.21025 12.5857 5.04459 11.9926 5.04459C11.4058 5.04459 10.855 5.20674 10.3784 5.49078" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <h1 className="pt-4 text-xl font-bold text-brand-dark">Flexible Learning on Weekends</h1>
                        <p className="pt-2 text-brand-gray font-semibold">We understand the demands of a busy professional life. Our live online sessions, conducted on weekends.</p>
                    </div>
                    <div className="col-span-1 border border-gray-400 rounded-2xl shadow-lg flex flex-col py-8 px-8 transform transition-transform duration-300 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={45} height={45} fill={"none"} className="text-brand-blue">
                            <path d="M22 7.28342C22 9.92499 19.7611 12.0668 17 12.0668C16.6753 12.0672 16.3516 12.0372 16.0327 11.9773C15.8031 11.9342 15.6883 11.9127 15.6082 11.9249C15.5281 11.9371 15.4145 11.9975 15.1874 12.1183C14.545 12.4599 13.7959 12.5806 13.0755 12.4466C13.3493 12.1098 13.5363 11.7057 13.6188 11.2725C13.6688 11.0075 13.545 10.7501 13.3594 10.5617C12.5166 9.70583 12 8.5526 12 7.28342C12 4.64184 14.2388 2.50006 17 2.50006C19.7611 2.50006 22 4.64184 22 7.28342Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M15.4922 7.5H15.5003M18.4922 7.5H18.5003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M7.50189 21.5001H4.71817C4.39488 21.5001 4.07021 21.4546 3.77327 21.327C2.80666 20.9117 2.31624 20.3633 2.08769 20.0202C1.95764 19.8251 1.97617 19.5764 2.11726 19.389C3.23716 17.9015 5.83846 17.0031 7.50665 17.003C9.17484 17.0031 11.7714 17.9015 12.8913 19.389C13.0324 19.5764 13.0509 19.8251 12.9209 20.0202C12.6923 20.3633 12.2019 20.9117 11.2353 21.327C10.9383 21.4546 10.6137 21.5001 10.2904 21.5001H7.50189Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.2854 11.7889C10.2854 13.3202 9.04129 14.5616 7.50664 14.5616C5.97199 14.5616 4.72791 13.3202 4.72791 11.7889C4.72791 10.2576 5.97199 9.01624 7.50664 9.01624C9.04129 9.01624 10.2854 10.2576 10.2854 11.7889Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h1 className="pt-4 text-xl font-bold text-brand-dark">Comprehensive Support</h1>
                        <p className="pt-2 text-brand-gray font-semibold">From enrollment to certification and beyond, we provide personalized guidance, mentorship, and resources.</p>
                    </div>
                </div>
            </section>
            
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-brand-dark dark:text-white">Experienced Course Mentor</h2>
                        <h4 className="text-xl font-semibold">Most Renowned Faculty in India for CIA</h4>
                    </div> 
                    <div class="grid gap-8 mb-6 lg:mb-16 md:flex md:items-center md:justify-center">
                        <div class="items-center bg-gray-100 rounded-lg shadow-lg sm:flex dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105">
                            <a href="#">
                                <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg h-72 object-cover" src={arpitGarg} alt="Bonnie Avatar" />
                            </a>
                            <div class="p-5">
                                <h3 class="text-xl font-bold tracking-tight text-brand-dark dark:text-white">
                                    <a href="#">Arpit Garg</a>
                                </h3>
                                <span class="text-brand-gray font-semibold dark:text-gray-400">Co-founding Partner, Riskman</span>
                                <p class="mt-3 mb-4 font-light text-brand-gray dark:text-gray-400">CA, CIA, CRMA, CISA</p>
                                <ul class="flex space-x-4 sm:mt-0">
                                    <li>
                                        <Link to="mailto:cia@globalprofessionalcertifications.com"><AiOutlineMail className="h-6 w-6 cursor-pointer"/></Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/in/arpit-garg-88070560" target="blank"><AiOutlineLinkedin className="h-6 w-6 cursor-pointer"/></Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.globalprofessionalcertifications.com/" target="blank"><TbWorldWww className="h-6 w-6 cursor-pointer"/></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>  
                    </div>  
                </div>
            </section>
            <section class="bg-gray-200 py-14 dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-brand-dark dark:text-white">What Our Students Say</h2>
                    </div> 
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
                                    <div className="text-brand-dark">Murtaza Ghadial</div>
                                    <div class="text-sm font-light text-brand-gray dark:text-gray-400">Ghadial & Co, Partner</div>
                                </div>
                            </figcaption>    
                        </figure>
                    </div>
                </div>
        </section>
                                                                         
        </>
    )
}