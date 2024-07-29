import { Link } from "react-router-dom";
import { IColor } from "../../../interfaces/interfaces";

import styles from "./styles.module.scss";
import { useAppDispatch } from "../../../redux/store";
import { addColor } from "../../../redux/slices/cartSlice";
import { memo } from "react";

interface Props {
  color: IColor;
  link: boolean;
}

const ColorItem = memo(({ color, link }: Props) => {
  const dispatch = useAppDispatch();

  const handleBuyClick = (color: IColor) => {
    dispatch(addColor(color));
  };

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
          <button onClick={() => handleBuyClick(color)}>Buy</button>
        </div>
      </div>
    </div>
  );
});

export default ColorItem;
