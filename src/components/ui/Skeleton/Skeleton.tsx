import { memo } from "react";
import styles from "./styles.module.scss";

interface Props {
  count: number;
}

const Skeleton = memo(({ count }: Props) => {
  return (
    <>
      {[...Array(count)].map((_, i) => {
        return (
          <div key={i} className={styles.skeleton}>
            <div className={styles.skeleton__content}>
              <div className={styles.skeleton__img}></div>
              <div className={styles.skeleton__title}></div>
              <div className={styles.skeleton__price}></div>
              <div className={styles.skeleton__btn}></div>
            </div>
          </div>
        );
      })}
    </>
  );
});

export default Skeleton;
