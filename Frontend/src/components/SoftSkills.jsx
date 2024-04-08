const SoftSkills = ({ about }) => {
  const aboutData = about[0];
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center mt-32 lg:mt-40">
      <div className="flex lg:flex-col w-2/5">
        <h1 className="main-text">SOFT</h1>
        <h1 className="main-text">SKILLS</h1>
      </div>
      <div className="general-text grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-6 lg:mt-0 lg:w-3/5 py-10 border-y ">
        {aboutData.skills.soft.map((skill, index) => (
          <p key={index} className="flex items-center">
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
