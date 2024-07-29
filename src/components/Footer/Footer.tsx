import styles from "./styles.module.scss";

import Logo from "../ui/Logo/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__content} container`}>
        <div className={styles.footer__c}>(c) - ColorsShop 2024</div>
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;
