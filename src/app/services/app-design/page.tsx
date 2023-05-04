import React from "react";
import Intro from "../../../components/Intro";
import airfliterImg from "../../../assets/app-design/desktop/image-airfilter.jpg";
import eyecamImg from "../../../assets/app-design/desktop/image-eyecam.jpg";
import faceitImg from "../../../assets/app-design/desktop/image-faceit.jpg";
import todoImg from "../../../assets/app-design/desktop/image-todo.jpg";
import loopstudiosImg from "../../../assets/app-design/desktop/image-loopstudios.jpg";
import ProjectsGrid from "../../../components/ProjectsGrid";
import OtherServices from "../../../components/OtherServices";

export const metadata = {
    title: "App Design",
};

const projects = [
    {
        title: "Airfilter",
        desc: "Solving the problem of poor indoor air quality by filtering the air",
        image: airfliterImg,
    },
    {
        title: "Eyecam",
        desc: "Product that lets you edit your favorite photos and videos at any time",
        image: eyecamImg,
    },
    {
        title: "Faceit",
        desc: "Get to meet your favorite internet superstar with the faceit app",
        image: faceitImg,
    },
    {
        title: "Todo",
        desc: "A todo app that features cloud sync with light and dark mode",
        image: todoImg,
    },
    {
        title: "Loopstudios",
        desc: "A VR experience app made for Loopstudios",
        image: loopstudiosImg,
    },
];

const AppDesign = () => {
    return (
        <div className="pageWrapper flex flex-col gap-24 md:gap-[7.5rem] lg:gap-40">
            <Intro
                title={"app design"}
                desc={
                    "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
                }
            />
            <ProjectsGrid projects={projects} />
            <OtherServices />
        </div>
    );
};

export default AppDesign;
