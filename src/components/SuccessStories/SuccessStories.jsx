import React from "react";
import hero2 from "../../assets/image-removebg-preview.png";
import Companies from "../companies/Companies";
import studentTestimonialOne from "../../assets/testimonial-mobile-screenshot-1.png"
import studentTestimonialTwo from "../../assets/testimonial-mobile-screenshot-2.png"
import studentTestimonialThree from "../../assets/testimonial-mobile-screenshot-3.png"
import studentTestimonialFour from "../../assets/testimonial-mobile-screenshot-4.png"
import studentTestimonialFive from "../../assets/testimonial-mobile-screenshot-5.png"

export default function SuccessStories() {

    const testimonialsData = [
        { id: 1, image: studentTestimonialOne, alt: "Testimonial 1" },
        { id: 2, image: studentTestimonialTwo, alt: "Testimonial 2" },
        { id: 3, image: studentTestimonialThree, alt: "Testimonial 3" },
        { id: 4, image: studentTestimonialFour, alt: "Testimonial 4" },
        { id: 5, image: studentTestimonialFive, alt: "Testimonial 5" }
    ];

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

            {/* Testimonials */}
            <section id="testimonials" className="mt-20">
                <div className="mx-auto max-w-sm md:max-w-[76rem] px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-20">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
                            What Our Students Say
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {testimonialsData.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
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

            <Companies />
            
            <div className="mx-auto max-w-sm md:max-w-[76rem] px-4 sm:px-6 lg:px-8 mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {testimonialsData.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
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
        </>
    );
}