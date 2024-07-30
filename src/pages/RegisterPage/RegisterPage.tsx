import { Link } from "react-router-dom";
import Signup from "../../components/Signup/Signup";

import styles from "./styles.module.scss";

const RegisterPage = () => {
  return (
    <section className={styles.register}>
      <Signup />
      <p>
        or <Link to="/login">Login</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
