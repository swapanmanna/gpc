import React from "react";
import hero2 from "../../assets/image-removebg-preview.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Companies from "../companies/Companies";
import studentTestimonialOne from "../../assets/testimonial-mobile-screenshot-1.png"
import studentTestimonialTwo from "../../assets/testimonial-mobile-screenshot-2.png"
import studentTestimonialThree from "../../assets/testimonial-mobile-screenshot-3.png"
import studentTestimonialFour from "../../assets/testimonial-mobile-screenshot-4.png"
import studentTestimonialFive from "../../assets/testimonial-mobile-screenshot-5.png"
import studentTestimonialSix from "../../assets/Testimonial-screenshot-1.png"
import studentTestimonialSeven from "../../assets/Testimonial-screenshot-2.png"
import studentTestimonialEight from "../../assets/Testimonial-screenshot-3.png"
import studentTestimonialNine from "../../assets/Testimonial-screenshot-4.png"
import studentTestimonialTen from "../../assets/Testimonial-screenshot-5.png"
import studentTestimonialEleven from "../../assets/Testimonial-screenshot-6.png"
import studentTestimonialTwelve from "../../assets/Testimonial-screenshot-7.png"
import studentTestimonialThirteen from "../../assets/Testimonial-screenshot-8.png"
import studentTestimonialFourteen from "../../assets/Testimonial-screenshot-9.png"
import studentTestimonialFifteen from "../../assets/Testimonial-screenshot-10.png"
import studentTestimonialSixteen from "../../assets/Testimonial-screenshot-11.png"
import studentTestimonialSeventeen from "../../assets/Testimonial-screenshot-12.png"
import studentTestimonialEighteen from "../../assets/Testimonial-screenshot-13.png"
import studentTestimonialNineteen from "../../assets/Testimonial-screenshot-14.png"
import studentTestimonialTwenty from "../../assets/Testimonial-screenshot-15.png"
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import Testimonials from "../testimonials/Testimonials";
import pinkyPhoto from "../../assets/pinky-photo.jpg";
import akshdeepSingh from "../../assets/akshdeep-singh.png";
import testimonialTwo from "../../assets/testimonial-2.png";
import successStoriesHero from "../../assets/Success-stories-hero-2.webp";
import passoutStudents from "../../assets/Passout-students.jpeg"


export default function SuccessStories() {

    return (
        <>
            {/* <section className="w-full bg-brand-blue flex justify-center items-center h-screen"> 
                <div className="py-[161px] md:grid md:grid-cols-2 md:max-w-[72rem] md:gap-8 md:mx-auto">
                    <div className="relative flex justify-center h-full items-center gap-32">
                        <div className="flex flex-col justify-center">
                            <h1 className="font-bold text-4xl pb-8 text-gray-50">Success Stories: CIA-Certified Professionals on Career Growth</h1>
                            <h3 className="font-semibold text-2xl pb-8 text-gray-50">Join over 250 professionals who have elevated their careers with the Certified Internal Auditor (CIA) certification.</h3>
                            <div className="flex gap-4">
                                <a href="#testimonials"><button className="py-4 px-8 text-lg bg-orange-500 text-gray-50 font-semibold transition ease-in-out duration-300 hover:bg-gray-50 hover:text-black rounded-md">Read Testimonials below</button></a>
                            </div>
                        </div>
                    </div>
                    <img src={passoutStudents} className="h-[450px] rounded-xl"></img>
                </div>
            </section> */}
            <section className="w-full bg-brand-blue flex justify-center items-center h-screen"> 
                <div className="py-[161px] md:grid md:grid-cols-2 md:max-w-[72rem] md:gap-8 md:mx-auto">
                    <div className="relative flex justify-center h-full items-center gap-32">
                        <div className="flex flex-col justify-center">
                            <h1 className="font-bold text-4xl pb-8 text-gray-50">Success Stories: CIA-Certified Professionals on Career Growth</h1>
                            <h3 className="font-semibold text-2xl pb-8 text-gray-50">Join over 250 professionals who have elevated their careers with the Certified Internal Auditor (CIA) certification.</h3>
                            <div className="flex gap-4">
                                <a href="#testimonials"><button className="py-3 px-6 text-xl bg-orange-500 text-gray-50 font-semibold transition ease-in-out duration-300 hover:bg-gray-50 hover:text-black rounded-lg">Read Testimonials below</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col"> {/* Wrap image and caption in a flex container */}
                        <img src={passoutStudents} className="h-[450px] rounded-xl mb-2"></img> {/* Added margin-bottom */}
                        <p className="text-gray-50 text-sm">Pass out students from our community at the IIA Bombay International Conference</p> {/* Caption */}
                    </div>
                </div>
            </section>
            <div className="mx-auto text-center pt-[140px] pb-20 bg-gray-50">
                <h2 className="font-display text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
                    What Our Students Say
                </h2>
            </div>

            <SuccessTestimonials start={0} end={8} /> {/* First 8 testimonials */}
            <ExamTestimonials />
            <h2 className="font-display text-center text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl pb-12 bg-gray-50">
                    More Success Stories
            </h2>
            <SuccessTestimonials start={8} end={20} /> {/* Remaining 13 testimonials */}
            <div className="pb-20 bg-gray-50"></div>  

        </>
    );
}

const SuccessTestimonials = ({ start, end }) => {
    const testimonialsData = [
        { id: 1, image: studentTestimonialOne, alt: "Testimonial 1" },
        { id: 2, image: studentTestimonialTwo, alt: "Testimonial 2" },
        { id: 3, image: studentTestimonialThree, alt: "Testimonial 3" },
        { id: 4, image: studentTestimonialFour, alt: "Testimonial 4" },
        { id: 5, image: studentTestimonialFive, alt: "Testimonial 5" },
        { id: 6, image: studentTestimonialSix, alt: "Testimonial 6" },
        { id: 7, image: studentTestimonialSeven, alt: "Testimonial 7" },
        { id: 8, image: studentTestimonialEight, alt: "Testimonial 8" },
        { id: 9, image: studentTestimonialNine, alt: "Testimonial 9" },
        { id: 10, image: studentTestimonialTen, alt: "Testimonial 10" },
        { id: 11, image: studentTestimonialEleven, alt: "Testimonial 11" },
        { id: 12, image: studentTestimonialTwelve, alt: "Testimonial 12" },
        { id: 13, image: studentTestimonialThirteen, alt: "Testimonial 13" },
        { id: 14, image: studentTestimonialFourteen, alt: "Testimonial 14" },
        { id: 15, image: studentTestimonialFifteen, alt: "Testimonial 15" },
        { id: 16, image: studentTestimonialSixteen, alt: "Testimonial 16" },
        { id: 17, image: studentTestimonialSeventeen, alt: "Testimonial 17" },
        { id: 18, image: studentTestimonialEighteen, alt: "Testimonial 18" },
        { id: 19, image: studentTestimonialNineteen, alt: "Testimonial 19" },
        { id: 20, image: studentTestimonialTwenty, alt: "Testimonial 20" },
    ];

    // Slice the array based on start and end props
    const displayedTestimonials = testimonialsData.slice(start, end);

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {displayedTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.alt}
                                className="w-full h-[338.4px] object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

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