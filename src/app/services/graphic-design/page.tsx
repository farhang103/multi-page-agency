import React from "react";
import Intro from "../../../components/Intro";
import changeImg from "../../../assets/graphic-design/desktop/image-change.jpg";
import boxedwaterImg from "../../../assets/graphic-design/desktop/image-boxed-water.jpg";
import scienceImg from "../../../assets/graphic-design/desktop/image-science.jpg";
import ProjectsGrid from "../../../components/ProjectsGrid";
import OtherServices from "../../../components/OtherServices";

export const metadata = {
    title: "Graphic Design",
};

const projects = [
    {
        title: "Tim brown",
        desc: "A book cover designed for Tim Brown’s new release, ‘Change’",
        image: changeImg,
    },
    {
        title: "Boxed water",
        desc: "A simple packaging concept made for Boxed Water",
        image: boxedwaterImg,
    },
    {
        title: "Science !",
        desc: "A poster made in collaboration with the Federal Art Project",
        image: scienceImg,
    },
];

const WebDesign = () => {
    return (
        <div className="pageWrapper flex flex-col gap-24 md:gap-[7.5rem] lg:gap-40">
            <Intro
                title={"graphic design"}
                desc={
                    "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
                }
            />
            <ProjectsGrid projects={projects} />
            <OtherServices />
        </div>
    );
};

export default WebDesign;
