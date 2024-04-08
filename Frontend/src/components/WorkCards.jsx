import ProjectCard from "./ProjectCard";

const WorkCards = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
      })}
    </div>
  );
};

export default WorkCards;
