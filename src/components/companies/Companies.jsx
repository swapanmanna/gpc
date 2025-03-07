
// export default function Companies() {
//     return (
//         <>
//             <div className="max-w-sm md:w-full">
//                 <div className="mt-20 md:mt-32 mb-32 ml-40 max-w-[77rem] flex flex-col items-center">
//                     <h1 className="text-2xl md:text-3xl mb-8 font-bold text-brand-dark">Our students are from Top 500+ corporates</h1>
//                     <div className="flex md:gap-[68px] flex-col md:justify-center mt-8">
//                         <img src={wellsFargo} className="h-16"></img>
//                         <img src={emami} className="h-16"></img>
//                         <img src={gitlab} className="h-16"></img>
//                         <img src={kpmg} className="h-16"></img>
//                         <img src={suzlon} className="h-16"></img>
//                         <img src={atlas} className="h-16"></img>
//                         <img src={hpLogo} className="h-16"></img>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

import React from "react";
import emami from "../../assets/emami.png";
import atlas from "../../assets/atlas.jpg";
import gitlab from "../../assets/gitlab.png";
import kpmg from "../../assets/kpmg.png";
import suzlon from "../../assets/suzlon.png";
import wellsFargo from "../../assets/wells-fargo.png";
import hpLogo from "../../assets/hp-logo.png";

export default function Companies() {
    return (
        <div className="w-full px-4 md:px-8">
            <div className="pt-32 pb-20 mb-10 md:mb-20 max-w-[77rem] mx-auto flex flex-col items-center">
                <h1 className="text-xl md:text-3xl mb-8 font-bold text-brand-dark text-center">Our students are from Top 500+ corporates</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-center gap-4 md:gap-[68px] mt-8">
                    <img src={wellsFargo} className="h-16 mx-auto" alt="Wells Fargo" />
                    <img src={emami} className="h-16 mx-auto" alt="Emami" />
                    <img src={gitlab} className="h-16 mx-auto" alt="GitLab" />
                    <img src={kpmg} className="h-16 mx-auto" alt="KPMG" />
                    <img src={suzlon} className="h-16 mx-auto" alt="Suzlon" />
                    <img src={atlas} className="h-16 mx-auto" alt="Atlas" />
                    <img src={hpLogo} className="h-16 mx-auto" alt="HP" />
                </div>
            </div>
        </div>
    );
}