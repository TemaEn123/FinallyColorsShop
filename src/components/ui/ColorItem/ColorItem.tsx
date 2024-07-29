import { Link } from "react-router-dom";
import { IColor } from "../../../interfaces/interfaces";

import styles from "./styles.module.scss";

interface Props {
  color: IColor;
  link: boolean;
}

const ColorItem = ({ color, link }: Props) => {
  return (
    <div className={styles.color}>
      <div className={styles.color__content}>
        {link ? (
          <Link to={`${color.id}`} className={styles.color__img}>
            <img src={color.photo} alt={color.title} />
          </Link>
        ) : (
          <div className={styles.color__img}>
            <img src={color.photo} alt={color.title} />
          </div>
        )}
        <div className={styles.color__info}>
          {link ? (
            <Link to={`${color.id}`}>
              <h2>{color.title}</h2>
            </Link>
          ) : (
            <h2>{color.title}</h2>
          )}
          <p>
            Price: <span>{color.price}</span>
          </p>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default ColorItem;
