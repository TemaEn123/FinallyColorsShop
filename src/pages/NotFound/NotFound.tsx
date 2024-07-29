import styles from "./styles.module.scss";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const NotFound = () => {
  return (
    <>
      <>
        <Header />
        <main className="main container">
          <section className={styles.not}>404</section>
        </main>
        <Footer />
      </>
    </>
  );
};

export default NotFound;
