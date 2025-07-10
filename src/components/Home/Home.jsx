import React from "react";
import Hero from "../Hero/Hero";
import Benefits from "../Benefits/Benefits";
import Training from "../Training/Training";
import Demand from "../Demand/Demand";
import Companies from "../Companies/Companies";
import VideoSection from "../VideoSection/VideoSection";
import { FaChevronDown } from "react-icons/fa";
import learningPartner from "../../assets/Learning_partner.jpg";
import MetaTags from "../MetaTags";

export default function Home() {
    return (
        <>
        <MetaTags
            title="Global Professional Certifications – Advance Your Career"
            description="Get globally recognized with our CIA certification courses. Join 100+ professionals who have advanced their careers through our expert-led programs"
            canonicalUrl="https://globalprofessionalcertifications.com/"
        />
        <div className="bg-gray-50">
            <Hero />
            <Companies />
            <h1 className="md:text-4xl text-2xl justify-center w-full font-bold text-brand-blue mb-10 md:mb-24 inline-flex justify-center items-end gap-2">Watch this video to know What We Do <span><FaChevronDown className="text-brand-purple hover:text-brand-blue transition duration-300"/></span></h1>
            <VideoSection />
            <section className="bg-[url('assets/bg.png')] flex flex-col px-20 mt-10 md:mt-20 py-6 md:py-10 mx-4 md:mx-auto md:max-w-6xl rounded-xl shadow-lg justify-center items-center border">
                <h2 className="md:text-4xl text-2xl justify-center w-full font-bold text-brand-blue text-center">IIA India Authorized Learning Partner</h2>
                <h3 className="text-center mt-6 md:mt-10 md:text-3xl text-xl text-brand-blue font-bold">Mr. Mukundan K.V, <span className="">CEO, IIA India</span></h3>
                <img src={learningPartner} className="md:w-3/4 mt-8 md:mt-12 rounded-lg"></img>
            </section>
            <Benefits />
            <Training />
            <Demand />
            <div className="h-[5rem] md:h-[10rem]"></div>
        </div>
        </>
    )
}