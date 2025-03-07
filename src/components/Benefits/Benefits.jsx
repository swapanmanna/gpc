import React from "react";
import learningToLeadership from "../../assets/learning-to-leadership.webp";
import { RiGlobalLine } from "react-icons/ri";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function Benefits() {
    return (
        <>
            <div className="flex justify-center bg-[#ffcccc] my-20 relative">
                <div className="my-20 grid grid-cols-1 md:grid-cols-2 md:max-w-[77rem] gap-6">
                    <div className="flex flex-col px-10">
                        <h1 className="text-3xl text-brand-blue font-bold mb-8">From Learning to Leadership</h1>
                        <div className="flex space-x-2 mb-4">
                            <span><RiGlobalLine className="h-6 w-6 mt-1 mr-2" /></span>
                            <span className="text-brand-dark font-semibold">Globally recognized certification validates your skills on an international scale, opening doors to prestigious career opportunities</span>
                        </div>
                        <div className="flex space-x-2 mb-4">
                            <span><GrUserExpert className="h-6 w-6 mt-1 mr-2" /></span>
                            <span className="text-brand-dark font-semibold">Expert-led training ensures you receive top-tier guidance from industry professionals, enhancing your expertise and confidence</span>
                        </div>
                        <div className="flex space-x-2 mb-4">
                            <span><MdOutlineSupportAgent className="h-6 w-6 mt-1 mr-2" /></span>
                            <span className="text-brand-dark font-semibold">Comprehensive support offers personalized assistance and resources, helping you succeed at every step of your learning journey</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center max-w-sm md:max-w-full md:mr-20 transform scale-110">
                        <img src={learningToLeadership} className="object-contain rounded-lg shadow-2xl shadow-gray-500/50 mask-image" alt="Sample" />
                    </div>
                </div>
            </div>
        </>
    );
}