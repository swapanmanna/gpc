import React from "react";
import testimonialOne from "../../assets/testimonial-1.png";
import testimonialTwo from "../../assets/testimonial-2.png";

const testimonials = [
  {
    name: "Sheryl Berge",
    text: "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.",
    image: testimonialOne,
  },
  {
    name: "Leland Kiehn",
    text: "As a professional athlete, I rely on high-performance gear for my training. This site offers a great selection of top-notch products.",
    image: testimonialTwo,
  },
  {
    name: "Peter Renolds",
    text: "The fitness apparel I bought here fits perfectly and feels amazing. I highly recommend this store to anyone looking for quality gear.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-label="What our customers are saying" className="bg- pb-32 pt-16">
      <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            What Our Students Say
          </h2>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
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
  );
}
