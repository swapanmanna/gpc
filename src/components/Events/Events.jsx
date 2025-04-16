import React from "react";
import schedule from "../../assets/schedule.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { FaHandshakeAngle } from "react-icons/fa6";
import { MdTipsAndUpdates } from "react-icons/md";
import { Link } from "react-router-dom";
import iiaEvent from "../../assets/iia-event.jpeg";
import { FiPhone } from "react-icons/fi";
import { BsCalendar, BsCalendarDate } from "react-icons/bs";
import wofaBanner from "../../assets/wofa-banner.webp";
import iiaKolkataBanner from "../../assets/iia-kolkata-banner.webp";
import iiaBengaluruBanner from "../../assets/iia-bengaluru-banner.webp";
import iiaMumbaiBanner from "../../assets/iia-mumbai-banner.webp";

export default function Events(){
    return (
        <>
            <div className="">
                <div className="relative flex h-screen bg-[url('assets/iia-conference.jpg')] bg-cover bg-center">
                    
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black opacity-70"></div>

                    {/* Heading */}
                    <h1 className="absolute top-[240px] left-[180px] text-5xl text-white font-bold z-10">
                    Where Learning Meets Connection
                    </h1>
                    <p className="absolute top-[320px] left-[180px] text-white text-3xl font-semibold">Explore our journey through global conferences,<br></br> workshops, and networking events</p>
                </div>
            </div>


            <section className="md:mt-20 md:mb-20 grid grid-cols-1 md:grid-cols-2 max-w-[77rem] mx-auto text-[#141418]">
                <div>
                    <img src={iiaEvent} className="rounded-lg h-[600px] ml-16"></img>
                </div>
                <div className="flex flex-col gap-6">
                    <button className="px-3 py-1.5 bg-[#EFECFF] text-[#5033FF] w-[8rem] border border-[#5033FF] rounded-lg text-sm font-bold hover:text-brand-purple hover:border-brand-purple transition duration-300">OUR EVENTS</button>
                    <h3 className="md:text-4xl font-bold">Our Event Presence: Why It Matters</h3>
                    <p className="font-bold text-lg text-[#444444]">At Global Professional Certifications, we don’t just talk about growth—we live it. Our active presence at industry-leading conferences, training programs, and networking forums across the globe reflects our commitment to staying ahead of the curve and bringing real-world insights to the professionals we serve.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="flex flex-col w-full gap-4 border-r border-r-4 border-r-gray-200">
                                <FaHandshakeAngle className="h-20 w-20 bg-[#EFECFF] p-3 rounded-xl hover:text-brand-purple transition duration-300" />
                                <p className="text-xl font-bold">Listen to our Mentor</p>
                        </div>
                        <div className="flex flex-col gap-4">
                                <MdTipsAndUpdates className="h-20 w-20 bg-[#EFECFF] p-3 rounded-xl hover:text-brand-purple transition duration-300" />
                                <p className="text-xl font-bold">Get latest updates</p>
                        </div>
                    </div>
                    <p className="text-[#444444] font-semibold">Joining us at events isn’t just about attending—it’s about engaging, evolving, and becoming part of a powerful global community.</p>
                    <div className="flex gap-6">
                        <Link to="/contact" className="px-6 py-3 bg-brand-blue hover:bg-brand-purple text-gray-50 text-lg rounded-lg font-semibold transition duration-300 ease-in-out">JOIN US</Link>
                        <div className="flex gap-2 items-center"> 
                            <div className="h-14 w-14 bg-brand-purple rounded-full flex items-center justify-center hover:bg-brand-blue transition duration-300">
                                <FiPhone className="h-8 w-8 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <p>Call us:</p>
                                <p className="font-bold font-md">+918736083099</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="bg-[url('assets/bg.jpg')]">
            <section className="flex flex-col items-center max-w-[77rem] mx-auto gap-6 py-20">
                <button className="px-4 py-1.5 bg-[#EFECFF] text-[#5033FF] border border-[#5033FF] rounded-md text-sm font-bold hover:text-brand-purple hover:border-brand-purple transition duration-300">OUR PAST EVENTS</button>
                <h4 className="text-3xl md:text-5xl font-bold">A Look Back at the Events That Shaped Us</h4>
                <p className="w-[600px] text-center text-[#444444] text-xl">From insightful keynotes to candid behind-the-scenes moments, our photo gallery captures the energy, learning, and connections from every event we’ve been a part of.</p>
                <div className="max-w-[700px] flex justify-center gap-3 py-8 px-14 rounded-full border border-gray-300 bg-white shadow-md text-[#141418] mb-10">
                    <button className="px-4 py-2 rounded-full bg-[#F0F0F0] hover:bg-brand-purple hover:text-gray-50 font-bold transition duration-300 ease-in-out">IIA Mumbai</button>
                    <button className="px-4 py-2 rounded-full bg-[#F0F0F0] hover:bg-brand-purple hover:text-gray-50 font-bold transition duration-300 ease-in-out">IIA Bengaluru</button>
                    <button className="px-4 py-2 rounded-full bg-[#F0F0F0] hover:bg-brand-purple hover:text-gray-50 font-bold transition duration-300 ease-in-out">IIA Kolkata</button>
                    <button className="px-4 py-2 rounded-full bg-[#F0F0F0] hover:bg-brand-purple hover:text-gray-50 font-bold transition duration-300 ease-in-out">WOFA 2025</button>
                </div>
                <div className="p-8 border border-gray-300 shadow-lg rounded-xl">
                    <div className="flex gap-8 max-w-[77rem] items-center"> 
                        <img src={wofaBanner} className="rounded-xl"></img>
                        <div className="flex flex-col gap-4">
                            <h5 className="md:text-3xl font-bold text-[#141418]">We were proud to be a part of WOFA 2025, where leaders and changemakers came together to drive innovation and empowerment.</h5>
                            <div className="flex gap-10">
                                <div className="flex gap-1">
                                    <IoLocationOutline className="h-6 w-6 text-brand-blue"/>
                                    <p className="font-bold text-[#444444]">New Delhi, India</p>
                                </div>
                                <div className="flex gap-2">
                                    <BsCalendarDate className="h-6 w-6 text-brand-blue"/>
                                    <p className="font-bold text-[#444444]">31st Jan 2025 - 2nd Feb 2025</p>
                                </div>
                            </div>
                            <p className="text-[#444444] mb-[25px] text-lg">From powerful discussions to meaningful connections, the event was a celebration of global collaboration and forward thinking.</p>
                        </div>
                    </div>
                </div>
                <div className="p-8 border border-gray-300 shadow-lg rounded-xl">
                    <div className="flex gap-8 max-w-[77rem] items-center"> 
                        <img src={iiaKolkataBanner} className="rounded-xl w-[360px] h-[270px]"></img>
                        <div className="flex flex-col gap-4">
                            <h5 className="md:text-3xl font-bold text-[#141418]">We engaged with leading internal audit professionals at the IIA Kolkata Chapter event, exploring emerging trends in governance and risk.</h5>
                            <div className="flex gap-10">
                                <div className="flex gap-1">
                                    <IoLocationOutline className="h-6 w-6 text-brand-blue"/>
                                    <p className="font-bold text-[#444444]">Kolkata, West Bengal, India</p>
                                </div>
                                <div className="flex gap-2">
                                    <BsCalendarDate className="h-6 w-6 text-brand-blue"/>
                                    <p className="font-bold text-[#444444]">10th Feb 2025</p>
                                </div>
                            </div>
                            <p className="text-[#444444] mb-[25px] text-lg">The sessions fostered meaningful dialogue and highlighted the evolving role of auditors in today’s dynamic landscape.</p>
                        </div>
                    </div>
                </div>
                <div className="p-8 border border-gray-300 shadow-lg rounded-xl">
                    <div className="flex gap-8 max-w-[77rem] items-center"> 
                        <img src={iiaBengaluruBanner} className="rounded-xl"></img>
                        <div className="flex flex-col gap-4">
                            <h5 className="md:text-3xl font-bold text-[#141418]">At the IIA Bengaluru Chapter conference, we participated in insightful discussions on innovation in internal auditing.</h5>
                            <div className="flex gap-10">
                                <div className="flex gap-1">
                                    <IoLocationOutline className="h-6 w-6 text-brand-blue"/>
                                    <p className="font-bold text-[#444444]">Bengaluru, Karnataka, India</p>
                                </div>
                                <div className="flex gap-2">
                                    <BsCalendarDate className="h-6 w-6 text-brand-blue"/>
                                    <p className="font-bold text-[#444444]">19th Feb 2025</p>
                                </div>
                            </div>
                            <p className="text-[#444444] mb-[25px] text-lg">The event brought together experts and thought leaders, creating a powerful platform for knowledge exchange and collaboration.</p>
                        </div>
                    </div>
                </div>
                <div className="p-8 border border-gray-300 shadow-lg rounded-xl">
                    <div className="flex gap-8 max-w-[77rem] items-center"> 
                        <img src={iiaMumbaiBanner} className="rounded-xl"></img>
                        <div className="flex flex-col gap-4">
                            <h5 className="md:text-3xl font-bold text-[#141418]">The IIA Mumbai Chapter event was a hub of ideas and industry insights, focused on enhancing audit excellence.</h5>
                            <div className="flex gap-10">
                                <div className="flex gap-1">
                                    <IoLocationOutline className="h-6 w-6 text-brand-blue"/>
                                    <p className="font-bold text-[#444444]">Mumbai, Maharashtra, India</p>
                                </div>
                                <div className="flex gap-2">
                                    <BsCalendarDate className="h-6 w-6 text-brand-blue"/>
                                    <p className="font-bold text-[#444444]">5th March 2025</p>
                                </div>
                            </div>
                            <p className="text-[#444444] mb-[25px] text-lg">We connected with professionals driving change and shared in the mission to elevate internal audit practices across sectors.</p>
                        </div>
                    </div>
                </div>
                
            </section>
            </div>
        </>
    )
}