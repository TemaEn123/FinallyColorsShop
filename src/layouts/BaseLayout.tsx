import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useTheme } from "../context/ThemeContext";

const BaseLayout = () => {
  const { theme } = useTheme();

  return (
    <>
      <Header />
      <main className={`main ${theme ? "dark" : ""}`}>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
