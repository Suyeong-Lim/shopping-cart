import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import OrderList from "src/components/order/OrderList";
import { getOrderList } from "src/services/api";
import { OrderItem } from "src/types/dto";

interface OrderProps {
  orderList: OrderItem[];
}

const Order: NextPage<OrderProps> = ({ orderList }) => {
  return (
    <>
      <OrderList />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const orderListData = await getOrderList();
  return {
    props: {
      orderList: orderListData,
    },
  };
};

export default Order;
