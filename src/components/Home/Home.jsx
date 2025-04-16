import React from "react";
import Hero from "../Hero/Hero";
import Benefits from "../Benefits/Benefits";
import Training from "../Training/Training";
import Demand from "../Demand/Demand";
import Companies from "../companies/Companies";
import VideoSection from "../VideoSection/VideoSection";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
    return (
        <div className="bg-gray-50">
            <Hero />
            <Companies />
            <h1 className="md:text-4xl text-3xl mx-auto w-screen justify-center font-bold text-brand-blue mb-24 inline-flex items-end gap-2">Watch this video to know What We Do <span><FaChevronDown className="text-brand-purple hover:text-brand-blue transition duration-300"/></span></h1>
            <VideoSection />
            <Benefits />
            <Training />
            <Demand />
            <div className="h-[10rem]"></div>
        </div>
    )
}