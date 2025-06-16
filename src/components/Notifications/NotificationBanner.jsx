import React from "react";
import { Link } from "react-router-dom";
import { BsLightbulbFill } from "react-icons/bs"
import { motion } from "motion/react";

export default function NotificationBanner () {

    // bg -> #ffebcd
    // text-color -> #964b00
    // text-brown-700 font-semibold hover:underline
    return (
        <div className="fixed top-0 left-0 w-screen bg-[#ffebcd] text-[#964b00] flex items-center justify-center text-center h-12 z-50">
            <div
            className="w-full">
                <motion.p
                animate={{  scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-sm md:text-base">
                <BsLightbulbFill className="inline text-red-600 mr-1 pb-1 h-6 w-6" />CIA Part 3 new batch starts soon! Click <span className="text-brown-700 font-semibold hover:underline"><Link to="https://youtu.be/Xn7lL67U2NI?si=OTUa4jZzE3GDJAbk" target="_blank">here</Link></span> to watch our orientation program and learn more about the course.<BsLightbulbFill className="inline text-red-600 ml-1 pb-1 h-6 w-6" />
                </motion.p>
            </div>
        </div>
    );
};

export const height = 12; // height of the notification banner