import { motion } from "framer-motion";
import Contact from "../sections/Contact";
import ProjectCard from "../components/ProjectCard";
import { useEffect } from "react";

const WorkPage = ({ projects, about }) => {
  const aboutData = about[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const firstHeadingVariants = {
    hidden: {
      y: "100%", // Position the h1 element 100% below its container
    },
    visible: {
      y: 0, // Animate the h1 to its normal position
      // Set animation duration and easing
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <>
      <div className="" id="work-page">
        <div className="overflow-hidden">
          <motion.h1
            className="main-text mt-6"
            initial="hidden"
            animate="visible"
            variants={firstHeadingVariants}
          >
            MY WORK
          </motion.h1>
        </div>

        <motion.h2
          className="mt-9 sm:mt-40 md:mt-60 lg:mt-96 mb-40 max-w-[464px] secondary-text"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.25 }}
        >
          {aboutData.text[0]}
        </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 1.5 }}
      >
        <div>
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>

        <Contact about={about} />
      </motion.div>
    </>
  );
};

export default WorkPage;
