import React from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";

export default function Demand() {
    return (
        <section class="mt-16 text-gray-700 body-font">
            <h1 className="text-center text-3xl font-bold">Industry Demand for CIA Professionals</h1>
            <div class="container px-5 py-24 pt-16 mx-auto">
                <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <FaMoneyBillTrendUp className="text-brand-blue w-12 h-12 mb-3 inline-block" />
                    
                    <p class="leading-relaxed">Higher Salaries</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <MdOutlineSecurity className="text-brand-blue w-12 h-12 mb-3 inline-block"/>
                    
                    <p class="leading-relaxed">Job Security</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <RiGlobalFill className="text-brand-blue w-12 h-12 mb-3 inline-block"/>
                    <p class="leading-relaxed">Global Recognition</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <BsGraphUpArrow className="text-brand-blue w-12 h-12 mb-3 inline-block"/>
                    <p class="leading-relaxed">Career Growth</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}