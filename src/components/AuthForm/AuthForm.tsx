import React, { useState } from "react";
import styles from "./style.module.scss";

interface Props {
  title: string;
  handleSubmit: (
    email: string,
    password: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const AuthForm = ({ title, handleSubmit }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <form className={styles.form}>
      <legend>{title}</legend>
      <div className={styles.form__item}>
        <label>Login</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Login..."
        />
      </div>
      <div className={styles.form__item}>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password..."
        />
      </div>

      <button
        onClick={(e) => handleSubmit(email, password, e)}
        className={styles.form__btn}
      >
        {title}
      </button>
    </form>
  );
};

export default AuthForm;
