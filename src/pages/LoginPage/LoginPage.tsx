import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";

import styles from "./styles.module.scss";

const LoginPage = () => {
  return (
    <section className={styles.login}>
      <Login />
      <p>
        or <Link to="/register">Register</Link>
      </p>
    </section>
  );
};

export default LoginPage;
