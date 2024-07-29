import FormChangeColor from "../../components/FormChangeColor/FormChangeColor";
import FormDeleteColor from "../../components/FormDeleteColor/FormDeleteColor";
import FormNewColor from "../../components/FormNewColor/FormNewColor";

import styles from "./styles.module.scss";

const New = () => {
  return (
    <section className={styles.new}>
      <FormNewColor />
      <FormDeleteColor />
      <FormChangeColor />
    </section>
  );
};

export default New;
