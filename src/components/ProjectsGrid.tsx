"use client";
import React from "react";
import ProjectTile from "./ProjectTile";
import { animate, motion } from "framer-motion";
motion;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      ease: "easeOut",
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, translateY: "10px" },
  show: { opacity: 1, translateY: "0px" },
};

const ProjectsGrid = ({ projects }) => {
  return (
    <section className="mdmax:px-6 ">
      {projects && (
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-flow-row gap-y-10 lg:grid-cols-3  lg:gap-x-10 mdmax:auto-rows-fr"
        >
          {projects.map((project) => (
            <motion.li key={project.title} variants={listItemVariants}>
              <ProjectTile {...project} />
            </motion.li>
          ))}
        </motion.ul>
      )}
    </section>
  );
};

export default ProjectsGrid;
