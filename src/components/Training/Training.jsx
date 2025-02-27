// import React from "react";
// import samplePic from "../../assets/sample-pic.jpg";
// import { SiPointy } from "react-icons/si";

// export default function Benefits() {
//     return(
//         <>
//         <div className="flex justify-center">   
//             <div className="my-20 grid grid-cols-1 md:grid-cols-2 md:max-w-6xl">
//                 <div className="flex flex-col px-10"> 
//                     <h1 className="text-3xl font-bold mb-8">From Learning to Leadership</h1>
//                     <div className="flex space-x-2">
//                         <span><SiPointy className="h-6 w-6"/></span>
//                         <span>Globally recognized certification validates your skills on an international scale, opening doors to prestigious career opportunities</span>
//                     </div>
//                     <div className="flex space-x-2">
//                         <span><SiPointy className="h-6 w-6"/></span>
//                         <span>Expert-led training ensures you receive top-tier guidance from industry professionals, enhancing your expertise and confidence</span>
//                     </div>
//                     <div className="flex space-x-2">
//                         <span><SiPointy className="h-6 w-6"/></span>
//                         <span>Comprehensive support offers personalized assistance and resources, helping you succeed at every step of your learning journey</span>
//                     </div>
//                 </div>
//                 <div>
//                     <img src={samplePic} className="h-full"></img>
//                 </div> 
//             </div>
//         </div>
            
//         </>
//     )
// }


import React from "react";
import training from "../../assets/training.webp";
import { SiKnowledgebase } from "react-icons/si";
import { SiPointy } from "react-icons/si";
import { FaBalanceScale } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Training() {
    return (
        <>
            <div className="flex justify-center bg-orange-200">
                <div className="my-20 grid grid-cols-1 md:grid-cols-2 md:max-w-6xl gap-8">
                    <div className="flex items-center justify-center">
                        <img src={training} className="w-full object-contain rounded-lg shadow-2xl shadow-gray-500/50 mask-image" alt="Sample" />
                    </div>
                    <div className="flex flex-col px-10">
                        <h1 className="text-3xl font-bold mb-8 text-brand-blue">Your Path to Success Starts Here</h1>
                        <div className="flex space-x-2 mb-4">
                            <span><SiKnowledgebase className="h-6 w-6 mt-1 mr-2" /></span>
                            <span className="text-brand-dark font-semibold">Real-world knowledge equips you with practical, actionable skills directly applicable to today’s dynamic professional environments. </span>
                        </div>
                        <div className="flex space-x-2 mb-4">
                            <span><FaBalanceScale className="h-6 w-6 mt-1 mr-2" /></span>
                            <span className="text-brand-dark font-semibold">Flexible learning on weekends allows you to balance your education with work and personal commitments, fitting your busy schedule seamlessly. </span>
                        </div>
                        <div className="flex space-x-2 mb-4">
                            <span><FaArrowTrendUp className="h-6 w-6 mt-1 mr-2" /></span>
                            <span className="text-brand-dark font-semibold">Career advancement opportunities connect you with a network of professionals and employers, boosting your growth and visibility in your field.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}