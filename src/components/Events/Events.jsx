import React from "react";
import speakerIcon from "../../assets/speaker.png";
import surpriseIcon from "../../assets/surprise.png";
import networkingIcon from "../../assets/networking.png";
import requestIcon from "../../assets/request.png";
import thumbImage from "../../assets/thumb.png";
import meetingIcon from "../../assets/meeting.png";
import dealIcon from "../../assets/deal.png";
import phoneIcon from "../../assets/phone-call.png";
import { FiPhone } from "react-icons/fi";
import schedule from "../../assets/schedule.jpg";
import scheduleTwo from "../../assets/schedule-2.jpg";
import scheduleThree from "../../assets/schedule-3.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import user from "../../assets/user.jpg";
import userTwo from "../../assets/user-2.jpg";
import userThree from "../../assets/user-3.jpg";

export default function Events(){
    return (
        <>
            <div className="mt-[64px">
                <div className="relative flex h-screen bg-[url('assets/slider.jpg')] bg-cover bg-center">
                    <h1 className="absolute top-[200px] left-[180px] text-5xl text-white font-bold">Global Professional Certifications</h1>
                </div>
            </div>
            <section className="w-full bg-brand-blue">
                <div className="flex gap-6 max-w-[77rem] mx-auto py-20">
                    <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <img src={speakerIcon} className="h-16 w-16 mb-4" />
                        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Experienced Speaker</h1>
                        <h2 className="text-lg text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur a voluptates reiciendis
                        tenetur aspernatur ut aliquid eveniet veniam exercitationem.
                        </h2>
                    </div>
                    <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <img src={networkingIcon} className="h-16 w-16 mb-4" />
                        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Live Workshop Program</h1>
                        <h2 className="text-lg text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur a voluptates reiciendis
                        tenetur aspernatur ut aliquid eveniet veniam exercitationem.
                        </h2>
                    </div>
                    <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <img src={requestIcon} className="h-16 w-16 mb-4" />
                        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Exciting Q&A Sessions</h1>
                        <h2 className="text-lg text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur a voluptates reiciendis
                        tenetur aspernatur ut aliquid eveniet veniam exercitationem.
                        </h2>
                    </div>
                    <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <img src={surpriseIcon} className="h-16 w-16 mb-4" />
                        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Exciting Giveaways Program</h1>
                        <h2 className="text-lg text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur a voluptates reiciendis
                        tenetur aspernatur ut aliquid eveniet veniam exercitationem.
                        </h2>
                    </div>
                </div>
            </section>

            <section className="md:mt-20 md:mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[77rem] mx-auto text-[#141418]">
                <div>
                    <img src={thumbImage} className="pt-16"></img>
                </div>
                <div className="flex flex-col gap-6">
                    <button className="px-3 py-1.5 bg-[#EFECFF] text-[#5033FF] w-[12rem] border border-[#5033FF] rounded-lg text-sm font-bold">ABOUT THIS MEETUP</button>
                    <h3 className="text-5xl font-bold">Why you should join our Event Program</h3>
                    <p className="font-bold text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita laboriosam iusto, quos non aut, magni laborum in atque aliquid, deleniti sapiente nisi necessitatibus praesentium iure?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="flex flex-col w-full gap-4 border-r border-r-4 border-r-gray-200">
                            {/* <div className="bg-[#EFECFF] rounded-none"> Removed padding and adjusted rounding */}
                                <img src={meetingIcon} className="h-20 w-20 bg-[#EFECFF] p-3 rounded-xl" />
                                <p className="text-xl font-bold">6000+ people's In person Meet-up</p>
                            {/* </div> */}
                        </div>
                        <div className="flex flex-col gap-4">
                            {/* <div className="inline-flex bg-[#EFECFF] rounded-none"> Removed padding and adjusted rounding */}
                                <img src={dealIcon} className="h-20 w-20 bg-[#EFECFF] p-3 rounded-xl" />
                                <p className="text-xl font-bold">Connect with Industry Leaders</p>
                            {/* </div> */}
                        </div>
                    </div>
                    <p className="text-[#444444]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio expedita enim, voluptates facilis voluptatibus fugiat, ut quasi cum perspiciatis, sunt provident eius eligendi omnis quae iure dolore dolorum fuga? Incidunt.</p>
                    <div className="flex gap-6">
                        <button className="px-6 py-3 bg-brand-blue hover:bg-brand-purple text-gray-50 text-lg rounded-lg font-semibold">ENROLL NOW</button>
                        <div className="flex gap-2">
                            <img src={phoneIcon} className="h-14 w-14 bg-brand-purple rounded-full p-3"></img>
                            <div className="flex flex-col">
                                <p>Call Us:</p>
                                <p className="font-bold font-md">919999999999</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-6 bg-[url('assets/bg.jpg')] py-20">
                <button className="px-4 py-1.5 bg-[#EFECFF] text-[#5033FF] border border-[#5033FF] rounded-md text-sm font-bold">EVENT SCHEDULE</button>
                <h4 className="text-3xl md:text-5xl font-bold">Our Events Schedule Plan</h4>
                <p className="w-[520px] text-center text-[#444444] text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem repellendus corporis ullam magnam sit!</p>
                <div className="max-w-[700px] flex justify-center gap-3 py-8 px-14 rounded-full border border-gray-300 bg-white shadow-md text-[#141418] mb-10">
                    <button className="px-4 py-2 rounded-full bg-[#F0F0F0] hover:bg-brand-purple hover:text-gray-50 font-bold">Digital Marketing</button>
                    <button className="px-4 py-2 rounded-full bg-[#F0F0F0] hover:bg-brand-purple hover:text-gray-50 font-bold">Marketing Strategy</button>
                    <button className="px-4 py-2 rounded-full bg-[#F0F0F0] hover:bg-brand-purple hover:text-gray-50 font-bold">Modern Trend of Marketing</button>
                </div>
                <div className="p-8 border border-gray-300 shadow-lg rounded-xl">
                    <div className="flex gap-8 max-w-[77rem]">
                        <img src={schedule} className="rounded-xl"></img>
                        <div className="flex flex-col gap-4">
                            <h5 className="md:text-4xl font-bold text-[#141418]">Innovate 2025 Your Pathway to Business Transformation Energy Save</h5>
                            <div className="flex gap-10">
                                <div className="flex gap-1">
                                    <IoLocationOutline className="h-6 w-6 text-brand-blue"/>
                                    <p className="font-bold text-[#444444]">Apple Upper West Side, Brooklyn</p>
                                </div>
                                <div className="flex gap-1">
                                    <MdOutlineAccessTime className="h-6 w-6 text-brand-blue"/>
                                    <p className="font-bold text-[#444444]">19:15 a.m. – 07:15 a.m.</p>
                                </div>
                            </div>
                            <p className="text-[#444444] mb-[25px] text-lg">When an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.</p>
                            <div className="flex gap-6">
                                <div className="flex justify-center items-center gap-2 border-r border-r-3 border-r-gray-500 pr-8">
                                    <img src={user} className="rounded-full"></img>
                                    <div className="flex flex-col">
                                        <p className="text-[#141418] font-bold text-lg">Parker Roben</p>
                                        <p className="text-sm text-[#444444]">Author, Cleaner</p>
                                    </div>
                                </div>
                                <button className="bg-brand-blue text-gray-50 hover:bg-brand-purple transition ease-in-out px-6 rounded-lg text-lg font-bold">ENROLL NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-8 border border-gray-300 shadow-lg rounded-xl">
                    <div className="flex gap-8 max-w-[77rem]">
                        <img src={scheduleTwo} className="rounded-xl"></img>
                        <div className="flex flex-col gap-4">
                            <h5 className="md:text-4xl font-bold text-[#141418]">Innovate 2025 Your Pathway to Business Transformation Energy Save</h5>
                            <div className="flex gap-10">
                                <div className="flex gap-1">
                                    <IoLocationOutline className="h-6 w-6 text-brand-blue"/>
                                    <p className="font-bold text-[#444444]">Apple Upper West Side, Brooklyn</p>
                                </div>
                                <div className="flex gap-1">
                                    <MdOutlineAccessTime className="h-6 w-6 text-brand-blue"/>
                                    <p className="font-bold text-[#444444]">19:15 a.m. – 07:15 a.m.</p>
                                </div>
                            </div>
                            <p className="text-[#444444] mb-[25px] text-lg">When an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.</p>
                            <div className="flex gap-6">
                                <div className="flex justify-center items-center gap-2 border-r border-r-3 border-r-gray-500 pr-8">
                                    <img src={userTwo} className="rounded-full"></img>
                                    <div className="flex flex-col">
                                        <p className="text-[#141418] font-bold text-lg">Parker Roben</p>
                                        <p className="text-sm text-[#444444]">Author, Cleaner</p>
                                    </div>
                                </div>
                                <button className="bg-brand-blue text-gray-50 hover:bg-brand-purple transition ease-in-out px-6 rounded-lg text-lg font-bold">ENROLL NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-8 border border-gray-300 shadow-lg rounded-xl">
                    <div className="flex gap-8 max-w-[77rem]">
                        <img src={scheduleThree} className="rounded-xl"></img>
                        <div className="flex flex-col gap-4">
                            <h5 className="md:text-4xl font-bold text-[#141418]">Innovate 2025 Your Pathway to Business Transformation Energy Save</h5>
                            <div className="flex gap-10">
                                <div className="flex gap-1">
                                    <IoLocationOutline className="h-6 w-6 text-brand-blue"/>
                                    <p className="font-bold text-[#444444]">Apple Upper West Side, Brooklyn</p>
                                </div>
                                <div className="flex gap-1">
                                    <MdOutlineAccessTime className="h-6 w-6 text-brand-blue"/>
                                    <p className="font-bold text-[#444444]">19:15 a.m. – 07:15 a.m.</p>
                                </div>
                            </div>
                            <p className="text-[#444444] mb-[25px] text-lg">When an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.</p>
                            <div className="flex gap-6">
                                <div className="flex justify-center items-center gap-2 border-r border-r-3 border-r-gray-500 pr-8">
                                    <img src={userThree} className="rounded-full"></img>
                                    <div className="flex flex-col">
                                        <p className="text-[#141418] font-bold text-lg">Parker Roben</p>
                                        <p className="text-sm text-[#444444]">Author, Cleaner</p>
                                    </div>
                                </div>
                                <button className="bg-brand-blue text-gray-50 hover:bg-brand-purple transition ease-in-out px-6 rounded-lg text-lg font-bold">ENROLL NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}