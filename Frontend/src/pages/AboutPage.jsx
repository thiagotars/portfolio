import Contact from "../sections/Contact";
import HardSkills from "../components/HardSkills";
import SoftSkills from "../components/SoftSkills";
import Services from "../components/Services";
import { motion } from "framer-motion";
import { useEffect } from "react";

const AboutPage = ({ about }) => {
  const aboutData = about[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const headingVariants = {
    hidden: {
      y: "100%", // Position the h1 element 100% below its container
    },
    visible: {
      y: 0, // Animate the h1 to its normal position
      // Set animation duration and easing
    },
  };
  return (
    <>
      <div className="">
        <div className="flex flex-col">
          <div className="overflow-hidden">
            <motion.h1
              className="main-text mt-5"
              initial="hidden"
              animate="visible"
              variants={headingVariants}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.5,
              }}
            >
              DESIGN, DEVELOPMENT
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="main-text"
              initial="hidden"
              animate="visible"
              variants={headingVariants}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.75,
              }}
              viewport={{ once: true }}
            >
              FOOTBALL & SAMBA
            </motion.h1>
          </div>
        </div>
        <motion.h2
          className="secondary-text mt-6 lg:mt-9 max-w-[480px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.25 }}
        >
          {aboutData.text[0]}
        </motion.h2>
      </div>

      <motion.div
        className="w-full h-96 md:h-[30rem] lg:h-[40rem] bg-gray-300 rounded-2xl mt-24 lg:mt-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 1.75 }}
      ></motion.div>
      <motion.div
        className="flex flex-col lg:flex-row mt-32 lg:mt-60 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 2 }}
      >
        <div className="text-xl flex w-full lg:w-2/5">
          <h3 className="font-bold">02/</h3>
          <p className="ml-4">About me</p>
        </div>
        <div className="secondary-text w-full lg:max-w-[624px] lg:w-3/5 mt-6 lg:mt-0">
          <h2>{aboutData.text[0] + " " + aboutData.text[0]}</h2>
          <h2 className="mt-6 lg:mt-9">
            {aboutData.text[0] + " " + aboutData.text[0]}
          </h2>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 2 }}
      >
        <Services about={about} />

        <HardSkills about={about} />

        <SoftSkills about={about} />

        <Contact about={about} />
      </motion.div>
    </>
  );
};

export default AboutPage;
