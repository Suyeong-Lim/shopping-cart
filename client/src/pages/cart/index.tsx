import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import { getCartItems } from "src/utils/api";
import { Cart } from "src/types/dto";
import styled from "styled-components";
import CartList from "src/components/cart/CartList";
import { QueryClient, Hydrate, dehydrate } from "react-query";

interface CartProps {
  cartListData: Cart[];
}

const CartListPage: NextPage<CartProps> = ({ cartListData }) => {
  console.log("CartListPage", cartListData);
  return (
    <>
      <CartList />
    </>
  );
};

// 문제:
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("/carts", getCartItems);

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
};

export default CartListPage;
