import styles from "./styles.module.scss";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useTheme } from "../../context/ThemeContext";

const NotFound = () => {
  const { theme } = useTheme();

  return (
    <>
      <>
        <Header />
        <main className={`main ${theme ? "dark" : ""}`}>
          <div className="container">
            <section className={styles.not}>404</section>
          </div>
        </main>
        <Footer />
      </>
    </>
  );
};

export default NotFound;
