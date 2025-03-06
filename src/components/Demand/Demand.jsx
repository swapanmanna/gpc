import React from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";

// export default function Demand() {
//     return (
//         <section class="mt-16 text-gray-700 body-font">
//             <h1 className="text-center text-3xl font-bold">Industry Demand for CIA Professionals</h1>
//             <div class="px-5 py-24 pt-16 mx-auto max-w-[74.5rem] ">
//                 <div class="flex flex-wrap -m-4 text-center">
//                 <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//                     <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//                     <FaMoneyBillTrendUp className="text-brand-blue w-12 h-12 mb-3 inline-block" />
                    
//                     <p class="leading-relaxed">Higher Salaries</p>
//                     </div>
//                 </div>
//                 <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//                     <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//                     <MdOutlineSecurity className="text-brand-blue w-12 h-12 mb-3 inline-block"/>
                    
//                     <p class="leading-relaxed">Job Security</p>
//                     </div>
//                 </div>
//                 <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//                     <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//                     <RiGlobalFill className="text-brand-blue w-12 h-12 mb-3 inline-block"/>
//                     <p class="leading-relaxed">Global Recognition</p>
//                     </div>
//                 </div>
//                 <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//                     <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//                     <BsGraphUpArrow className="text-brand-blue w-12 h-12 mb-3 inline-block"/>
//                     <p class="leading-relaxed">Career Growth</p>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

import benefitsLady from "../../assets/benefits-red-lady.png";
import indianMaleProfessional from "../../assets/indian-male-professional.png";

export default function Demand() {
    return (
        <>
            {/* <div className="w-full bg-blue-100">
                <div className="max-w-[75rem] h-3/4 mt-4 mb-4 mx-auto bg-red-50 rounded flex justify-center items-center">
                    <div className="flex flex-col">
                        <h1>Industry Demand for CIA Professionals</h1>
                        <ul>
                            <li><FaMoneyBillTrendUp className="inline-block" />Higher Salaries</li>
                            <li><MdOutlineSecurity className="inline-block" />Job Security</li>
                            <li><RiGlobalFill className="inline-block"/>Global Recognition</li>
                            <li><BsGraphUpArrow className="inline-block"/>Career Growth</li>
                        </ul>
                    </div>
                    <div>
                        <img src={benefitsLady} className="h-64"></img>
                    </div>
                </div>
            </div> */}
            <div className=" mt-20 md:mt-40 w-full">
            <div className="flex justify-center">
                <div className=" max-w-sm bg-[#ffebcd] grid grid-cols-1 md:grid-cols-2 md:w-[72rem] py-10 rounded-2xl shadow-xl">
                    <div className="flex flex-col px-10">
                        <h1 className="text-2xl md:text-4xl black font-bold mb-8">From Learning to Leadership!</h1>
                        <div className="flex space-x-2 mb-4 items-center">
                            <span><FaMoneyBillTrendUp className="h-6 w-6 md:h-8 md:w-8 mt-1 mr-2 text-black" /></span>
                            <span className="text-black font-semibold">Earn competitive pay with great growth potential</span>
                        </div>
                        <div className="flex space-x-2 mb-4 items-center">
                            <span><MdOutlineSecurity className="h-6 w-6 md:h-8 md:w-8 mt-1 mr-2 text-black" /></span>
                            <span className="text-black font-semibold">Enjoy stability in a thriving industry</span>
                        </div>
                        <div className="flex space-x-2 mb-4 items-center">
                            <span><RiGlobalFill className="h-6 w-6 md:h-8 md:w-8 mt-1 mr-2 text-grayblack" /></span>
                            <span className="text-black font-semibold">Build a career with worldwide opportunities</span>
                        </div>
                        <div className="flex space-x-2 mb-4 items-center">
                            <span><BsGraphUpArrow className="h-6 w-6 md:h-8 md:w-8 mt-1 mr-2 text-black" /></span>
                            <span className="text-black font-semibold">Progress from entry-level to leadership roles</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center relative transform scale-130">
                        <img src={indianMaleProfessional} className="absolute bottom-1 hidden md:block right-20 w-full object-contain rounded-lg shadow-2xl shadow-gray-500/50 mask-image" alt="Sample" />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

