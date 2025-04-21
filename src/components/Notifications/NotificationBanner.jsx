import React from "react";
import { Link } from "react-router-dom";

export default function NotificationBanner () {
    return (
        <div className="fixed top-0 left-0 w-full bg-brand-purple text-gray-50 text-center h-12 flex items-center justify-center z-50">
            <p className="text-sm md:text-base">
            👉 Notice: The CIA course syllabus has been updated! Explore the new content and <Link to="https://pages.razorpay.com/CIASessions" target="_blank" className="text-yellow-500 hover:underline">enroll now</Link> to stay ahead 👈
            </p>
        </div>
    );
};

export const height = 12; // height of the notification banner