import React, { useState } from "react";
import hero2 from "../../assets/image-removebg-preview.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Companies from "../companies/Companies";
import studentTestimonialOne from "../../assets/testimonial-mobile-screenshot-1.png"
import studentTestimonialTwo from "../../assets/testimonial-mobile-screenshot-2.png"
import studentTestimonialThree from "../../assets/testimonial-mobile-screenshot-3.png"
import studentTestimonialFour from "../../assets/testimonial-mobile-screenshot-4.png"
import studentTestimonialFive from "../../assets/testimonial-mobile-screenshot-5.png"
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import Testimonials from "../testimonials/Testimonials";
import pinkyPhoto from "../../assets/pinky-photo.jpg";
import akshdeepSingh from "../../assets/akshdeep-singh.png";
import testimonialTwo from "../../assets/testimonial-2.png";

export default function SuccessStories() {

    return (
        <>
            <section className="w-full bg-brand-blue flex justify-center items-center"> 
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
            </section>
            <div className="mx-auto max-w-2xl text-center mt-20 mb-20">
                <h2 className="font-display text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
                    What Our Students Say
                </h2>
            </div>

            <SuccessTestimonials />
            <Companies />
            <SuccessTestimonials />
            <ExamTestimonials />
            {/* <div className="mb-20"></div> */}

        </>
    );
}

const SuccessTestimonials = () => {

    const testimonialsData = [
        { id: 1, image: studentTestimonialOne, alt: "Testimonial 1" },
        { id: 2, image: studentTestimonialTwo, alt: "Testimonial 2" },
        { id: 3, image: studentTestimonialThree, alt: "Testimonial 3" },
        { id: 4, image: studentTestimonialFour, alt: "Testimonial 4" },
        { id: 5, image: studentTestimonialFive, alt: "Testimonial 5" },
        { id: 6, image: studentTestimonialTwo, alt: "Testimonial 6" }
    ];

    // const [current, setCurrent] = useState(0)
    // const [isFocus, setIsFocus] = useState(false)

    // const onPrevClick = () => {
    //     if (current > 0){
    //         setCurrent(current - 1)
    //     }
    // }

    // const onNextClick = () => {
    //     if (current < testimonialsData.length - 1){
    //         setCurrent(current + 1)
    //     }
    // }

    return (
        // <section className="mx-auto max-w-sm md:max-w-[76rem] overflow-hidden px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between">
        //     <MotionConfig transition={{duration:0.7, ease: [0.32, 0.72, 0 , 1]}}>
        //         <div className="relative w-full max-w-[30rem] flex items-center">
        //             <AnimatePresence>
        //                 {isFocus && (
        //                     <motion.div 
        //                     className="absolute left-2 right-2 flex justify-between z-10"
        //                     initial={{opacity: 0}}
        //                     animate={{opacity: 1}}
        //                     exit={{opacity: 0}}
        //                     onHoverStart={() => setIsFocus(true)}
        //                     onHoverEnd={() => setIsFocus(false)}
        //                     >
        //                         <button onClick={onPrevClick}>
        //                             <FaChevronLeft className="h-8 w-8" />
        //                         </button>
        //                         <button onClick={onNextClick}>
        //                             <FaChevronRight className="h-8 w-8" />
        //                         </button>
        //                     </motion.div>
        //                 )}
        //             </AnimatePresence>
        //             <motion.div 
        //                 className="flex shrink-0 gap-6"
        //                 animate={{ x: `-${current * (480 + 24)}px` }} 
        //                 onHoverStart={() => setIsFocus(true)}
        //                 onHoverEnd={() => setIsFocus(false)}
        //             >
        //                 {testimonialsData.map((testimonial, idx) => (
        //                     <motion.img
        //                         key = {idx}
        //                         src={testimonial.image}
        //                         alt={testimonial.alt}
        //                         animate = {{ opacity: idx === current ? 1 : 0.2 }}
        //                         className="object-cover w-[30rem] shadow-lg border border-gray-300 rounded-xl"
        //                     />
        //                 ))}
        //             </motion.div>
        //             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        //                 <div className="flex gap-3 px-3 py-2 bg-gray-400 rounded-full opacity-80">
        //                     {testimonialsData.map((_, idx) => {
        //                         return (
        //                             <button key={idx} onClick={() => setCurrent(idx)}>
        //                                 <div className={`w-2 h-2 rounded-full ${idx === current ? "bg-white" : "bg-gray-600"}`}></div>
        //                             </button>
        //                         )
        //                     })}
        //                 </div>
        //             </div>
        //         </div>
        //     </MotionConfig>
        // </section>
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {testimonialsData.map((testimonial, index) => (
                    <div
                    key={index}
                    className="relative overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                    >
                    <img
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="w-full h-auto object-cover"
                    />
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

const ExamTestimonials = () => {
    const testimonials = [
        {
            name: "Pinky Agarwal",
            designation: "Head Internal Audit | Emami Limited",
            text: "For anyone preparing for the CIA Challenge Exam, I cannot recommend the Prep Course enough. This program is designed to simplify the learning process and help you stay disciplined with your studies. Arpit Garg, who led the sessions, brought an incredible level of dedication, passion, enthusiasm and expertise to the table.",
            image: pinkyPhoto,
        },
        {
            name: "Akshdeep Singh",
            designation: "Manager | KPMG",
            text: "The CIA Challenge Exam Crash Course, offered and delivered by faculty member Arpit Garg, played a key role in helping me clear the CIA Challenge Exam on my first attempt after just 2 months of preparation. The crash course sessions, held over weekends, were well-planned, thorough, and provided attendees with opportunities.",
            image: akshdeepSingh,
        },
        {
            name: "Starwin PJ",
            designation: "AVP | Wells Fargo",
            text: "Attended the “CIA Challenge Exam” crash course conducted by Mr. Arpit, and it was truly an outstanding learning experience. The sessions were thoughtfully structured, covering the entire syllabus with a perfect balance of depth and clarity. The interactive approach ensured key topics were highlighted.",
            image: testimonialTwo,
        },
    ];

    return (
        <section id="testimonials" aria-label="What our customers are saying" className="bg-gray-50 pb-20 md:pb-[140px] pt-20 ">
            <div className="mx-auto max-w-sm md:max-w-[76rem] px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold tracking-tight text-brand-blue sm:text-3xl">
                    Real Results from CIA Challenge Exam Training
                </h2>
                </div>
                <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <li key={index}>
                    <figure className="relative border border-gray-300 rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <svg
                        aria-hidden="true"
                        width="105"
                        height="78"
                        className="absolute left-6 top-6 fill-slate-100"
                        >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616..." />
                        </svg>
                        <blockquote className="relative">
                        <p className="text-lg text-slate-900">{testimonial.text}</p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                            <div className="font-display text-base text-slate-900">{testimonial.name}</div>
                            <div className="font-display text-sm text-brand-gray">{testimonial.designation}</div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                            <img
                            alt=""
                            className="h-14 w-14 object-cover"
                            src={testimonial.image}
                            />
                        </div>
                        </figcaption>
                    </figure>
                    </li>
                ))}
                </ul>
            </div>
        </section>
    )
}