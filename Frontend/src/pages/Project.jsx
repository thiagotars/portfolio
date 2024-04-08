import { useParams } from "react-router-dom";
import Contact from "../sections/Contact";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Project = ({ projects, about }) => {
  const params = useParams();
  const filteredData =
    projects.filter((project) => project._id === params.id) || null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const project = filteredData[0];

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
      {filteredData ? (
        <>
          <div className="flex overflow-hidden">
            <motion.h1
              className="main-text mt-6"
              variants={firstHeadingVariants}
              initial="hidden"
              animate="visible"
            >
              {project.title.toUpperCase()}
            </motion.h1>
          </div>

          <motion.div
            className="w-full h-96 md:h-[30rem] lg:h-[40rem] bg-gray-300 rounded-2xl mt-9 md:mt-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.25 }}
          ></motion.div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-start mt-32 lg:mt-40 w-full lg:w-3/5">
              <div className="general-text flex w-full">
                <h3 className="font-bold">a/</h3>
                <p className="ml-4">Project info</p>
              </div>
              <div className="secondary-text mt-10">
                <h2 className="">{project.description.large}</h2>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-3/5">
              <div className="flex flex-col xs:flex-row justify-center gap-6 md:gap-12 lg:gap-18 xl:gap-24 mt-28 lg:mt-40">
                <a
                  href={project.links.live}
                  className="general-text py-3 px-14 text-center border-black border rounded-full"
                >
                  Live version
                </a>
                <a
                  href={project.links.github}
                  className="general-text py-3 px-14 text-center border-black border rounded-full"
                >
                  Github page
                </a>
              </div>
              <div className="mt-32 lg:mt-40 general-text flex flex-col items-center">
                <div className="w-full flex justify-between py-10 border-y">
                  <p>Client</p>
                  <p>{project.client}</p>
                </div>
                <div className="w-full flex justify-between py-10">
                  <p>Year</p>
                  <p>{project.year}</p>
                </div>
                <div className="w-full flex justify-between py-10 border-y">
                  <p>Services</p>
                  <p className="max-w-40 text-end">{project.role.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>

          {project.images.all.map((image, index) => {
            if (index === 0) {
              return (
                <div
                  key={index}
                  className="w-full h-96 md:h-[30rem] lg:h-[40rem] bg-gray-300 rounded-2xl mt-28 lg:mt-40"
                ></div>
              );
            }
            return (
              <div
                key={index}
                className="w-full h-96 md:h-[30rem] lg:h-[40rem] bg-gray-300 rounded-2xl mt-12 lg:mt-20"
              ></div>
            );
          })}

          <Contact about={about} />
        </>
      ) : (
        <h2>Loading..</h2>
      )}
    </>
  );
};

export default Project;
