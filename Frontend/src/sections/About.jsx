import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HardSkills from "../components/HardSkills";
import { useState, useEffect } from "react";
import { urlFor, client } from "../client";

const About = ({ about }) => {
  const aboutData = about[0] || null;

  const buttonAnimationVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <>
      {aboutData ? (
        <div id="about-section" className="">
          <motion.div className="flex flex-col lg:flex-row mt-32 lg:mt-40 ">
            <div className="general-text flex w-full lg:w-2/5">
              <h3 className="font-bold">02/</h3>
              <p className="ml-4">About me</p>
            </div>
            <div className="secondary-text w-full lg:w-3/5 mt-6 lg:mt-0">
              <h2>{aboutData.text.aboutMainText}</h2>
              {/* <h2 className="mt-6">
                {aboutData.mainText + " " + aboutData.mainText}
              </h2> */}
            </div>
          </motion.div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-2/5"></div>
            <div className="flex w-full lg:w-3/5">
              <Link to="/about">
                <button
                  className="text-inter general-text py-3 px-14 border-black border rounded-full mt-16 lg:mt-24 hover:bg-black hover:text-white transition duration-300"
                  id="about-btn"
                >
                  More about me
                </button>
              </Link>
            </div>
          </div>
          <HardSkills about={about} />
        </div>
      ) : (
        <h2>Loading..</h2>
      )}
    </>
  );
};

export default About;
