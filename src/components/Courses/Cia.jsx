import React, { useEffect } from 'react';
import heroGirl from '../../assets/hero-girl.webp';
import { Link } from 'react-router-dom';
import examOne from "../../assets/exam-1.webp";
import examTwo from "../../assets/exam-2.webp";
import examThree from "../../assets/exam-3.webp";
import examFour from "../../assets/exam-4.webp";
import Card from '../Card/Card';
import { SiGoogleclassroom } from "react-icons/si";
import { IoBookOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { IoTimerOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import ciaHero from "../../assets/cia-hero.jpg";

const Cia = () => {
    useEffect(() => {
        // Preload the hero image when the component mounts
        const img = new Image();
        img.src = heroGirl;
    }, []);

    return (
        <>
            <div className="md:h-screen flex justify-center items-center bg-brand-blue sm:pt-16">
                <div className="md:py-32 pt-32 mx-auto md:max-w-8xl md:flex md:justify-center md:items-center">
                    <div className="max-w-sm md:max-w-2xl mx-auto">
                        {/* <button className="px-4 py-2 bg-gray-50 border border-gray-400 text-lg text-brand-dark rounded-lg hover:bg-orange-500 hover:text-gray-50 font-bold font-inter transition duration-200 ease-in-out">Globally recognised</button> */}
                        <div className="relative max-w-xl">
                            <p className="text-2xl md:text-6xl font-bold leading-tight text-gray-50 sm:leading-tight sm:text-5xl lg:text-5xl lg:leading-tight font-pj text-left">
                                Become a <span className="text-orange-500">Globally Recognised</span> Certified Internal Auditor
                            </p>
                            <h1 className="pt-6 md:text-lg text-gray-50">Our comprehensive CIA course prepares you for the certification exam, covering internal audit principles, practices, and standards. Gain expertise in risk management, control, and governance, and enhance your career prospects in internal audit. Join over 1000 professionals who have advanced their careers with our expert mentorship! </h1>
                        </div>

                        <div className="md:ml- px-8 sm:px-0 sm:space-x-5 mt-9 md:flex">
                            <Link
                                to="https://pages.razorpay.com/CIASessions"
                                target='blank'
                                title=""
                                className="inline-flex items-center justify-center w-full px-8 py-2 text-lg font-bold text-white transition-all duration-200 bg-orange-500 border-2 border-transparent sm:w-auto rounded-lg font-pj hover:bg-gray-50 hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button"
                            >
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                    <div className="pb-12">
                        <div className="relative">
                            <div className="relative mx-auto ml-[80px] lg:max-w-6xl">
                                <img className="h-[500px] rounded-lg hidden md:block" src={ciaHero} alt="homepage hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-sm md:max-w-[52rem] mx-auto mt-24">
                <h1 className="text-center text-2xl md:text-4xl font-extrabold mb-8 mt-16 text-brand-blue">CIA Enrollment (All 3 Parts), Your Path to Success</h1>
                <h2 className="text-center text-xl md:text-2xl font-semibold mb-16 md:mb-8 mt-8 text-brand-dark">Earn the Certified Internal Auditor (CIA) certification and accelerate your career with global recognition, high salaries, and job security</h2>
            </div>
            <div className="flex md:justify-center md:flex-row flex-col items-center md:w-full md:mb-24">
                <Card 
                    title="CIA all 3 Parts with Gleim Content" 
                    image={examOne} 
                    text={"Master the complete CIA exam with expert guidance and comprehensive study materials"}
                    price={76700} 
                    enrollLink = "https://rzp.io/rzp/uC1OGRim"
                    imageStyle={"pt-4"}/>
                <Card 
                    title="CIA Part 1 with Gleim Content" 
                    image={examTwo} 
                    text={"Build a strong foundation in internal audit essentials with in-depth preparation"}
                    imageStyle={"pt-12"}/>
                <Card 
                    title="CIA Part 2 with Gleim Content" 
                    image={examThree} 
                    text={"Strengthen your skills in risk management, governance, and control processes"}/>
                <Card 
                    title="CIA Part 3 with Gleim Content" 
                    image={examFour} 
                    text={"Gain expertise in business acumen, financial management, and data analytics"}
                    imageStyle={"pt-8"}/>
            </div>

            <div className="md:mb-24 w-full">
                <div className="flex justify-center">
                    <div className=" bg-[#ffebcd] grid grid-cols-1 grid-cols-2 md:w-[72rem] py-10 rounded-2xl shadow-xl">
                        <h1 className="text-2xl md:col-span-2 px-10 md:text-4xl black font-bold mb-8">CIA All Parts with Gleim Content as Per the New Syllabus</h1>
                        <div className="flex flex-col px-10">
                            <div className="flex space-x-2 mb-4 items-center text-xl">
                                <span><SiGoogleclassroom className="h-6 w-6 md:h-8 md:w-8 mt-1 mr-2 text-black" /></span>
                                <span className="text-black font-semibold">Live Classes</span>
                            </div>
                            <div className="flex space-x-2 mb-4 items-center text-xl">
                                <span><IoBookOutline className="h-6 w-6 md:h-8 md:w-8 mt-1 mr-2 text-black" /></span>
                                <span className="text-black font-semibold">Gleim Soft Book + 1000+ MCQs</span>
                            </div>
                            <div className="flex space-x-2 mb-4 items-center text-xl">
                                <span><CgNotes className="h-6 w-6 md:h-8 md:w-8 mt-1 mr-2 text-grayblack" /></span>
                                <span className="text-black font-semibold">Class Notes + In-Class MCQs</span>
                            </div>
                            <div className="flex space-x-2 mb-4 items-center text-xl">
                                <span><IoTimerOutline className="h-6 w-6 md:h-8 md:w-8 mt-1 mr-2 text-black" /></span>
                                <span className="text-black font-semibold">Offer valid till 15th April only!</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center relative">
                            <Link
                                to={"https://rzp.io/rzp/uC1OGRim"}
                                target="_blank"
                                className="flex items-center justify-center rounded-xl bg-[#E0C4A8] px-16 py-8 text-center text-3xl font-medium text-gray-800 hover:bg-[#D4B190] transition ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
                            >
                                Enroll Now
                                <FaArrowRightLong className="ml-2 h-8 w-8" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-24 mb-24 px-4 md:px-0">
                <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-20 text-brand-blue">CIA Exam Structure</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
                        <h2 className="text-2xl font-bold text-brand-blue mb-2 text-center">CIA Part 1</h2>
                        <h3 className="text-center mb-4 text-xl text-brand-purple font-bold">Internal Audit Fundamentals</h3>
                        <hr className="mb-4 border-2 border-solid border-gray-300"></hr>
                        <p className="text-gray-700 text-lg">125 questions | 2.5 Hours</p>
                        <p className="text-gray-800 font-bold mt-2">Topics:</p>
                        <ul className="text-gray-700 list-disc pl-4">
                            <li>Foundations of Internal Auditing (35%)</li>
                            <li>Ethics and Professionalism (20%)</li>
                            <li>Governance, Risk Management and Control (30%)</li>
                            <li>Fraud Risks (15%)</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
                        <h2 className="text-2xl text-center font-bold text-brand-blue mb-2">CIA Part 2</h2>
                        <h3 className="text-center mb-4 text-xl text-brand-purple font-bold">Internal Audit Engagement</h3>
                        <hr className="mb-4 border-2 border-solid border-gray-300"></hr>
                        <p className="text-gray-700 text-lg">100 questions | 2 Hours</p>
                        <p className="text-gray-800 font-bold mt-2">Topics:</p>
                        <ul className="text-gray-700 list-disc pl-4">
                            <li>Engagement Planning (50%)</li>
                            <li>Information Gathering, Analysis and Evaluation (40%)</li>
                            <li>Engagement Supervision and Communication (10%)</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
                        <h2 className="text-2xl font-bold text-brand-blue mb-2 text-center">CIA Part 3</h2>
                        <h3 className="text-center mb-4 text-xl text-brand-purple font-bold">Internal Audit Function</h3>
                        <hr className="mb-4 border-2 border-solid border-gray-300"></hr>
                        <p className="text-gray-700 text-lg">100 questions | 2 Hours</p>
                        <p className="text-gray-800 font-bold mt-2">Topics:</p>
                        <ul className="text-gray-700 list-disc pl-4">
                            <li>Internal Audit Operations (25%)</li>
                            <li>Internal Audit Plans (15%)</li>
                            <li>Quality of the Internal Audit Function (15%)</li>
                            <li>Engagement Results and Monitoring (45%)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto my-24 px-4 md:px-0">
                <div className="bg-white shadow-xl rounded-xl py-12 px-16 border border-gray-300">
                    <h1 className="text-center text-3xl md:text-5xl font-extrabold mb-10 text-brand-blue">
                    Exam Logistics
                    </h1>
                    <hr className="border-2 border-solid border-gray-300 mb-6"></hr>
                    <ul className="space-y-6 list-disc pl-8">
                    {[
                        "CIA is a 100% MCQ-based exam with no negative marking.",
                        "Score at least 600 points out of 750 (80%) to clear the exam.",
                        "Validity of CIA registration is 3 years from the date of initial registration (when you pay application fees).",
                        "Exam window is 180 days from the date you register for your CIA exam (when you pay exam fees).",
                        "Appear for any part in any sequence and get results immediately.",
                        "Exams are conducted both in India and abroad; in India, exams are only at PearsonVue Centers.",
                    ].map((point, index) => (
                        <li key={index} className="text-gray-800 text-lg marker:text-brand-blue marker:text-2xl">
                            {point}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>


            <div className="max-w-5xl mx-auto my-24 px-4 md:px-0">
                <h1 className="text-center text-3xl md:text-5xl font-extrabold mb-12 text-brand-blue">Fees and Membership Benefits</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-brand-blue text-white text-xl">
                                <th className="py-3 px-4 border-b">Fee Type</th>
                                <th className="py-3 px-4 border-b">IIA Members</th>
                                <th className="py-3 px-4 border-b">Non-Members</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b text-lg text-center">
                                <td className="py-2 px-4">CIA Application Fees</td>
                                <td className="py-2 px-4">USD 90</td>
                                <td className="py-2 px-4">USD 240</td>
                            </tr>
                            <tr className="border-b text-lg text-center">
                                <td className="py-2 px-4">CIA Part 1 Exam Fees</td>
                                <td className="py-2 px-4">USD 232.50</td>
                                <td className="py-2 px-4">USD 445</td>
                            </tr>
                            <tr className="border-b text-lg text-center">
                                <td className="py-2 px-4">CIA Part 2 Exam Fees</td>
                                <td className="py-2 px-4">USD 210</td>
                                <td className="py-2 px-4">USD 415</td>
                            </tr>
                            <tr className="border-b text-lg text-center">
                                <td className="py-2 px-4">CIA Part 3 Exam Fees</td>
                                <td className="py-2 px-4">USD 210</td>
                                <td className="py-2 px-4">USD 415</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="pl-4 mt-4 text-gray-700">*18% GST is applicable on the above fees.</p>
                    <p className="pl-4 mt-2 text-gray-700">IIA Membership Fees: New Member - INR 6500+GST, Annual Renewal - INR 4000+GST.</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto my-24 px-4 md:px-0">
                <div className="bg-white shadow-xl rounded-xl py-12 px-16 border border-gray-200">
                    <h1 className="text-center text-3xl md:text-5xl font-extrabold mb-10 text-brand-blue">
                    Training Program Details
                    </h1>
                    <hr className="border-2 border-solid border-gray-300 mb-6"></hr>
                    <ul className="space-y-6 list-disc pl-8">
                    {[
                        "Complete your CIA Certification within 7–8 months.",
                        "Upcoming Batch Schedule: CIA Part 1 - May & June, CIA Part 2 - July & Aug, CIA Part 1 - Sep & Oct.",
                        "15–20 live classes for each part, each class 3 hours long (weekend mornings, 7:00 AM IST to 10:00 AM IST).",
                        "Recordings uploaded within 24–48 hours after class.",
                        "Access to LMS Portal with recorded sessions, PPT notes, and MCQs (no validity period).",
                        "Guidance from top CIA faculty in India, Mr. Arpit Garg.",
                        "Access to Gleim software with soft copies of books and over 1000 MCQs (validity of 18 months).",
                        "End-to-end support until you clear all exams.",
                    ].map((point, index) => (
                        <li key={index} className="text-gray-800 text-lg marker:text-brand-blue marker:text-2xl">
                            {point}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>


            <div className="max-w-6xl mx-auto mb-24 px-4 md:px-0 bg-orange-100 py-12 rounded-lg shadow-md">
                <h1 className="text-center text-3xl md:text-5xl font-bold mb-8 text-brand-blue">Revised pricing plan 16th April 2025 onwards...</h1>
                <p className="text-center text-2xl font-semibold text-gray-700 mb-8">
                    Enroll for all 3 parts along with Gleim content for only ₹65,000 + GST<br></br> Or each part for ₹25,000 + GST
                </p>
                <h2 className="text-center mb-10 md:text-4xl font-semibold text-brand-blue">Enroll now to kickstart your career and stay ahead of the curve!</h2>
                <div className="flex justify-center gap-6">
                    <Link
                        to="https://rzp.io/rzp/uC1OGRim"
                        target="_blank"
                        className="inline-flex items-center justify-center px-8 py-3 text-xl font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-900 transition duration-200"
                    >
                        Enroll for All Parts
                    </Link>
                    <Link
                        to="https://rzp.io/rzp/BjsIQfL"
                        target="_blank"
                        className="inline-flex items-center justify-center px-8 py-3 text-xl font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-900 transition duration-200"
                    >
                        Enroll for Each Part
                    </Link>
                </div>
            </div>
        </>
        
    );
}

export default Cia;
