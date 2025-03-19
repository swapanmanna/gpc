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
            <div className="mb-20"></div>

        </>
    );
}

const SuccessTestimonials = () => {

    const testimonialsData = [
        { id: 1, image: studentTestimonialOne, alt: "Testimonial 1" },
        { id: 2, image: studentTestimonialTwo, alt: "Testimonial 2" },
        { id: 3, image: studentTestimonialThree, alt: "Testimonial 3" },
        { id: 4, image: studentTestimonialFour, alt: "Testimonial 4" },
        { id: 5, image: studentTestimonialFive, alt: "Testimonial 5" }
    ];

    const [current, setCurrent] = useState(0)
    const [isFocus, setIsFocus] = useState(false)

    const onPrevClick = () => {
        if (current > 0){
            setCurrent(current - 1)
        }
    }

    const onNextClick = () => {
        if (current < testimonialsData.length - 1){
            setCurrent(current + 1)
        }
    }

    return (
        <section className="mx-auto max-w-sm md:max-w-[76rem] overflow-hidden px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between">
            <MotionConfig transition={{duration:0.7, ease: [0.32, 0.72, 0 , 1]}}>
                <div className="relative w-full max-w-[30rem] flex items-center">
                    <AnimatePresence>
                        {isFocus && (
                            <motion.div 
                            className="absolute left-2 right-2 flex justify-between z-10"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            onHoverStart={() => setIsFocus(true)}
                            onHoverEnd={() => setIsFocus(false)}
                            >
                                <button onClick={onPrevClick}>
                                    <FaChevronLeft className="h-8 w-8" />
                                </button>
                                <button onClick={onNextClick}>
                                    <FaChevronRight className="h-8 w-8" />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <motion.div 
                        className="flex shrink-0 gap-6"
                        animate={{ x: `-${current * (480 + 24)}px` }} 
                        onHoverStart={() => setIsFocus(true)}
                        onHoverEnd={() => setIsFocus(false)}
                    >
                        {testimonialsData.map((testimonial, idx) => (
                            <motion.img
                                key = {idx}
                                src={testimonial.image}
                                alt={testimonial.alt}
                                animate = {{ opacity: idx === current ? 1 : 0.2 }}
                                className="object-cover w-[30rem] shadow-lg border border-gray-300 rounded-xl"
                            />
                        ))}
                    </motion.div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="flex gap-3 px-3 py-2 bg-gray-400 rounded-full opacity-80">
                            {testimonialsData.map((_, idx) => {
                                return (
                                    <button key={idx} onClick={() => setCurrent(idx)}>
                                        <div className={`w-2 h-2 rounded-full ${idx === current ? "bg-white" : "bg-gray-600"}`}></div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </MotionConfig>
        </section>
    )
}