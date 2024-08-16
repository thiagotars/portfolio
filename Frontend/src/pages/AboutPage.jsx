import Contact from "../sections/Contact";
import HardSkills from "../components/HardSkills";
import SoftSkills from "../components/SoftSkills";
import Services from "../components/Services";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { urlFor } from "../client";

const AboutPage = ({ about }) => {
  const aboutData = about[0] || null;

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
      {aboutData ? (
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
              {aboutData.text.aboutSecondaryText}
            </motion.h2>
          </div>

          <motion.img
            src={urlFor(aboutData.aboutImage)}
            className="w-full h-96 object-contain md:h-[30rem] lg:h-[40rem] rounded-2xl xs:mt-12 sm:mt-16 md:mt-24 lg:mt-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.75 }}
          />
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
              <h2>{aboutData.text.aboutMainText}</h2>
              {/* <h2 className="mt-6 lg:mt-9">
                {aboutData.mainText + " " + aboutData.mainText}
              </h2> */}
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
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default AboutPage;
