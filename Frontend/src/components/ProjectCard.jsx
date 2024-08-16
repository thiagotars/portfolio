import { Link } from "react-router-dom";
import { urlFor } from "../client";

const ProjectCard = ({ project, index }) => {
  const title = project.name.split(" ");
  const image = project.homeImage || null;
  // console.log(project.homeImage);
  return (
    <>
      {image ? (
        <Link
          key={index}
          to={`/projects/${project._id}`}
          className="mt-20 flex flex-col lg:flex-row"
        >
          <div className="flex lg:flex-col w-full lg:w-2/5 lg:pr-6">
            <div className="flex lg:flex-col w-full justify-between lg:justify-start items-center lg:items-start">
              <div className="flex lg:flex-col lg:gap-0 gap-2">
                {title.map((word, index) => (
                  <h1 key={index} className="main-text">
                    {word.toUpperCase()}
                  </h1>
                ))}
              </div>
              <h2 className="secondary-text">{`/${project.year}`}</h2>
            </div>
            <h2 className="hidden lg:flex secondary-text mt-6 lg:mt-9">
              {project.description.short}
            </h2>
          </div>
          <img
            src={urlFor(image)}
            className="w-full mt-2 sm:mt-6 lg:mt-0 object-contain border lg:w-3/5 rounded-2xl"
          />
        </Link>
      ) : null}
    </>
  );
};

export default ProjectCard;
