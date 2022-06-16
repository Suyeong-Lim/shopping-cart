import {
  addCartItem,
  deleteCarts,
  updateCartSelected,
  updatedSelectedAll,
} from "../services/api";
import { useMutation, useQueryClient } from "react-query";
import { deleteCartItem, updateCartItem } from "src/services/api";
import { Cart, Product } from "src/types/dto";

export const useCartMutation = () => {
  const queryClient = useQueryClient();

  const afterMutaitionHandler = {
    onSuccess: () => {
      queryClient.invalidateQueries("/carts");
    },
  };

  const increaseQuantityMutation = useMutation(
    (cartItem: Cart) =>
      updateCartItem(cartItem.id, cartItem.product.quantity + 1),
    afterMutaitionHandler
  );

  const decreaseQuantityMutation = useMutation(
    (cartItem: Cart) =>
      updateCartItem(cartItem.id, cartItem.product.quantity - 1),
    afterMutaitionHandler
  );

  const updateCartSelectedMutation = useMutation(
    (cartItem: Cart) =>
      updateCartSelected(cartItem.id, !cartItem.product.selected),
    afterMutaitionHandler
  );

  // 카트에 넣는 mutation
  const addCartMutation = useMutation(
    (productItem: Product) => addCartItem(productItem),
    afterMutaitionHandler
  );

  const deleteCartItemMutation = useMutation(
    (cartItem: Cart) => deleteCartItem(cartItem.id),
    afterMutaitionHandler
  );

  const deleteCartListMutation = useMutation(
    (cartIdList: number[]) => deleteCarts(cartIdList),
    afterMutaitionHandler
  );

  const updateCartSelectedAllMutation = useMutation(
    (checked: boolean) => updatedSelectedAll(!checked),
    afterMutaitionHandler
  );

  return {
    plus: (cartItem: Cart) => increaseQuantityMutation.mutate(cartItem),
    minus: (cartItem: Cart) => decreaseQuantityMutation.mutate(cartItem),
    updateSelected: (cartItem: Cart) =>
      updateCartSelectedMutation.mutate(cartItem),
    updatedcartSelctedAll: (checked: boolean) =>
      updateCartSelectedAllMutation.mutate(checked),
    addCart: (productItem: Product) => addCartMutation.mutate(productItem),
    drop: (cartItem: Cart) => deleteCartItemMutation.mutate(cartItem),
    deleteCartList: (cartIdList: number[]) =>
      deleteCartListMutation.mutate(cartIdList),
  };
};
