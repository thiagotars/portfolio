import { useParams } from "react-router-dom";
import Contact from "../sections/Contact";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { urlFor } from "../client";

const Project = ({ projects, about }) => {
  const params = useParams();
  const filteredData =
    projects.filter((project) => project._id === params.id) || null;

  const project = filteredData[0];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const breakpoints = [
    { width: 1200, images: project.images.large },
    { width: 600, images: project.images.medium },
    { width: 0, images: project.images.small },
  ];

  const screenSize = breakpoints.find(
    (breakpoint) => windowWidth > breakpoint.width
  )?.images;

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const coverImage =
    windowWidth > 1200
      ? project.coverImage.large
      : windowWidth <= 1200 && windowWidth > 600
        ? project.coverImage.medium
        : project.coverImage.small;

  console.log(projects);
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
              {project.name.toUpperCase()}
            </motion.h1>
          </div>

          <motion.img
            src={urlFor(coverImage)}
            className="object-contain w-full rounded-2xl mt-12 lg:mt-20 border"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.25 }}
          />

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-start mt-32 lg:mt-40 w-full lg:w-3/5">
              <div className="general-text flex w-full">
                <h3 className="font-bold">a/</h3>
                <p className="ml-4">Project info</p>
              </div>
              <div className="secondary-text mt-10">
                <h2 className="">{project.description.long}</h2>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-3/5">
              <div className="flex flex-col xs:flex-row justify-center gap-6 md:gap-12 lg:gap-18 xl:gap-24 mt-28 lg:mt-40">
                <a
                  target="blank"
                  href={project.links.live}
                  className="general-text py-3 px-14 text-center border-black border rounded-full hover:bg-black hover:text-white transition durantion-300"
                >
                  Live version
                </a>
                <a
                  target="blank"
                  href={project.links.github}
                  className="general-text py-3 px-14 text-center border-black border rounded-full hover:bg-black hover:text-white transition durantion-300"
                >
                  Github page
                </a>
              </div>
              <div className="mt-32 lg:mt-40 general-text flex flex-col items-center mb-28 lg:mb-40">
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
                  <div className="flex flex-col">
                    {project.role.map((role) => {
                      console.log(role);
                      return (
                        <p className="max-w-40 md:max-w-52 text-end">{role}</p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {screenSize &&
            screenSize.map((image, index) => (
              <img
                src={urlFor(image)}
                key={index}
                className="object-contain md:object-scale-down w-full rounded-2xl mt-12 lg:mt-20 border"
              />
            ))}
          {/* {windowWidth > 1200 &&
            
            project.images.large.map((image, index) => (
              <img
                src={urlFor(image)}
                key={index}
                className="object-contain md:object-scale-down w-full rounded-2xl mt-12 lg:mt-20"
              />
            ))}

          {windowWidth <= 1200 &&
            windowWidth > 600 &&
            
            project.images.medium.map((image, index) => (
              <img
                src={urlFor(image)}
                key={index}
                className="object-contain md:object-scale-down w-full rounded-2xl mt-12 lg:mt-20"
              />
            ))}

          {windowWidth <= 600 &&
            
            project.images.small.map((image, index) => (
              <img
                src={urlFor(image)}
                key={index}
                className="object-contain md:object-scale-down w-full rounded-2xl mt-12 lg:mt-20"
              />
            ))} */}

          <Contact about={about} />
        </>
      ) : (
        <h2>Loading..</h2>
      )}
    </>
  );
};

export default Project;
