import React from "react";
import Hero from "../Hero/Hero";
import Card from "../Card/Card";
import Benefits from "../Benefits/Benefits";
import Training from "../Training/Training";
import Demand from "../Demand/Demand";
import examOne from "../../assets/exam-1.png";
import examTwo from "../../assets/exam-2.png";
import examThree from "../../assets/exam-3.png";
import examFour from "../../assets/exam-4.png";

// [text-shadow:_0_4px_4px_rgb(99_102_241_/_0.8)]
export default function Home() {
    return (
        <div className="bg-gray-50">
            <Hero />
            <h1 className="text-center text-5xl font-extrabold mb-16 text-brand-dark">CIA Examinations</h1>
            <div className="flex flex-wrap justify-center">
                <Card title="CIA Part 1" image={examOne}/>
                <Card title="CIA Part 2" image={examTwo}/>
                <Card title="CIA Part 3" image={examThree}/>
                <Card title="CIA Part 4" image={examFour}/>
            </div>
            <Benefits />
            <Training />
            <Demand />
        </div>
    )
}