const Footer = ({ isContactPage, about }) => {
  const aboutData = about[0] || null;
  console.log(aboutData);
  return (
    <div
      className={`flex flex-col gap-8 md:gap-12  ${
        isContactPage
          ? "items-center justify-center"
          : "items-start justify-between md:flex-row md:gap-0 "
      } md:items-center general-text py-16`}
      id="footer"
    >
      {!isContactPage && aboutData && (
        <div className="flex gap-6">
          {aboutData.links.map((socialMedia, index) => {
            let name =
              socialMedia.name.charAt(0).toUpperCase() +
              socialMedia.name.slice(1);
            return (
              <a
                key={index}
                target="_blank"
                href={socialMedia.link}
                className="hover:underline"
              >
                {name}
              </a>
            );
          })}
        </div>
      )}

      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="flex items-center"
      >
        <span className="material-symbols-rounded">arrow_upward</span>
        <p className="ml-2 hover:underline">Back to top</p>
      </button>

      <p>Copyright@ThiagoTarsitano</p>
    </div>
  );
};

export default Footer;
