import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <Link className={styles.logo} to=".">
      ColorsShop
    </Link>
  );
};

export default Logo;
