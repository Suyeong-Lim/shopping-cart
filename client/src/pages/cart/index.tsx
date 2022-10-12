import React from "react";
import Head from "next/head";
import type { NextPage, GetServerSideProps } from "next";
import { getCartItems } from "src/services/api";
import { Cart } from "src/types/dto";
import CartList from "src/components/cart/CartList";
import { QueryClient, dehydrate } from "react-query";

interface CartProps {
  cartListData: Cart[];
}

const CartListPage: NextPage<CartProps> = () => {
  return (
    <>
      <Head>
        <title> 페이지</title>
      </Head>
      <CartList />
    </>
  );
};

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
