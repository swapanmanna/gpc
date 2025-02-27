import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Card({
    image = "https://flowbite.com/docs/images/blog/image-1.jpg",
    title = "CIA Part 1",
    price = 22000,
  }) {
    return (
      <div className="relative mx-2 mb-10 mt-10 flex w-[17.5rem] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg">
        <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-lg" href="#">
          <img className="object-cover w-full" src={image} alt={title} />
        </a>
        <div className="mt-4 px-5 pb-5">
            <div className="flex justify-between items-center mb-4">
                <a href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-brand-dark">{title}</h5>
                </a>
                <p>
                    <span className="text-brand-gray">INR {price}</span>
                </p>
            </div>
          <a
            href="#"
            className="flex items-center justify-center rounded-md bg-brand-blue px-5 py-2.5 text-center font-medium text-white hover:bg-brand-purple focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Enroll Now
            <FaArrowRightLong className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }
  