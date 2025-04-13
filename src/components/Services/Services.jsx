import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import coursesPhoto from "../../assets/Courses-photo.png";
import { SiGoogleclassroom } from "react-icons/si";
import { IoBookOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { IoTimerOutline } from "react-icons/io5";
import Card from "../Card/Card";
import cisaLogo from "../../assets/cisa-logo-1.png";
import ciaLogo from "../../assets/cia-logo.webp";
import iapLogo from "../../assets/iap-logo-cropped.webp";
import crmaLogoOne from "../../assets/crma-logo-1.png";
import { FaArrowTurnDown } from "react-icons/fa6";

export default function Services() {
  useEffect(() => {
    const img = new Image();
    img.src = coursesPhoto;
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="md:h-screen flex justify-center items-center bg-brand-blue sm:pt-16">
        <div className="md:px-4 md:py-32 pt-32 pb-4 mx-auto md:max-w-8xl md:px-6 lg:px-8 md:flex">
          <div className="max-w-sm md:max-w-2xl mx-auto md:mr-20 md:mt-16">
            <button className="px-10 py-3 bg-gray-50 border border-gray-400 text-lg text-brand-dark rounded-lg hover:bg-orange-500 hover:text-gray-50 font-bold font-inter">
              Globally recognised
            </button>
            <div className="relative max-w-xl mt-8">
              <p className="relative mt-5 text-2xl md:text-6xl font-bold leading-tight text-gray-50 sm:leading-tight sm:text-5xl lg:text-4xl lg:leading-tight font-pj text-left">
                Elevate Your Expertise: Master the Art of Auditing and Risk Management
              </p>
              <h1 className="pt-6 md:text-2xl text-gray-50">
                Discover our prestigious certifications, meticulously crafted to propel your career to new heights of excellence and recognition.
              </h1>
            </div>

            <div className="md:ml- px-8 sm:px-0 sm:space-x-5 mt-9 md:flex">
              <a
                href="#courses"
                title=""
                className="relative inline-flex items-center justify-center w-full pl-8 pr-12 pt-3 pb-5 text-xl font-bold text-white transition-all duration-200 bg-orange-500 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-50 hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Kickstart your Career <span><FaArrowTurnDown className="absolute bottom-4 ml-2 font-semibold" /></span>
              </a>
            </div>
          </div>
          <div className="pb-12">
            <div className="relative">
              <div className="relative mx-auto lg:max-w-6xl p-2 transform lg:scale-110">
                <img
                  className="h-[500px] rounded-md hidden md:block"
                  src={coursesPhoto}
                  alt="homepage hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses cards in single row */}
      <h1 id="courses" className="text-4xl font-bold text-brand-blue mb-10 text-center mt-20">
        COURSES WE OFFER
      </h1>
      <div className="flex md:justify-center md:flex-row flex-col items-center md:w-full md:mb-20">
        <Card
          title="CIA all 3 Parts with Gleim Content"
          image={ciaLogo}
          text="Master the complete CIA exam with expert guidance and comprehensive study materials"
          price={58999}
          linkTo="/courses/cia" // Internal route for CIA details
          enrollLink="https://pages.razorpay.com/CIASessions" // External enrollment link
          imageStyle="object-cover w-full"
          gst="Including GST"
        />
        <Card
          title="Certified Informations Systems Auditor (CISA)"
          image={cisaLogo}
          text="Become a certified expert in IT auditing and risk management with our comprehensive CISA course"
          price={19999}
          linkTo="#" // Internal route for Part 1 details
          enrollLink="#" // External enrollment link
          imageStyle="object-cover w-full"
          gst="Plus GST"
        />
        <Card
          title="Internal Audit Practioner (IAP)"
          image={iapLogo}
          text="Kickstart your CIA journey with our IAP course—covering audit fundamentals and risk assessment"
          price={20000}
          linkTo="#" // Internal route for Part 2 details
          enrollLink="#" // External enrollment link
          imageStyle="object-contain"
          gst="Plus GST"
        />
        <Card
          title="Certification in Risk Management Assurance"
          image={crmaLogoOne}
          text="Advance your risk career with our CRMA course on assurance, governance, and mitigation"
          price={25000}
          linkTo="#" // Internal route for Part 3 details
          enrollLink="#" // External enrollment link
          imageStyle="object-contain"
          gst="Plus GST"
        />
      </div>
    </>
  );
}