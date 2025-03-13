import React from "react";
import Hero from "../Hero/Hero";
import Card from "../Card/Card";
import Benefits from "../Benefits/Benefits";
import Training from "../Training/Training";
import Demand from "../Demand/Demand";
import examOne from "../../assets/exam-1.webp";
import examTwo from "../../assets/exam-2.png";
import examThree from "../../assets/exam-3.webp";
import examFour from "../../assets/exam-4.png";
import Testimonials from "../testimonials/Testimonials";
import Companies from "../companies/Companies";
import VideoSection from "../VideoSection/VideoSection";

export default function Home() {
    return (
        <div className="bg-gray-50">
            <Hero />
            <Companies />
            <VideoSection />
            <div className="max-w-sm md:max-w-[52rem] mx-auto md:mt-40 mt-24">
                <h1 className="text-center text-2xl md:text-4xl font-extrabold mb-8 mt-16 text-brand-blue">CIA Enrollment (All 3 Parts), Your Path to Success</h1>
                <h3 className="text-center text-xl md:text-2xl font-semibold mb-16 md:mb-8 mt-8 text-brand-dark">Earn the Certified Internal Auditor (CIA) certification and accelerate your career with global recognition, high salaries, and job security</h3>
            </div>
            <div className="flex md:justify-center md:flex-row flex-col items-center md:w-full md:mb-[115px]">
                <Card title="CIA all 3 Parts with Gleim Content" image={examOne} text={"Master the complete CIA exam with expert guidance and comprehensive study materials"} price={58999} linkTo = "https://pages.razorpay.com/CIASessions"/>
                <Card title="CIA Part 1 with Gleim Content" image={examTwo} text={"Build a strong foundation in internal audit essentials with in-depth preparation"}/>
                <Card title="CIA Part 2 with Gleim Content" image={examThree} text={"Strengthen your skills in risk management, governance, and control processes"}/>
                <Card title="CIA Part 3 with Gleim Content" image={examFour} text={"Gain expertise in business acumen, financial management, and data analytics"}/>
            </div>
            <Benefits />
            <Training />
            <Demand />
            <Testimonials />
        </div>
    )
}