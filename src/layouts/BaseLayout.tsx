import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="main container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
