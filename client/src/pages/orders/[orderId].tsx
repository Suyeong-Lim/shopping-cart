import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Order } from "src/types/dto";
import OrderDetailList from "src/components/order/OrderDetailList";
import { ParsedUrlQuery } from "querystring";
import { getOrderItem } from "src/services/api";
import { dehydrate, QueryClient } from "react-query";

interface Params extends ParsedUrlQuery {
  orderId: string;
}

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
