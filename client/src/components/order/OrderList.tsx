import React from "react";
import { useQuery } from "react-query";
import { getOrderList } from "src/services/api";
import OrderItems from "./orderItem/OrderItems";
import ErrorBanner from "../common/ErrorBanner";

const OrderList = () => {
  const { data } = useQuery("/orders", getOrderList);

  if (!data) return <></>;

  return (
    <>
      {data.length === 0 ? (
        <ErrorBanner type="empty" label="주문 목록을 채워주세요!" />
      ) : (
        data.map((item) => {
          return <OrderItems key={item.id} Item={item} type="list" />;
        })
      )}
    </>
  );
};

export default OrderList;
