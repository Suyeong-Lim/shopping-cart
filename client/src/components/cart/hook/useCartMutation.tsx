import { useMutation, useQueryClient } from "react-query";
import { deleteCartItem, updateCartItem } from "src/services/api";
import { Cart } from "src/types/dto";

export const useCartMutation = (cartItem: Cart) => {
  const queryClient = useQueryClient();

  const afterMutaitionHandler = {
    onSuccess: () => {
      queryClient.invalidateQueries("/carts");
    },
  };

  const validate = (quantity: number) => {
    if (quantity > 1) {
      updateCartItem(cartItem.id, quantity - 1);
    }
  };

  const updateQuantityMutation = useMutation(
    (newQuantity: number) => updateCartItem(cartItem.id, newQuantity),
    afterMutaitionHandler
  );

  const dropMutation = useMutation(
    () => deleteCartItem(cartItem.id),
    afterMutaitionHandler
  );

  return {
    plus: () => updateQuantityMutation.mutate(cartItem.product.quantity + 1),
    minus: () => updateQuantityMutation.mutate(cartItem.product.quantity - 1),
    drop: () => dropMutation.mutate(),
  };
};
