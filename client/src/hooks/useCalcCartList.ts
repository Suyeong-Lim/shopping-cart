import { Cart } from "src/types/dto";

function useCalcCartList(data: Cart[]) {
  const totalPrice = data.reduce((prev, cur) => {
    if (cur.product.selected) {
      return prev + cur.product.price * cur.product.quantity;
    }
    return prev;
  }, 0);

  const totalCount = data.reduce((prev, cur) => {
    if (cur.product.selected) {
      return prev + cur.product.quantity;
    }
    return prev;
  }, 0);

  const cartSelectedIdList = data
    .filter((cart) => cart.product.selected)
    .map((cart) => {
      return cart.id;
    });

  const isSelectedAll = data.every((cart) => cart.product.selected);


  return { totalPrice, totalCount, cartSelectedIdList, isSelectedAll };
}

export default useCalcCartList;
