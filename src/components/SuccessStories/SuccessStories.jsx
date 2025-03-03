import React from "react";
import hero2 from "../../assets/image-removebg-preview.png";
import Companies from "../companies/Companies";
import Testimonials from "../testimonials/Testimonials";

export default function SuccessStories() {
    return (
        <>
            <div className="w-full bg-brand-blue flex justify-center items-center"> 
                <div className="py-[161px] md:grid md:grid-cols-2 md:max-w-[72rem] md:mx-auto">
                    <div className="relative flex justify-center h-full items-center gap-32">
                        <div className="flex flex-col justify-center">
                            <h1 className="font-bold text-4xl pb-8 text-gray-50">Hear from CIA-certified professionals who have achieved career growth</h1>
                            <h3 className="font-semibold text-2xl pb-8 text-gray-50">Join 100+ professionals who have transformed their careers with the Certified Internal Auditor (CIA) certification.</h3>
                            <div className="flex gap-4">
                                <a href="#testimonials"><button className="py-4 px-8 text-lg bg-orange-500 text-gray-50 transition ease-in-out duration-300 hover:bg-gray-50 hover:text-black rounded-md">Read Testimonials below</button></a>
                            </div>
                        </div>
                    </div>
                    <img src={hero2} className="h-[500px] absolute right-[13rem] transform scale-110 top-[8.5rem]"></img>
                </div>
            </div>
            <Companies />
            <Testimonials id="testimonials"/>
        </>
    );
}