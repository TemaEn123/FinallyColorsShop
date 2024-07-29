export const totalPriceForItem = (count: number, price: string): number => {
  return count * Number(price.match(/[0-9]+/g));
};
