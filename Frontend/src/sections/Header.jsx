import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ isContactPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <header className="flex w-full justify-between items-center py-8 text-inter text-lg">
      <Link
        to="/"
        id="logo"
        className="z-40 w-20 h-6 bg-black items-center justify-between"
        style={{
          backgroundColor: isContactPage || isMenuOpen ? "white" : "black",
        }}
        onClick={() => {
          if (isMenuOpen) {
            toggleMenu();
          }
        }}
      ></Link>
      <nav className="md:flex hidden">
        <ul className="flex general-text">
          <li className="hover:underline" id="works">
            <Link to="/projects">work</Link>
          </li>
          <span className="mr-2 ">, </span>
          <li className="hover:underline" id="about">
            <Link to="/about">about</Link>
          </li>
          <span className="mr-2">, </span>
          <li className="hover:underline" id="contact">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
      <nav
        className="md:hidden flex"
        style={{ color: isMenuOpen || isContactPage ? "white" : "black" }}
      >
        <button className="text-inter general-text z-40" onClick={toggleMenu}>
          {isMenuOpen ? "close" : "menu"}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="flex justify-center items-center overflow-hidden fixed top-0 left-0 h-screen w-full bg-black">
          <nav>
            <ul className="flex flex-col gap-12 general-text text-white text-center">
              <li className="hover:underline" id="works">
                <Link to="/projects" onClick={toggleMenu}>
                  work
                </Link>
              </li>

              <li className=" hover:underline" id="about">
                <Link to="/about" onClick={toggleMenu}>
                  about
                </Link>
              </li>

              <li className=" hover:underline" id="contact">
                <Link to="/contact" onClick={toggleMenu}>
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
