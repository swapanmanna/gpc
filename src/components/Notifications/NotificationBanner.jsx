import React from "react";
import { Link } from "react-router-dom";

export default function NotificationBanner () {

    // bg -> #ffebcd
    // text-color -> #964b00
    return (
        <div className="fixed top-0 left-0 w-screen bg-[#ffebcd] text-[#964b00] flex items-center justify-center text-center h-12 z-50">
            <div
            className="w-full">
                <p className="text-sm md:text-base">
                👉 Notice: The CIA course syllabus has been updated! Explore the new content and <Link to="https://rzp.io/rzp/CIASessions" target="_blank" className="text-yellow-900 hover:underline">enroll now</Link> to stay ahead 👈
                </p>
            </div>
        </div>
    );
};

export const height = 12; // height of the notification banner