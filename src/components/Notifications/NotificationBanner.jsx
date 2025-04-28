import React from "react";
import { Link } from "react-router-dom";
import { BsLightbulbFill } from "react-icons/bs"
import { FaHandPointRight } from "react-icons/fa";
import { FaHandPointLeft } from "react-icons/fa";

export default function NotificationBanner () {

    // bg -> #ffebcd
    // text-color -> #964b00
    return (
        <div className="fixed top-0 left-0 w-screen bg-[#ffebcd] text-[#964b00] flex items-center justify-center text-center h-12 z-50">
            <div
            className="w-full">
                <p className="text-sm md:text-base">
                <FaHandPointRight className="inline text-orange-800 mr-1 pb-1 h-8 w-8" /> Notice: The CIA course syllabus has been updated! Explore the new content and <Link to="https://rzp.io/rzp/CIASessions" target="_blank" className="text-yellow-900 hover:underline">enroll now</Link> to stay ahead <FaHandPointLeft className="inline text-orange-800 ml-1 pb-1 h-8 w-8" /> <span className="font-bold"><BsLightbulbFill className="inline text-red-600 mr-1 pb-1 h-6 w-6" />New Batch starts on 3rd May 2025<BsLightbulbFill className="inline text-red-600 ml-1 pb-1 h-6 w-6" /></span>
                </p>
            </div>
        </div>
    );
};

export const height = 12; // height of the notification banner