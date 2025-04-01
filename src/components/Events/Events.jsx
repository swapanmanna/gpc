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

            <section className="md:mt-20 h-screen grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[77rem] mx-auto">
                <div>
                    <img src={thumbImage}></img>
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
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio expedita enim, voluptates facilis voluptatibus fugiat, ut quasi cum perspiciatis, sunt provident eius eligendi omnis quae iure dolore dolorum fuga? Incidunt.</p>
                    <div className="flex gap-6">
                        <button className="px-6 py-3 bg-brand-blue hover:bg-brand-purple text-gray-50 text-lg rounded-lg font-semibold">ENROLL NOW</button>
                        <div className="flex gap-2">
                            <img src={phoneIcon} className="h-14 w-14 bg-brand-purple rounded-full p-2"></img>
                            <div className="flex flex-col">
                                <p>Call Us:</p>
                                <p className="font-bold font-md">919999999999</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}