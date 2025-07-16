import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { BsLightbulbFill } from "react-icons/bs"
import { motion } from "motion/react";

export default function NotificationBanner () {

    // bg -> #ffebcd
    // text-color -> #964b00
    // text-brown-700 font-semibold hover:underline

    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [window.innerWidth])

    return (
        <div className="fixed top-0 left-0 w-screen bg-[#ffebcd] text-[#964b00] flex items-center justify-center text-center h-12 z-50">
            <div
            className="w-full">
                {!isMobile 
                    ? 
                    <motion.p
                    animate={{  scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="md:text-sm text-xs md:p-0 px-8 font-semibold md:text-base">
                    <BsLightbulbFill className="inline text-red-600 mr-1 pb-1 h-4 w-4 md:h-6 md:h-6" />Not sure how to start your CIA journey? Explore our <Link className="text-red-600 hover:underline" to="https://www.youtube.com/@global-professional-cert" target="_blank">youtube channel</Link> or <Link className="text-red-600" to="/contact">contact us</Link> to get started!<BsLightbulbFill className="inline text-red-600 ml-1 pb-1 h-4 w-4 md:h-6 md:h-6" />
                    </motion.p> 
                    : 
                    <p className="md:text-sm text-xs md:p-0 px-8 font-semibold md:text-base">
                    Not sure how to start your CIA journey? Explore our <Link to="https://www.youtube.com/@global-professional-cert" target="_blank" className="text-red-600 hover:underline">youtube channel</Link> or <Link className="text-red-600" to="/contact">contact us</Link> to get started!
                    </p>
                }
            </div>
        </div>
    );
};

export const height = 12; // height of the notification banner