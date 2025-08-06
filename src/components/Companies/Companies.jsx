import React from "react";

// importing company logos
import emami from "../../assets/Emami-bgremoved.png";
import atlas from "../../assets/atlas.png";
import gitlab from "../../assets/Gitlab-bgremoved.png";
import kpmg from "../../assets/kpmg.png";
import suzlon from "../../assets/Suzlon-bgremoved.png";
import wellsFargo from "../../assets/wells-fargo.webp";
import hpLogo from "../../assets/hp-logo.png";
import pwcLogo from "../../assets/PWC-logo.svg";
import eyLogo from "../../assets/EY-logo.png";
import deloitteLogo from "../../assets/Deloitte-logo.png";
import bdoLogo from "../../assets/BDO-logo-bgremoved.webp"
import comptrollerLogo from "../../assets/Comptroller-logo-bgremoved.png";
import vodafoneLogo from "../../assets/Vodafone_Logo.png";
import deutscheBankLogo from "../../assets/DeutscheBank-logo.png";
import kotakMahindraBankLogo from "../../assets/Kotak-mahindra-bank-logo.png"
import sbiLifeInsuranceLogo from "../../assets/SBI-life-insurance.png"
import yesBankLogo from "../../assets/yes-bank-logo.png"
import courseraLogo from "../../assets/coursera-logo.png"
import eatonLogo from "../../assets/eaton-logo-mobile.png"
import cognizantLogo from "../../assets/Cognizant-Logo.png"
import allstateLogo from "../../assets/allstate-logo.png"
import hexawareLogo from "../../assets/hexaware-logo.png"
import truLogo from "../../assets/tru-logo.png"
import powerGridLogo from "../../assets/Power-Grid-Crop.png"
import rblBank from "../../assets/RBL_Bank.png"
import londonStockExchange from "../../assets/London_Stock_Exchange.png"
import orix from "../../assets/Orix.png"
import sunPharmaseutical from "../../assets/Sun_Pharmaseutical.png"
import jpMorganChase from "../../assets/JP_Morgan_Chase.png"
import hsbc from "../../assets/HSBC.png"
import gspu from "../../assets/Gspu.png"
import equitas from "../../assets/Equitas.png"
import bse from "../../assets/BSE.png"
import wipro from "../../assets/Wipro.png"
import zensar from "../../assets/Zensar.png"
import luthra from "../../assets/luthra_logo.png"

// importing marquee
import Marquee from "../Marquee/Marquee";

export default function Companies() {

    const companiesOne = [emami, atlas, gitlab, kpmg, suzlon, wellsFargo, hpLogo, pwcLogo, eyLogo, luthra]

    const companiesTwo = [deloitteLogo, bdoLogo, comptrollerLogo, vodafoneLogo, deutscheBankLogo, kotakMahindraBankLogo, sbiLifeInsuranceLogo, yesBankLogo, courseraLogo]

    const companiesThree = [eatonLogo, cognizantLogo, allstateLogo, hexawareLogo, truLogo, powerGridLogo, bse, wipro, zensar]

    const companiesFour = [rblBank, londonStockExchange, orix, sunPharmaseutical, jpMorganChase, hsbc, gspu, equitas]

    return (
        <>
            <div className="pt-12 md:pt-32 pb-20 mb-10 md:mb-20 max-w-[70rem] mx-auto flex flex-col items-center overflow-x-hidden">
                <h1 className="text-xl md:text-4xl mb-12 font-bold text-brand-blue text-center">Our students are from Top Corporates</h1>
                <div className="container mx-auto">
                    <div className="flex myGradient">
                        <Marquee companies={companiesOne} start={0} end={"-100%"} />
                    </div>
                </div>
                <div className="container mx-auto mt-20">
                    <div className="flex myGradient">
                        <Marquee companies={companiesTwo} start={"-100%"} end={0} />
                    </div>
                </div>
                <div className="container mx-auto mt-20">
                    <div className="flex myGradient">
                        <Marquee companies={companiesThree} start={0} end={"-100%"} />
                    </div>
                </div>
                <div className="container mx-auto mt-20">
                    <div className="flex myGradient">
                        <Marquee companies={companiesFour} start={"-100%"} end={0} />
                    </div>
                </div>
            </div>
        </>
    );
}
