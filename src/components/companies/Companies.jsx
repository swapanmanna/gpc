import React from "react";
import emami from "../../assets/emami.png";
import atlas from "../../assets/atlas.jpg";
import gitlab from "../../assets/gitlab.png";
import kpmg from "../../assets/kpmg.png";
import suzlon from "../../assets/suzlon.png";
import wellsFargo from "../../assets/wells-fargo.png";
import hpLogo from "../../assets/hp-logo.png";

export default function Companies() {
    return (
        <>
            <div className="w-full">
                <div className="mt-32 mb-32 ml-40 max-w-[77rem] flex flex-col items-center">
                    <h1 className="text-3xl mb-8 font-bold text-brand-dark">Our students are from Top 500+ corporates</h1>
                    <div className="flex gap-[68px] justify-center mt-8">
                        <img src={wellsFargo} className="h-16"></img>
                        <img src={emami} className="h-16"></img>
                        <img src={gitlab} className="h-16"></img>
                        <img src={kpmg} className="h-16"></img>
                        <img src={suzlon} className="h-16"></img>
                        <img src={atlas} className="h-16"></img>
                        <img src={hpLogo} className="h-16"></img>
                    </div>
                </div>
            </div>
        </>
    )
}