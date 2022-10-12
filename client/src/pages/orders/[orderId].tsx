import React from "react";
import { NextPage } from "next";
import { Order } from "src/types/dto";
import OrderDetailList from "src/components/order/OrderDetailList";

interface DetailProps {
  orderItem: Order;
}

const OrderDetail: NextPage<DetailProps> = () => {
  return (
    <>
      <OrderDetailList />
    </>
  );
};

export default OrderDetail;
