import { addOrder } from "src/services/api";
import { OrderItem } from "src/types/dto";
import { useMutation, QueryClient, useQueryClient } from "react-query";

export const useOrderMutation = () => {
  const queryClient = useQueryClient();

  const afterMutaitionHandler = {
    onSuccess: () => {
      queryClient.invalidateQueries("/orders");
    },
  };

  const addOrderMutation = useMutation(
    (orderDetails: OrderItem[]) => addOrder(orderDetails),
    afterMutaitionHandler
  );

  return {
    addOrder: (orderDetails: OrderItem[]) =>
      addOrderMutation.mutate(orderDetails),
  };
};
