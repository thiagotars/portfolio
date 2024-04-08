const Footer = (props) => {
  const { isContactPage } = props;
  return (
    <div
      className={`flex flex-col gap-12  ${
        isContactPage
          ? "items-center justify-center"
          : "items-start justify-between md:flex-row md:gap-0 "
      } md:items-center general-text py-16`}
      id="footer"
    >
      {!isContactPage && (
        <div className="flex gap-6">
          <a target="_blank" href="https://www.instagram.com/thiagotarsitano/">
            Instagram
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/thiago-tarsitano-2180a2221"
          >
            LinkedIn
          </a>
          <a target="_blank" href="https://github.com/thiagotars/">
            Github
          </a>
        </div>
      )}

      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="flex items-center"
      >
        <span className="material-symbols-rounded">arrow_upward</span>
        <p className="ml-2">Back to top</p>
      </button>

      <p>Copyright@ThiagoTarsitano</p>
    </div>
  );
};

export default Footer;
