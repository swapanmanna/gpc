import React from "react";
import { Link } from "react-router-dom";

export default function NotificationBanner () {

    // bg -> #ffebcd
    // text-color -> #964b00
    return (
        <div className="fixed top-0 left-0 w-full bg-[#ffebcd] text-[#964b00] text-center h-12 flex items-center justify-center z-50">
            <p className="text-sm md:text-base">
            👉 Notice: The CIA course syllabus has been updated! Explore the new content and <Link to="https://rzp.io/rzp/uC1OGRim" target="_blank" className="text-yellow-900 hover:underline">enroll now</Link> to stay ahead 👈
            </p>
        </div>
    );
};

export const height = 12; // height of the notification banner