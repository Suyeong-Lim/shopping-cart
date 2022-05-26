import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import { getCartItems } from "src/utils/api";
import { Cart } from "src/types/dto";

interface CartProps {
  cartListData: Cart[];
}

const CartListPage: NextPage<CartProps> = ({ cartListData }) => {
  console.log("CartListPage", cartListData);
  return (
    <div>
      {cartListData.map((item) => {
        return <div>{item.product.name}</div>;
      })}
    </div>
  );
};

// 문제:
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const cartData = await getCartItems();
  console.log("ServerSide", cartData);
  return {
    props: {
      cartListData: cartData,
    },
  };
};

export default CartListPage;
