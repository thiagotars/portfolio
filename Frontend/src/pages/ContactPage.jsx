import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = ({ about }) => {
  console.log(about);
  const aboutData = about[0] || null;

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

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
    <>
      <div className="text-center">
        <motion.h2
          className="general-text font-medium mt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          SEND ME A MESSAGE
        </motion.h2>
        <CopyToClipboard text={aboutData.email} onCopy={handleCopy}>
          <button className=" flex flex-col mx-auto items-center mt-16 md:mt-22 lg:mt-28 hover:underline decoration-4 lg:decoration-8">
            <div className="overflow-hidden ">
              <motion.h1
                className="main-text"
                initial="hidden"
                animate="visible"
                variants={firstHeadingVariants}
              >
                THIAGOTARSITANO
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="main-text"
                initial="hidden"
                animate="visible"
                variants={secondHeadingVariants}
              >
                @GMAIL.COM
              </motion.h1>
            </div>
          </button>
        </CopyToClipboard>
        {isCopied && (
          <div className=" absolute inset-x-0 flex text-white text-center justify-center mt-10">
            <span className=" material-symbols-rounded">check</span>
            <p className="text-lg ml-2">Copied to clipboard</p>
          </div>
        )}
        <motion.div
          className="mt-40 max-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.75 }}
        >
          <h2 className="general-text font-medium">OR CONNECT WITH ME</h2>
          <nav className="mt-16 md:mt-22 lg:mt-28 mb-28 md:mb-32 lg:mb-40 max-w-[640px] mx-auto">
            <ul>
              {aboutData.links.map((socialMedia, index) => (
                <li
                  key={index}
                  className="hover:underline decoration-4 lg:decoration-8"
                >
                  <a target="_blank" href={socialMedia.link}>
                    <h1 className="main-text mt-6">
                      {socialMedia.name.toUpperCase()}
                    </h1>
                  </a>
                </li>
                // <li className="hover:underline decoration-4 lg:decoration-8">
                //   <a target="_blank" href="https://github.com/thiagotars/">
                //     <h1 className="main-text mt-6">GITHUB</h1>
                //   </a>
                // </li>
                // <li className="hover:underline decoration-4 lg:decoration-8">
                //   <a
                //     target="_blank"
                //     href="https://www.linkedin.com/in/thiago-tarsitano-2180a2221"
                //   >
                //     <h1 className="main-text mt-6">LINKEDIN</h1>
                //   </a>
                // </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </>
  );
};

export default ContactPage;
