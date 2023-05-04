import RealDealCard from "../../components/about/RealDealCard";
import WorldClassCard from "../../components/about/WorldClassCard";
import AboutHero from "../../components/about/AboutHero";
import Locations from "../../components/Locations";

import React from "react";

export const metadata = {
    title: "About",
};

const About = () => {
    return (
        <div className="pageWrapper flex flex-col md:gap-[7.5rem] lg:gap-40">
            <AboutHero />
            <WorldClassCard />
            <Locations />
            <RealDealCard />
        </div>
    );
};

export default About;
