import React from "react";
import Hero from "../Hero/Hero";
import Benefits from "../Benefits/Benefits";
import Training from "../Training/Training";
import Demand from "../Demand/Demand";
import Companies from "../Companies/Companies";
import VideoSection from "../VideoSection/VideoSection";
import { FaChevronDown } from "react-icons/fa";
import learningPartner from "../../assets/Learning_partner.jpg";
import ciaPart2Flyer from "../../assets/CIA-part-2.jpg"
import { height } from "../Notifications/NotificationBanner";
import { Link } from 'react-router-dom';
import MetaTags from "../MetaTags";

export default function Home() {

    const paddingTop = ((16 + (height ? height - 4 : 0)) * 4).toString()

    return (
        <>
        <MetaTags
            title="Global Professional Certifications – Advance Your Career"
            description="Get globally recognized with our CIA certification courses. Join 100+ professionals who have advanced their careers through our expert-led programs"
            canonicalUrl="https://globalprofessionalcertifications.com/"
        />
        <div className="bg-gray-50">

            <section className="mt-32 md:mt-0 py-8 md:py-[170px] bg-gray-50 h-screen">
                <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-8">
                    {/* Catchy Text and Call to Action */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold md:mb-6 text-brand-blue leading-tight">
                            Unlock Your Potential with Our Free Orientation
                        </h2>
                        <p className="mt-4 text-lg md:text-xl text-gray-700">
                            Join us to learn about the CIA Part 2 exam structure, get expert tips for efficient preparation, and have your questions answered by mentor Arpit Garg.
                        </p>
                        <a 
                            href="https://forms.zohopublic.in/globalprofessionalcertificat1/form/CISARegistration/formperma/XCSPbyS407UGWqXk-0oxeG7qxhKqYOo7uFJ57ZnhQPQ"
                            target="_blank"
                            className="mt-6 inline-block bg-brand-purple text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-brand-blue transition duration-300 transform hover:scale-105"
                        >
                            Register Now
                        </a>
                    </div>
                    {/* Event Flyer Image */}
                    <div className="md:w-1/2">
                    <Link to="https://forms.zohopublic.in/globalprofessionalcertificat1/form/CISARegistration/formperma/XCSPbyS407UGWqXk-0oxeG7qxhKqYOo7uFJ57ZnhQPQ" target="_blank">
                        <img
                            src={ciaPart2Flyer}
                            alt="CIA Part 2 Free Orientation Event Flyer"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </Link>
                    </div>
                </div>
            </section>

            <Hero />
            <Companies />
            <h1 className="md:text-4xl text-xl justify-center w-full font-bold text-brand-blue mb-10 md:mb-24 inline-flex justify-center items-end gap-2">Watch this video to know What We Do <span><FaChevronDown className="text-brand-purple hover:text-brand-blue transition duration-300"/></span></h1>
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