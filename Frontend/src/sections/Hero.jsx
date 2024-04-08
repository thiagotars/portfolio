import { motion } from "framer-motion";

const Hero = ({ about }) => {
  const aboutData = about[0];
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
  const secondHeadingVariants = {
    hidden: {
      y: "100%", // Position the h1 element 100% below its container
    },
    visible: {
      y: 0, // Animate the h1 to its normal position
      // Set animation duration and easing
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.75,
      },
    },
  };
  return (
    <div className="">
      <div className="">
        <div className="overflow-hidden">
          <motion.h1
            className="main-text mt-6"
            initial="hidden"
            animate="visible"
            variants={firstHeadingVariants}
            transition={{
              duration: 1,
            }}
          >
            {aboutData.name.toUpperCase()}
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="main-text"
            initial="hidden"
            animate="visible"
            variants={secondHeadingVariants}
          >
            CREATIVE DEVELOPER
          </motion.h1>
        </div>
      </div>
      <motion.h2
        className="secondary-text mt-6 lg:mt-9 max-w-[480px]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 1.25 }}
      >
        {aboutData.text[0]}
      </motion.h2>
    </div>
  );
};

export default Hero;
