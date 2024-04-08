import { Outlet, useLocation } from "react-router-dom";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Layout = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <main
      className="px-6 md:px-10 lg:px-14 relative"
      style={{
        backgroundColor: isContactPage ? "black" : "white",
        color: isContactPage ? "white" : "black",
      }}
    >
      <Header isContactPage={isContactPage} />
      <Outlet />
      <Footer isContactPage={isContactPage} />
    </main>
  );
};

export default Layout;
