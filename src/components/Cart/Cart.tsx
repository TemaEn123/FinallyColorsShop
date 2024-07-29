import { memo } from "react";
import { useTheme } from "../../context/ThemeContext";
import { totalPriceForAll } from "../../helpers/functions/totalPriceForAll";
import { selectCart } from "../../redux/slices/cartSlice";
import { useAppSelector } from "../../redux/store";

import CartItem from "../ui/CartItem/CartItem";

import styles from "./styles.module.scss";

interface Props {
  showCart: boolean;
}

const Cart = memo(({ showCart }: Props) => {
  const { theme } = useTheme();

  const cart = useAppSelector(selectCart);

  return (
    <div
      className={`${styles.cart} ${showCart ? styles.show : ""} ${
        theme ? styles.dark : ""
      }`}
    >
      {!cart.length ? (
        <div className={styles.cart__empty}>The cart is empty...</div>
      ) : (
        <>
          {cart.map((color) => (
            <CartItem color={color} key={color.id} />
          ))}
          <div className={styles.cart__total}>
            TOTAL PRICE: <span>€{totalPriceForAll(cart)}</span>
          </div>
        </>
      )}
    </div>
  );
});

export default Cart;
