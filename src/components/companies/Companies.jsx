import React from "react";
import emami from "../../assets/Emami-bgremoved.png";
import atlas from "../../assets/Atlas-bgremoved.png";
import gitlab from "../../assets/Gitlab-bgremoved.png";
import kpmg from "../../assets/kpmg.png";
import suzlon from "../../assets/Suzlon-bgremoved.png";
import wellsFargo from "../../assets/wells-fargo.webp";
import hpLogo from "../../assets/hp-logo.png";
import pwcLogo from "../../assets/PWC-logo.svg";
import eyLogo from "../../assets/EY-logo.png";
import deloitteLogo from "../../assets/Deloitte-logo.png";
import bdoLogo from "../../assets/BDO-logo-bgremoved.png"
import comptrollerLogo from "../../assets/Comptroller-logo-bgremoved.png";
import vodafoneLogo from "../../assets/Vodafone_Logo.png";
import deutscheBankLogo from "../../assets/DeutscheBank-logo.png";
import kotakMahindraBankLogo from "../../assets/Kotak-mahindra-bank-logo.png"
import sbiLifeInsuranceLogo from "../../assets/SBI-life-insurance.webp"
import yesBankLogo from "../../assets/yes-bank-logo.webp"
import courseraLogo from "../../assets/coursera-logo.svg"
import eatonLogo from "../../assets/eaton-logo-mobile.png"
import cognizantLogo from "../../assets/Cognizant-Logo.jpg"
import allstateLogo from "../../assets/allstate-logo.png"
import hexawareLogo from "../../assets/hexaware-logo.png"
import truLogo from "../../assets/tru-logo.png"
import powerGridLogo from "../../assets/Power-Grid-Crop.jpg"

import { motion } from "motion/react"

export default function Companies() {
    return (
        // <motion.div
        //     initial = {{ opacity: 0 }}
        //     whileInView={{ opacity: 1 }}
        //     viewport={{ 
        //         once: true,
        //         amount: "all"
        //     }}
        //     transition = {{ duration: 1 }}
        //     className="w-full px-4 md:px-8"
        // >
            <div className="pt-32 pb-20 mb-10 md:mb-20 max-w-[77rem] mx-auto flex flex-col items-center">
                <h1 className="text-xl md:text-4xl mb-20 font-bold text-brand-blue text-center">Our students are from Top corporates</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-[68px] mt-8">
                    <img src={wellsFargo} className="h-16 mx-auto" alt="Wells Fargo" />
                    <img src={emami} className="h-16 mx-auto" alt="Emami logo" />
                    <img src={gitlab} className="h-16 mx-auto transform md:scale-130" alt="GitLab logo" />
                    <img src={kpmg} className="h-16 mx-auto" alt="KPMG logo" />
                    <img src={suzlon} className="h-16 mx-auto transform md:scale-175" alt="Suzlon logo" />
                    <img src={atlas} className="h-16 mx-auto transform md:scale-130" alt="Atlas logo" />
                    <img src={hpLogo} className="h-16 mx-auto" alt="HP logo" />
                    <img src={eyLogo} className="h-16 mx-auto" alt="EY logo" />
                    <img src={pwcLogo} className="h-16 mx-auto transform md:scale-130" alt="PWC logo" />
                    <img src={deloitteLogo} className="h-16 mx-auto transform md:scale-130" alt="Deloitte logo" />
                    <img src={comptrollerLogo} className="h-16 mx-auto transform md:scale-175" alt="Comptroller and Auditor General of India (CAG) logo" />
                    <img src={bdoLogo} className="h-16 mx-auto transform md:scale-175" alt="BDO logo" />
                    <img src={vodafoneLogo} className="h-14 mx-auto transform md:scale-175" alt="Vodafone logo" />
                    <img src={deutscheBankLogo} className="h-16 mx-auto transform md:scale-175" alt="Deutsche Bank logo" />
                    <img src={kotakMahindraBankLogo} className="h-14 mx-auto transform md:scale-175" alt="Kotak Mahindra Bank logo" />
                    <img src={sbiLifeInsuranceLogo} className="h-14 mx-auto transform md:scale-175" alt="SBI Life Insurance logo" />
                    <img src={yesBankLogo} className="h-16 mx-auto transform md:scale-110" alt="Yes Bank logo" />
                    <img src={courseraLogo} className="h-16 mx-auto transform md:scale-250" alt="Coursera logo" />
                    <img src={eatonLogo} className="h-14 mx-auto" alt="Eaton Technologies Pvt Ltd logo" />
                    <img src={cognizantLogo} className="h-14 mx-auto transform md:scale-175" alt="Cognizant logo" />
                    <img src={allstateLogo} className="h-16 mx-auto " alt="Allstate India Pvt Ltd logo" />
                    <img src={hexawareLogo} className="h-16 mx-auto " alt="Hexaware Technologies logo" />
                    <img src={truLogo} className="h-16 mx-auto " alt="TruCap Finance Limited logo" />
                    <img src={powerGridLogo} className="h-16 mx-auto transform md:scale-175" alt="Powergrid Corporation of India logo" />
                </div>
            </div>
        // </motion.div>
    );
}

// import React from "react";
// import emami from "../../assets/emami.png";
// import atlas from "../../assets/atlas.jpg";
// import gitlab from "../../assets/gitlab.png";
// import kpmg from "../../assets/kpmg.png";
// import suzlon from "../../assets/suzlon.png";
// import wellsFargo from "../../assets/wells-fargo.webp";
// import hpLogo from "../../assets/hp-logo.png";
// import pwcLogo from "../../assets/PWC-logo.svg";
// import eyLogo from "../../assets/EY-logo.png";
// import deloitteLogo from "../../assets/Deloitte-logo.png";
// import bdoLogo from "../../assets/BDO-logo.png";
// import comptrollerLogo from "../../assets/Comptroller-logo.png";

// import { motion } from "framer-motion";

// export default function Companies() {
//     const logos = [
//         { src: wellsFargo, alt: "Wells Fargo" },
//         { src: emami, alt: "Emami logo" },
//         { src: gitlab, alt: "GitLab logo" },
//         { src: kpmg, alt: "KPMG logo" },
//         { src: suzlon, alt: "Suzlon logo" },
//         { src: atlas, alt: "Atlas logo" },
//         { src: hpLogo, alt: "HP logo" },
//         { src: eyLogo, alt: "EY logo" },
//         { src: pwcLogo, alt: "PWC logo" },
//         { src: deloitteLogo, alt: "Deloitte logo" },
//         { src: comptrollerLogo, alt: "Comptroller and Auditor General of India (CAG) logo" },
//         { src: bdoLogo, alt: "BDO logo" }
//     ];

//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{
//                 once: true,
//                 amount: "all"
//             }}
//             transition={{ duration: 1 }}
//             className="w-full px-4 md:px-8"
//         >
//             <div className="pt-32 pb-20 mb-10 md:mb-20 mx-auto flex flex-col items-center">
//                 <h1 className="text-xl md:text-3xl mb-8 font-bold text-brand-dark text-center">
//                     Our students are from Top corporates
//                 </h1>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-[68px] mt-8">
//                     {logos.map((logo, index) => (
//                         <div
//                             key={index}
//                             className="flex items-center justify-center w-28 h-16 mx-auto"
//                         >
//                             <img
//                                 src={logo.src}
//                                 alt={logo.alt}
//                                 className="w-full h-full object-contain"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </motion.div>
//     );
// }
