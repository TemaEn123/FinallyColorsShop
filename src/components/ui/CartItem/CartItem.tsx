import { Link } from "react-router-dom";
import { IColor, IColorWithCount } from "../../../interfaces/interfaces";

import styles from "./styles.module.scss";
import { useAppDispatch } from "../../../redux/store";
import { addColor, deleteColor } from "../../../redux/slices/cartSlice";
import { totalPriceForItem } from "../../../helpers/functions/totalPriceForItem";
import { memo } from "react";

interface Props {
  color: IColorWithCount;
}

const CartItem = memo(({ color }: Props) => {
  const dispatch = useAppDispatch();

  const handlePlusClick = (color: IColor) => {
    dispatch(addColor(color));
  };

  const handleMinusClick = (id: string) => {
    dispatch(deleteColor(id));
  };

  return (
    <div className={styles.color}>
      <div className={styles.color__content}>
        <Link to={`${color.id}`} className={styles.color__img}>
          <img src={color.photo} alt={color.title} />
        </Link>
        <div className={styles.color__info}>
          <Link to={`${color.id}`}>
            <h2>{color.title}</h2>
          </Link>
          <p>
            Price: <span>€{totalPriceForItem(color.count, color.price)}</span>
          </p>
          <div className={styles.color__count}>
            <button onClick={() => handleMinusClick(color.id)}>-</button>
            <span>{color.count}</span>
            <button onClick={() => handlePlusClick(color)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CartItem;
