import styles from "./styles.module.scss";

import { FaAffiliatetheme } from "react-icons/fa";

import { FaShoppingCart } from "react-icons/fa";
import Menu from "../Menu/Menu";
import Logo from "../ui/Logo/Logo";
import Cart from "../Cart/Cart";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className={`${styles.header} ${theme ? styles.dark : ""}`}>
      <div className={`${styles.header__content} container`}>
        <Logo />
        <div className={styles.header__right}>
          <Menu />
          <button onClick={() => setShowCart((prev) => !prev)}>
            <FaShoppingCart />
          </button>
          <button onClick={() => setTheme((prev) => !prev)}>
            <FaAffiliatetheme />
          </button>
          <Cart showCart={showCart} />
        </div>
      </div>
    </header>
  );
};

export default Header;
