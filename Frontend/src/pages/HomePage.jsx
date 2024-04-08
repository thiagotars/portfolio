import Hero from "../sections/Hero";
import Work from "../sections/Work";
import About from "../sections/About";
import Contact from "../sections/Contact";
import { useEffect, useState } from "react";

const Home = ({ projects, about }) => {
  // const [fetchedData, setFetchedData] = useState(null);

  // useEffect(() => {
  //   setFetchedData(projects);
  // }, []);
  // console.log(fetchedData);
  return (
    <>
      {projects && about ? (
        <>
          <Hero about={about} />
          <Work projects={projects} />
          <About about={about} />
          <Contact about={about} />
        </>
      ) : (
        <h2>Loading..</h2>
      )}
    </>
  );
};

export default Home;
