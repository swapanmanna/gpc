// import React from "react";
// import MetaTags from "../MetaTags";
// import { height } from "../Notifications/NotificationBanner";
// import { GrLocation } from "react-icons/gr";
// import { FiPhoneCall } from "react-icons/fi";
// import { MdOutlineEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { TiArrowRight } from "react-icons/ti";

// export default function ContactUs() {
//     return (
//         <>
//             <MetaTags
//                 title="Contact Us – Global Professional Certifications"
//                 description="Reach out to our team for queries, support, or course guidance. We are here to help you achieve your certification goals."
//                 canonicalUrl="https://globalprofessionalcertifications.com/contact"
//             />
//             <section className={`relative z-10 bg-gray-50 dark:bg-dark py-20 lg:py-[${120 + (4 * height)}px] w-full`}>
//                 <div className="mx-auto lg:max-w-[80rem]">
//                     <div className="lg:flex lg:justify-center lg:items-center">
//                         <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
//                             <div className="mb-12 max-w-[500px] lg:mb-0">
//                                 <span className="px-3 py-1.5 bg-[#EFECFF] text-[#5033FF] w-[12rem] border border-[#5033FF] rounded-lg text-sm font-bold hover:text-brand-purple hover:border-brand-purple transition duration-300">
//                                     Contact Us
//                                 </span>
//                                 <h2 className="mt-4 text-brand-blue dark:text-white mb-4 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
//                                     GET IN TOUCH WITH US
//                                 </h2>
//                                 <p className="text-xl leading-relaxed text-brand-dark dark:text-dark-6 mb-9">
//                                     Send us a message, we will text back!
//                                 </p>
//                                 <div className="mb-8 flex justify-center items-center w-full max-w-[370px]">
//                                     <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                                         <GrLocation size={32} className="hover:text-brand-purple transition duration-300" />
//                                     </div>
//                                     <div className="w-full">
//                                         <h4 className="mb-1 text-xl text-dark dark:text-white">
//                                             <span className="font-bold">Our Location</span> <span><TiArrowRight className="inline-block" /></span> <span className="text-sm italic hover:text-brand-purple hover:underline"><Link to="https://maps.app.goo.gl/iJx6qe41EeEeG1vY8" target="_blank">View on map</Link></span>
//                                         </h4>
//                                         <p className="text-sm text-body-color dark:text-dark-6">
//                                             Innov8 Building, Orchid Centre, Golf course road, Gurugram, Haryana, India - 122022
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="mb-8 flex justify-center items-center w-full max-w-[370px]">
//                                     <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                                         <FiPhoneCall size={32} className="hover:text-brand-purple transition duration-300" />
//                                     </div>
//                                     <div className="w-full">
//                                         <h4 className="text-xl font-bold text-dark dark:text-white">
//                                             Phone Number
//                                         </h4>
//                                         {/* <p className="text-sm text-body-color dark:text-dark-6">
//                                             (+91) 78275 97250
//                                         </p> */}
//                                         <p className="text-sm text-body-color dark:text-dark-6">
//                                             (+91) 87360 83099
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="mb-8 flex w-full max-w-[370px] justify-center items-center">
//                                     <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                                         <MdOutlineEmail size={32} className="hover:text-brand-purple transition duration-300" />
//                                     </div>
//                                     <div className="w-full">
//                                         <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                                             Email Address
//                                         </h4>
//                                         <p className="text-sm text-body-color dark:text-dark-6">
//                                             <a href="mailto:cia@globalprofessionalcertifications.com?subject=Inquiry&body=Hi there, I would like to know more about..." className="hover:underline hover:text-brand-blue">
//                                                 cia@globalprofessionalcertifications.com
//                                             </a>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
//                             <div className="relative p-8 bg-gray-50 border border-gray-300 rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
//                                 <form>
//                                     <div className="flex gap-2 mb-2">
//                                         <div className="w-full">
//                                             <input
//                                                 type="text"
//                                                 placeholder="First Name"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                         </div>
//                                         <div className="w-full">
//                                             <input
//                                                 type="text"
//                                                 placeholder="Last Name"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="flex gap-2">
//                                     <div className="mb-2">
//                                         <input
//                                             type="text"
//                                             placeholder="Email"
//                                             className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                         />
//                                     </div>
//                                     <div className="mb-2">
//                                         <input
//                                             type="text"
//                                             placeholder="Phone Number"
//                                             className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                         />
//                                     </div>
//                                     </div>
//                                     <div className="flex gap-2">
//                                     <div className="mb-2">
//                                         <input
//                                             type="text"
//                                             placeholder="Email"
//                                             className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                         />
//                                     </div>
//                                     <div className="mb-2">
//                                         <input
//                                             type="text"
//                                             placeholder="Phone Number"
//                                             className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                         />
//                                     </div>
//                                     </div>
//                                     <div className="flex gap-2">
//                                     <div className="mb-2">
//                                         <input
//                                             type="text"
//                                             placeholder="City"
//                                             className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                         />
//                                     </div>
//                                     <div className="mb-2">
//                                         <input
//                                             type="text"
//                                             placeholder="Country"
//                                             className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                         />
//                                     </div>
//                                     </div>
//                                     <div className="mb-2">
//                                         <input
//                                             type="text"
//                                             placeholder="Years of Experience"
//                                             className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                         />
//                                     </div>
//                                     <div className="mb-2">
//                                         <textarea
//                                             placeholder="Your Message"
//                                             rows="4"
//                                             className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full resize-none rounded-md border py-3 px-[14px] text-base outline-none"
//                                         ></textarea>
//                                     </div>
//                                     <div>
//                                         <button
//                                             type="submit"
//                                             className="w-full p-3 text-white font-semibold text-lg transition border rounded-md border-primary bg-brand-blue hover:bg-opacity-90 hover:bg-brand-purple hover:border-brand-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gray"
//                                         >
//                                             Send message
//                                         </button>
//                                     </div>
//                                 </form>
//                                 <div>
//                                     <span className="absolute -top-10 -right-9 z-[-1]">
//                                         <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path
//                                                 fillRule="evenodd"
//                                                 clipRule="evenodd"
//                                                 d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
//                                                 fill="#3a1292"
//                                             />
//                                         </svg>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }




// final code - logic not written
import React from "react";
import MetaTags from "../MetaTags";
import { height } from "../Notifications/NotificationBanner";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";

export default function ContactUs() {
    // List of courses for checkboxes
    const courses = [
        "CIA – Specific Part",
        "CIA – All Parts",
        "CISA",
        "IAP",
        "CRMA",
    ];

    return (
        <>
            <MetaTags
                title="Contact Us – Global Professional Certifications"
                description="Reach out to our team for queries, support, or course guidance. We are here to help you achieve your certification goals."
                canonicalUrl="https://globalprofessionalcertifications.com/contact"
            />
            <section className={`relative z-10 bg-gray-50 dark:bg-dark py-20 lg:py-[${120 + (4 * height)}px] w-full`}>
                <div className="mx-auto lg:max-w-[75rem]">
                    <div className="lg:flex lg:justify-center lg:items-center">
                        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                            <div className="mb-12 max-w-[500px] lg:mb-0">
                                <span className="px-3 py-1.5 bg-[#EFECFF] text-[#5033FF] w-[12rem] border border-[#5033FF] rounded-lg text-sm font-bold hover:text-brand-purple hover:border-brand-purple transition duration-300">
                                    Contact Us
                                </span>
                                <h2 className="mt-4 text-brand-blue dark:text-white mb-4 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                    GET IN TOUCH WITH US
                                </h2>
                                <p className="text-xl leading-relaxed text-brand-dark dark:text-dark-6 mb-9">
                                    Send us a message, we will text back!
                                </p>
                                <div className="mb-8 flex justify-center items-center w-full max-w-[370px]">
                                    <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                                        <GrLocation size={32} className="hover:text-brand-purple transition duration-300" />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl text-dark dark:text-white">
                                            <span className="font-bold">Our Location</span> <span><TiArrowRight className="inline-block" /></span> <span className="text-sm italic hover:text-brand-purple hover:underline"><Link to="https://maps.app.goo.gl/iJx6qe41EeEeG1vY8" target="_blank">View on map</Link></span>
                                        </h4>
                                        <p className="text-sm text-body-color dark:text-dark-6">
                                            Innov8 Building, Orchid Centre, Golf course road, Gurugram, Haryana, India - 122022
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 flex justify-center items-center w-full max-w-[370px]">
                                    <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                                        <FiPhoneCall size={32} className="hover:text-brand-purple transition duration-300" />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="text-xl font-bold text-dark dark:text-white">
                                            Phone Number
                                        </h4>
                                        <p className="text-sm text-body-color dark:text-dark-6">
                                            (+91) 87360 83099
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 flex w-full max-w-[370px] justify-center items-center">
                                    <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                                        <MdOutlineEmail size={32} className="hover:text-brand-purple transition duration-300" />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                                            Email Address
                                        </h4>
                                        <p className="text-sm text-body-color dark:text-dark-6">
                                            <a href="mailto:cia@globalprofessionalcertifications.com?subject=Inquiry&body=Hi there, I would like to know more about..." className="hover:underline hover:text-brand-blue">
                                                cia@globalprofessionalcertifications.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-7/12">
                            {/* <div className="relative p-8 bg-gray-50 border border-gray-300 rounded-lg shadow-lg dark:bg-dark-2 sm:p-12"> */}
                                {/* <form>
                                    <div className="flex gap-2 mb-2">
                                        <div className="w-full">
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="mb-2 w-full">
                                            <input
                                                type="text"
                                                placeholder="Email"
                                                className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
                                            />
                                        </div>
                                        <div className="mb-2 w-full">
                                            <input
                                                type="text"
                                                placeholder="Phone Number"
                                                className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="mb-2 w-full">
                                            <input
                                                type="text"
                                                placeholder="Company"
                                                className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
                                            />
                                        </div>
                                        <div className="mb-2 w-full">
                                            <input
                                                type="text"
                                                placeholder="Designation"
                                                className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="mb-2 w-full">
                                            <input
                                                type="text"
                                                placeholder="City"
                                                className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
                                            />
                                        </div>
                                        <div className="mb-2 w-full"> 
                                            <input
                                                type="text"
                                                placeholder="Country"
                                                className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            type="text"
                                            placeholder="Years of Experience"
                                            className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
                                        />
                                    </div>

                                    <div className="my-4 ml-1">
                                        <label className="mb-2 block text-base font-medium text-gray-600 dark:text-white">
                                            Courses Interested In
                                        </label>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                            {courses.map((course, index) => (
                                                <div key={index} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id={`course-${index}`}
                                                        name="coursesInterestedIn"
                                                        value={course}
                                                        className="mr-2 h-4 w-4 text-brand-blue border-gray-300 rounded focus:ring-brand-blue"
                                                    />
                                                    <label
                                                        htmlFor={`course-${index}`}
                                                        className="text-base text-gray-600 dark:text-dark-6"
                                                    >
                                                        {course}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <textarea
                                            placeholder="Your Message"
                                            rows="4"
                                            className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full resize-none rounded-md border py-3 px-[14px] text-base outline-none"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full p-3 text-white font-semibold text-lg transition border rounded-md border-primary bg-brand-blue hover:bg-opacity-90 hover:bg-brand-purple hover:border-brand-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gray"
                                        >
                                            Send message
                                        </button>
                                    </div>
                                </form> */}
                                <iframe
                                    aria-label="GPC Website Contact Us"
                                    style={{
                                        height: '600px',
                                        width: '99%',
                                        border: 'none',
                                    }}
                                    src="https://forms.zohopublic.in/globalprofessionalcertificat1/form/test/formperma/zOWVICVVpCKVK7R_erMCeQrDKHeTI3UTOYkhLCXa7PA"
                                    title="GPC Contact Us Form"
                                ></iframe>
                                {/* <div>
                                    <span className="absolute -top-10 -right-9 z-[-1]">
                                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                                fill="#3a1292"
                                            />
                                        </svg>
                                    </span>
                                </div> */}
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}


// html code integrated
// import React from "react";
// import MetaTags from "../MetaTags";
// import { height } from "../Notifications/NotificationBanner";
// import { GrLocation } from "react-icons/gr";
// import { FiPhoneCall } from "react-icons/fi";
// import { MdOutlineEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { TiArrowRight } from "react-icons/ti";

// export default function ContactUs() {
//     // List of courses for checkboxes
//     const courses = [
//         "CIA – Specific Part",
//         "CIA – All Parts",
//         "CISA",
//         "IAP",
//         "CRMA",
//     ];

//     // Assuming zf_ValidateAndSubmit is provided by an external script
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (typeof window.zf_ValidateAndSubmit === "function") {
//             document.charset = "UTF-8";
//             window.zf_ValidateAndSubmit();
//         } else {
//             console.error("Validation script not loaded");
//         }
//     };

//     return (
//         <>
//             <MetaTags
//                 title="Contact Us – Global Professional Certifications"
//                 description="Reach out to our team for queries, support, or course guidance. We are here to help you achieve your certification goals."
//                 canonicalUrl="https://globalprofessionalcertifications.com/contact"
//             />
//             <section className={`relative z-10 bg-gray-50 dark:bg-dark py-20 lg:py-[${120 + (4 * height)}px] w-full`}>
//                 <div className="mx-auto lg:max-w-[80rem]">
//                     <div className="lg:flex lg:justify-center lg:items-center">
//                         <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
//                             <div className="mb-12 max-w-[500px] lg:mb-0">
//                                 <span className="px-3 py-1.5 bg-[#EFECFF] text-[#5033FF] w-[12rem] border border-[#5033FF] rounded-lg text-sm font-bold hover:text-brand-purple hover:border-brand-purple transition duration-300">
//                                     Contact Us
//                                 </span>
//                                 <h2 className="mt-4 text-brand-blue dark:text-white mb-4 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
//                                     GET IN TOUCH WITH US
//                                 </h2>
//                                 <p className="text-xl leading-relaxed text-brand-dark dark:text-dark-6 mb-9">
//                                     Send us a message, we will text back!
//                                 </p>
//                                 <div className="mb-8 flex justify-center items-center w-full max-w-[370px]">
//                                     <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                                         <GrLocation size={32} className="hover:text-brand-purple transition duration-300" />
//                                     </div>
//                                     <div className="w-full">
//                                         <h4 className="mb-1 text-xl text-dark dark:text-white">
//                                             <span className="font-bold">Our Location</span> <span><TiArrowRight className="inline-block" /></span> <span className="text-sm italic hover:text-brand-purple hover:underline"><Link to="https://maps.app.goo.gl/iJx6qe41EeEeG1vY8" target="_blank">View on map</Link></span>
//                                         </h4>
//                                         <p className="text-sm text-body-color dark:text-dark-6">
//                                             Innov8 Building, Orchid Centre, Golf course road, Gurugram, Haryana, India - 122022
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="mb-8 flex justify-center items-center w-full max-w-[370px]">
//                                     <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                                         <FiPhoneCall size={32} className="hover:text-brand-purple transition duration-300" />
//                                     </div>
//                                     <div className="w-full">
//                                         <h4 className="text-xl font-bold text-dark dark:text-white">
//                                             Phone Number
//                                         </h4>
//                                         <p className="text-sm text-body-color dark:text-dark-6">
//                                             (+91) 87360 83099
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="mb-8 flex w-full max-w-[370px] justify-center items-center">
//                                     <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                                         <MdOutlineEmail size={32} className="hover:text-brand-purple transition duration-300" />
//                                     </div>
//                                     <div className="w-full">
//                                         <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                                             Email Address
//                                         </h4>
//                                         <p className="text-sm text-body-color dark:text-dark-6">
//                                             <a href="mailto:cia@globalprofessionalcertifications.com?subject=Inquiry&body=Hi there, I would like to know more about..." className="hover:underline hover:text-brand-blue">
//                                                 cia@globalprofessionalcertifications.com
//                                             </a>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
//                             <div className="relative p-8 bg-gray-50 border border-gray-300 rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
//                                 <form
//                                     action="https://forms.zohopublic.in/globalprofessionalcertificat1/form/test/formperma/dhyWRo9OQq2PMHOBuot4MO6FFak81uSy8doxun7Y2nw/htmlRecords/submit"
//                                     name="form"
//                                     method="POST"
//                                     onSubmit={handleSubmit}
//                                     acceptCharset="UTF-8"
//                                     encType="multipart/form-data"
//                                     id="form"
//                                 >
//                                     <input type="hidden" name="zf_referrer_name" value="" />
//                                     <input type="hidden" name="zf_redirect_url" value="" />
//                                     <input type="hidden" name="zc_gad" value="" />
//                                     <div className="flex gap-2 mb-2">
//                                         <div className="w-full">
//                                             {/* <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 First Name <em className="zf-important text-red-500">*</em>
//                                             </label> */}
//                                             <input
//                                                 type="text"
//                                                 name="Name_First"
//                                                 maxLength="255"
//                                                 fieldType="7"
//                                                 placeholder="e.g., John"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="Name_First_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                         <div className="w-full">
//                                             {/* <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 Last Name <em className="zf-important text-red-500">*</em>
//                                             </label> */}
//                                             <input
//                                                 type="text"
//                                                 name="Name_Last"
//                                                 maxLength="255"
//                                                 fieldType="7"
//                                                 placeholder="e.g., Doe"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="Name_Last_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <div className="mb-2 w-full">
//                                             {/* <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 Email <em className="zf-important text-red-500">*</em>
//                                             </label> */}
//                                             <input
//                                                 type="text"
//                                                 name="Email"
//                                                 checkType="c5"
//                                                 maxLength="255"
//                                                 fieldType="9"
//                                                 placeholder="e.g., john@example.com"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="Email_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                         <div className="mb-2 w-full">
//                                             {/* <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 Phone Number <em className="zf-important text-red-500">*</em>
//                                             </label> */}
//                                             <input
//                                                 type="text"
//                                                 name="PhoneNumber_countrycode"
//                                                 maxLength="20"
//                                                 checkType="c7"
//                                                 fieldType="11"
//                                                 phoneFormat="1"
//                                                 isCountryCodeEnabled={false}
//                                                 placeholder="e.g., +91 98xxxxxxxx"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="PhoneNumber_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <div className="mb-2 w-full">
//                                             {/* <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 Company <em className="zf-important text-red-500">*</em>
//                                             </label> */}
//                                             <input
//                                                 type="text"
//                                                 name="SingleLine"
//                                                 checkType="c1"
//                                                 maxLength="255"
//                                                 fieldType="1"
//                                                 placeholder="e.g., Tesla"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="SingleLine_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                         <div className="mb-2 w-full">
//                                             {/* <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 Designation
//                                             </label> */}
//                                             <input
//                                                 type="text"
//                                                 name="SingleLine1"
//                                                 checkType="c1"
//                                                 maxLength="255"
//                                                 fieldType="1"
//                                                 placeholder="e.g., CFO"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="SingleLine1_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <div className="mb-2 w-full">
//                                             {/* <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 City
//                                             </label> */}
//                                             <input
//                                                 type="text"
//                                                 name="SingleLine2"
//                                                 checkType="c1"
//                                                 maxLength="255"
//                                                 fieldType="1"
//                                                 placeholder="e.g., Delhi"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="SingleLine2_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                         <div className="mb-2 w-full">
//                                             {/* <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 Country
//                                             </label> */}
//                                             <input
//                                                 type="text"
//                                                 name="SingleLine3"
//                                                 checkType="c1"
//                                                 maxLength="255"
//                                                 fieldType="1"
//                                                 placeholder="e.g., India"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="SingleLine3_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div className="mb-2">
//                                         {/* <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                             Years of Experience
//                                         </label> */}
//                                         <input
//                                             type="text"
//                                             name="Number"
//                                             checkType="c2"
//                                             maxLength="18"
//                                             fieldType="3"
//                                             placeholder="e.g., 2"
//                                             className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                         />
//                                         <p id="Number_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                             Invalid value
//                                         </p>
//                                     </div>
//                                     <div className="my-4 ml-1">
//                                         <label className="mb-2 block text-base font-medium text-gray-600 dark:text-white">
//                                             Courses Interested In <em className="zf-important text-red-500">*</em>
//                                         </label>
//                                         <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
//                                             {courses.map((course, index) => (
//                                                 <div key={index} className="flex items-center">
//                                                     <input
//                                                         type="checkbox"
//                                                         id={`Checkbox_${index + 1}`}
//                                                         name="Checkbox"
//                                                         value={course}
//                                                         checkType="c1"
//                                                         className="mr-2 h-4 w-4 text-brand-blue border-gray-300 rounded focus:ring-brand-blue"
//                                                     />
//                                                     <label
//                                                         htmlFor={`Checkbox_${index + 1}`}
//                                                         className="text-base text-gray-600 dark:text-dark-6"
//                                                     >
//                                                         {course}
//                                                     </label>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                         <p id="Checkbox_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                             Invalid value
//                                         </p>
//                                     </div>
//                                     <div className="mb-2">
//                                         <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                             Your Message
//                                         </label>
//                                         <textarea
//                                             name="MultiLine"
//                                             checkType="c1"
//                                             maxLength="65535"
//                                             placeholder=""
//                                             rows="4"
//                                             className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full resize-none rounded-md border py-3 px-[14px] text-base outline-none"
//                                         ></textarea>
//                                         <p id="MultiLine_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                             Invalid value
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <button
//                                             type="submit"
//                                             className="w-full p-3 text-white font-semibold text-lg transition border rounded-md border-primary bg-brand-blue hover:bg-opacity-90 hover:bg-brand-purple hover:border-brand-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gray zf-submitColor"
//                                         >
//                                             Submit
//                                         </button>
//                                     </div>
//                                 </form>
//                                 <div>
//                                     <span className="absolute -top-10 -right-9 z-[-1]">
//                                         <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path
//                                                 fillRule="evenodd"
//                                                 clipRule="evenodd"
//                                                 d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
//                                                 fill="#3a1292"
//                                             />
//                                         </svg>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }


// form with the logic

// import React from "react";
// import MetaTags from "../MetaTags";
// import { height } from "../Notifications/NotificationBanner";
// import { GrLocation } from "react-icons/gr";
// import { FiPhoneCall } from "react-icons/fi";
// import { MdOutlineEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { TiArrowRight } from "react-icons/ti";

// export default function ContactUs() {
//     // List of courses for checkboxes
//     const courses = [
//         "CIA – Specific Part",
//         "CIA – All Parts",
//         "CISA",
//         "IAP",
//         "CRMA",
//     ];

//     // Validation arrays from the JavaScript code
//     const zf_MandArray = ["Name_First", "Name_Last", "Email", "SingleLine", "PhoneNumber_countrycode", "Checkbox"];
//     const zf_FieldArray = ["Name_First", "Name_Last", "Email", "SingleLine", "SingleLine2", "Number", "PhoneNumber_countrycode", "SingleLine1", "SingleLine3", "Checkbox", "MultiLine"];
//     const isSalesIQIntegrationEnabled = false;
//     const dateAndMonthRegexFormateArray = zf_SetDateAndMonthRegexBasedOnDateFormate('dd-MMM-yyyy');
//     const zf_DateRegex = new RegExp(dateAndMonthRegexFormateArray[0]);
//     const zf_MonthYearRegex = new RegExp(dateAndMonthRegexFormateArray[1]);

//     // Validation functions
//     function zf_ValidateAndSubmit() {
//         if (zf_CheckMandatory()) {
//             if (zf_ValidCheck()) {
//                 if (isSalesIQIntegrationEnabled) {
//                     zf_addDataToSalesIQ();
//                 }
//                 return true;
//             } else {
//                 return false;
//             }
//         } else {
//             return false;
//         }
//     }

//     function zf_CheckMandatory() {
//         for (let i = 0; i < zf_MandArray.length; i++) {
//             const fieldObj = document.forms.form[zf_MandArray[i]];
//             if (fieldObj) {
//                 if (fieldObj.nodeName) {
//                     if (fieldObj.nodeName === 'OBJECT') {
//                         if (!zf_MandatoryCheckSignature(fieldObj)) {
//                             zf_ShowErrorMsg(zf_MandArray[i]);
//                             return false;
//                         }
//                     } else if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length === 0) {
//                         if (fieldObj.type === 'file') {
//                             fieldObj.focus();
//                             zf_ShowErrorMsg(zf_MandArray[i]);
//                             return false;
//                         }
//                         fieldObj.focus();
//                         zf_ShowErrorMsg(zf_MandArray[i]);
//                         return false;
//                     } else if (fieldObj.nodeName === 'SELECT') {
//                         if (fieldObj.options[fieldObj.selectedIndex].value === '-Select-') {
//                             fieldObj.focus();
//                             zf_ShowErrorMsg(zf_MandArray[i]);
//                             return false;
//                         }
//                     } else if (fieldObj.type === 'checkbox' || fieldObj.type === 'radio') {
//                         if (fieldObj.checked === false) {
//                             fieldObj.focus();
//                             zf_ShowErrorMsg(zf_MandArray[i]);
//                             return false;
//                         }
//                     }
//                 } else {
//                     let checkedValsCount = 0;
//                     const inpChoiceElems = fieldObj;
//                     for (let ii = 0; ii < inpChoiceElems.length; ii++) {
//                         if (inpChoiceElems[ii].checked === true) {
//                             checkedValsCount++;
//                         }
//                     }
//                     if (checkedValsCount === 0) {
//                         inpChoiceElems[0].focus();
//                         zf_ShowErrorMsg(zf_MandArray[i]);
//                         return false;
//                     }
//                 }
//             }
//         }
//         return true;
//     }

//     function zf_ValidCheck() {
//         let isValid = true;
//         for (let ind = 0; ind < zf_FieldArray.length; ind++) {
//             const fieldObj = document.forms.form[zf_FieldArray[ind]];
//             if (fieldObj) {
//                 if (fieldObj.nodeName) {
//                     const checkType = fieldObj.getAttribute("checktype");
//                     if (checkType === "c2") {
//                         if (!zf_ValidateNumber(fieldObj)) {
//                             isValid = false;
//                             fieldObj.focus();
//                             zf_ShowErrorMsg(zf_FieldArray[ind]);
//                             return false;
//                         }
//                     } else if (checkType === "c3") {
//                         if (!zf_ValidateCurrency(fieldObj) || !zf_ValidateDecimalLength(fieldObj, 10)) {
//                             isValid = false;
//                             fieldObj.focus();
//                             zf_ShowErrorMsg(zf_FieldArray[ind]);
//                             return false;
//                         }
//                     } else if (checkType === "c4") {
//                         if (!zf_ValidateDateFormat(fieldObj)) {
//                             isValid = false;
//                             fieldObj.focus();
//                             zf_ShowErrorMsg(zf_FieldArray[ind]);
//                             return false;
//                         }
//                     } else if (checkType === "c5") {
//                         if (!zf_ValidateEmailID(fieldObj)) {
//                             isValid = false;
//                             fieldObj.focus();
//                             zf_ShowErrorMsg(zf_FieldArray[ind]);
//                             return false;
//                         }
//                     } else if (checkType === "c6") {
//                         if (!zf_ValidateLiveUrl(fieldObj)) {
//                             isValid = false;
//                             fieldObj.focus();
//                             zf_ShowErrorMsg(zf_FieldArray[ind]);
//                             return false;
//                         }
//                     } else if (checkType === "c7") {
//                         if (!zf_ValidatePhone(fieldObj)) {
//                             isValid = false;
//                             fieldObj.focus();
//                             zf_ShowErrorMsg(zf_FieldArray[ind]);
//                             return false;
//                         }
//                     } else if (checkType === "c8") {
//                         zf_ValidateSignature(fieldObj);
//                     } else if (checkType === "c9") {
//                         if (!zf_ValidateMonthYearFormat(fieldObj)) {
//                             isValid = false;
//                             fieldObj.focus();
//                             zf_ShowErrorMsg(zf_FieldArray[ind]);
//                             return false;
//                         }
//                     }
//                 }
//             }
//         }
//         return isValid;
//     }

//     function zf_ShowErrorMsg(uniqName) {
//         let fldLinkName;
//         for (let errInd = 0; errInd < zf_FieldArray.length; errInd++) {
//             fldLinkName = zf_FieldArray[errInd].split('_')[0];
//             const errorElement = document.getElementById(fldLinkName + "_error");
//             if (errorElement) {
//                 errorElement.style.display = 'none';
//             }
//         }
//         const linkName = uniqName.split('_')[0];
//         const errorElement = document.getElementById(linkName + "_error");
//         if (errorElement) {
//             errorElement.style.display = 'block';
//         }
//     }

//     function zf_ValidateNumber(elem) {
//         const validChars = "-0123456789";
//         const numValue = elem.value.replace(/^\s+|\s+$/g, '');
//         if (numValue != null && numValue !== "") {
//             let strChar;
//             let result = true;
//             if (numValue.charAt(0) === "-" && numValue.length === 1) {
//                 return false;
//             }
//             for (let i = 0; i < numValue.length && result === true; i++) {
//                 strChar = numValue.charAt(i);
//                 if ((strChar === "-") && (i !== 0)) {
//                     return false;
//                 }
//                 if (validChars.indexOf(strChar) === -1) {
//                     result = false;
//                 }
//             }
//             return result;
//         } else {
//             return true;
//         }
//     }

//     function zf_ValidateDateFormat(inpElem) {
//         const dateValue = inpElem.value.replace(/^\s+|\s+$/g, '');
//         if (dateValue === "") {
//             return true;
//         } else {
//             return (zf_DateRegex.test(dateValue));
//         }
//     }

//     function zf_ValidateCurrency(elem) {
//         const validChars = "0123456789.";
//         let numValue = elem.value.replace(/^\s+|\s+$/g, '');
//         if (numValue.charAt(0) === '-') {
//             numValue = numValue.substring(1, numValue.length);
//         }
//         if (numValue != null && numValue !== "") {
//             let strChar;
//             let result = true;
//             for (let i = 0; i < numValue.length && result === true; i++) {
//                 strChar = numValue.charAt(i);
//                 if (validChars.indexOf(strChar) === -1) {
//                     result = false;
//                 }
//             }
//             return result;
//         } else {
//             return true;
//         }
//     }

//     function zf_ValidateDecimalLength(elem, decimalLen) {
//         const numValue = elem.value;
//         if (numValue.indexOf('.') >= 0) {
//             const decimalLength = numValue.substring(numValue.indexOf('.') + 1).length;
//             if (decimalLength > decimalLen) {
//                 return false;
//             } else {
//                 return true;
//             }
//         }
//         return true;
//     }

//     function zf_ValidateEmailID(elem) {
//         let check = 0;
//         const emailValue = elem.value;
//         if (emailValue != null && emailValue !== "") {
//             const emailArray = emailValue.split(",");
//             for (let i = 0; i < emailArray.length; i++) {
//                 const emailExp = /^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/;
//                 if (!emailExp.test(emailArray[i].replace(/^\s+|\s+$/g, ''))) {
//                     check = 1;
//                 }
//             }
//             if (check === 0) {
//                 return true;
//             } else {
//                 return false;
//             }
//         } else {
//             return true;
//         }
//     }

//     function zf_ValidateLiveUrl(elem) {
//         let urlValue = elem.value;
//         if (urlValue !== null && typeof(urlValue) !== "undefined") {
//             urlValue = urlValue.replace(/^\s+|\s+$/g, '');
//             if (urlValue !== "") {
//                 const urlregex = new RegExp("^(((https|http|ftps|ftp)://[a-zA-Z\\d]+((_|-|@)[a-zA-Z\\d]+)*(\\.[a-zA-Z\\d]+((_|-|@)[a-zA-Z\\d]+)*)+(:\\d{1,5})?)|((w|W){3}(\\.[a-zA-Z\\d]+((_|-|@)[a-zA-Z\\d]+)*){2,}(:\\d{1,5})?)|([a-zA-Z\\d]+((_|-)[a-zA-Z\\d]+)*(\\.[a-zA-Z\\d]+((_|-)[a-zA-Z\\d]+)*)+(:\\d{1,5})?))(/[-\\w.?,:'/\\\\+=&;%$#@()!~]*)?$", "i");
//                 return (urlregex.test(urlValue));
//             }
//         }
//         return true;
//     }

//     function zf_ValidatePhone(inpElem) {
//         const ZFPhoneRegex = {
//             PHONE_INTE_ALL_REG: /^[+]{0,1}[()0-9-. ]+$/,
//             PHONE_INTE_NUMERIC_REG: /^[0-9]+$/,
//             PHONE_INTE_CONT_CODE_ENABLED_REG: /^[(0-9-.][()0-9-. ]*$/,
//             PHONE_USA_REG: /^[0-9]+$/,
//             PHONE_CONT_CODE_REG: /^[+][0-9]{1,4}$/
//         };
//         const phoneFormat = parseInt(inpElem.getAttribute("phoneFormat"));
//         const fieldInpVal = inpElem.value.replace(/^\s+|\s+$/g, '');
//         let toReturn = true;
//         if (phoneFormat === 1) {
//             if (inpElem.getAttribute("valType") === 'code') {
//                 const codeRexp = ZFPhoneRegex.PHONE_CONT_CODE_REG;
//                 if (fieldInpVal !== "" && !codeRexp.test(fieldInpVal)) {
//                     return false;
//                 }
//             } else {
//                 let IRexp = ZFPhoneRegex.PHONE_INTE_ALL_REG;
//                 if (inpElem.getAttribute("phoneFormatType") === '2') {
//                     IRexp = ZFPhoneRegex.PHONE_INTE_NUMERIC_REG;
//                 }
//                 if (fieldInpVal !== "" && !IRexp.test(fieldInpVal)) {
//                     toReturn = false;
//                     return toReturn;
//                 }
//             }
//             return toReturn;
//         } else if (phoneFormat === 2) {
//             const InpMaxlength = inpElem.getAttribute("maxlength");
//             const USARexp = ZFPhoneRegex.PHONE_USA_REG;
//             if (fieldInpVal !== "" && USARexp.test(fieldInpVal) && fieldInpVal.length === InpMaxlength) {
//                 toReturn = true;
//             } else if (fieldInpVal === "") {
//                 toReturn = true;
//             } else {
//                 toReturn = false;
//             }
//             return toReturn;
//         }
//     }

//     function zf_ValidateSignature(objElem) {
//         const linkName = objElem.getAttribute("compname");
//         const canvasElem = document.getElementById("drawingCanvas-" + linkName);
//         const isValidSign = zf_IsSignaturePresent(objElem, linkName, canvasElem);
//         const hiddenSignInputElem = document.getElementById("hiddenSignInput-" + linkName);
//         if (isValidSign) {
//             hiddenSignInputElem.value = canvasElem.toDataURL();
//         } else {
//             hiddenSignInputElem.value = "";
//         }
//         return isValidSign;
//     }

//     function zf_MandatoryCheckSignature(objElem) {
//         const linkName = objElem.getAttribute("compname");
//         const canvasElem = document.getElementById("drawingCanvas-" + linkName);
//         const isValid = zf_IsSignaturePresent(objElem, linkName, canvasElem);
//         return isValid;
//     }

//     function zf_IsSignaturePresent(objElem, linkName, canvasElem) {
//         const context = canvasElem.getContext('2d');
//         const canvasWidth = canvasElem.width;
//         const canvasHeight = canvasElem.height;
//         const canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);
//         const signLen = canvasData.data.length;
//         let flag = false;
//         for (let index = 0; index < signLen; index++) {
//             if (!canvasData.data[index]) {
//                 flag = false;
//             } else if (canvasData.data[index]) {
//                 flag = true;
//                 break;
//             }
//         }
//         return flag;
//     }

//     function zf_FocusNext(elem, event) {
//         if (event.keyCode === 9 || event.keyCode === 16) {
//             return;
//         }
//         if (event.keyCode >= 37 && event.keyCode <= 40) {
//             return;
//         }
//         const compname = elem.getAttribute("compname");
//         const inpElemName = elem.getAttribute("name");
//         if (inpElemName === compname + "_countrycode") {
//             if (elem.value.length === 3) {
//                 document.getElementsByName(compname + "_first")[0].focus();
//             }
//         } else if (inpElemName === compname + "_first") {
//             if (elem.value.length === 3) {
//                 document.getElementsByName(compname + "_second")[0].focus();
//             }
//         }
//     }

//     function zf_ValidateMonthYearFormat(inpElem) {
//         const monthYearValue = inpElem.value.replace(/^\s+|\s+$/g, '');
//         if (monthYearValue === "") {
//             return true;
//         } else {
//             return (zf_MonthYearRegex.test(monthYearValue));
//         }
//     }

//     function zf_SetDateAndMonthRegexBasedOnDateFormate(dateFormat) {
//         const dateAndMonthRegexFormateArray = new Array();
//         let dateFormatRegExp;
//         let monthYearFormatRegExp;
//         if (dateFormat === "dd-MMM-yyyy") {
//             dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-](Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[-](?:(?:19|20)[0-9]{2})$";
//             monthYearFormatRegExp = "^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[-](?:(?:19|20)[0-9]{2})$";
//         } else if (dateFormat === "dd-MMMM-yyyy") {
//             dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-](January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](?:(?:19|20)[0-9]{2})$";
//             monthYearFormatRegExp = "^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](?:(?:19|20)[0-9]{2})$";
//         } else if (dateFormat === "MMMM-dd-yyyy") {
//             dateFormatRegExp = "^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](([0][1-9])|([1-2][0-9])|([3][0-1]))[-](?:(?:19|20)[0-9]{2})$";
//             monthYearFormatRegExp = "^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](?:(?:19|20)[0-9]{2})$";
//         } else if (dateFormat === "dd/MM/yyyy") {
//             dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[\/]([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
//             monthYearFormatRegExp = "^([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
//         } else if (dateFormat === "dd-MM-yyyy") {
//             dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-]([0][1-9]|1[012])[-](?:(?:19|20)[0-9]{2})$";
//             monthYearFormatRegExp = "^([0][1-9]|1[012])[-](?:(?:19|20)[0-9]{2})$";
//         } else if (dateFormat === "MM/dd/yyyy") {
//             dateFormatRegExp = "^([0][1-9]|1[012])[\/](([0][1-9])|([1-2][0-9])|([3][0-1]))[\/](?:(?:19|20)[0-9]{2})$";
//             monthYearFormatRegExp = "^([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
//         } else if (dateFormat === "yyyy-MM-dd") {
//             dateFormatRegExp = "^(?:(?:19|20)[0-9]{2})[-]([0][1-9]|1[012])[-](([0][1-9])|([1-2][0-9])|([3][0-1]))$";
//             monthYearFormatRegExp = "^(?:(?:19|20)[0-9]{2})[-]([0][1-9]|1[012])$";
//         } else if (dateFormat === "yyyy/MM/dd") {
//             dateFormatRegExp = "^(?:(?:19|20)[0-9]{2})[\/]([0][1-9]|1[012])[\/](([0][1-9])|([1-2][0-9])|([3][0-1]))$";
//             monthYearFormatRegExp = "^(?:(?:19|20)[0-9]{2})[\/]([0][1-9]|1[012])$";
//         } else if (dateFormat === "dd.MM.yyyy") {
//             dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[.]([0][1-9]|1[012])[.](?:(?:19|20)[0-9]{2})$";
//             monthYearFormatRegExp = "^([0][1-9]|1[012])[.](?:(?:19|20)[0-9]{2})$";
//         } else if (dateFormat === "MM-dd-yyyy") {
//             dateFormatRegExp = "^([0][1-9]|1[012])[-](([0][1-9])|([1-2][0-9])|([3][0-1]))[-](?:(?:19|20)[0-9]{2})$";
//             monthYearFormatRegExp = "^([0][1-9]|1[012])[-](?:(?:19|20)[0-9]{2})$";
//         }
//         dateAndMonthRegexFormateArray.push(dateFormatRegExp);
//         dateAndMonthRegexFormateArray.push(monthYearFormatRegExp);
//         return dateAndMonthRegexFormateArray;
//     }

//     // Placeholder for zf_addDataToSalesIQ (not implemented as per original code)
//     function zf_addDataToSalesIQ() {
//         // Implement SalesIQ integration logic if needed
//     }

//     // Form submission handler
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         document.charset = "UTF-8";
//         if (zf_ValidateAndSubmit()) {
//             document.forms.form.submit();
//         }
//     };

//     return (
//         <>
//             <MetaTags
//                 title="Contact Us – Global Professional Certifications"
//                 description="Reach out to our team for queries, support, or course guidance. We are here to help you achieve your certification goals."
//                 canonicalUrl="https://globalprofessionalcertifications.com/contact"
//             />
//             <section className={`relative z-10 bg-gray-50 dark:bg-dark py-20 lg:py-[${120 + (4 * height)}px] w-full`}>
//                 <div className="mx-auto lg:max-w-[80rem]">
//                     <div className="lg:flex lg:justify-center lg:items-center">
//                         <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
//                             <div className="mb-12 max-w-[500px] lg:mb-0">
//                                 <span className="px-3 py-1.5 bg-[#EFECFF] text-[#5033FF] w-[12rem] border border-[#5033FF] rounded-lg text-sm font-bold hover:text-brand-purple hover:border-brand-purple transition duration-300">
//                                     Contact Us
//                                 </span>
//                                 <h2 className="mt-4 text-brand-blue dark:text-white mb-4 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
//                                     GET IN TOUCH WITH US
//                                 </h2>
//                                 <p className="text-xl leading-relaxed text-brand-dark dark:text-dark-6 mb-9">
//                                     Send us a message, we will text back!
//                                 </p>
//                                 <div className="mb-8 flex justify-center items-center w-full max-w-[370px]">
//                                     <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                                         <GrLocation size={32} className="hover:text-brand-purple transition duration-300" />
//                                     </div>
//                                     <div className="w-full">
//                                         <h4 className="mb-1 text-xl text-dark dark:text-white">
//                                             <span className="font-bold">Our Location</span> <span><TiArrowRight className="inline-block" /></span> <span className="text-sm italic hover:text-brand-purple hover:underline"><Link to="https://maps.app.goo.gl/iJx6qe41EeEeG1vY8" target="_blank">View on map</Link></span>
//                                         </h4>
//                                         <p className="text-sm text-body-color dark:text-dark-6">
//                                             Innov8 Building, Orchid Centre, Golf course road, Gurugram, Haryana, India - 122022
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="mb-8 flex justify-center items-center w-full max-w-[370px]">
//                                     <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                                         <FiPhoneCall size={32} className="hover:text-brand-purple transition duration-300" />
//                                     </div>
//                                     <div className="w-full">
//                                         <h4 className="text-xl font-bold text-dark dark:text-white">
//                                             Phone Number
//                                         </h4>
//                                         <p className="text-sm text-body-color dark:text-dark-6">
//                                             (+91) 87360 83099
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="mb-8 flex w-full max-w-[370px] justify-center items-center">
//                                     <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                                         <MdOutlineEmail size={32} className="hover:text-brand-purple transition duration-300" />
//                                     </div>
//                                     <div className="w-full">
//                                         <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                                             Email Address
//                                         </h4>
//                                         <p className="text-sm text-body-color dark:text-dark-6">
//                                             <a href="mailto:cia@globalprofessionalcertifications.com?subject=Inquiry&body=Hi there, I would like to know more about..." className="hover:underline hover:text-brand-blue">
//                                                 cia@globalprofessionalcertifications.com
//                                             </a>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
//                             <div className="relative p-8 bg-gray-50 border border-gray-300 rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
//                                 <form
//                                     action="https://forms.zohopublic.in/globalprofessionalcertificat1/form/test/formperma/dhyWRo9OQq2PMHOBuot4MO6FFak81uSy8doxun7Y2nw/htmlRecords/submit"
//                                     name="form"
//                                     method="POST"
//                                     onSubmit={handleSubmit}
//                                     acceptCharset="UTF-8"
//                                     encType="multipart/form-data"
//                                     id="form"
//                                 >
//                                     <input type="hidden" name="zf_referrer_name" value="" />
//                                     <input type="hidden" name="zf_redirect_url" value="" />
//                                     <input type="hidden" name="zc_gad" value="" />
//                                     <div className="flex gap-2 mb-2">
//                                         <div className="w-full">
//                                             <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 First Name <em className="zf-important text-red-500">*</em>
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 name="Name_First"
//                                                 maxLength="255"
//                                                 fieldType="7"
//                                                 placeholder="First Name"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="Name_First_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                         <div className="w-full">
//                                             <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 Last Name <em className="zf-important text-red-500">*</em>
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 name="Name_Last"
//                                                 maxLength="255"
//                                                 fieldType="7"
//                                                 placeholder="Last Name"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="Name_Last_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <div className="mb-2 w-full">
//                                             <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 Email <em className="zf-important text-red-500">*</em>
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 name="Email"
//                                                 checkType="c5"
//                                                 maxLength="255"
//                                                 fieldType="9"
//                                                 placeholder="Email"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="Email_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                         <div className="mb-2 w-full">
//                                             <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 Phone Number <em className="zf-important text-red-500">*</em>
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 name="PhoneNumber_countrycode"
//                                                 maxLength="20"
//                                                 checkType="c7"
//                                                 fieldType="11"
//                                                 phoneFormat="1"
//                                                 isCountryCodeEnabled={false}
//                                                 placeholder="Phone number"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="PhoneNumber_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <div className="mb-2 w-full">
//                                             <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 Company <em className="zf-important text-red-500">*</em>
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 name="SingleLine"
//                                                 checkType="c1"
//                                                 maxLength="255"
//                                                 fieldType="1"
//                                                 placeholder="Company"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="SingleLine_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                         <div className="mb-2 w-full">
//                                             <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 Designation
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 name="SingleLine1"
//                                                 checkType="c1"
//                                                 maxLength="255"
//                                                 fieldType="1"
//                                                 placeholder="Designation"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="SingleLine1_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <div className="mb-2 w-full">
//                                             <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 City
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 name="SingleLine2"
//                                                 checkType="c1"
//                                                 maxLength="255"
//                                                 fieldType="1"
//                                                 placeholder="City"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="SingleLine2_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                         <div className="mb-2 w-full">
//                                             <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                                 Country
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 name="SingleLine3"
//                                                 checkType="c1"
//                                                 maxLength="255"
//                                                 fieldType="1"
//                                                 placeholder="Country"
//                                                 className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                             />
//                                             <p id="SingleLine3_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                                 Invalid value
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div className="mb-2">
//                                         <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                             Years of Experience
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="Number"
//                                             checkType="c2"
//                                             maxLength="18"
//                                             fieldType="3"
//                                             placeholder="Years of Experience"
//                                             className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                                         />
//                                         <p id="Number_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                             Invalid value
//                                         </p>
//                                     </div>
//                                     <div className="my-4 ml-1">
//                                         <label className="mb-2 block text-base font-medium text-gray-600 dark:text-white">
//                                             Courses Interested In <em className="zf-important text-red-500">*</em>
//                                         </label>
//                                         <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
//                                             {courses.map((course, index) => (
//                                                 <div key={index} className="flex items-center">
//                                                     <input
//                                                         type="checkbox"
//                                                         id={`Checkbox_${index + 1}`}
//                                                         name="Checkbox"
//                                                         value={course}
//                                                         checkType="c1"
//                                                         className="mr-2 h-4 w-4 text-brand-blue border-gray-300 rounded focus:ring-brand-blue"
//                                                     />
//                                                     <label
//                                                         htmlFor={`Checkbox_${index + 1}`}
//                                                         className="text-base text-gray-600 dark:text-dark-6"
//                                                     >
//                                                         {course}
//                                                     </label>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                         <p id="Checkbox_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                             Invalid value
//                                         </p>
//                                     </div>
//                                     <div className="mb-2">
//                                         <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                                             Your Message
//                                         </label>
//                                         <textarea
//                                             name="MultiLine"
//                                             checkType="c1"
//                                             maxLength="65535"
//                                             placeholder=""
//                                             rows="4"
//                                             className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full resize-none rounded-md border py-3 px-[14px] text-base outline-none"
//                                         ></textarea>
//                                         <p id="MultiLine_error" className="zf-errorMessage text-red-500 text-sm mt-1" style={{ display: 'none' }}>
//                                             Invalid value
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <button
//                                             type="submit"
//                                             className="w-full p-3 text-white font-semibold text-lg transition border rounded-md border-primary bg-brand-blue hover:bg-opacity-90 hover:bg-brand-purple hover:border-brand-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gray zf-submitColor"
//                                         >
//                                             Send Message
//                                         </button>
//                                     </div>
//                                 </form>
//                                 <div>
//                                     <span className="absolute -top-10 -right-9 z-[-1]">
//                                         <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path
//                                                 fillRule="evenodd"
//                                                 clipRule="evenodd"
//                                                 d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
//                                                 fill="#3a1292"
//                                             />
//                                         </svg>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }



// embedded form




// import React, { useEffect } from "react";
// import MetaTags from "../MetaTags";
// import { height } from "../Notifications/NotificationBanner";
// import { GrLocation } from "react-icons/gr";
// import { FiPhoneCall } from "react-icons/fi";
// import { MdOutlineEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { TiArrowRight } from "react-icons/ti";

// export default function ContactUs() {

//   return (
//     <>
//       <MetaTags
//         title="Contact Us – Global Professional Certifications"
//         description="Reach out to our team for queries, support, or course guidance. We are here to help you achieve your certification goals."
//         canonicalUrl="https://globalprofessionalcertifications.com/contact"
//       />
//       <section
//         className={`relative z-10 bg-gray-50 dark:bg-dark py-20 lg:py-[${
//           120 + 4 * height
//         }px] w-full`}
//       >
//         <div className="mx-auto lg:max-w-[80rem]">
//           <div className="lg:flex lg:justify-center lg:items-center">
//             <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
//               <div className="mb-12 max-w-[500px] lg:mb-0">
//                 <span className="px-3 py-1.5 bg-[#EFECFF] text-[#5033FF] w-[12rem] border border-[#5033FF] rounded-lg text-sm font-bold hover:text-brand-purple hover:border-brand-purple transition duration-300">
//                   Contact Us
//                 </span>
//                 <h2 className="mt-4 text-brand-blue dark:text-white mb-4 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
//                   GET IN TOUCH WITH US
//                 </h2>
//                 <p className="text-xl leading-relaxed text-brand-dark dark:text-dark-6 mb-9">
//                   Send us a message, we will text back!
//                 </p>
//                 <div className="mb-8 flex justify-center items-center w-full max-w-[370px]">
//                   <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                     <GrLocation
//                       size={32}
//                       className="hover:text-brand-purple transition duration-300"
//                     />
//                   </div>
//                   <div className="w-full">
//                     <h4 className="mb-1 text-xl text-dark dark:text-white">
//                       <span className="font-bold">Our Location</span>{" "}
//                       <span>
//                         <TiArrowRight className="inline-block" />
//                       </span>{" "}
//                       <span className="text-sm italic hover:text-brand-purple hover:underline">
//                         <Link
//                           to="https://maps.app.goo.gl/iJx6qe41EeEeG1vY8"
//                           target="_blank"
//                         >
//                           View on map
//                         </Link>
//                       </span>
//                     </h4>
//                     <p className="text-sm text-body-color dark:text-dark-6">
//                       Innov8 Building, Orchid Centre, Golf course road,
//                       Gurugram, Haryana, India - 122022
//                     </p>
//                   </div>
//                 </div>
//                 <div className="mb-8 flex justify-center items-center w-full max-w-[370px]">
//                   <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                     <FiPhoneCall
//                       size={32}
//                       className="hover:text-brand-purple transition duration-300"
//                     />
//                   </div>
//                   <div className="w-full">
//                     <h4 className="text-xl font-bold text-dark dark:text-white">
//                       Phone Number
//                     </h4>
//                     <p className="text-sm text-body-color dark:text-dark-6">
//                       (+91) 87360 83099
//                     </p>
//                   </div>
//                 </div>
//                 <div className="mb-8 flex w-full max-w-[370px] justify-center items-center">
//                   <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                     <MdOutlineEmail
//                       size={32}
//                       className="hover:text-brand-purple transition duration-300"
//                     />
//                   </div>
//                   <div className="w-full">
//                     <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                       Email Address
//                     </h4>
//                     <p className="text-sm text-body-color dark:text-dark-6">
//                       <a
//                         href="mailto:cia@globalprofessionalcertifications.com?subject=Inquiry&body=Hi there, I would like to know more about..."
//                         className="hover:underline hover:text-brand-blue"
//                       >
//                         cia@globalprofessionalcertifications.com
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
//               <div className="relative p-8 bg-gray-50 border border-gray-300 rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
//                 <form
//                   action="https://forms.zohopublic.in/globalprofessionalcertificat1/form/test/formperma/dhyWRo9OQq2PMHOBuot4MO6FFak81uSy8doxun7Y2nw/htmlRecords/submit"
//                   name="form"
//                   method="POST"
//                   onSubmit={() => {
//                     document.charset = "UTF-8";
//                     return window.zf_ValidateAndSubmit();
//                   }}
//                   acceptCharset="UTF-8"
//                   encType="multipart/form-data"
//                   id="form"
//                 >
//                   <input type="hidden" name="zf_referrer_name" value="" />
//                   <input
//                     type="hidden"
//                     name="zf_redirect_url"
//                     value="https://globalprofessionalcertifications.com/contact"
//                   />
//                   <input type="hidden" name="zc_gad" value="" />
//                   <div className="flex gap-1.5 mb-2">
//                     <div className="w-full">
//                       <input
//                         type="text"
//                         name="Name_First"
//                         maxLength="255"
//                         fieldType="7"
//                         placeholder="First Name"
//                         className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                       />
//                       <p
//                         id="Name_error"
//                         className="text-red-500 text-sm mt-1"
//                         style={{ display: "none" }}
//                       >
//                         Invalid value
//                       </p>
//                     </div>
//                     <div className="w-full">
//                       <input
//                         type="text"
//                         name="Name_Last"
//                         maxLength="255"
//                         fieldType="7"
//                         placeholder="Last Name"
//                         className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                       />
//                       <p
//                         id="Name_error"
//                         className="text-red-500 text-sm mt-1"
//                         style={{ display: "none" }}
//                       >
//                         Invalid value
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex gap-1.5">
//                   <div className="mb-2">
//                     <input
//                       type="text"
//                       name="Email"
//                       checktype="c5"
//                       maxLength="255"
//                       fieldType="9"
//                       placeholder="Email"
//                       className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                     />
//                     <p
//                       id="Email_error"
//                       className="text-red-500 text-sm mt-1"
//                       style={{ display: "none" }}
//                     >
//                       Invalid value
//                     </p>
//                   </div>
//                   <div className="mb-2">
//                     <input
//                       type="text"
//                       name="PhoneNumber_countrycode"
//                       maxLength="20"
//                       checktype="c7"
//                       phoneFormat="1"
//                       isCountryCodeEnabled={false}
//                       fieldType="11"
//                       id="international_PhoneNumber_countrycode"
//                       valType="number"
//                       phoneFormatType="1"
//                       placeholder="Phone Number"
//                       className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                     />
//                     <p
//                       id="PhoneNumber_error"
//                       className="text-red-500 text-sm mt-1"
//                       style={{ display: "none" }}
//                     >
//                       Invalid value
//                     </p>
//                   </div>
//                   </div>
//                   <div className="flex gap-1.5">
//                   <div className="mb-2">
//                     <input
//                       type="text"
//                       name="SingleLine"
//                       checktype="c1"
//                       maxLength="255"
//                       fieldType="1"
//                       placeholder="Company"
//                       className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                     />
//                     <p
//                       id="SingleLine_error"
//                       className="text-red-500 text-sm mt-1"
//                       style={{ display: "none" }}
//                     >
//                       Invalid value
//                     </p>
//                   </div>
//                   <div className="mb-2">
//                     <input
//                       type="text"
//                       name="SingleLine1"
//                       checktype="c1"
//                       maxLength="255"
//                       fieldType="1"
//                       placeholder="Designation"
//                       className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                     />
//                     <p
//                       id="SingleLine1_error"
//                       className="text-red-500 text-sm mt-1"
//                       style={{ display: "none" }}
//                     >
//                       Invalid value
//                     </p>
//                   </div>
//                   </div>
//                   <div className="flex gap-3 mb-2">
//                     <div className="w-full">
//                       <input
//                         type="text"
//                         name="SingleLine2"
//                         checktype="c1"
//                         maxLength="255"
//                         fieldType="1"
//                         placeholder="City"
//                         className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                       />
//                       <p
//                         id="SingleLine2_error"
//                         className="text-red-500 text-sm mt-1"
//                         style={{ display: "none" }}
//                       >
//                         Invalid value
//                       </p>
//                     </div>
//                     <div className="w-full">
//                       <input
//                         type="text"
//                         name="SingleLine3"
//                         checktype="c1"
//                         maxLength="255"
//                         fieldType="1"
//                         placeholder="Country"
//                         className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                       />
//                       <p
//                         id="SingleLine3_error"
//                         className="text-red-500 text-sm mt-1"
//                         style={{ display: "none" }}
//                       >
//                         Invalid value
//                       </p>
//                     </div>
//                   </div>
//                   <div className="mb-2">
//                     <input
//                       type="text"
//                       name="Number"
//                       checktype="c2"
//                       maxLength="18"
//                       fieldType="3"
//                       placeholder="Years of Experience"
//                       className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded-md border py-3 px-[14px] text-base outline-none"
//                     />
//                     <p
//                       id="Number_error"
//                       className="text-red-500 text-sm mt-1"
//                       style={{ display: "none" }}
//                     >
//                       Invalid value
//                     </p>
//                   </div>
//                   <div className="my-2 ml-1">
//                     <label className="mb-1 block text-base font-medium text-gray-600 dark:text-white">
//                       Courses Interested In{" "}
//                       {/* <em className="text-red-500">*</em> */}
//                     </label>
//                     <div className="flex flex-wrap items-center">
//                       {[
//                         "CIA – Specific Part",
//                         "CIA – All Parts",
//                         "CISA",
//                         "CRMA",
//                         "IAP",
//                       ].map((course, index) => (
//                         <div key={index} className="mr-4">
//                           <input
//                             className="mr-2"
//                             type="checkbox"
//                             id={`Checkbox_${index + 1}`}
//                             name="Checkbox"
//                             checktype="c1"
//                             value={course}
//                           />
//                           <label
//                             htmlFor={`Checkbox_${index + 1}`}
//                             className="text-base text-body-color dark:text-dark-6"
//                           >
//                             {course}
//                           </label>
//                         </div>
//                       ))}
//                     </div>
//                     <p
//                       id="Checkbox_error"
//                       className="text-red-500 text-sm mt-1"
//                       style={{ display: "none" }}
//                     >
//                       Invalid value
//                     </p>
//                   </div>
//                   <div className="mb-2">
//                     <textarea
//                       name="MultiLine"
//                       checktype="c1"
//                       maxLength="65535"
//                       placeholder="Your Message"
//                       rows="3"
//                       className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full resize-none rounded-md border py-3 px-[14px] text-base outline-none"
//                     ></textarea>
//                     <p
//                       id="MultiLine_error"
//                       className="text-red-500 text-sm mt-1"
//                       style={{ display: "none" }}
//                     >
//                       Invalid value
//                     </p>
//                   </div>
//                   <div>
//                     <button
//                       type="submit"
//                       className="w-full p-3 text-white font-semibold text-lg transition border rounded-md border-primary bg-brand-blue hover:bg-opacity-90 hover:bg-brand-purple hover:border-brand-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gray"
//                     >
//                       Send message
//                     </button>
//                   </div>
//                 </form>
//                 <div>
//                   <span className="absolute -top-10 -right-9 z-[-1]">
//                     <svg
//                       width="100"
//                       height="100"
//                       viewBox="0 0 100 100"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
//                         fill="#3a1292"
//                       />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }