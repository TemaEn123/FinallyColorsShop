import { IColorWithCount } from "../../interfaces/interfaces";

export const totalPriceForAll = (cart: IColorWithCount[]): number => {
  return cart.reduce(
    (sum, color) => sum + Number(color.price.match(/[0-9]+/g)) * color.count,
    0
  );
};
