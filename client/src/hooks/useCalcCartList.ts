import { Cart, OrderItem } from "src/types/dto";

function useCalcCartList(cartList: Cart[]) {
  const totalPrice = cartList.reduce((prev, cur) => {
    if (cur.product.selected) {
      return prev + cur.product.price * cur.product.quantity;
    }
    return prev;
  }, 0);

  const totalCount = cartList.reduce((prev, cur) => {
    if (cur.product.selected) {
      return prev + cur.product.quantity;
    }
    return prev;
  }, 0);

  const cartSelectedIdList = cartList
    .filter((cart) => cart.product.selected)
    .map((cart) => {
      return cart.id;
    });

  const isSelectedAll = cartList.every((cart) => cart.product.selected);

  // let count = 0;
  const purchaseList: OrderItem[] = cartList.map((cart) => {
    return {
      id: cart.product.id,
      price: cart.product.price,
      name: cart.product.name,
      imageUrl: cart.product.imageUrl,
      quantity: cart.product.quantity,
    };
  });

  return {
    totalPrice,
    totalCount,
    cartSelectedIdList,
    isSelectedAll,
    purchaseList,
  };
}

export default useCalcCartList;
