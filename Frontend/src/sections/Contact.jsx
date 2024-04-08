import { motion } from "framer-motion";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = ({ about }) => {
  const [isCopied, setIsCopied] = useState(false);
  const aboutData = about[0];

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="mt-32 lg:mt-60">
      <motion.div className="general-text flex flex-col lg:flex-row">
        <div className="flex w-full lg:w-2/5">
          <h3 className="font-bold">03/</h3>
          <p className="ml-4">Contact</p>
        </div>
        <div className="text-xl w-full lg:w-3/5 mt-12 lg:mt-0">
          <p>Want to build something?</p>
          <p className="font-bold">Lets connect!</p>
        </div>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center relative">
        <CopyToClipboard text={aboutData.email} onCopy={handleCopy}>
          <button className="my-16 md:my-20 lg:my-28 text-start email-btn hover:underline decoration-4 lg:decoration-8">
            <h1 className="main-text">
              {aboutData.email.split("@")[0].toUpperCase()}
            </h1>

            <h1 className="main-text">
              {"@" + aboutData.email.split("@")[1].toUpperCase()}
            </h1>
          </button>
        </CopyToClipboard>
        {isCopied && (
          <div className="flex pl-0 lg:pl-8 absolute lg:relative bottom-0">
            <span className="material-symbols-rounded">check</span>
            <p>Copied to clipboard</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
