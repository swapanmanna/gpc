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

const Cia = () => {
    useEffect(() => {
        // Preload the hero image when the component mounts
        const img = new Image();
        img.src = heroGirl;
    }, []);

    return (
        <>
            <div className="md:h-screen flex justify-center items-center bg-brand-blue sm:pt-16">
                <div className="md:px-4 md:py-32 pt-32 pb-4 mx-auto md:max-w-8xl md:px-6 lg:px-8 md:flex">
                    <div className="max-w-sm md:max-w-2xl mx-auto md:mr-20 md:mt-16">
                        {/* <button className="px-4 py-2 bg-gray-50 border border-gray-400 text-lg text-brand-dark rounded-lg hover:bg-orange-500 hover:text-gray-50 font-bold font-inter transition duration-200 ease-in-out">Globally recognised</button> */}
                        <div className="relative max-w-xl mt-8">
                            <p className="relative mt-5 text-2xl md:text-6xl font-bold leading-tight text-gray-50 sm:leading-tight sm:text-5xl lg:text-5xl lg:leading-tight font-pj text-left">
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
                            <div className="relative mx-auto lg:max-w-6xl p-2 transform lg:scale-125">
                                <img className="h-[500px] rounded-md hidden md:block" src={heroGirl} alt="homepage hero" />
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
                    price={58999} 
                    enrollLink = "https://pages.razorpay.com/CIASessions"
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
                                to={"https://pages.razorpay.com/CIASessions"}
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

            <div className="max-w-4xl mx-auto my-16 px-4 md:px-0">
                <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-8 text-brand-blue">CIA Exam Structure</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold text-brand-blue mb-2">CIA Part 1: Internal Audit Fundamentals</h2>
                        <p className="text-gray-700">125 questions, 2.5 Hours</p>
                        <p className="text-gray-700 mt-2">Topics: Foundations of Internal Auditing (35%), Ethics and Professionalism (20%), Governance, Risk Management, and Control (30%), Fraud Risks (15%)</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold text-brand-blue mb-2">CIA Part 2: Internal Audit Engagement</h2>
                        <p className="text-gray-700">100 questions, 2 Hours</p>
                        <p className="text-gray-700 mt-2">Topics: Engagement Planning (50%), Information Gathering, Analysis, and Evaluation (40%), Engagement Supervision and Communication (10%)</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold text-brand-blue mb-2">CIA Part 3: Internal Audit Function</h2>
                        <p className="text-gray-700">100 questions, 2 Hours</p>
                        <p className="text-gray-700 mt-2">Topics: Internal Audit Operations (25%), Internal Audit Plans (15%), Quality of the Internal Audit Function (15%), Engagement Results and Monitoring (45%)</p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto my-16 px-4 md:px-0">
                <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-8 text-brand-blue">Exam Logistics</h1>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
                    <li>CIA is a 100% MCQ-based exam with no negative marking.</li>
                    <li>Score at least 600 points out of 750 (80%) to clear the exam.</li>
                    <li>Validity of CIA registration is 3 years from the date of initial registration (when you pay application fees).</li>
                    <li>Exam window is 180 days from the date you register for your CIA exam (when you pay exam fees).</li>
                    <li>Appear for any part in any sequence and get results immediately.</li>
                    <li>Exams are conducted both in India and abroad; in India, exams are only at PearsonVue Centers.</li>
                </ul>
            </div>

            <div className="max-w-4xl mx-auto my-16 px-4 md:px-0">
                <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-8 text-brand-blue">Fees and Membership Benefits</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-brand-blue text-white">
                                <th className="py-3 px-4 border-b">Fee Type</th>
                                <th className="py-3 px-4 border-b">IIA Members</th>
                                <th className="py-3 px-4 border-b">Non-Members</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-2 px-4">CIA Application Fees</td>
                                <td className="py-2 px-4">USD 90</td>
                                <td className="py-2 px-4">USD 240</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4">CIA Part 1 Exam Fees</td>
                                <td className="py-2 px-4">USD 232.50</td>
                                <td className="py-2 px-4">USD 445</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4">CIA Part 2 Exam Fees</td>
                                <td className="py-2 px-4">USD 210</td>
                                <td className="py-2 px-4">USD 415</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4">CIA Part 3 Exam Fees</td>
                                <td className="py-2 px-4">USD 210</td>
                                <td className="py-2 px-4">USD 415</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mt-4 text-gray-700 text-center">*18% GST is applicable on the above fees.</p>
                    <p className="mt-2 text-gray-700 text-center">IIA Membership Fees: New Member - INR 6500+GST, Annual Renewal - INR 4000+GST.</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto my-16 px-4 md:px-0">
                <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-8 text-brand-blue">Training Program Details</h1>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
                    <li>Complete your CIA Certification within 7-8 months.</li>
                    <li>Upcoming Batch Schedule: CIA Part 1 - May & June, CIA Part 2 - July & Aug, CIA Part 1 - Sep & Oct.</li>
                    <li>15-20 live classes for each part, each class 3 hours long (weekend mornings, 7:00 AM IST to 10:00 AM IST).</li>
                    <li>Recordings uploaded within 24-48 hours after class.</li>
                    <li>Access to LMS Portal with recorded sessions, PPT notes, and MCQs (no validity period).</li>
                    <li>Guidance from top CIA faculty in India, Mr. Arpit Garg.</li>
                    <li>Access to Gleim software with soft copies of books and over 1000 MCQs (validity of 18 months).</li>
                    <li>End-to-end support until you clear all exams.</li>
                </ul>
            </div>

            <div className="max-w-4xl mx-auto my-16 px-4 md:px-0 bg-orange-100 p-8 rounded-lg shadow-md">
                <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-8 text-brand-blue">Special Offer – Enroll Now!</h1>
                <p className="text-center text-lg text-gray-700 mb-6">
                    Enroll for all 3 parts along with Gleim content for only ₹49,999+GST, or each part for ₹19,999+GST. Offer valid till 15th April ONLY!
                </p>
                <div className="flex justify-center">
                    <Link
                        to="https://pages.razorpay.com/CIASessions"
                        target="_blank"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition duration-200"
                    >
                        Enroll Now
                    </Link>
                </div>
            </div>
        </>
        
    );
}

export default Cia;
