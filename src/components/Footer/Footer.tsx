import styles from "./styles.module.scss";

import Logo from "../ui/Logo/Logo";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`${styles.footer} ${theme ? styles.dark : ""}`}>
      <div className={`${styles.footer__content} container`}>
        <div className={styles.footer__c}>(c) - ColorsShop 2024</div>
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;
