const Services = () => {
  return (
    <div className="mt-32 lg:mt-60">
      <h1 className="main-text">SERVICES</h1>
      <div className="general-text flex flex-col lg:flex-row py-12 lg:py-16 mt-6 border-y">
        <div className="flex gap-4 md:gap-6 lg:gap-8 w-full lg:w-2/5">
          <p className="">a/</p>
          <p className="font-semibold w-full lg:max-w-32">
            Infomation Architecture
          </p>
        </div>
        <p className="max-w-full lg:max-w-[624px] w-full lg:w-3/5 mt-6 lg:mt-0">
          We’ll have a look at what content should be on the site, which
          shouldn’t and what goes on which page. By thinking about the structure
          in user funnels we’ll define a path for the user towards conversion.
        </p>
      </div>
      <div className="general-text flex flex-col lg:flex-row py-12 lg:py-16">
        <div className="flex gap-4 md:gap-6 lg:gap-8 w-full lg:w-2/5">
          <p className="">b/</p>
          <p className="font-semibold w-full lg:max-w-32">
            Web design/ Art direction
          </p>
        </div>
        <p className="max-w-full lg:max-w-[624px] w-full lg:w-3/5 mt-6 lg:mt-0">
          If you already have a visual identity in place we’ll continue into the
          visual design. If not yet defined I’ll go into art direction when the
          homepage is designed. Websites always get designed for desktop and
          mobile.
        </p>
      </div>
      <div className="general-text flex flex-col lg:flex-row py-12 lg:py-16 border-y">
        <div className="flex gap-4 md:gap-6 lg:gap-8 w-full lg:w-2/5">
          <p className="">c/</p>
          <p className="font-semibold w-full lg:max-w-32">
            Front end development
          </p>
        </div>
        <p className="max-w-full lg:max-w-[624px] w-full lg:w-3/5 mt-6 lg:mt-0">
          I plan, design, build, test and maintain scalable front end web
          applications.
        </p>
      </div>
    </div>
  );
};

export default Services;
