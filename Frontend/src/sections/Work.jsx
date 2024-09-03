import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const Work = ({ projects }) => {
  console.log(projects);
  const selectedProjects =
    projects.filter((project) => project.isSelected == true) || null;
  
  return (
    <motion.div
      id="works-section"
      className="mt-64"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.75 }}
    >
      <div className="general-text flex">
        <h3 className="font-bold">01/</h3>
        <p className="ml-4">Selected projects</p>
      </div>

      <div>
        {selectedProjects ? (
          selectedProjects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })
        ) : (
          <h2>Loading..</h2>
        )}
      </div>

      <div className="flex w-full">
        <div className="hidden lg:flex w-2/5"></div>
        <div className="flex w-full lg:w-3/5">
          <Link to="/projects">
            <button
              className="overflow-hidden relative text-inter general-text py-3 px-14 border-black border rounded-full mt-16 lg:mt-24 tracking-tight hover:bg-black hover:text-white transition duration-300"
              id="works-btn"
            >
              More projects
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
