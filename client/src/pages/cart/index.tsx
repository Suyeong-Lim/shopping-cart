import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import { getCartItems } from "src/utils/api";
import { Cart } from "src/types/dto";

interface CartProps {
  cartListData: Cart[];
}

const CartListPage: NextPage<CartProps> = ({ cartListData }) => {
  console.log("hello", cartListData);
  // const { id, name, price } = cartListData;
  return <div>{cartListData.length}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const cartData = await getCartItems();
  console.log("cartLOGLOGLOGLOGLOGLOGLGO", cartData);
  return {
    props: {
      cartListData: cartData,
    },
  };
};

export default CartListPage;
