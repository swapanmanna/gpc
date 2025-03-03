// import React from "react";

// export default function VideoSection() {
//     return (
//         <>
//             <div className="md:h-screen flex justify-center items-center">
//                 <div className="md:max-w-[77rem] flex justify center items-center h-[560px] shadow-2xl">
//                     <iframe width="900" height="560" src="https://www.youtube.com/embed/2FWaO_Cf0eg?si=oqeH3gnlG-YuGV_B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-lg"></iframe>
//                 </div>
//             </div>
//         </>
//     )
// }

import React from "react";

export default function VideoSection() {
    return (
        <>
            <div className="md:h-screen flex justify-center items-center">
                <div className="md:max-w-[77rem] w-full flex justify-center items-center h-auto shadow-2xl">
                    <div className="relative w-full pb-[56.25%] h-0">
                        <iframe 
                            src="https://www.youtube.com/embed/2FWaO_Cf0eg?si=oqeH3gnlG-YuGV_B" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen 
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}