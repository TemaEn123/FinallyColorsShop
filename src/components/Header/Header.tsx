import styles from "./styles.module.scss";

import Menu from "../Menu/Menu";
import Logo from "../ui/Logo/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__content} container`}>
        <Logo />
        <div className={styles.header__right}>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
